function createCart() {

    // Private data
    let items = [];
    let discount = {
        type: null,
        value: 0
    };

    return {

        // Thêm sản phẩm
        addItem(product, quantity = 1) {

            const existingItem =
                items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity
                });
            }

        },

        // Xóa sản phẩm
        removeItem(productId) {

            items =
                items.filter(
                    item => item.id !== productId
                );

        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {

            const item =
                items.find(
                    item => item.id === productId
                );

            if (!item) return;

            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
            }

        },

        // Tổng tiền trước giảm giá
        getTotal() {

            return items.reduce(
                (total, item) =>
                total + item.price * item.quantity,
                0
            );

        },

        // Mã giảm giá
        applyDiscount(code) {

            switch (code.toUpperCase()) {

                case "SALE10":
                    discount = {
                        type: "percent",
                        value: 10
                    };
                    break;

                case "SALE20":
                    discount = {
                        type: "percent",
                        value: 20
                    };
                    break;

                case "FREESHIP":
                    discount = {
                        type: "fixed",
                        value: 30000
                    };
                    break;

                default:
                    discount = {
                        type: null,
                        value: 0
                    };
                    console.log("Mã giảm giá không hợp lệ!");
            }

        },

        // Tổng tiền sau giảm giá
        getFinalTotal() {

            let total = this.getTotal();

            if (discount.type === "percent") {

                total =
                    total -
                    total * discount.value / 100;

            }

            if (discount.type === "fixed") {

                total =
                    total - discount.value;

            }

            return total;

        },

        // In giỏ hàng
        printCart() {

            console.log("\n===== GIỎ HÀNG =====");

            const tableData =
                items.map(item => ({

                    "Sản phẩm": item.name,

                    "SL": item.quantity,

                    "Đơn giá": item.price.toLocaleString("vi-VN") + "đ",

                    "Thành tiền":
                        (item.price * item.quantity)
                        .toLocaleString("vi-VN") + "đ"

                }));

            console.table(tableData);

            console.log(
                "Tổng cộng:",
                this.getFinalTotal()
                .toLocaleString("vi-VN") + "đ"
            );

        },

        // Tổng số lượng sản phẩm
        getItemCount() {

            return items.reduce(
                (total, item) =>
                total + item.quantity,
                0
            );

        },

        // Xóa toàn bộ
        clearCart() {

            items = [];

            discount = {
                type: null,
                value: 0
            };

        }

    };

}



// ================= TEST =================

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());