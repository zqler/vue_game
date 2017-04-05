const MENU_CHANGE = "MENU_CHANGE";
export default {
  [MENU_CHANGE](state, payload){
    "use strict";
    state.menuState.change = payload;
  },
  ['EVENTDONE'](state){
    "use strict";
    //TOOD
  }
}
