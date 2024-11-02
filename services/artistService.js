const R = require("../utils/responseHelper"); 
const artistModel =require('./../models/artistmodels')

const artist = {};

artist.addArtist = async (req, res, next) => {
    const  body  = req.body 
    try { 
        const result = await artistModel.addArtist(body) 
        return R(res, true, "Add Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};
artist.artistList = async (req, res, next) => {
    const  {userId}  = req.body 
    try { 
        const result = await artistModel.artistList(userId) 
        return R(res, true, "Fetch Successfully!!", result, 200)
    } catch (err) { 
        next(err)
    }
};


module.exports = artist;



