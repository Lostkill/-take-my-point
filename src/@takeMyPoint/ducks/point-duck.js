// Action Types
export const Types = {
  IS_FETCHING: 'point/IS_FETCHING',
  GET_POINTS: 'point/GET_POINTS',
  SET_POINT: 'point/SET_POINT',
  CLEAR_POINTS: 'point/CLEAR_POINTS'
}

// Reducer
const initialState = {
  isFetching: false,
  points: [],
  lastPoint: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case Types.GET_POINTS:
      return {
        ...state,
        points: action.points
      }
    case Types.SET_POINT:
      return {
        ...state,
        lastPoint: action.lastPoint
      }
    case Types.CLEAR_POINTS:
      return {
        ...state,
        isFetching: false,
        points: [],
        lastPoint: {}
      }
    default:
      return state
  }
}

// Action Creators
export function setIsFetching (isFetching) {
  return {
    type: Types.IS_FETCHING,
    isFetching
  }
}

export function getPoints (points) {
  return {
    type: Types.GET_POINTS,
    points
  }
}

export function setPoint (point) {
  return {
    type: Types.SET_POINT,
    lastPoint: point
  }
}

export function clearPoints () {
  return {
    type: Types.CLEAR_POINTS
  }
}
