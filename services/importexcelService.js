const R = require("../utils/responseHelper"); 
const {Track,Store,Market,salesYoutube,salesAssets,stream} =require("../models/csvdatamodel");
const { string } = require("joi");
const upload={}

upload.track =async (req,res,next)=>{
try{
  const {userId,data} =req.body;
  
  if(!userId){
    return R(res,false,"User ID not found","",400);
  }

  if(!data){
    return R(res,false,"Data not found","",400);
  }

  console.log(data);
 
  let result = data.map(async (val,ind,arr)=>{
    val = await Track.create(userId,arr[ind]);
     if(!val){
      return R(res,false,"Excel file not found","",400);
     }
     return val;
  })

  console.log(result);

  // Process your data here and save it to the database or any other storage medium.
  return R(res,true,"Track upload successful","",200); 
}
catch(e){
  next();
}
}

upload.getTrack = async (req,res,next)=>{
try{
  const userId =req.doc.userId;
  console.log(userId);

  const track = await Track.get(userId);

  if(track===false){
    return R(res,false,"Track not found","",400);
  }
console.log(">>>>>>>>>>>>>>>>>>>>>",track);
  return R(res,true,"Track fetched successfully",track,200);
}catch(err){
  console.log(err)
  next();
}
}

upload.store = async (req,res,next)=>{
  try{
    const {userId,data} =req.body;
  
    if(!data){
      return R(res,false,"Data not found","",400);
    }
  
    console.log(data);
   
    let result = data.map(async (val,ind,arr)=>{
      val = await Store.create(userId,arr[ind]);
       if(!val){
        return R(res,false,"Excel file not found","",400);
       }
       return val;
    })
  
    console.log(data);
  
    // Process your data here and save it to the database or any other storage medium.
    return R(res,true,"Store upload successful","",200); 
  }
  catch(e){
    next();
  }
}
  

upload.getStore = async (req,res,next)=>{
  try{
    const userId =req.doc.userId;
    console.log(userId);
    if(!userId){
      return R(res,false,"User ID not found","",400);
    }
    
    const data = await Store.get(userId);
   
    if(data === false){
      return R(res,false,"Store not found","",400);
    }
  console.log(">>>>>>>>>>>>>>>>>>>>>",data);
    return R(res,true,"Store fetched successfully",data,200);
  }catch(err){
    console.log(err)
    next();
  }
}


upload.marketData = async (req,res,next)=>{
  try{
    const {userId,data} =req.body;
    
    if(!userId){
      return R(res,false,"User ID not found","",400);
    }

    if(!data){
      return R(res,false,"Data not found","",400);
    }
  
    console.log(data);
   
   let result = data.map(async (val,ind,arr)=>{
      val = await Market.create(userId,arr[ind]);
       if(!val){
        return R(res,false,"data not insert","",400);
       }
       return val;
    })
  
    console.log(result);
  
    // Process your data here and save it to the database or any other storage medium.
    return R(res,true,"Market Data upload successful","",200); 
  }
  catch(e){
    console
    next();
  }
}
  

upload.getMarketData = async (req,res,next)=>{
  try{
    const userId =req.doc.userId;
    console.log(userId);
  
    const data = await Market.getData(userId);
  console.log(data);
    if(data === false){
      return R(res,false,"Market Data not found","",400);
    }
  console.log(">>>>>>>>>>>>>>>>>>>>>",data);
    return R(res,true,"Market fetched successfully",data,200);
  }catch(err){
    console.log(">>>>>>>>>>>>>>>>>>>>>",err);
    next();
  }
}

upload.salesYoutube =async (req,res,next)=>{
  try{
    const {userId,data} =req.body;
    
    if(!userId){
      return R(res,false,"User ID not found","",400);
    }

    if(!data){
      return R(res,false,"Data not found","",400);
    }
  
    console.log(data);
   
    let result = await Promise.all(
      data.map(async (val, ind, arr) => {
        const valInserted = await salesYoutube.create(userId, arr[ind]);
        return valInserted;
      })
    );
  
    console.log(">>>>>>>>>>>>>>>>>>>>",result);
  
    // Process your data here and save it to the database or any other storage medium.
    return R(res,true," Data upload successful","",200); 
  }
  catch(e){
    console.log(e)
    next();
  }
}

upload.getSalesYoutube = async (req,res,next)=>{
  try{
    const userId =req.doc.userId;
    console.log(userId);
  
    const data = await salesYoutube.getData(userId);
    console.log(data);
    if(data === false){
      return R(res,false,"Data not found","",400);
    }
  console.log(">>>>>>>>>>>>>>>>>>>>>",data);
    return R(res,true,"Data fetched successfully",data,200);
  }catch(err){
    console.log(err)
    next();
  }
}


upload.salesAsset = async (req,res,next)=>{
try{
    const {userId,data} =req.body;
    
    if(!userId){
      return R(res,false,"User ID not found","",400);
    }
    if(!data){
      return R(res,false,"Data not found","",400);
    }
    console.log(data);
    let result = await Promise.all(data.map(async (val,ind,arr)=>{
      val = await salesAssets.create(userId,arr[ind]);
       return val;
    }))
  
    console.log(result);
  
    // Process your data here and save it to the database or any other storage medium.
    return R(res,true,"Data upload successful","",200); 
}catch(err){
  console.log(err)
  next();
}
}

upload.getSalesAssets = async (req,res,next) =>{
  try{
    const userId =req.doc.userId;
    console.log(userId);
  
    const data = await salesAssets.getData(userId);
    console.log(data);
    if(data === false){
      return R(res,false,"Data not found","",400);
    }
  console.log(">>>>>>>>>>>>>>>>>>>>>",data);
    return R(res,true,"Data fetched successfully",data,200);
  }catch(err){
    console.log(err)
    next();
  }
}

upload.salesStream = async (req,res,next) =>{
  try{
    const {userId,data} =req.body;
    
    if(!userId){
      return R(res,false,"User ID not found","",400);
    }
    if(!data){
      return R(res,false,"Data not found","",400);
    }
    console.log(data);
    let result = await Promise.all (data.map(async (val,ind,arr)=>{
      val = await stream.create(String(userId),arr[ind]);
       return val;
    }))
  
    console.log(result);
  
    // Process your data here and save it to the database or any other storage medium.
    return R(res,true,"Data upload successful","",200);
  }catch(err){
    console.log(err)
    next();
  }
}

upload.getStream = async (req,res,next) =>{
  try{
    const userId =req.doc.userId;
    console.log(userId);
  if(!userId){
    return R(res,false,"User ID not found","",400);
  }
    const data = await stream.getData(userId);
    console.log(data);
    if(data === false){
      return R(res,false,"Data not found","",400);
    }
    console.log(">>>>>>>>>>>>>>>>>>>>>",data);
    return R(res,true,"Data fetched successfully",data,200);
  }catch(err){
    console.log(err)
    next();
  }
}














module.exports=upload;