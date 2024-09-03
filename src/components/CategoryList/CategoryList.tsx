import { useState } from "react";

type CategoryType = {
  id: number;
  title: string;
};

const CATEGORIES: CategoryType[] = [
  { id: 1, title: "all tasks" },
  { id: 2, title: "work" },
  { id: 3, title: "study" },
  { id: 4, title: "movies" }
];

export function CategoryList() {
  const [categories, setCategories] = useState<CategoryType[]>(CATEGORIES);

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
