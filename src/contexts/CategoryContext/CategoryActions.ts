import { CategoryType } from "../../components/Navbar/Navbar";

export type CategoryAction =
  | {
      type: "INIT";
      payload: { categories: CategoryType[] };
    }
  | { type: "ADD"; payload: { category: CategoryType } }
  | { type: "EDIT"; payload: { category: CategoryType } }
  | { type: "DELETE"; payload: { categoryId: CategoryType["id"] } }
  | { type: "REORDER"; payload: { categories: CategoryType[] } };

export const addCategory = (category: CategoryType): CategoryAction => ({
  type: "ADD",
  payload: { category }
});
