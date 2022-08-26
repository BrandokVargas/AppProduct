import obtenerDatos,{Lista} from './productos.js';

//ABRIENO MODAl
const producto = document.querySelector('.header__button');
producto.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

function openModal(){
    const open = document.querySelector('.modal');
    open.classList.add("modal--show");
}

function closeModal(){
    const close = document.querySelector('.modal');
    close.classList.remove("modal--show");
}


const productAdd = document.querySelector('#add-product');

productAdd.onsubmit = (e) => {

    e.preventDefault();
    closeModal();

    obtenerDatos();
    const name = document.querySelector('#productName').value = "";
    const price = document.querySelector('#price').value="";

    
    //Lista();

}







