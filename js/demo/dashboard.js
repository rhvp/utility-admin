$(document).ready(()=>{
    const token = localStorage.getItem('token');
    let username = localStorage.getItem('username');
    $('#admin-name').html(username);
    if(!token){
        location.replace('login.html');
    }

    $('#logout').on("click", (e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('username')
        location.replace('login.html');
    })
})