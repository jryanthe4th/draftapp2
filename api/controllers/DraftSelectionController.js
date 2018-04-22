/**
 * DraftSelectionController
 *
 * @description :: Server-side logic for managing Draftselections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    draftboard: function(req, res) {
        var appConfig = require('../../config.js');
        var mailgun = require('mailgun-js')({
            apiKey: appConfig.mailgun.apiKey,
            domain: appConfig.mailgun.domain
            // apiKey: process.env.apiKey,
            // domain: process.env.domain
        });
        var members = [
            'hardmoney@mg.dynastydraftboard.com'
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
