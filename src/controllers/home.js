const service = require('../services/home');


module.esports = {

    "info": async (req, res, next) => {

        try {

            const result = await service.info(req); 
            return res.json(result);
        
        } catch (error) {
            next(error)    
        }

    } 

}