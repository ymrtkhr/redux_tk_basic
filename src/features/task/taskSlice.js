import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idCount: 3,
  tasks: [
    { id: 3, title: "TASK C", complete: false },
    { id: 2, title: "TASK B", complete: true },
    { id: 1, title: "TASK A", complete: false },
  ],
};

export const taskSlice = createSlice({
  // スライス識別の名前
  name: "task",
  // 初期状態を定義
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // どういうステートの更新を行うか
  reducers: {
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        complete: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },

    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

// コンポーネント側で利用できるようにエクスポート
export const { newTask, completeTask, deleteTask } = taskSlice.actions;

// 現在のカウントのvalueを取り出してエクスポートしている。
export const selectTasks = (state) => state.task.tasks;

// カウンタースライスのreducer属性をexportしている
export default taskSlice.reducer;
