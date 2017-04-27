/**
 * DraftSelection.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        playerName: {
            type: 'string',
            required: true
        },

        position: {
            type: 'string',
            required: true
        },

        // Every draft selection belongs to one user
        owner: {
            model: 'User'
        }

    }
};

