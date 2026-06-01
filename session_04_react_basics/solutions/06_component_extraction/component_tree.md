Sơ đồ cây component

App
├── Navbar
├── Hero
├── ProductGrid
│   └── ProductCard (lặp lại nhiều lần)
└── Footer

Props của từng Component
+ Navbar
Props:
- logo
- links

+ Hero
Props:
- title
- subtitle
- buttonText

+ ProductGrid
Props:
- title
- products

+ ProductCard
Props:
- image
- name
- price

+ Footer
Props:
- text

Lý do tách Component
- Navbar
Tách riêng vì được sử dụng ở nhiều trang khác nhau
- Hero
Tách riêng để dễ thay đổi nội dung thông qua props
- ProductCard
Tách riêng vì giao diện sản phẩm được lặp lại nhiều lần
- ProductGrid
Tách riêng để quản lý layout và render danh sách sản phẩm
- Footer
Tách riêng vì được tái sử dụng trên mọi trang