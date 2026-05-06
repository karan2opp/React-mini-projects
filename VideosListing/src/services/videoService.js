import api from "./axios.js"

const getVideo=async ()=>{
    try{
     const res=await api.get("/youtube/videos")
     return res;
}catch(err){
    console.log(err);
    
}
}

export default getVideo;

