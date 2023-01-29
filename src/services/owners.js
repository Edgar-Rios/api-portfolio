const repository = require('../repositories/owners');

module.exports = {

    "create": async (req) => {
        try {
            const owner = { ...req.body };
            return await repository.create(owner);
        } catch (error) {
            throw(error);
        }
    },

    "read": async (req) => {
        try {
            const {id} = req.params;
            const result = await repository.read(id);
            return result;
        } catch (error) {
            throw(error);
        }
    },

    "update": async (req) => {
        try {
            const { id } = req.params;
            const changes = {...req.body};

            const result = await repository.update(id, changes);
            return result;
        } catch (error) {
            throw(error);
        }
    },

    "delete": async (req) => {
        try {
            const { id } = req.params;
            const result = await repository.delete(id);
            return result;
        } catch (error) {
            throw(error);
        }
    },

}