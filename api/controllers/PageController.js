/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    // If user is logged in, homepage is the user dashboard. If not logged in, show public homepage.
    showHomePage: function(req, res) {

        // If not logged in, show the public view
        if(!req.session.me) {
            return res.view('homepage');
        }

        // Otherwise, look up the logged in user and show the user dashboard view
        User.findOne(req.session.me, function(err, user){
            if(err) {
                return res.negotiate(err);
            }

            if(!user) {
                sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                return res.view('homepage');
            }

            return res.view('dashboard', {
                me: {
                    id          : user.id,
                    firstName   : user.firstName,
                    lastName    : user.lastName,
                    email       : user.email,
                    isAdmin     : !!user.admin,
                    gravatarUrl : user.gravatarUrl
                }
            });
        });
    },

    // showDashboardPage: function(req, res) {

    //     // If not logged in, show the public view
    //     if(!req.session.me) {
    //         return res.view('dashboard');
    //     }

    //     // Otherwise, look up the logged in user and show the user dashboard view
    //     User.findOne(req.session.me, function(err, user){
    //         if(err) {
    //             return res.negotiate(err);
    //         }

    //         if(!user) {
    //             sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
    //             return res.view('dashboard');
    //         }

    //         return res.view('dashboard', {
    //             me: {
    //                 id          : user.id,
    //                 firstName   : user.firstName,
    //                 lastName    : user.lastName,
    //                 email       : user.email,
    //                 isAdmin     : !!user.admin,
    //                 gravatarUrl : user.gravatarUrl
    //             }
    //         });
    //     });
    // }
};

