import { CategoryType } from "../Navbar/Navbar";

type Props = {
  categories: CategoryType[];
};

export function CategoryList({ categories }: Props) {
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
