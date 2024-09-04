import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { CategoryType } from "../components/Navbar/Navbar";

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
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:3005/categories");
      const data: CategoryType[] = await response.json();

      setCategories(data);
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
    const data = await response.json();

    // manage state
    setCategories((previousState) => [...previousState, data]);
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

    // update state
    setCategories((prevState) => {
      const copies = [...prevState];

      const index = copies.findIndex((copy) => copy.id === updated.id);
      copies[index].title = updated.title;

      return copies;
    });
  };

  const remove = async (id: CategoryType["id"]) => {
    // send request to the server to delete the category
    const response = await fetch(`http://localhost:3005/categories/${id}`, {
      method: "DELETE"
    });

    await response.json();

    // when everything is successful, remove the delete item from the categories state
    setCategories((prev) => prev.filter((category) => category.id !== id));
  };

  const reorder = (categories: CategoryType[]) => {
    setCategories(categories);
  };
  const value = {
    categories,
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
