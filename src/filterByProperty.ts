/**
 * 任務：實作一個函式 `filterByProperty`，該函式應該過濾出陣列中的元素，其指定屬性的值等於給定值。
 *
 * 範例：
 * const array = [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }, { name: 'Charlie', age: 30 }];
 * filterByProperty(array, 'age', 20) 應該回傳 [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }]
 *
 * @param array - 一個物件的陣列
 * @param property - 要過濾的屬性名稱
 * @param value - 要過濾的屬性值
 * @returns - 回傳過濾後的陣列
 */
export function filterByProperty<T, K extends keyof T>(
  array: T[],
  property: K,
  value: T[K]
): T[] {
  // 請在此處寫下你的程式碼
  return array.filter((item) => item[property] === value);
}

// 寫法推薦
// export function filterByProperty<T, K extends keyof T>(
//   array: T[],
//   property: K,
//   value: T[K]
// ): T[] {
//   return array.filter((item) => item[property] === value);
// }

/* 
  <T, K extends keyof T> 是 TypeScript 的泛型語法。這裡定義了兩個泛型參數 T 和 K。
  T 是一個泛型型別變數，代表任何型別。
  K extends keyof T 表示 K 必須是 T 的公開屬性的名稱之一。

  array 是一個 T[] 型別的陣列，
  property 是 K 型別（K 是 T 的鍵），
  value 是 T[K] 型別。
*/
