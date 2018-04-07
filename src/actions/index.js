import fetch from 'cross-fetch'

export const FETCH_WORLDS_PENDING = 'FETCH_WORLDS_PENDING'
const fetchWorldsPending = () => ({
  type: FETCH_WORLDS_PENDING
})

export const FETCH_WORLDS_SUCCESS = 'FETCH_WORLDS_SUCCESS'
export const fetchWorldsSuccess = (payload) => ({
  type: FETCH_WORLDS_SUCCESS,
  payload,
})

export const CALC_WORLD_HABITABILITY_PENDING = 'CALC_WORLD_HABITABILITY_PENDING'
const calcWorldHabitabilityPending = (name) => ({
  type: CALC_WORLD_HABITABILITY_PENDING,
  name,
})

export const CALC_WORLD_HABITABILITY_SUCCESS = 'CALC_WORLD_HABITABILITY_SUCCESS'
const calcWorldHabitabilitySuccess = (name, score) => ({
  type: CALC_WORLD_HABITABILITY_SUCCESS,
  name,
  score,
})

export const fetchWorlds = () => {
  return dispatch => {
    dispatch(fetchWorldsPending())
    setTimeout(() => {
      fetch(`https://habitable-worlds.firebaseio.com/data.json`)
        .then(res => res.json())
        .then(data => dispatch(fetchWorldsSuccess(data)))
    }, 2000)
  }
}

const habitabilityCalculator = () => {
  var delay = 7000 + Math.random() * 7000;
  var planetHabitability = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(planetHabitability);
    }, delay);
  };
}

export const calcWorldHabitability = (name) => {
  return dispatch => {
    dispatch (calcWorldHabitabilityPending(name))
    const api = habitabilityCalculator()
    api((planetHabitability) => {
      dispatch(calcWorldHabitabilitySuccess(name, planetHabitability))
    })
  }
}
