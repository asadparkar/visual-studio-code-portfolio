import changeTabState from "./activeTab"
import changeActiveSkill from "./activeSkill";
import changeFileState from "./activeFile";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTabState,
    changeActiveSkill,
    changeFileState
});

export default rootReducer;