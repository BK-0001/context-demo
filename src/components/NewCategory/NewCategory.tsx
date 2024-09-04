import { ChangeEvent, FormEvent, MouseEvent } from "react";
import { CategoryForm } from "../CategoryForm";
import { Button } from "../core/Button/Button";

type Props = {
  isFormVisible: boolean;
  categoryTitle: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const BASE_CLASS = "new-category";

export default function NewCategory({
  isFormVisible,
  categoryTitle,
  onChange,
  onClick,
  onSubmit
}: Props) {
  return (
    <div className={BASE_CLASS}>
      <Button onClick={onClick}>
        {isFormVisible ? "Hide" : "+ New Category"}
      </Button>

      {isFormVisible && (
        <CategoryForm
          categoryTitle={categoryTitle}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}
