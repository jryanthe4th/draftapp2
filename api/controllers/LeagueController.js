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
            leagueCreator   : req.session.me

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
    )}
};

