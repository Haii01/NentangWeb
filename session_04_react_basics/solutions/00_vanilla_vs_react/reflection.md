Câu1
Ở Vanilla JS, mỗi lần thêm, xóa hoặc toggle todo cần gọi nhiều thao tác:
- Cập nhật dữ liệu trong mảng todos
- Gọi renderTodos()
- renderTodos() phải:
 - Lấy DOM
 - Xóa nội dung cũ
 - Tạo HTML mới  - Gán lại innerHTML
Do đó mỗi thay đổi đều cần quản lý dữ liệu và DOM thủ công.

Câu 2
Khi setTodos() chạy, React tự động:
- Cập nhật state
- So sánh Virtual DOM
- Re-render giao diện cần thiết
- Cập nhật DOM thật
Lập trình viên không cần thao tác DOM trực tiếp.

Câu 3
Nếu Portfolio có 50 project thì React an toàn hơn.
Lý do:
- Dữ liệu tập trung trong state
- UI luôn đồng bộ với state
- Giảm lỗi thao tác DOM
- Dễ mở rộng và bảo trì

Câu 4
Portfolio có thể dùng:
- useState để lưu danh sách project
- map() để hiển thị ProjectCard
- filter() để lọc theo category
Khi dữ liệu thay đổi chỉ cần cập nhật state, React sẽ tự động cập nhật giao diện.