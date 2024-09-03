import { ChangeEvent, FormEvent, MouseEvent } from "react";

import "./CategoryForm.scss";

type Props = {
  isFormVisible: boolean;
  categoryTitle: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export function CategoryForm({
  isFormVisible,
  categoryTitle,
  onChange,
  onClick,
  onSubmit
}: Props) {
  return (
    <>
      <button onClick={onClick}>
        {isFormVisible ? "Hide" : "New Category"}
      </button>

      {isFormVisible && (
        <form onSubmit={onSubmit} action="">
          <input type="text" value={categoryTitle} onChange={onChange} />
          <button>Add</button>
        </form>
      )}
    </>
  );
}
