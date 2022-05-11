import axios from 'axios'

const instance = axios.create ({
    baseURL : 'http://localhost:5000/',
    headers: {'Accept': 'application/json'}
  })

async function getProducts(productType){
    try{
        const res = await instance.get(productType);
        return res.data
    } 
    catch(error){
        console.log(error)
    }
}

async function getProductTypeList(){
    try{
        const res = await instance.get('/product-type');
        return res.data
    } 
    catch(error){
        console.log(error)
    }
}

async function getProductCategories(){
    try{
        const res = await instance.get('/product-categories');
        return res.data
    } 
    catch(error){
        console.log(error)
    }
}

async function getCarouselImages() {
    try{
        const res = await instance.get("/carousel");
        return res;
    }
    catch(error){
        console.log(error)
    }
}

async function getTableHeadList() {
    try{
        const res = await instance.get("/table-head");
        return res;
    }
    catch(error){
        console.log(error)
    }
}


export { getProducts, getProductTypeList, getProductCategories, getCarouselImages, getTableHeadList }