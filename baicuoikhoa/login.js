function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    fetch('https://mindx-class-api.vercel.app/api')
    .then(response => response.json())
    .then(users => {
        let user = users.find(u => u.name === username && u.password === password);
        console.log(users);

        if (user) {
            window.location.href = "./home.html";
            alert("Đăng nhập thành công");
            // Có thể thêm chuyển trang sau khi đăng nhập thành công ở đây nếu muốn
        }
        else {
            alert("Tên người dùng hoặc mật khẩu không đúng!");
        }
    })
    .catch(error => {
        console.error("Lỗi đăng nhập:", error);
        alert("Có lỗi xảy ra khi kết nối tới máy chủ!");
    });
}

function chuyen_trang_register() {
    window.location.href = "./register.html";
}