import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CategoryList } from "../CategoryList";
import NewCategory from "../NewCategory/NewCategory";
import "./Navbar.scss";

const BASE_CLASS = "navbar";

type Props = {
  className: string;
};

export type CategoryType = {
  id: number;
  title: string;
};

export function Navbar({ className }: Props) {
  const classes = [BASE_CLASS, className].join(" ");
  const [categoryTitle, setCategoryTitle] = useState<string>("");
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const handleClick = () => {
    // prev => false => true
    // prev => true => false
    setIsFormVisible((previousState) => !previousState);
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:3005/categories");
      const data: CategoryType[] = await response.json();

      setCategories(data);
    };

    getCategories();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // sending the new data to the server to store the data
    const response = await fetch("http://localhost:3005/categories", {
      method: "POST",
      body: JSON.stringify({ title: categoryTitle }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    // manage state
    setCategories((previousState) => [...previousState, data]);

    // reset the title state
    setCategoryTitle("");
    setIsFormVisible(false);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(event.target.value);
  };

  return (
    <div className={classes}>
      <nav>
        <CategoryList categories={categories} />
      </nav>

      <NewCategory
        categoryTitle={categoryTitle}
        isFormVisible={isFormVisible}
        onChange={handleTitleChange}
        onClick={handleClick}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
