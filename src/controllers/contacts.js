const service = require('../services/contacts');

module.exports = {

    "read": async (req, res, next) => {
        try {
            const result = await service.read(req);
            return res.status(200).json(result);
        } catch (error) {
            throw(error);
        }
    },

    "update": async (req, res, next) => {
        try {
            const result = await service.update(req);
            return res.status(200).json(result); 
        } catch (error) {
            throw(error);
        }
    },

    "delete": async (req, res, next) => {
        try {
            const result = await service.delete(req);
            return res.status(200).json(result);
        } catch (error) {
            throw(error);
        }
    },

}