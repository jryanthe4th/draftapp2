/**
 * DraftSelectionController
 *
 * @description :: Server-side logic for managing Draftselections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    draftboard: function(req, res) {
        // Require config variables for email and sms
        var appConfig = require('../../config.js');
        // Email and SMS content
        var draftData = [
            'A draft selection has been submitted',
            'Player: '+req.param('playerName'),
            'Position: '+req.param('position'),
            'Drafted By: '+req.session.firstName
        ];
        // Mailgun email sent on draftpick selection
        var mailgun = require('mailgun-js')({
            apiKey: appConfig.mailgun.apiKey,
            domain: appConfig.mailgun.domain
        });
        // Mailgun user mailing list group managed on mailgun site
        var members = [
            'hardmoney@mg.dynastydraftboard.com'
        ];
        // Email config
        var emailData = {
            from: 'DynastyDraftBoard <mailgun@dynastydraftboard.com>',
            to: members,
            subject: 'Hard Money 2018 Rookie Draft Selection',
            html: draftData
        };
        // Twilio SMS sent on draftpick selection
        var accountSid = 'AC9b0bb20c76a79bf9ca663990b6adccb9';
        var authToken = 'e0b946ca78a2901e2dfa392f8b079bc3';
        var twilio = require('twilio')(accountSid, authToken);
        var numbers = [
            15596180337,
            15593922960,
            15592898848,
            15593497192,
            15592882642,
            15593922961,
            15592882982,
            15592885147,
            15592697401,
            15599085243,
            15597088081,
            15593347101,
        ]
        // SMS config
        // var smsData = {
        //     from: '+17755021662',
        //     to: number,
        //     body: draftData
        // };

        // Create record in draftselection db table
        DraftSelection.create({

            playerName: req.param('playerName'),
            position:   req.param('position'),
            owner:      req.session.me,

        }, function draftSelectionCreated(err, newDraftSelection) {

            if(err) {
                console.log("err: ", err);
            }

            // send mailgun email
            mailgun.messages().send(emailData, function(error, html) {
                console.log(html);
            });

            // send twilio sms
            Promise.all(
                numbers.map(number => {
                    return twilio.messages.create({
                        from: '+17755021662',
                        to: number,
                        body: draftData
                    });
                })
            )
            .then(messages => {
                console.log('SMS messages sent!');
            })
            .catch(err => console.error(err));

            return res.json({
                id: newDraftSelection.id
            });
        });
    }

};
