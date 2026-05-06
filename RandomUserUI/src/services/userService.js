import api from "./axios.js"

const getUser=async ()=>{
    try{
     const res=await api.get("/randomusers")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getUser;

