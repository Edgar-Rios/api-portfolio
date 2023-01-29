const { Contact } =require('../database/models');

module.exports = {

    "read": async (id) => {
        const result = await Contact.findOne({
            where: { id }
        })
        return result;
    },

    "update": async (id, changes) => {
        const result = await Contact.update(changes, {
            where: {id}
        })

        return result;
    },

}