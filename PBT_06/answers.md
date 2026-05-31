Câu A1
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>

Kích thước	  < 768px	  768px - 991px	  ≥ 992px
Số cột	       1 cột          2 cột         4 cột
Box layout	box xếp dọc      2 hàng       1 hàng ngang

col-md-6 nghĩa là: chiếm 6/12 cột khi màn hình ≥ 768px
Tại sao không cần viết col-sm-12: vì Bootstrap mặc định mobile-first

Câu A2
d-none      -> display: none (ẩn hoàn toàn)
d-md-block  -> từ md (≥768px) trở lên -> display: block
Mobile -> ẩn
Tablet trở lên -> hiện

1. mt-3: Tạo khoảng cách phía trên
2. mb-auto: Đẩy phần tử xuống dưới (hay dùng trong flexbox)
3. px-4: Tạo khoảng cách 2 bên trái/phải
4. py-2: Tạo khoảng cách trên/dưới
5. m-0: xóa margin

Sự khác nhau giữa .container, .container-fluid, .container-md
.container
Có max-width theo breakpoint
Ở giữa màn hình (center)
Không full width

.container-fluid
Luôn full màn hình
Không có margin hai bên

.container-md
Mobile: full width
Tablet trở lên: có max-width như container

Câu C1
1.
- CSS thuần:
+ HTML ngắn
+ CSS file riêng
- Tailwwind
+ HTML dài
+ gần như không cần CSS
2.
- CSS thuần
+ tốt cho logic tách biệt
+ dễ maintain small project
- Tailwind
+ tốt cho tốc độ dev
+ tốt cho team lớn nếu thống nhất
3.
- CSS thuần
+ reuse tự nhiên
+ clean class
- Tailwind
+ cần @apply hoặc framework
+ dễ lặp utility

Câu C2
- File HTML dùng Tailwind thường rất dài (nhiều classes). Tại sao Tailwind CSS file cuối cùng lại NHỎ HƠN Bootstrap CSS
Vì Tailwind dùng: Utility-first + build-time optimization
Cơ chế: Tailwind không load toàn bộ CSS mà chỉ giữ class được dùng trong project
Còn Bootstrap: load ALL components (carousel, modal, grid, tooltip...) -> rất nhiều CSS không dùng
- Giải thích Tailwind PurgeCSS (Tailwind JIT): quét toàn bộ HTML/JS -> tìm class đang dùng
Sau đó:
+ xóa class không dùng
+ giữ lại class cần thiết
- Khi nào KHÔNG nên dùng TailwindCSS? Cho 2 tình huống cụ thể.
+ Tình huống 1: Dự án nhỏ / HTML đơn giản
Ví dụ:
- landing page 1 trang
- form đơn giản
-> Tailwind sẽ làm HTML quá dài, khó đọc
+ Tình huống 2: Team không quen Tailwind
Nếu team:
- quen CSS truyền thống
- không hiểu utility class
-> code sẽ:
khó maintain
khó đọc
dễ duplicate class
