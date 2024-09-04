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
  addCategory: (newCategory: Omit<CategoryType, "id">) => void;
  editCategory: () => void;
  deleteCategory: () => void;
};

// step 1. create context
const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  addCategory: () => {},
  editCategory: () => {},
  deleteCategory: () => {}
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

  const addCategory = async (newCategory: Omit<CategoryType, "id">) => {
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

  const value = {
    categories,
    addCategory,
    editCategory: () => {},
    deleteCategory: () => {}
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

// step3. use context
export const useCategories = () => useContext(CategoryContext);
