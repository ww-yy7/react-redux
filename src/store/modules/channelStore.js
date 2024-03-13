import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//同步修改部分
const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

//解构出创建action对象的函数
const { setChannels } = channelStore.actions;

//异步请求
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://mock.mengxuegu.com/mock/64ccab8e686aea63fd6b5909/example/wwff"
    );
    dispatch(setChannels(res.data.data.channels));
  };
};
//按需导出
export { fetchChannelList };
//获取reducer函数
const reducer = channelStore.reducer;
export default reducer;

