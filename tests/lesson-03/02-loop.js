// 1. multiply
function multiply(a, b) {
    return a * b;
}

// Gọi hàm multiply
console.log("Multiply 3 * 4:", multiply(3, 4));
console.log("Multiply 5 * 7:", multiply(5, 7));


// 2. findMin
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

// Gọi hàm findMin
console.log("Min of 5, 2, 8:", findMin(5, 2, 8));
console.log("Min of 10, 20, 3:", findMin(10, 20, 3));


// 3. getTopStudents
function getTopStudents(students, threshold) {
    return students
        .filter(student => student.score >= threshold)
        .map(student => student.name);
}

// Gọi hàm getTopStudents
const studentList = [
    { name: "An", score: 85 },
    { name: "Bình", score: 70 },
    { name: "Chi", score: 90 },
    { name: "Dũng", score: 65 }
];

console.log("Top Students:", getTopStudents(studentList, 80));


// 4. calculateInterest
function calculateInterest(principal, rate, years) {
    return principal + (principal * rate * years / 100);
}

// Gọi hàm calculateInterest
console.log("Total with interest:", calculateInterest(1000, 5, 3));  // Output: 1150

