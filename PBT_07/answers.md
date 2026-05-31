Câu A1
// Đoạn 1
console.log(x);
var x = 5;
output: undefined
// Đoạn 2
console.log(y);
let y = 10;
output: ReferenceError
// Đoạn 3
const z = 15;
z = 20;
console.log(z);
output: TypeError
// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
output: [1, 2, 3, 4]
// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
output: 
Trong block: 2
Ngoài block: 1

GT:
1. var cho ra undefined thay vì lỗi
2. let báo lỗi dù cũng được hoisting
3. const vẫn sửa được mảng
4. Hai biến a cùng tên nhưng giá trị khác nhau

Câu A2
console.log(typeof null);        // object
console.log(typeof undefined);   // undefined
console.log(typeof NaN);         // number
console.log("5" + 3);           // 53
console.log("5" - 3);           // 2
console.log("5" * "3");         // 15
console.log(true + true);       // 2
console.log([] + []);           // ""
console.log([] + {});           // [object Object]
console.log({} + []);           // 0   
Giải thích tại sao "5" + 3 và "5" - 3 cho kết quả khác nhau.
Trường hợp 1: "5" + 3
Toán tử + trong JavaScript vừa có chức năng:
+ Cộng số
+ Nối chuỗi
Khi một trong hai toán hạng là chuỗi ("5"), JavaScript sẽ ưu tiên ép kiểu sang chuỗi
Trường hợp 2: "5" - 3
Toán tử - chỉ dùng cho phép toán số học, không dùng để nối chuỗi
Do đó JavaScript sẽ ép chuỗi "5" thành số 5 trước khi thực hiện phép trừ

Câu A3
console.log(5 == "5");          // true
console.log(5 === "5");         // false
console.log(null == undefined); // true
console.log(null === undefined);// false
console.log(NaN == NaN);        // false
console.log(0 == false);        // true
console.log(0 === false);       // false
console.log("" == false);       // true
Quy tắc: Từ giờ trở đi, bạn nên dùng == hay ===? Tại sao?
Nên dùng: ===
Lý do:
Không tự động ép kiểu
Kết quả rõ ràng, dễ đoán
Tránh các lỗi kỳ lạ
Là quy tắc được khuyến nghị trong JavaScript hiện đại

Câu A4
Liệt kê TẤT CẢ giá trị Falsy trong JavaScript
+ false (giá trị boolean false)
+ 0 (số 0)
+ -0 (số âm 0)
+ 0n (biglnt 0)
+ "" (chuỗi rỗng)
+ null (không có giá trị)
+ undefined (chưa được gán giá trị)
+ NaN (Not a Number)

if ("0") console.log("A");           // in A
if ("") console.log("B");            // không in
if ([]) console.log("C");            // in c
if ({}) console.log("D");            // in D
if (null) console.log("E");          // không in
if (0) console.log("F");             // không in
if (-1) console.log("G");            // in G
if (" ") console.log("H");           // in H

Câu A5
// Cách 1:
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;

Câu C1
- Lỗi 1: thiếu dấu ;
Sửa: return "Phần trăm giảm không hợp lệ";
Gt: JavaScript có cơ chế tự chèn dấu ; (ASI), nhưng vẫn nên viết đầy đủ để tránh lỗi khó phát hiện
- Lỗi 2: truyền giá trị chuỗi thay vì số
Sửa: const gia = tinhGiaGiamGia(100000, 20);
Gt: "100000" là string, mặc dù JavaScript có thể tự ép kiểu nhưng không nên phụ thuộc vào điều đó
- Lỗi 3: dùng var thay vì const
Sửa: const giamGia = giaBan * phanTramGiam / 100;
Gt: Giá trị này không thay đổi sau khi gán nên nên dùng const
- Lỗi 4: dùng phép gán thay vì só sánh
Sửa: if (giaSauGiam === 0)
Gt: dấu = là gán giá trị, dấu === là so sánh nghiêm ngặt
- Lỗi 5: Nên dùng === thay vì ==
Sửa: if (giaSauGiam === 0)
Gt: === kiểm tra cả giá trị và kiểu dữ liệu
- Lỗi 6: var trong vòng lặp và setTimeout
Sửa:
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
Gt: let có block scope, mỗi lần lặp JavaScript tạo một biến i mới.Do đó mỗi callback ghi nhớ đúng giá trị của lần lặp tương ứng