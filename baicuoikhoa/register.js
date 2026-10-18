function tao_tai_khoan() { 
    // ghi dữ liệu lên database
    let tenNguoiChoi = document.getElementById("username").value;
    let diemCuaGame = document.getElementById("password").value;
    let matKhauXacNhan = document.getElementById("confirmPassword").value;

    if (diemCuaGame !== matKhauXacNhan) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    fetch('https://mindx-class-api.vercel.app/api', {
        method: 'POST', // ghi bảng phương thức POST
        headers: {
            "Content-Type": 'application/json' // định dạng dữ liệu gửi đi là JSON
        },
        body: JSON.stringify({
            id_class: "JSAS17-JSA17", // định danh người sử dụng
            name: tenNguoiChoi,
            password: diemCuaGame,
        })
    })
    .then(response => response.json())
    .then(ketQua => {
    alert("Đã tạo tài khoản thành công!");
    window.location.href = "./login.html"; // Chuyển về trang đăng nhập
})
    .catch(error => {
        alert("Tạo tài khoản thất bại!");
    });
}
function chuyen_trang_login() {
    window.location.href = "./login.html";
}