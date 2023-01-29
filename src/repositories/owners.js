const { Owner, Contact } =require('../database/models');

module.exports = {

    "create": async (owner) => {
        const result = await Owner.create(owner);
        return result;
    }
    ,

    "read": async (id) => {
        const result = await Owner.findOne({
            where: {id},
            include: Contact,
        })
        return result;
    },

    "update": async (id, changes) => {
        const result = await Owner.update(changes, {
            where: {id}
        })

        return result;
    },

    "delete": async (id) => await Owner.destroy({
        where: {id}
    })
    ,

}