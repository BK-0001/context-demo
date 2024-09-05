import { Reorder } from "framer-motion";
import { useCategories } from "../../contexts/CategoryContext/CategoryContext";
import { CategoryItem } from "../CategoryItem";

import "./CategoryList.scss";

const BASE_CLASS = "category-list";

export function CategoryList() {
  const { categories, reorder } = useCategories();

  return (
    <Reorder.Group
      className={BASE_CLASS}
      values={categories}
      onReorder={reorder}
    >
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Reorder.Group>
  );
}
