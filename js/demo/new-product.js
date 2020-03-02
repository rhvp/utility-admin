$(document).ready(()=>{
    let input = document.querySelector('input[type=file]');
    input.onchange = ()=>{
        let file = input.files[0];
        reader = new FileReader();

        reader.onloadend = ()=>{
            let b64 = reader.result.replace(/^data:.+;base64,/, '');
            console.log(b64)
        };
        reader.readAsDataURL(file);
    }
})