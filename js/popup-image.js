document.querySelectorAll('.img-card-container img').forEach(cardd => {
    image.onclick = () => {

        document.querySelector('.popup-image').style.display =  'block'
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
}); 

document.querySelector('popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none'
}