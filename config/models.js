/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  connection: 'mongoLabMongoDb',

// MONGODB_URI=mongodb://heroku_5d73000r:5b9cpkoovrq71k00mid799g33o@ds159328.mlab.com:59328/heroku_5d73000r sails lift

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  migrate: 'safe'
  // migrate: 'alter'
  // migrate: 'drop'
  // 
  //  1. safe  - never auto-migrate my database(s). I will do it myself (by hand) 
  //  2. alter - auto-migrate, but attempt to keep my existing data (experimental)
  //  3. drop  - wipe/drop ALL my data and rebuild models every time I lift Sails

};
