import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/* whatever key we provide in here will show up
* in the global state object
* the keys determines how our application state looks like*/
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
