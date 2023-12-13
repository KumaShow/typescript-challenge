/**
 * 這個函式的目的是將學生的姓名和分數正確地打印出來。
 * 你需要使用 JavaScript 的字串來將學生的姓名和分數組合成一個字串。
 *  並嘗試在參數用元組來定義
 * 範例:
 * 輸入: ['Alice', 85]
 * 輸出: 'Alice: 85%'
 */


// export function printStudentInfo(student: [string, number]) {
//     const name = student[0];
//     const score = student[1];
//     return `${name}: ${score}%`;
// }

type Student = [string, number];

export function printStudentInfo(student: Student) {
    const [name, score] = student;
    return `${name}: ${score}%`;
}