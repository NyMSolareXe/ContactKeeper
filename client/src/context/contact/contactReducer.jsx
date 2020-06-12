import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      }
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        // contacts: state.contacts.map((element) => {
        //   if (element.id === action.payload.id) {
        //     element.name = action.payload.name;
        //     element.email = action.payload.email;
        //     element.phone = action.payload.phone;
        //     element.type = action.payload.type;
        //   }
        //   return element;
        // }),
        contacts: state.contacts.map((element) => (element._id === action.payload._id ? action.payload : element)),
        loading: false,
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((element) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return element.name.match(regex) || element.email.match(regex)
        }),
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((element) => element._id !== action.payload),
        loading: false,
      }
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
        loading: false,
      }
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
