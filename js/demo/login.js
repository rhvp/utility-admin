$(document).ready(()=>{
    $('.btn-user').on('click', (e)=>{
        e.preventDefault();
        let username = $('#userInputEmail').val();
        let password = $('#userInputPassword').val();

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
            console.log(data.data.token)
            let token = data.data.token
            localStorage.setItem('token', token);
            location.replace('dashboard.html');
        }).catch((error)=>{
            console.error('Error:', error)
        })

        
    })
})