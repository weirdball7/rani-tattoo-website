document.addEventListener('DOMContentLoaded', function(){
    let userName; 
    let password; 
    // let passwordRepeat; 
    let btn = document.getElementById('btn');
    let admin = {
        'userName': 'admin',
        'password': 12345
    };
    console.log('hello world');
    const buttonClick = () => {
        userName = document.getElementById('user-name').value;
        password = document.getElementById('password').value;
        // passwordRepeat = document.getElementById('password-repeat').value;
        userName = userName.toLowerCase();
        if(password !== admin['password'] && userName !== admin['userName'] ){
            alert('shit-sucks');
        }else {
            console.log('succses');
            window.location.assign('http://127.0.0.1:5500/Admin/page-update.html');
        };

    };

    btn.addEventListener('click', buttonClick);

});