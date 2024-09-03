import { useEffect, useState } from "react";

type CategoryType = {
  id: number;
  title: string;
};

export function CategoryList() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:3005/categories");
      const data: CategoryType[] = await response.json();

      setCategories(data);
    };

    getCategories();
  }, []);

  console.log("render");
  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a href="">{category.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
