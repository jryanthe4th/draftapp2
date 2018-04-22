/**
 * DraftSelectionController
 *
 * @description :: Server-side logic for managing Draftselections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    draftboard: function(req, res) {

        var api_key = 'key-b94c298eeb424bebbf14230762f41898';
        var domain = 'mg.dynastydraftboard.com';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        var members = [
            'joseph.ryan.iv@gmail.com'
        ];
        var draftData = [
            'A draft selection has been submitted',
            'Player: '+req.param('playerName'),
            'Position: '+req.param('position'),
            'Drafted By: '+req.session.firstName
        ];
        var data = {
            from: 'DynastyDraftBoard <mailgun@dynastydraftboard.com>',
            to: members,
            subject: 'Hard Money 2018 Rookie Draft Selection',
            html: draftData
        };

        DraftSelection.create({

            playerName: req.param('playerName'),
            position:   req.param('position'),
            owner:      req.session.me,

        }, function draftSelectionCreated(err, newDraftSelection) {

            if(err) {
                console.log("err: ", err);
            }

            mailgun.messages().send(data, function(error, body) {
                console.log(body);
            });

            return res.json({
                id: newDraftSelection.id
            });
        });
    }

};
