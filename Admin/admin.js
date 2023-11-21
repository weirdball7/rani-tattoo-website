document.addEventListener('DOMContentLoaded', function(){
    let userName; 
    let password; 
    let passwordRepeat; 
    let user;
    let btn = document.getElementById('btn');
    console.log(user);

    const buttonClick = () => {
        userName = document.getElementById('user-name').value;
        password = document.getElementById('password').value;
        passwordRepeat = document.getElementById('password-repeat').value;
        userName = userName.toLowerCase();
        console.log(userName, password, passwordRepeat);

        // if (userName === 'rotem') {
        //     alert('Sucsses');
        // }else{
        //     alert('Error');
        // };

        if(password.length >= 6){
            if(password === passwordRepeat){
                user = {
                    'userName':userName,
                    'password':password
                };
                console.log(user);
            }else{
                alert('passwords Dont match');
            };
        }else{
            alert('password too short');
        };


    };

    btn.addEventListener('click', buttonClick);

});