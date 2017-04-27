/**
 * DraftSelectionController
 *
 * @description :: Server-side logic for managing Draftselections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    draftboard: function(req, res) {

        DraftSelection.create({

            playerName: req.param('playerName'),
            position:   req.param('position'),
            owner:      req.session.me,

        }, function draftSelectionCreated(err, newDraftSelection) {

            if(err) {
                console.log("err: ", err);
            }

            return res.json({
                id: newDraftSelection.id
            });
        });
    }
	
};

