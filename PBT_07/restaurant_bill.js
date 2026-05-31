function printBill(items, includeTip = true) {

    // ===== 1. Tính tổng =====
    let subtotal = 0;

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
    console.log("╠══════════════════════════════════════╣");

    for (let i = 0; i < items.length; i++) {

        const item = items[i];
        const totalItem = item.price * item.qty;
        subtotal += totalItem;

        console.log(
            `║ ${i + 1}. ${item.name.padEnd(12)} x${item.qty}  @${item.price}k = ${totalItem}k ║`
        );
    }

    console.log("╠══════════════════════════════════════╣");

    // ===== 2. Giảm giá =====
    let discountRate = 0;

    if (subtotal > 1000) {
        discountRate = 0.15;
    } else if (subtotal > 500) {
        discountRate = 0.10;
    }

    // Thứ 3 (Wednesday)
    const today = new Date().getDay(); // 0 Sunday ... 3 Wednesday
    if (today === 3) {
        discountRate += 0.05;
    }

    const discount = subtotal * discountRate;

    // ===== 3. VAT =====
    const vat = subtotal * 0.08;

    // ===== 4. Tip =====
    const tip = includeTip ? subtotal * 0.05 : 0;

    // ===== 5. Tổng thanh toán =====
    const total = subtotal - discount + vat + tip;

    // ===== 6. In hóa đơn =====
    console.log(`║ Tổng cộng:              ${subtotal.toLocaleString()}đ ║`);
    console.log(`║ Giảm giá (${discountRate * 100}%):       ${discount.toLocaleString()}đ ║`);
    console.log(`║ VAT (8%):              ${vat.toLocaleString()}đ ║`);
    console.log(`║ Tip (5%):              ${tip.toLocaleString()}đ ║`);

    console.log("╠══════════════════════════════════════╣");

    console.log(`║ THANH TOÁN:            ${total.toLocaleString()}đ ║`);
    console.log("╚══════════════════════════════════════╝");
}


// ================= TEST =================

const order = [
    { name: "Phở bò", price: 65, qty: 2 },
    { name: "Trà đá", price: 5, qty: 3 },
    { name: "Bún chả", price: 55, qty: 1 }
];

printBill(order, true);