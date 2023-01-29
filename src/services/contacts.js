const repository = require('../repositories/contacts');

module.exports = {

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

}