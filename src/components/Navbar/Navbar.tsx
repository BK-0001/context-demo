import { CategoryList } from "../CategoryList";
import "./Navbar.scss";

const BASE_CLASS = "navbar";

type Props = {
  className: string;
};

export function Navbar({ className }: Props) {
  const classes = [BASE_CLASS, className].join(" ");

  return (
    <div className={classes}>
      <nav>
        <CategoryList />
      </nav>
      <button>New Category</button>
    </div>
  );
}
