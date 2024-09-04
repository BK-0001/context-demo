import { Navbar } from "./components/Navbar";

import "./App.scss";
import { CategoryContextProvider } from "./contexts/category-context";

const BASE_CLASS = "app";

function App() {
  return (
    // step 2-2. provide context
    <CategoryContextProvider>
      <div className={BASE_CLASS}>
        <Navbar className={`${BASE_CLASS}__navbar`} />

        {/* todos */}
        <div className={`${BASE_CLASS}__todos`}>Todos</div>
        {/* title */}
        {/* Todo Form*/}
        {/* Todo List */}
      </div>
    </CategoryContextProvider>
  );
}

export default App;
