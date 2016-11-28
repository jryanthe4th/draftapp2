/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        // The User's email address
        email: {
            type : 'string',
            email: true,
            required: true,
            unique: true
        },

        // The User's first name
        firstName: {
            type: 'string',
            required: true
        },

        // The User's last name
        lastName: {
            type: 'string',
            required: true
        },

        // The User's encrypted password
        encryptedPassword: {
            type: 'string',
            required: true
        },

        // The timestamp when user last logged in
        // (i.e. sent a username and password to the server)
        lastLoggedIn: {
            type: 'date',
            required: true,
            defaultsTo: new Date(0)
        },

        // The User's gravatar image
        gravatarUrl: {
            type: 'string'
        }

        // The User's draft selections
        // draftSelections: {
        //     collection: 'DraftSelection',
        //     via: 'owner'
        // }
    }
};

