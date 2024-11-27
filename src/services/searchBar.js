import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearch = ()=>{
    const inputHeaderSearch = document.getElementById('inputSearch').value.toLowerCase();
    const products = handleGetProductLocalStorage();
    //console.log(inputHeaderSearch);
    const result = products.filter(el =>el.nombre.toLowerCase().includes(inputHeaderSearch));
    console.log(result);
    handleRenderList(result);
}