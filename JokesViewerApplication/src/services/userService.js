import api from "./axios.js"

const getJokes=async ()=>{
    try{
     const res=await api.get("/randomjokes")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getJokes;

