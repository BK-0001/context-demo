import { useCategories } from "../../contexts/category-context";

import "./CategoryList.scss";

const BASE_CLASS = "category-list";

export function CategoryList() {
  const { categories } = useCategories();

  return (
    <ul className={BASE_CLASS}>
      {categories.map((category) => (
        <li key={category.id} className={`${BASE_CLASS}__item`}>
          {/* TODO: push state instead */}
          <a href="">{category.title}</a>
        </li>
      ))}
    </ul>
  );
}
