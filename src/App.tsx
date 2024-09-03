import "./App.scss";

const BASE_CLASS = "app";

function App() {
  return (
    <div className={BASE_CLASS}>
      {/* navbar */}
      <div className={`${BASE_CLASS}__navbar`}>
        <nav>
          <ul>
            <li>
              <a href="">All Todos</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Study</a>
            </li>
          </ul>
        </nav>
        <button>New Category</button>
      </div>
      {/* todos */}
      <div className={`${BASE_CLASS}__todos`}>Todos</div>
      {/* title */}
      {/* Todo Form*/}
      {/* Todo List */}
    </div>
  );
}

export default App;
