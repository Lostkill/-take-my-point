// Action Types
export const Types = {
  SET_POINT: 'point/SET_POINT'
}

// Reducer
const initialState = {
  lastPoint: {}
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.SET_POINT:
      return {
        ...state,
        lastPoint: action.lastPoint
      }
    default:
      return state
  }
}

// Action Creators
export function setPoint (point) {
  return {
    type: Types.SET_POINT,
    lastPoint: point
  }
}

export function setLastPoint (payload) {
  return function (dispatch) {
    const point = {
      type: payload.type,
      date: payload.date
    }
    dispatch(setPoint(point))
  }
}
