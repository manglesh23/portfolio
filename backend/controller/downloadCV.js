const path=require('path');
const download=async(req,res)=>{
    try{
    let filename= req.params.filename;
    const filePath= path.join(__dirname,"../CVFolder",filename);
    console.log(filePath);
    console.log(filename);

    res.download(filePath, (err) => {
        if (err) {
            console.error('File download error:', err);
            res.status(500).send('Error downloading the file.');
        }
    });
    

    }catch(error){
        res.status(404).json({success:false,msg:"Download Failed"});
    }
}

module.exports={download};