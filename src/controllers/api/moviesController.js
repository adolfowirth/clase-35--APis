const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesController = {


'list': (req, res) => {

    db.Movie.findAll()
            .then(movies => {
               return res.json({
              
                       meta : {
                           status: 200,
                           total: movies.length,
                           url :"api/movies"
                       },
                        data: movies
                           
               })

})
},


'detail': (req, res) => {
    db.Movie.findByPk(req.params.id)
    .then(movies => {
        return res.json({
       
                meta : {
                    status: 200,
                    
                    total: movies.length + " minutos",
                    url :"api/movies"
                },
                 data: {
                    id: movies.id,
                    name: movies.title,
                    awards: movies.awards,
                    rating: movies.rating,
                    created_at: movies.created_at,
                    updated_At: movies.updated_at

                 }
                    
        })

})

},

    'addMovie' : (req,res) =>{
       
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
        .then(confirm => {
            let respuesta;
           if(confirm){
            respuesta = {
                   meta : {
                       status: 200,
                       total: confirm.length,
                       url: 'api/movies/create'
                   },
                   data: confirm
           }

} else {
    respuesta = {
        meta : {
            status: 204,
            total: confirm.length,
            url: 'api/movies/create'
        },
        data: confirm
}
}
        res.json(respuesta);
})
.catch(err => {
    return res.send(err);
}); 

    },

    'update' : (req,res) =>{
       let movieId = req.params.id;
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        },{
            where: {id: movieId}
        })
        .then(confirm => {
            let respuesta;
           if(confirm){
            respuesta = {
                   meta : {
                       status: 200,
                       total: confirm.length,
                       url: 'api/movies/update/:id'
                   },
                   data: confirm
           }

} else {
    respuesta = {
        meta : {
            status: 204,
            total: confirm.length,
            url: 'api/movies/update/:id'
        },
        data: confirm
}
}
        res.json(respuesta);
})
.catch(err => {
    return res.send(err);
}); 
},

    'destroy': (req,res) => {
        let movieId = req.params.id;
        db.Movie.destroy({where: {id: movieId}, force: true})
        .then(confirm => {
            let respuesta;
           if(confirm){
            respuesta = {
                   meta : {
                       status: 200,
                       total: confirm.length,
                       url: 'api/movies/destroy/:id'
                   },
                   data: confirm
           }

} else {
    respuesta = {
        meta : {
            status: 204,
            total: confirm.length,
            url: 'api/movies/destroy/:id'
        },
        data: confirm
}
}
        res.json(respuesta);
})
.catch(err => {
    return res.send(err);
}); 
    }
}

module.exports = moviesController;