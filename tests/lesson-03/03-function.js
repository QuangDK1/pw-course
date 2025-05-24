// 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100:", sum);


// 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


// 3. Tạo mảng chứa các số lẻ từ 1 đến 99
const oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
    oddNumbers.push(i);
}
console.log("Mảng số lẻ từ 1 đến 99:", oddNumbers);


// 4. In ra 10 email
for (let i = 1; i <= 10; i++) {
    console.log(`pnquang.284${i}@gmail.com`);
}


// 5. Tính tổng doanh thu của 12 tháng
const revenues = [
    { month: 1, total: 120 },
    { month: 2, total: 150 },
    { month: 3, total: 180 },
    { month: 4, total: 100 },
    { month: 5, total: 140 },
    { month: 6, total: 130 },
    { month: 7, total: 110 },
    { month: 8, total: 170 },
    { month: 9, total: 160 },
    { month: 10, total: 190 },
    { month: 11, total: 200 },
    { month: 12, total: 210 }
];

let totalRevenue = 0;
for (let i = 0; i < revenues.length; i++) {
    totalRevenue += revenues[i].total;
}
console.log("Tổng doanh thu cả năm:", totalRevenue);
