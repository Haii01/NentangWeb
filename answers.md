Câu A1
- Function Declaration
function tinhThueBaoHiem(luong) {
    const thue =
    luong > 11000000
    ? luong * 0.1
    : 0;
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}
- Function Expression
const tinhThueBaoHiem = function(luong) {
    const thue =
    luong > 11000000
    ? luong * 0.1
    : 0;
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
- Arrow Function
const tinhThueBaoHiem = (luong) => {
    const thue =
    luong > 11000000
    ? luong * 0.1
    : 0;
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
+ Function Declaration: Được hoisting toàn bộ nên có thể gọi trước khi khai báo
hello();
function hello() {
    console.log("Hello");
}
output: Hello
+ Function Expression: Chỉ biến được hoisting, chưa được gán hàm
hello();
const hello = function() {
    console.log("Hello");
};
output: ReferenceError
+ Arrow Function: Tương tự Function Expression
hello();
const hello = () => {
    console.log("Hello");
};
output: ReferenceError

Câu A2
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.decrement());  // ???
console.log(c.getCount());   // ???

output:
1
2
3
2
2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}

output:
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2

Gt:
+ var có function scope, sau khi vòng lặp kết thúc, tất cả callback đều tham chiếu cùng 1 biến i
+ let có block scope, mỗi vòng lặp tạo 1 biến mới, mỗi callback giữ giá trị riêng của nó

Câu A3
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1. Lấy các số chẵn: nums.filter(n => n % 2 === 0);
2. Nhân mỗi số với 3: nums.map(n => n * 3);
3. Tính tổng tất cả: nums.reduce((sum, n) => sum + n, 0);
4. Tìm số đầu tiên > 7: nums.find(n => n > 7);
5. Kiểm tra CÓ số > 10 không: nums.some(n => n > 10);
6. Kiểm tra TẤT CẢ đều > 0: nums.every(n => n > 0);
7. Tạo mảng "Số X là [chẵn/lẻ]": 
nums.map(
    n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`
);
8. Đảo ngược mảng (không mutate gốc): [...nums].reverse();

Câu A4
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError: specs is not defined

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000 (Spread tạo object mới nên không làm thay đổi object gốc)

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 16 (Spread chỉ tạo bản sao nông, nên product.specs và copy.specs cùng tham chiếu đến một object trong bộ nhớ.)

Câu C1
const processOrders = orders =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);

Câu C2
const miniArray = {
    map(arr, fn) {
        const result = [];
        for(let i = 0; i < arr.length; i++){
            result.push(
                fn(arr[i], i, arr)
            );
        }
        return result;
    },
    filter(arr, fn) {
        const result = [];
        for(let i = 0; i < arr.length; i++){
            if(fn(arr[i], i, arr)){
                result.push(arr[i]);
            }
        }
        return result;
    },
    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        for(let i = 0; i < arr.length; i++){
            accumulator =
            fn(
                accumulator,
                arr[i],
                i,
                arr
            );
        }
        return accumulator;
    }
};
