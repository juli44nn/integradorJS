/*Local storage */

//funcion para obtener los elementos
export const handleGetProductLocalStorage= ( )=>{
    //CONVIERTE UNA CADENA JSON A UN OBJETO JS
const products = JSON.parse(localStorage.getItem('products'));
if(products)
    return products;
else
    return [];

};

//funcion para guardar en el local Storage

export const setInLocalStorage = (productIntput)=>{
    if(productIntput){

        //tremos los elementos
        let productsInLocal = handleGetProductLocalStorage();
        //console.log(productIntput);
        console.log(productsInLocal);

        const existeIndice = productsInLocal.findIndex(
            (productosLocal)=> productosLocal.id ===productIntput.id
        );
        //si los objetos no son iguales, devuelve -1 , quiere decir q el objeto no se repite 
        console.log(existeIndice);
        if(existeIndice !==-1){ //e elemento existe y lo sobrescribe
            productsInLocal[existeIndice]= productIntput;
        }else{
            productsInLocal.push(productIntput);
        }
        localStorage.setItem('products', JSON.stringify(productsInLocal));
    }
    //console.log('el producto nuevo guardado en el arreglo ',productsInLocal);
}
