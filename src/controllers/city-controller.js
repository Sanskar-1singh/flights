const {StatusCodes}=require('http-status-codes');

const {CityService}=require('../services');
const {SuccessResponse,ErrorResponse}=require('../utils/common');

//post request->{name:"london"}
async function createCity(req,res){
    try {
        const city=await CityService.createCity({
            name:req.body.name
        });
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode || StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}
module.exports={
    createCity
}