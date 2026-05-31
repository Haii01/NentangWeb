// Random số từ 1 đến 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

const guessedNumbers = [];

let attempts = 0;
const maxAttempts = 7;

while (attempts < maxAttempts) {

    let input = prompt(
        `Lần ${attempts + 1}/${maxAttempts}\nNhập số từ 1 đến 100:`
    );

    // User bấm Cancel
    if (input === null) {
        alert("Bạn đã thoát trò chơi!");
        break;
    }

    let guess = Number(input);

    // Validate
    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số từ 1 đến 100!");
        continue;
    }

    // Kiểm tra đoán trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);

    attempts++;

    // So sánh
    if (guess === secretNumber) {

        alert(
            `🎉 Đúng rồi!\nBạn đoán đúng sau ${attempts} lần!`
        );

        break;

    } else if (guess < secretNumber) {

        alert("⬆ Cao hơn!");

    } else {

        alert("⬇ Thấp hơn!");

    }

    // Hết lượt
    if (attempts === maxAttempts) {

        alert(
            `❌ Bạn đã hết 7 lượt!\nĐáp án là: ${secretNumber}`
        );

    }
}