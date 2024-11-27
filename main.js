import { renderCategories } from "./src/services/categories";
import './style.css';
import { handleGetProductsStore } from "./src/views/store";
import { openModal } from "./src/views/modal";
import{handleSaveOrModidyElements}from "./src/services/products";
import { handleSearch } from "./src/services/searchBar";
/*APPLICACTION */

export let categoriaActiva = null;
export const setCategoriaActiva =(categoriaIn)=>{
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export const setProductoActivo =(productoIn)=>{
    productoActivo = productoIn;
}

handleGetProductsStore();
renderCategories();

//Header
const addElement = document.getElementById('buttomAddElement');
addElement.addEventListener('click',()=>{
    openModal();
    //resetModal();
})


// este boton deberia colocarlo en el modal.js pq aparece en el popUp
const acceptButtom = document.getElementById('acceptButtom');
acceptButtom.addEventListener('click',()=>{
    handleSaveOrModidyElements();

})


//buttomSearch

const buttomSearch = document.getElementById('buttonSearch');
buttomSearch.addEventListener('click',()=>{
    handleSearch();
})

