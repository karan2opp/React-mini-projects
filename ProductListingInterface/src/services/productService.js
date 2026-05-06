import api from "./axios.js"

const getProducts=async ()=>{
    try{
     const res=await api.get("/randomproducts")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getProducts;

