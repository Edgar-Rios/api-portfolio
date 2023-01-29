const { Category } =require('../database/models');

module.exports = {

    "create": async (category) => {
        const result = await Category.create(category);
        return result;
    }
    ,

    "read": async (id) => {
        const result = await Category.findOne({
            where: {id},
        })
        return result;
    },

    "update": async (id, changes) => {
        const result = await Category.update(changes, {
            where: { id }
        })

        return result;
    },

    "delete": async (id) => await Category.destroy({
        where: {id}
    })
    ,

}