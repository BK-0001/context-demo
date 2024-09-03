import { Navbar } from "./components/Navbar";

import "./App.scss";

const BASE_CLASS = "app";

function App() {
  return (
    <div className={BASE_CLASS}>
      <Navbar className={`${BASE_CLASS}__navbar`} />

      {/* todos */}
      <div className={`${BASE_CLASS}__todos`}>Todos</div>
      {/* title */}
      {/* Todo Form*/}
      {/* Todo List */}
    </div>
  );
}

export default App;
