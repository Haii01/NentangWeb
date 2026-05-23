// ===== DOM =====

const btnAddStudent = document.getElementById("btnAddStudent");

const studentModal = document.getElementById("studentModal");

const btnClose = document.getElementById("btnClose");

const studentForm = document.getElementById("studentForm");

const studentList = document.getElementById("studentList");

const message = document.getElementById("message");

const totalStudents = document.getElementById("totalStudents");

const averageScore = document.getElementById("averageScore");

const modalTitle = document.getElementById("modalTitle");

const submitBtn = document.getElementById("submitBtn");


// ===== INPUT =====

const studentId = document.getElementById("studentId");

const fullName = document.getElementById("fullName");

const birthDate = document.getElementById("birthDate");

const className = document.getElementById("className");

const score = document.getElementById("score");

const email = document.getElementById("email");


// ===== ERROR =====

const studentIdError = document.getElementById("studentIdError");

const fullNameError = document.getElementById("fullNameError");

const birthDateError = document.getElementById("birthDateError");

const classNameError = document.getElementById("classNameError");

const scoreError = document.getElementById("scoreError");

const emailError = document.getElementById("emailError");


// ===== DATA =====

let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;


// ===== FUNCTIONS =====

// Mở modal
function openModal() {

    studentModal.classList.remove("hidden");
}


// Đóng modal
function closeModal() {

    studentModal.classList.add("hidden");
}


// Reset form
function resetForm() {

    studentForm.reset();

    clearErrors();

    editIndex = -1;

    modalTitle.innerText = "Thêm sinh viên";

    submitBtn.innerText = "Lưu";
}


// Xóa lỗi
function clearErrors() {

    studentIdError.innerText = "";

    fullNameError.innerText = "";

    birthDateError.innerText = "";

    classNameError.innerText = "";

    scoreError.innerText = "";

    emailError.innerText = "";
}


// Hiển thị thông báo
function showMessage(text) {

    message.style.display = "inline-block";

    message.innerText = text;

    setTimeout(() => {

        message.innerText = "";

        message.style.display = "none";

    }, 3000);
}


// Lưu localStorage
function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


// Cập nhật thống kê
function updateStatistics() {

    totalStudents.innerText = students.length;

    if (students.length === 0) {

        averageScore.innerText = 0;

        return;
    }

    let total = 0;

    students.forEach(student => {

        total += Number(student.score);

    });

    let avg = total / students.length;

    averageScore.innerText = avg.toFixed(2);
}


// Render sinh viên
function renderStudents() {

    studentList.innerHTML = "";

    if (students.length === 0) {

        studentList.innerHTML = `
            <tr>
                <td colspan="7">
                    Chưa có sinh viên
                </td>
            </tr>
        `;

        updateStatistics();

        return;
    }

    students.forEach((student, index) => {

        studentList.innerHTML += `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.birth}</td>

                <td>${student.class}</td>

                <td>
                    <span class="${student.score >= 8 ? 'good' : student.score < 5 ? 'bad' : ''}">
                        ${student.score}
                    </span>
                </td>

                <td>${student.email}</td>

                <td>

                    <button onclick="editStudent(${index})">
                        Sửa
                    </button>

                    <button onclick="deleteStudent(${index})">
                        Xóa
                    </button>

                </td>

            </tr>
        `;
    });

    updateStatistics();
}


// Sửa sinh viên
function editStudent(index) {

    openModal();

    const student = students[index];

    studentId.value = student.id;

    fullName.value = student.name;

    birthDate.value = student.birth;

    className.value = student.class;

    score.value = student.score;

    email.value = student.email;

    editIndex = index;

    modalTitle.innerText = "Cập nhật sinh viên";

    submitBtn.innerText = "Cập nhật";
}


// Xóa sinh viên
function deleteStudent(index) {

    let confirmDelete = confirm(
        "Bạn có chắc muốn xóa sinh viên này?"
    );

    if (confirmDelete) {

        students.splice(index, 1);

        saveStudents();

        renderStudents();

        showMessage("Xóa sinh viên thành công");
    }
}


// ===== VALIDATION REALTIME =====

// Email
email.addEventListener("input", function() {

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.value.trim() === "") {

        emailError.innerText = "Email không được để trống";
    } else if (!emailRegex.test(email.value)) {

        emailError.innerText = "Email không đúng định dạng";
    } else {

        emailError.innerText = "";
    }
});


// Ngày sinh
birthDate.addEventListener("input", function() {

    let dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (birthDate.value.trim() === "") {

        birthDateError.innerText = "Ngày sinh không được để trống";
    } else if (!dateRegex.test(birthDate.value)) {

        birthDateError.innerText = "Định dạng phải là dd/mm/yyyy";
    } else {

        birthDateError.innerText = "";
    }
});


// Điểm
score.addEventListener("input", function() {

    if (score.value < 0 || score.value > 10) {

        scoreError.innerText = "Điểm phải từ 0 đến 10";
    } else {

        scoreError.innerText = "";
    }
});


// ===== EVENTS =====

// Mở form
btnAddStudent.addEventListener("click", function() {

    openModal();

});


// Đóng form
btnClose.addEventListener("click", function() {

    closeModal();

    resetForm();

});


// Submit form
studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    clearErrors();

    const student = {

        id: studentId.value.trim(),

        name: fullName.value.trim(),

        birth: birthDate.value.trim(),

        class: className.value.trim(),

        score: score.value,

        email: email.value.trim()
    };

    let isValid = true;


    // Mã SV
    if (student.id === "") {

        studentIdError.innerText = "Không được để trống";

        isValid = false;
    }


    // Họ tên
    if (student.name === "") {

        fullNameError.innerText = "Không được để trống";

        isValid = false;
    }


    // Ngày sinh
    let dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (student.birth === "") {

        birthDateError.innerText = "Không được để trống";

        isValid = false;
    } else if (!dateRegex.test(student.birth)) {

        birthDateError.innerText = "Sai định dạng dd/mm/yyyy";

        isValid = false;
    }


    // Lớp
    if (student.class === "") {

        classNameError.innerText = "Không được để trống";

        isValid = false;
    }


    // Điểm
    if (student.score === "") {

        scoreError.innerText = "Không được để trống";

        isValid = false;
    } else if (student.score < 0 || student.score > 10) {

        scoreError.innerText = "Điểm từ 0 đến 10";

        isValid = false;
    }


    // Email
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (student.email === "") {

        emailError.innerText = "Không được để trống";

        isValid = false;
    } else if (!emailRegex.test(student.email)) {

        emailError.innerText = "Email không đúng định dạng";

        isValid = false;
    }


    if (!isValid) {

        return;
    }


    // THÊM
    if (editIndex === -1) {

        students.push(student);

        showMessage("Thêm sinh viên thành công");
    }

    // SỬA
    else {

        students[editIndex] = student;

        showMessage("Cập nhật sinh viên thành công");
    }


    saveStudents();

    renderStudents();

    closeModal();

    resetForm();

});


// ===== START =====

renderStudents();