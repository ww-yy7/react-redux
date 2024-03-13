import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore"

//创建根store组合子模块
const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer
  },
});

export default store;
