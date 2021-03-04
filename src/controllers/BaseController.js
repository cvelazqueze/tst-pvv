const BaseController = module.exports;

const BaseService = require('../services/BaseService')


BaseController.getASum = async (req, res, next) =>{
    
    try {
        const {body} = req;
        const response = await BaseService.getASum(body);

        return res.send(response);
    } catch (e) {
        return next(e, 'error');
    }
}

BaseController.getAProduct = async (req, res, next) =>{
    
    try {
        const {body} = req;
        const response = await BaseService.getAProduct(body);

        return res.send(response);
    } catch (e) {
        return next(e, 'error');
    }
}