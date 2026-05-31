const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Đếm xếp loại
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

// Tổng điểm các môn
let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

// Theo giới tính
let maleTotal = 0;
let femaleTotal = 0;
let maleCount = 0;
let femaleCount = 0;

// Tìm cao nhất và thấp nhất
let highestStudent = null;
let lowestStudent = null;

console.log("================================================");
console.log("| STT | Tên      | TB   | Xếp loại          |");
console.log("================================================");

for (let i = 0; i < students.length; i++) {

    const student = students[i];

    // Tính điểm trung bình
    const average =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    student.average = average;

    // Xếp loại
    let rank = "";

    if (average >= 8.0) {
        rank = "Giỏi";
        gioi++;
    } else if (average >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (average >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    student.rank = rank;

    // In bảng
    console.log(
        `| ${String(i + 1).padEnd(3)} | ${student.name.padEnd(8)} | ${average.toFixed(1).padEnd(4)} | ${rank.padEnd(16)} |`
    );

    // Tổng điểm môn học
    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    // Cao nhất
    if (
        highestStudent === null ||
        average > highestStudent.average
    ) {
        highestStudent = student;
    }

    // Thấp nhất
    if (
        lowestStudent === null ||
        average < lowestStudent.average
    ) {
        lowestStudent = student;
    }

    // Theo giới tính
    if (student.gender === "M") {
        maleTotal += average;
        maleCount++;
    } else {
        femaleTotal += average;
        femaleCount++;
    }
}

console.log("================================================");

// Thống kê xếp loại
console.log("\n=== THỐNG KÊ XẾP LOẠI ===");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

// Cao nhất
console.log("\n=== SINH VIÊN CAO ĐIỂM NHẤT ===");
console.log(
    highestStudent.name,
    "- TB:",
    highestStudent.average.toFixed(2)
);

// Thấp nhất
console.log("\n=== SINH VIÊN THẤP ĐIỂM NHẤT ===");
console.log(
    lowestStudent.name,
    "- TB:",
    lowestStudent.average.toFixed(2)
);

// TB từng môn
console.log("\n=== ĐIỂM TRUNG BÌNH TOÀN LỚP ===");

console.log(
    "Toán:",
    (totalMath / students.length).toFixed(2)
);

console.log(
    "Lý:",
    (totalPhysics / students.length).toFixed(2)
);

console.log(
    "CS:",
    (totalCS / students.length).toFixed(2)
);

// Bonus: theo giới tính
console.log("\n=== ĐIỂM TB THEO GIỚI TÍNH ===");

console.log(
    "Nam:",
    (maleTotal / maleCount).toFixed(2)
);

console.log(
    "Nữ:",
    (femaleTotal / femaleCount).toFixed(2)
);