import { Reducer } from "react";
import { CategoryType } from "../../components/Navbar/Navbar";
import { CategoryAction } from "./CategoryActions";

export type CategoryReducer = Reducer<CategoryType[], CategoryAction>;

// all the function that manages state become one single function
// this reducer manages all states related to categories
export const categoryReducer: CategoryReducer = (prevState, action) => {
  switch (action.type) {
    case "INIT":
      return [...prevState, ...action.payload.categories];

    case "ADD":
      return [...prevState, action.payload.category];

    case "EDIT": {
      const copies = [...prevState];
      const index = copies.findIndex(
        (copy) => copy.id === action.payload.category.id
      );

      copies.splice(index, 1, action.payload.category);

      return copies;
    }

    case "DELETE":
      return prevState.filter((item) => item.id !== action.payload.categoryId);

    case "REORDER":
      return action.payload.categories;

    default:
      return prevState;
  }
};

/**
 * reference to understand the useReducer hook, but it may not be true since the hook needs much more mechanism than this
 * 
 * @param reducer 
 * @param initialState 
 * @returns 

const useReducer = (reducer, initialState) => {
  let state = initialState || null;
  
  const dispatch = (action) => {
    state = reducer(state, action)
    // rerender the components
  }
  
  return [state, dispatch];
};
*/
