$(document).ready(()=>{
    const token = localStorage.getItem('token');
    fetch('https://cors-anywhere.herokuapp.com/https://pacific-waters-37938.herokuapp.com/api/v1/orders',{
        method: 'GET',
        headers: {
            'Authorization': token
        }
    }).then(res=>res.json()).then((data)=>{
        const orders = data.data
        if(orders){
            orders.map(order=>{
                let table = document.querySelector('#orders');
                let str = `<tr><td>Product Name</td>
                                <td>${order.quantity}</td>
                                <td>${order.order_ref}</td>
                                <td>${order.payment_option}</td>
                                <td>Product SKU</td>
                            </tr>`;
                table.insertAdjacentHTML('afterbegin', str);
            })
            $('#fetching-data').hide();
        } else {
            $('#fetching-data').html('There are currently no Orders.')
        }
        
    }).catch((err)=>{
        console.error('Error:', err)
    })
})