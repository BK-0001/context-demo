import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from "react";
import { CategoryType } from "../../components/Navbar/Navbar";
import { categoryReducer, CategoryReducer } from "./CategoryReducer";

type CategoryContextType = {
  categories: CategoryType[];
  add: (newCategory: Omit<CategoryType, "id">) => void;
  edit: (id: CategoryType["id"], newTitle: CategoryType["title"]) => void;
  remove: (id: CategoryType["id"]) => void;
  reorder: (categories: CategoryType[]) => void;
};

// step 1. create context
const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  add: () => {},
  edit: () => {},
  remove: () => {},
  reorder: () => {}
});

type Props = {
  children: ReactNode;
};

// step2. create provider
export function CategoryContextProvider({ children }: Props) {
  // useReducer
  const [categories2, dispatch] = useReducer<CategoryReducer>(
    categoryReducer,
    []
  );

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:3005/categories");
      const data: CategoryType[] = await response.json();

      // to update state, call dispatch to pass the action and useReducer will be calling the reducer
      dispatch({ type: "INIT", payload: { categories: data } });
    };

    getCategories();
  }, []);

  const add = async (newCategory: Omit<CategoryType, "id">) => {
    const response = await fetch("http://localhost:3005/categories", {
      method: "POST",
      body: JSON.stringify(newCategory),
      headers: {
        "Content-Type": "application/json"
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data: CategoryType = await response.json();

    // manage state
    dispatch({ type: "ADD", payload: { category: data } });
  };

  const edit = async (
    id: CategoryType["id"],
    newTitle: CategoryType["title"]
  ) => {
    const response = await fetch(`http://localhost:3005/categories/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: newTitle })
    });

    const updated = await response.json();

    dispatch({ type: "EDIT", payload: { category: updated } });
  };

  const remove = async (id: CategoryType["id"]) => {
    // send request to the server to delete the category
    const response = await fetch(`http://localhost:3005/categories/${id}`, {
      method: "DELETE"
    });

    await response.json();

    // when everything is successful, remove the delete item from the categories state
    dispatch({ type: "DELETE", payload: { categoryId: id } });
  };

  const reorder = (categories: CategoryType[]) => {
    dispatch({ type: "REORDER", payload: { categories } });
  };
  const value = {
    categories: categories2,
    add,
    edit,
    remove,
    reorder
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

// step3. use context
export const useCategories = () => useContext(CategoryContext);
