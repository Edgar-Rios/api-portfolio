const { Thought } =require('../database/models');

module.exports = {

    "create": async (thought) => {
        const result = await Thought.create(thought);
        return result;
    }
    ,

    "read": async (id) => {
        const result = await Thought.findOne({
            where: { id },
        })
        return result;
    },

    "update": async (id, changes) => {
        const result = await Thought.update(changes, {
            where: { id }
        })

        return result;
    },

    "delete": async (id) => await Thought.destroy({
        where: {id}
    })
    ,

}