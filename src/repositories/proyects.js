const { Proyect } =require('../database/models');

module.exports = {

    "create": async (proyect) => {
        const result = await Proyect.create(proyect);
        return result;
    }
    ,

    "read": async (id) => {
        const result = await Proyect.findOne({
            where: { id },
        })
        return result;
    },

    "update": async (id, changes) => {
        const result = await Proyect.update(changes, {
            where: {id}
        })

        return result;
    },

    "delete": async (id) => await Proyect.destroy({
        where: {id}
    })
    ,

}