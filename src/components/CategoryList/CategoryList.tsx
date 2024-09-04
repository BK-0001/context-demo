import { useCategories } from "../../contexts/category-context";

export function CategoryList() {
  const { categories } = useCategories();

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <a href="">{category.title}</a>
        </li>
      ))}
    </ul>
  );
}
