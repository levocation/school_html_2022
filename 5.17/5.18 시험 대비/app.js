const header_h1 = document.querySelector('header h1');

function h1_clicked() {
    console.log("h1이 클릭되었습니다!");
}

header_h1.addEventListener("click", h1_clicked);

const login = document.querySelector('a.login');

function login_clicked() {
    console.log("로그인하세요!");
}

login.addEventListener("click", login_clicked);