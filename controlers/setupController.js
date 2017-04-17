var Todos = require('../models/model');

module.exports = function(app){
    app.get('/api/setupTodos', function(req,res){

          var starterTodos = [

            {
              username: 'nick',
              todo: 'finish Node course',
              isDone: false,
              hasAttachment: false
             },

             {
               username: 'nick',
               todo: 'start VBA',
               isDone: false,
               hasAttachment: true
             },

             {
             username: 'nick',
             todo: 'mow grass',
             isDone: false,
             hasAttachment: false
             }
          ];
          Todos.create(starterTodos, function(err,results){
            res.send(results);
          });
    });

}
