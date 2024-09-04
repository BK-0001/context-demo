import { FormEvent, useState } from "react";
import { useCategories } from "../../contexts/category-context";

import { CategoryType } from "../Navbar/Navbar";
import "./CategoryList.scss";

const BASE_CLASS = "category-list";

export function CategoryList() {
  const { categories, remove, edit } = useCategories();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputElement, setInputElement] = useState<HTMLInputElement | null>(
    null
  );

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    id: CategoryType["id"]
  ) => {
    event.preventDefault();

    if (inputElement) {
      const value = inputElement.value;

      edit(id, value);
      setIsEditing(false);
    }
  };

  return (
    <ul className={BASE_CLASS}>
      {categories.map((category) => (
        <li key={category.id} className={`${BASE_CLASS}__item`}>
          {isEditing ? (
            <form
              onSubmit={(event) => handleSubmit(event, category.id)}
              className={`${BASE_CLASS}__form`}
            >
              <input
                ref={setInputElement}
                type="text"
                defaultValue={category.title}
              />
              <div className={`${BASE_CLASS}__actions`}>
                <button type="submit">update</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              {/* TODO: push state instead */}
              <a href="">{category.title}</a>

              <div className={`${BASE_CLASS}__actions`}>
                <button onClick={() => setIsEditing(true)}>edit</button>
                <button onClick={() => remove(category.id)}>delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
