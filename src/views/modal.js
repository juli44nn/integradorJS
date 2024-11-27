import { setProductoActivo,productoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";
/*POP UP */
const cancelButtom = document.getElementById('cancelButtom')
cancelButtom.addEventListener('click',()=>{
    closeModal();
})

//boton eliminar
const deleteButtom = document.getElementById('deleteButtom');
deleteButtom.addEventListener('click',()=> {
    handleProductDelete();
});

export const openModal = ()=>{
    const modal =document.getElementById('modalPopUp');
    modal.style.display = 'flex';

    //ocultar el botom cuando no exista producto activo

    if(productoActivo){
        deleteButtom.style.display='block';
        const nombre = document.getElementById('nombre') ;
        const  imagen = document.getElementById('imagen');
        const  precio = document.getElementById('precio');
        const  categoria = document.getElementById('category');
        
        nombre.value= productoActivo.nombre ;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;

    }else{
        deleteButtom.style.display='none';
    }


} ;

export const closeModal = ()=>{
    const modal =document.getElementById('modalPopUp');
    modal.style.display = 'none';   
    resetModal();
    setProductoActivo(null);
}

const resetModal= ()=>{
    const nombre = document.getElementById('nombre') ;
    const  imagen = document.getElementById('imagen');
    const  precio = document.getElementById('precio');
    const  categoria = document.getElementById('category'); 

    imagen.value = '';
    nombre.value='';
    precio.value = 0;
    categoria.value = 'Seleccione categoria';
}



const handleProductDelete = ()=>{
    handleDeleteProduct();
}