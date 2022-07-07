import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskReducer from "../features/task/taskSlice";
import fetchReducer from "../features/fetch/fetchSlice";

export const store = configureStore({
  reducer: {
    // 複数スライスがある場合は、ここに順に明記していく。
    // 自動でスライスを結合してくれている。
    counter: counterReducer,
    task: taskReducer,
    fetch: fetchReducer,
  },
});
