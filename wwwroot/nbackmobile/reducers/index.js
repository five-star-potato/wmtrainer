import { combineReducers } from 'redux';
import board from './boardReducer';
import game from './gameEngineReducer';

const gameApp = combineReducers({
    board,
    game
});

export default gameApp;
