import { combineReducers } from "redux";
import SpotifyReducer from "../common/Spotify/SpotifyReducer";
/**
 * rootReducer
 * Combination of all reducers.
 *
 * CombineReducers
 * It turns an object whose values are different reducing functions
 * into a single reducing function you can pass to createStore.
 *
 */
const rootReducer = combineReducers({ spotify: SpotifyReducer });

export default rootReducer;
