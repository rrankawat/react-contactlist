import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        todos: payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        todos: [payload, ...state.todos],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.todos.filter((todo) => {
          const regex = new RegExp(payload, 'gi');
          return todo.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
