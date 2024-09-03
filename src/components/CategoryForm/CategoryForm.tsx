import { ChangeEvent, FormEvent } from "react";

import { Button } from "../core/Button/Button";
import { Input } from "../core/Input/Input";
import "./CategoryForm.scss";

type Props = {
  categoryTitle: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export function CategoryForm({ categoryTitle, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <Input type="text" value={categoryTitle} onChange={onChange} />
      <Button>Add</Button>
    </form>
  );
}
