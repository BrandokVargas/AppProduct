



function obtenerDatos(){


    const name = document.querySelector('#productName').value;
    const price = document.querySelector('#price').value;
    // console.log(name + "-" + price);

    parseFloat(price);
    if(name == '' || price == '' || price < 1){

        // const divError = document.querySelector('.contenedor__input');
        // const hijoError = document.createElement('span');

        // if(divError){
        //     hijoError.textContent = "*Completa el campo porfavor";
        //     hijoError.classList.add('text__error');
        //     divError.appendChild(hijoError);
        // }

        
        //alert('error');

    }else{
        const pro = {
            name,
            price
        }

        const datos = document.querySelector('.added-products');
        let listaProdutos = [];
        listaProdutos.push(pro);
            
        listaProdutos.map(p => {
            return datos.innerHTML += `<div class="item-product">Nombre del producto: ${p.name} - Precio: ${p.price}</div>`;
        })   
    }

 
    



}
function Lista(){

    let i = 1;
    const aLista = document.querySelector('.item-product');
    aLista.addEventListener('click', ()=> {
    const lista = document.querySelector('#header__icon');
    const numberList = document.createElement('span');
    lista.appendChild(numberList);
    lista.innerHTML = i++;
    // console.log("hola")

    });


}




export default obtenerDatos;
export {Lista};

