$(document).ready(()=>{
    const token = localStorage.getItem('token');
    if(!token){
        location.replace('login.html');
    }

    $('#logout').on("click", (e)=>{
        e.preventDefault();
        localStorage.removeItem('token');
        location.replace('login.html');
    })
})