// 6.1
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore); // 253

// 6.2
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 24

// 6.3
const totalExpenses = expenses.reduce((sum, exp) => sum + exp, 0);
console.log(totalExpenses); // 300