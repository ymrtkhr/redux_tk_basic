// A mock function to mimic making an async request for data
// 1秒後にプラスする。非同期処理
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
