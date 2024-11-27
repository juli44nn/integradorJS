
/*CATEGORIA*/
//import { formatPostcssSourceMap } from "vite";
import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";


const handleFilterProductsByCategory=(categoryInput) =>{

    const products = handleGetProductLocalStorage();
    console.log('productos',products);
    console.log(categoryInput);
    switch(categoryInput){
        case categoriaActiva:
            handleRenderList(products);
            break;
        case 'Todo':
            handleRenderList(products);
            break;
        case 'Hamburguesas':
        case 'Gaseosas':
        case 'Papas':
            const result = products.filter(el=>el.categoria ==categoryInput)
            handleRenderList(result);
        default:
            break;

        case 'menorPrecio':
            const menor = products.sort((a,b)=>a.precio- b.precio);
            handleRenderList(menor);
            break;
        case 'mayorPrecio':
            const mayor =products.sort((a,b)=>b.precio- a.precio);
            handleRenderList(mayor);
            break;


        
    };
};






//render de la vista categorias
export const renderCategories=()=>{

    const ulList = document.getElementById('listFilter');
    const id=['Todo','Hamburguesas','Papas','Gaseosas','menorPrecio','mayorPrecio']
    let itemCount=0;
    const items = ['All products','hamburgs','papas','gasesoas','< precio','> precio'];
    let newItem ='';



    items.forEach(item=>{
        newItem+= `<li id="${id[itemCount]}">${item}</li>`
        itemCount++;
    })
    ulList.innerHTML+=newItem;
    /*
    ulList.innerHTML += `
        <li id='todo'>All products<li/>
        <li id='hamguergues'>Hamburgers<li/>
        <li id='fries'>Fries<li/>
        <li id='gaseosas'>Gaseosas<li/>
        <li id='menorPrecio'>Menos precio<li/>
        <li id='mayorPrecio'>Mayor precio<li/>
    `;
*/
    const liItems = ulList.querySelectorAll('li');
    liItems.forEach((item)=>{
        item.addEventListener('click',()=>{
            console.log('click en',item.id);
        });
    });


    //añadimos dinamicamente el evento click
    liItems.forEach(liItem =>{
        liItem.addEventListener('click',()=>{
            handleClick(liItem);
        })
    })

    //verifica y maneja el estilo del eleemento activo
    const handleClick = (item)=>{
        handleFilterProductsByCategory(item.id)
        liItems.forEach(el=>{
            if(el.classList.contains('liActive'))
                el.classList.remove('liActive');
            else{
                if(item ===el)
                    el.classList.add('liActive');
            }
        })
    }

};