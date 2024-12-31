function checkUsername() {
    const inputUsername = document.getElementById('username').value;
    const storedUsername = localStorage.getItem('username');
    const inputPasswd = document.getElementById('passwd').value;
    const storedPasswd = localStorage.getItem('passwd');

    if(inputUsername != storedUsername){
        alert("Kullanıcı adı yanlış");
    }

    if(inputPasswd != storedPasswd){
        alert("Şifre yanlış");
    }

    if (inputUsername === storedUsername && inputPasswd === storedPasswd) {
        window.location.href = "index.html";
        alert("Giriş Başarılı!");
    }
}