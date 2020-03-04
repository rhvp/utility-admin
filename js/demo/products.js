const token = localStorage.getItem('token');
$(document).ready(()=>{
    fetch('https://cors-anywhere.herokuapp.com/https://pacific-waters-37938.herokuapp.com/api/v1/product/products', {
        method: 'GET',
        cache: 'force-cache',
        headers: {
            'Authorization': token
        },
    }).then((res)=>res.json()).then((data)=>{
        const products = (data.data)
        if(products){
            products.map(item=>{
                let table = document.querySelector('#products')
                let str = `<tr><td>${item.product_name}</td>
                               <td>${item.price}</td>
                               <td>${item.description}</td>
                               <td><img src=${item.product_image[0]}></td>
                               <td>${item.product_ref}</td>
                               <td>${item.avaliable_slot}</td>
                            </tr>`
                table.insertAdjacentHTML('afterbegin', str)
                $('#fetching-data').hide();
            })
        } else {
            $('#fetching-data').html('There are currently no products');
        }
    }).catch((err)=>{
        console.error('Error:', err)
    })
})