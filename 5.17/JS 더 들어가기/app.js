let id;

const menu_login = document.querySelector('#login-link');

function loginAlert() {
    id = prompt("ID를 입력하세요.");
    console.log(`id는 ${id}입니다.`);
}

function askId() {
    
    if (menu_login.style.color === "blue") {
        menu_login.style.color = "red";
    }
    else {
        menu_login.style.color = "blue";
    }

    // const user_id = prompt("ID값을 입력하세요");

    // menu_login.innerHTML = user_id;
}

menu_login.addEventListener('click', askId);