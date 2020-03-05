$(document).ready(()=>{
    let token = localStorage.getItem('token');
    $('.new-category').on('submit', (e)=>{
        e.preventDefault();
        let name = $('#cat_name').val();
        let description = $('#cat_desc').val();

        const post_data = {
            name: name,
            description: description
        }
        
        $('#submit-btn').attr('disabled', true);

        fetch('https://cors-anywhere.herokuapp.com/https://pacific-waters-37938.herokuapp.com/api/v1/category/create', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post_data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
            location.reload();
        }).catch((err)=>{
            console.error('Error:', err)
        })
    })
})