import { combineReducers } from 'redux';
import reducers from './favoritesReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    favorites: reducers
});

export default rootReducer