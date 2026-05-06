import api from "./axios.js"

const getQuotes=async ()=>{
    try{
     const res=await api.get("/quotes")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getQuotes;

