import { handleGetProductsStore, handleRenderList } from "../views/store";
import{handleGetProductLocalStorage, setInLocalStorage}from '../persistence/localStorage'
import { closeModal } from "../views/modal";
import { productoActivo } from "../../main";
import Swal from "sweetalert2";
//guardar




//funcion guardar/modificar
export const handleSaveOrModidyElements=()=>{
    const nombre = document.getElementById('nombre').value ;
    const  imagen = document.getElementById('imagen').value;
    const  precio = document.getElementById('precio').value;
    const  categoria = document.getElementById('category').value; 

    let product=null;

    if(productoActivo){
        console.log(productoActivo);
        product = {...productoActivo,
            nombre,
            imagen,
            precio,
            categoria}
    }
    else{
         product = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        };
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado!",
        icon: "success"
      });

    setInLocalStorage(product);
     handleGetProductsStore();
     closeModal();
    
};

//ELIMINAR PRODUCTO

export const handleDeleteProduct = ()=>{

    Swal.fire({
        title: "Estas seguro?",
        text: "Será eliminado permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si,eliminar!",
        cancelButtonText:"Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {

            const products = handleGetProductLocalStorage();
            //en result guardamos todos los elementos excepto el de id activo 
            const result = products.filter(el=>el.id !==productoActivo.id);
            localStorage.setItem('products',JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else
        {
            closeModal();
        }
      });
   
}