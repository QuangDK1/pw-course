// 1. Tạo object car
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};
console.log("Năm sản xuất của xe:", car.year);

// 2. Tạo object person
const person = {
  name: "Pham Ngoc Quang",
  address: {
    street: "719 Lac Long Quan",
    city: "Ho Chi Minh",
    country: "Vietnam"
  }
};
console.log("Đường:", person.address.street);

// 3. Tạo object student và truy cập vào điểm toán
const student = {
  name: "Quang",
  grades: {
    math: 6,
    english: 7
  }
};
console.log("Điểm Toán:", student["grades"]["math"]);

// 4. Tạo object settings và thay đổi volume
const settings = {
  volume: 70,
  brightness: 50
};
settings.volume = 30;
console.log("New settings:", settings);

// 5. Tạo object bike và thêm thuộc tính color
const bike = {
  brand: "Honda",
  type: "Mountain"
};
bike.color = "Red";
console.log("Bike:", bike);

// 6. Tạo object employee và xóa thuộc tính age
const employee = {
  name: "Quang Pham",
  age: 23
};
delete employee.age;
console.log("Employee:", employee);

// 7. Object school quản lý học sinh trong các lớp
const school = {
  classA: ["An", "Binh", "Chau"],
  classB: ["Dao", "Huong", "Giang"]
};
console.log("School:", school);