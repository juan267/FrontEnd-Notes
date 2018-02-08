db.movieDetails.find({id:'569190ca24de1e0ce2dfcd4f'})

db.movieDetails.find({year: 2013, rated: 'PG-13', "awards.wins": 0}).pretty()

db.movieDetails.find({ "genres": ["Comedy", "Crime"] })

db.movieDetails.find({ "genres": { $all: ["Comedy", "Crime"] } })

db.movieDetails.updateMany({ year: {$gte: 2010, $lte: 2013},
                             "imdb.votes": {$lt: 10000},
                             $and: [{"tomato.consensus": {$exists: true} },
                                    {"tomato.consensus": null} ] },
                           { $unset: { "tomato.consensus": "" } });
