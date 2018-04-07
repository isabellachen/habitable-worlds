import * as actions from '../actions'
import { objectifyArr } from './helper'

const defaultState = {
  worlds: {},
  loading: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.FETCH_WORLDS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case actions.FETCH_WORLDS_SUCCESS:
      return {
        ...state,
        worlds: objectifyArr(action.payload),
        loading: false,
      }
    case actions.CALC_WORLD_HABITABILITY_PENDING:
      return {
        ...state,
        worlds: {
          ...state.worlds,
          [action.name]: {
            ...state.worlds[action.name],
            habitability: '...pending',
          }
        }
      }
    case actions.CALC_WORLD_HABITABILITY_SUCCESS:
      return {
        ...state,
        worlds: {
          ...state.worlds,
          [action.name]:{
            ...state.worlds[action.name],
            habitability: action.score,
          }
        }
      }
    default: return state
  }
}

export default reducer
