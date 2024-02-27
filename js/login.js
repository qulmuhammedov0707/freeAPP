
    let button = document.getElementById(`button`)
    var inpLogin = document.getElementById(`userName`)
    var inpPassword = document.getElementById(`Password`)
    let logKir = inpLogin.value;
    let passKir = inpPassword.value;

    button.addEventListener('click' , (e) => {
        e.preventDefault();
        if (window.localStorage.getItem('kalitsoz') == inpPassword.value && window.localStorage.getItem('foydalanuvchi') == inpLogin.value) {
        window.location.href = 'apps.html'
        alert(`to'g'ri`)
        }else{
            alert(`Xato`)
        }
    }
    )
    