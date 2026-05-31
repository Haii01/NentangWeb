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
