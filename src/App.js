import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addToNUm } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";
function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  //得到dispatch函数
  const dispatch = useDispatch();
  //异步请求
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div className="App">
      {/* 调用dispatch提交action对象  */}
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNUm(10))}>增加10</button>
      <button onClick={() => dispatch(addToNUm(20))}>增加20</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
