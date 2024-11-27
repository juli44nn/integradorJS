/* Storeee*/
import { openModal } from "../views/modal";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { setProductoActivo } from "../../main";

//funcion q trae los elementos del localStorage y llama al render
export const handleGetProductsStore=()=>{

    const products = handleGetProductLocalStorage();
           // console.log(products);

    handleRenderList(products);
}
//se encarga de filtrar y renderizar la seccion con todos sus respectivos elementos
export const handleRenderList= (productosIn)=>{
    console.log(productosIn);
    //filtado de arrays por caregorias
    const burguer = productosIn.filter((el)=>el.categoria=='Hamburguesas' );
    const papas = productosIn.filter((el)=>el.categoria=='Papas' );
    const gaseosas = productosIn.filter((el)=>el.categoria=='Gaseosas' );
    //console.log(burguer);
    //console.log(gaseosas);
    //console.log(papas);

    //renderiza los elementos de la seccion
    const renderProductGroup = (productos,titulo)=>{
        //console.log(productos);
        if(productos.length>0){
            const productHTML = productos.map((producto,index)=>{
                return `<div id='product-${producto.categoria}-${index}' class= 'containerTargetItem'>
                    <div>
                        <img src='${producto.imagen}'/>
                        <div >
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio:</b>$ ${producto.precio}</p>
                            <p><b>Categoria:</b> ${producto.categoria}</p>
                        </div>
                    </div>
                </div>`
            });
            //retorna la seccion con todos los elementos dentro
            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'>
                        <h3>${titulo}</h3>
                    </div>
                    <div class='containerProductoStore'>
                        ${productHTML.join('')}
                    </div>
                    
                </section>
            
            `;
        }else{
            return ''
        }
    };

    //renderizar  c/u de los productos dentro de su categoria
    const appContainer = document.getElementById('storeContainer');

    appContainer.innerHTML= `
        ${renderProductGroup(burguer,'Hamburguesas')}
        ${renderProductGroup(papas,'Papas')}
        ${renderProductGroup(gaseosas,'Gaseosas')}

    `;
    //se añaden los eventos de manera dinamica.
    const addEvent = (productsIn)=>{
        //console.log(productosIn);
        productsIn.forEach((element,index)=>{
            //console.log(element);
            const productoContainer = document.getElementById(`product-${element.categoria}-${index}`);
            productoContainer.addEventListener('click',()=>{
                console.log('producto activo:',element);
                setProductoActivo(element);
                openModal();
            });
    });

    }

    addEvent(burguer);
    addEvent(papas);
    addEvent(gaseosas);



};