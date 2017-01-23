/**
 * League.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        // The League Name
        leagueName: {
            type: 'string',
            required: true
        }, 

        // The Number of Teams in the League
        numberOfTeams: {
            type: 'int',
            required: true
        },

        // The Number of Rounds in the Draft
        numberOfRounds: {
            type: 'int',
            required: true
        },

        leagueMember: {
            type: 'string'
        },

        isAdmin: {
            type: 'boolean'
        }

    }
};