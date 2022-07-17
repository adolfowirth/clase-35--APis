const db = require('../../database/models');
const sequelize = db.sequelize;

const genresController = {


'list': (req, res) => {

    db.Genre.findAll()
            .then(genres => {
               return res.json({
              
                       meta : {
                           status: 200,
                           total: genres.length,
                           url :"api/genres"
                       },
                        data: genres
                           
               })

})
},


'detail': (req, res) => {
    db.Genre.findByPk(req.params.id)
    .then(genres => {
        return res.json({
       
                meta : {
                    status: 200,
                    total: genres.length,
                    url :"api/genres"
                },
                 data: {
                    id: genres.id,
                    name: genres.name,
                    ranking: genres.ranking,
                    active: genres.active,
                    created_at: genres.created_at,
                    updated_At: genres.updated_at

                 }
                    
        })

})

}
}

module.exports = genresController;