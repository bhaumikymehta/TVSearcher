var config= require('../config.json');
var superagent= require('superagent');

module.exports = function(app){

  app.get('/search/shows',function(req,res){
    superagent
    .get(config.tvmaze.url+ '/search/shows')
    .query({q: req.query.showname})
    .query({format:'json'})
    .query({limit: 10})
    .end(function(err, result){
				res.json(result.body);
    	})
  });

  app.get('/shows',function(req,res){
    superagent
    .get(config.tvmaze.url+ '/shows/'+req.query.id)
    .query({embed: "cast"})
    .query({format:'json'})
    .end(function(err, result){

        res.json(result.body);

      })
  });



};
