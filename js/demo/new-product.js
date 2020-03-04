$(document).ready(()=>{
    let imagesb64 = [];
    let user = localStorage.getItem('user');
    let token = localStorage.getItem('token');
    let input = document.querySelector('#pro_img');

    fetch('https://cors-anywhere.herokuapp.com/https://pacific-waters-37938.herokuapp.com/api/v1/category/list',{
        method: 'GET',
        headers: {
            'Authorization': token
        }
    }).then((res)=>res.json()).then((data)=>{
        console.log(data.data);
        let categories = data.data;
        categories.map(item=>{
            let select = document.querySelector('#category');
            let str = `<option value=${item._id}>${item.name}</option>`
            select.insertAdjacentHTML('afterbegin', str);
        })
        
    }).catch((err)=>{
        console.error('Error:', err)
    })

    
    
    input.onchange = ()=>{
        let preview = document.querySelector('#preview');
        let files = document.querySelector('input[type=file]').files;
        const readAndPreview = (file)=>{
            if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                let reader = new FileReader();
          
                reader.addEventListener("load", function () {
                  let image = new Image();
                  image.height = 100;
                  image.title = file.name;
                  image.src = this.result;
                  preview.appendChild( image );
                }, false);

                reader.onloadend = ()=>{
                    imagesb64.push(reader.result);
                }
          
                reader.readAsDataURL(file);
              }
        }

        if(files) {
            [].forEach.call(files, readAndPreview);
        }
    }

    $('#submit-btn').on('click', (e)=>{
        e.preventDefault();
        let product_name = $('#pro_name').val();
        let price = $('#pro_price').val();
        let available_slot = $('#pro_slot').val();
        let description = $('#pro_desc').val();
        let category = $('#category').find(':selected').val();


        const post_data = {
            product_name: product_name,
            price: price,
            user: user,
            description: description,
            available_slot: available_slot,
            product_image: imagesb64,
            category: category
        }

        console.log(post_data);

        // fetch('https://cors-anywhere.herokuapp.com/https://pacific-waters-37938.herokuapp.com/api/v1/product/create', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': token
        //     },
        //     body: JSON.stringify(post_data)
        // }).then((res)=>{
        //     console.log(res.json())
        // }).catch(err=>{
        //     console.error('Error:', err)
        // })
    })
})