const repository = require('../repositories/proyects');

module.exports = {

    "create": async (req) => {
        try {
            const proyect = { ...req.body };
            return await repository.create(proyect);
        } catch (error) {
            throw(error);
        }
    },

    "read": async (req) => {
        try {
            const { id } = req.params;
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