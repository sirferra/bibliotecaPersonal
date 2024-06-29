import { combineReducers } from '@reduxjs/toolkit';
// Importa tus reducers aquí y añádelos al combineReducers
import codeReducer from './CodeSlice';

const rootReducer = combineReducers({
  code: codeReducer
});

export default rootReducer;
