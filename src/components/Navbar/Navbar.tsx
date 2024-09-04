import { ChangeEvent, FormEvent, useState } from "react";
import { useCategories } from "../../contexts/category-context";
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
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const { add } = useCategories();

  const handleClick = () => {
    setIsFormVisible((previousState) => !previousState);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    add({ title: categoryTitle });

    setCategoryTitle("");
    setIsFormVisible(false);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryTitle(event.target.value);
  };

  return (
    <div className={classes}>
      <nav>
        <CategoryList />
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
