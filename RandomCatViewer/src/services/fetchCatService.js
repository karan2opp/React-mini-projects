import api from "./axios.js"

const getCats=async ()=>{
    try{
     const res=await api.get("/cats/cat/random")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getCats;

