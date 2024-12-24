function saveToLocalStorage() {
    const username = document.getElementById('username').value;
    const mail = document.getElementById('mail').value;
    const passwd = document.getElementById('passwd').value;
    const output = document.getElementById('output');

    //Basit bir şifre dayanıklılığını sağlayan kod parçası
    const numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const specials = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<', '>',
        '/', '?', '`', '~'
    ];
    let N = 0, L = 0, S = 0;

    if (passwd.length < 8) {
        output.textContent = "Şifre uzunluğu 8 haneden az!";
        return;
    } else {
        for (var i = 0; i < passwd.length; i++) {
            if (numbs.includes(passwd[i])) { //şifrenin içinde sayı olup olmadığını kontrol etme
                N++;
            } if (letters.includes(passwd[i])) {
                L++;
            } if (specials.includes(passwd[i])) {
                S++;
            }
        }
        if (N < 2) {
            output.textContent = "Şifrende en az iki adet sayı bulunmalı";
            return;
        }
        if (L < 3) {
            output.textContent = "Şifrende en az üç adet harf bulunmalı";
            return;
        }
        if (S < 3) {
            output.textContent = "Şifrende en az üç adet özel karakter bulunmalı";
            return;
        }

        if (L >= 3 && N >= 2 && S >= 3) {
            if (username && passwd && mail) {
                localStorage.setItem('username', username);
                localStorage.setItem('passwd', passwd);
                localStorage.setItem('mail', mail);
                window.location.href = "../login.html";
                alert('Kullanıcı adı, şifre ve e-posta kaydedildi!');
                return;

            } else {
                alert("Lütfen tüm alanları doldurun.");
                return;
            }
        }
    }
}