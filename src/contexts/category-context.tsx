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
  addCategory: () => void;
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

  const value = {
    categories,
    addCategory: () => {},
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
