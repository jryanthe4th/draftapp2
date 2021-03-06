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

    showDashboardPage: function(req, res) {

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

    //module.exports = {
 
//   bios: function(req, res) {
//     Author.find({})
//       .then(function (authors) {
//         console.log("authors = ",authors);
//         var bs = [];
//         authors.forEach(function (author) {
//           bs.push({
//             name: author.fullName,
//             bio: author.bio
//           });
//         });
//         res.json(bs);
//       })
//       .catch(function (err) {
//         console.log(err);
//         res.status(500)
//           .json({ error: err });
//       });
//   }
 
// };
    
    showCreateLeaguePage: function(req, res) {

        // If not logged in, show the public view
        if(!req.session.me) {
            return res.view('homepage');
        }

        // Otherwise, look up the logged in user and show the user create league view
        User.findOne(req.session.me, function(err, user) {
            if(err) {
                return res.negotiate(err);
            }

            if(!user) {
                sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                return res.view('homepage');
            }

            return res.view('createleague', {
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

        // League.findOne(req.session.myLeagues, function(err, league) {
        //    if(err) {
        //         return res.negotiate(err);
        //    } 

        //    return res.json('league')
        // });
    },


    showJoinLeaguePage: function(req, res) {

        // If not logged in, show the public view
        if(!req.session.me) {
            return res.view('homepage');
        }

        // Otherwise, look up the logged in user and show the user join league view
        User.findOne(req.session.me, function(err, user){
            if(err) {
                return res.negotiate(err);
            }

            if(!user) {
                sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                return res.view('homepage');
            }

            return res.view('joinleague', {
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


    // showMyLeaguesPage: function(req, res) {

    //     // If not logged in, show the public view
    //     if(!req.session.me) {
    //         return res.view('homepage');
    //     }

    //     // Otherwise, look up the logged in user and show the user leagues view
    //     User.findOne(req.session.me, function(err, user){
    //         if(err) {
    //             return res.negotiate(err);
    //         }

    //         if(!user) {
    //             sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
    //             return res.view('homepage');
    //         }

    //         return res.view('myleagues', {
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
    // },




    showDraftboardPage: function(req, res) {

        // If not logged in, show the public view
        if(!req.session.me) {
            return res.view('homepage');
        }

        // Otherwise, look up the logged in user and show the user draftboard view
        User.findOne(req.session.me, function(err, user){
            if(err) {
                return res.negotiate(err);
            }

            if(!user) {
                sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
                return res.view('homepage');
            }

            return res.view('draftboard', {
                me: {
                    id              : user.id,
                    firstName       : user.firstName,
                    lastName        : user.lastName,
                    email           : user.email,
                    isAdmin         : !!user.admin,
                    gravatarUrl     : user.gravatarUrl
                }
            });
        });
    }
};

