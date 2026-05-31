Câu A1
1.
div#app
│
├── header
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
2.
Chọn thẻ <h1>: document.querySelect("h1");
Chọn input trong form: document.querySelector("#todoForm input");
Chọn tất cả .todo-item: document.querySelectorAll(".todo-item");
Chọn link đang active: document.querySelector("nav a.active");
Chọn <li> đầu tiên trong #todoList: document.querySelector("#todoList li:first-child");
Chọn tất cả <a> bên trong <nav>: document.querySelectorAll("nav a");

Câu A2
- Sự khác nhau giữa innerHTML và textContent
+ innerHTML:
Đọc hoặc ghi nội dung HTML bên trong phần tử
Các thẻ HTML sẽ được trình duyệt phân tích và render
Có thể tạo hoặc thay đổi cấu trúc HTML
Tiềm ẩn nguy cơ XSS nếu dữ liệu đến từ người dùng
+ textContent:
Đọc hoặc ghi nội dung văn bản thuần túy
Các thẻ HTML chỉ được hiển thị như văn bản
Chỉ thay đổi nội dung chữ
An toàn hơn vì không thực thi HTML/JavaScript
- Khi nào dùng innerHTML: dùng khi cần chèn hoặc tạo các phần tử HTML động
vd:
const box = document.querySelector("#box");
box.innerHTML = `
    <h2>Sản phẩm mới</h2>
    <p>Giá: 1.000.000đ</p>
`;
kq:
<div id="box">
    <h2>Sản phẩm mới</h2>
    <p>Giá: 1.000.000đ</p>
</div>
- Khi nào dùng textContent: Dùng khi hiển thị dữ liệu do người dùng nhập hoặc dữ liệu chỉ là văn bản
vd:
const username = "Nguyễn Văn A";

document.querySelector("#welcome")
.textContent = username;
kq:
<div id="welcome">
    Nguyễn Văn A
</div>
- XSS là lỗ hổng cho phép kẻ tấn công chèn mã JavaScript độc hại vào trang web để thực thi trên trình duyệt của người dùng
Nguyên nhân là vì innerHTML sẽ phân tích nội dung được gán như HTML thật
vd:
// Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;  // ← Nguy hiểm!
// Sửa thế nào?
- Cách sửa: Không dùng innerHTML với dữ liệu do người dùng nhập
Thay bằng:
const userInput =document.querySelector("#search").value;
document.querySelector("#result").textContent =userInput;

Câu A3
Khi click vào button, output = BUTTON -> INNER -> OUTER
Nếu uncomment stopPropagation(), output = BUTTON

Câu C1
- lỗi 1: addEventListener("onclick")
Sửa: addEventListener("click")
- Lỗi 2: countDisplay = count;
Sửa: countDisplay.textContent = count;
- Lỗi 3: historyList.innerHTML = null;
Sửa: historyList.innerHTML = "";
- Lỗi 4: item.remove;
Sửa: item.remove();
- Lỗi 5: count = localStorage.getItem("count");
Sửa: count = Number(localStorage.getItem("count")) || 0;
- Lỗi 6: History không được load lại
Sửa: historyList.innerHTML = localStorage.getItem("history") || "";
- Lỗi 7: count--;
Sửa: 
if(count > 0){
    count--;
}

Câu C2
1.Giải thích: Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE
vd:
1000 div
1000 event listeners
+ Tốn RAM
+ Tốn CPU
+ Khó bảo trì
+ Chậm khi render
- Event Delegation giải quyết thế nào
Thay vì 1000 listeners ta dùng 1 listener ở phần tử cha

Code cũ:
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);   // ← 1000 lần reflow!
}
Code mới:
const fragment =document.createDocumentFragment();
for(let i=0;i<1000;i++){
    const div =document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);

Vì code cũ sẽ là
append
reflow

append
reflow

append
reflow

...
1000 lần
Còn code mới:
Tạo trong bộ nhớ -> Append 1 lần -> 1 lần reflow
-> hiệu năng tốt hơn




