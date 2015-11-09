import {SET_ENTRIES, NEXT, VOTE} from './actions';
import {setEntries, next, vote, INITIALSTATE} from './core';

export default function reducer(state = INITIALSTATE, action) {
  switch (action.type) {
    case SET_ENTRIES:
        return setEntries(state, action.entries);
    case NEXT:
      return next(state);
    case VOTE:
      return vote(state, action.entry);
    default:
      return state;
  }
}
