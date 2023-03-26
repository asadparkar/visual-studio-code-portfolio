import changeTabState from "./activeTab"
import changeActiveSkill from "./activeSkill";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTabState,
    changeActiveSkill
});

export default rootReducer;