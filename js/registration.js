function saveLoginDetails() {
    let login = document.getElementById('login');
    let password = document.getElementById('parol');
    let loginContent = login.value;
    let passwordContent = password.value;
    window.localStorage.setItem('foydalanuvchi', loginContent);
    window.localStorage.setItem('kalitsoz', passwordContent);
    alert('Foydalanuvchi ma\'lumotlari saqlandi');
}


