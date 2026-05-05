import api from "./axios.js"

const getMeals=async ()=>{
    try{
     const res=await api.get("/meals")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getMeals;

