$(document).ready(()=>{
    $('.user').on('submit', (e)=>{
        e.preventDefault();
        let username = $('#userInputEmail').val();
        let password = $('#userInputPassword').val();
        $('#login-btn').attr('disabled', true);

        let data = {
            email: username,
            password: password
        }

        fetch('https://cors-anywhere.herokuapp.com/https://pacific-waters-37938.herokuapp.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data.data.user._id);
            let token = data.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('user', data.data.user._id);
            localStorage.setItem('username', data.data.user.name);
            location.replace('dashboard.html');
        }).catch((error)=>{
            console.error('Error:', error);
        })

        
    })
})