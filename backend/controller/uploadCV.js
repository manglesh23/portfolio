const uploadCV=async(req,res)=>{
    try{
       res.status(200).json({success:true,msg:"file uploaded"});
    }catch(error){
        res.status(404).json({success:false,msg:error.message});
    }
}

module.exports={uploadCV};