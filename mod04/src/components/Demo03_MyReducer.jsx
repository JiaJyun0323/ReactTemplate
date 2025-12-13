export const initialState = { count: 0 };

export default function MyReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.count };
    case "decrement":
      return { count: state.count - action.count };
    default:
      throw new Error();
  }
}
