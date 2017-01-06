/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    signup: function(req, res) {

        var Passwords = require('machinepack-passwords');

        // Encrypt a string using the BCrypt algorithm
        Passwords.encryptPassword({
            password: req.param('password'),
            difficulty: 10,
        }).exec({
            // An unexpected error occurred
            error: function(err) {
                return res.negotiate(err);
            },
            // OK
            success: function(encryptedPassword) {
                require('machinepack-gravatar').getImageUrl({
                    emailAddress: req.param('email')
                }).exec({
                    error: function(err) {
                        return res.negotiate(err); 
                    },
                    success: function(gravatarUrl) {
                        // Create a User with the params sent from
                        // the userForm --> signup.ejs
                        User.create({

                            email               : req.param('email'),
                            firstName           : req.param('firstName'),
                            lastName            : req.param('lastName'),
                            encryptedPassword   : encryptedPassword,
                            lastLoggedIn        : new Date(),
                            gravatarUrl         : gravatarUrl

                        }, function userCreated(err, newUser) {
                            if(err) {

                                console.log("err: ", err);
                                console.log("err.invalidAttributes: ", err.invalidAttributes)

                                // If this is a uniqueness error about the email attribute,
                                // send back an easily parseable status code
                                if(err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                                   && err.invalidAttributes.email[0].rule === 'unique') {
                                    return res.emailAddressInUse();
                                }

                                // Otherwise, send back something reasonable as our error response
                                return res.negotiate(err);
                            }

                            // Login User
                            req.session.me = newUser.id;

                            // Send back the id of the new User
                            return res.json({
                                id: newUser.id
                            });
                        });
                    }
                });
            }
        });
    },


    // Login as a user if the entered email and password match a user in the db
    login: function(req, res) {

        // Try to lookup user using the provided email
        User.findOne({
            email: req.param('email')
        }, function foundUser(err, user) {
            if (err) return res.negotiate(err);
            if (!user) return res.notFound();

            // Compare password attempt from the form params to the encypted password from the database ('user.password')
            require('machinepack-passwords').checkPassword({
                passwordAttempt: req.param('password'),
                encryptedPassword: user.encryptedPassword
            }).exec({

                error: function(err){
                    return res.negotiate(err);
                },

                // If the password from the form params doesn't checkout with the encrypted password from the database....
                incorrect: function() {
                    return res.notFound();
                },

                success: function() {

                    // Store user id in the user session
                    req.session.me = user.id;

                    // All done, let the client know that everything worked
                    return res.ok();
                    return res.json({
                        isLoggedIn: true
                    });
                }
            });
        });
    },


    // Log out of user account
    logout: function(req, res) {

        // Lookup user record in db from the id in the user session (req.session.me)
        User.findOne(req.session.me, function foundUser(err, user) {
            if(err) return res.negotiate(err);

            // If session refers to user who no longer exists, still allow log out
            if(!user) {
                sails.log.verbose('Session refers to a user who no longer exists');
                return res.backToHomePage();
            }

            // Log out
            req.session.me = null;

            // Redirect to homepage or send a 200
            return res.backToHomePage();
        });    
    }
};