/**
 * LeagueController
 *
 * @description :: Server-side logic for managing Leagues
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    createLeague: function(req, res) {

        League.create({

            // Create a League with the params sent from the createLeagueForm --> createleague.ejs
            leagueName      : req.param('leagueName'),
            numberOfTeams   : req.param('numberOfTeams'),
            numberOfRounds  : req.param('numberOfRounds'),
            leagueMember    : req.session.me,
            isAdmin         : true

        }, function leagueCreated(err, newLeague) {
            if(err) {

                console.log("err: ", err);
                console.log("err.invalidAttributes: ", err.invalidAttributes)

                return res.negotiate(err);
            }

            // Store League id in the user session
            req.session.league = newLeague.id;
            
            // Send back the id of the new League
            return res.json({
                id: newLeague.id
            });
        }
    )},

    // showMyLeagues: function(req, res) {

    //     res.send('showing my leagues!!');
    // }
};


        // // Otherwise, look up the logged in user and show the user dashboard view
        // User.findOne(req.session.me, function(err, user){
        //     if(err) {
        //         return res.negotiate(err);
        //     }

        //     if(!user) {
        //         sails.log.verbose('Session refers to a user who no longer exists -- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
        //         return res.view('homepage');
        //     }

        //     return res.view('dashboard', {
        //         me: {
        //             id          : user.id,
        //             firstName   : user.firstName,
        //             lastName    : user.lastName,
        //             email       : user.email,
        //             isAdmin     : !!user.admin,
        //             gravatarUrl : user.gravatarUrl
        //         }
        //     });
        // });

