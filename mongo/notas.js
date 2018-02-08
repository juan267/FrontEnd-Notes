//// Esto es un Documento

{
  "_id" : ObjectId("569190ca24de1e0ce2dfcd4f"),
  "title" : "Once Upon a Time in the West",
  "year" : 1968,
  "rated" : "PG-13",
  "released" : ISODate("1968-12-21T05:00:00Z"),
  "runtime" : 175,
  "countries" : [
    "Italy",
    "USA",
    "Spain"
  ],
  "genres" : [
    "Western"
  ],
  "director" : "Sergio Leone",
  "writers" : [
    "Sergio Donati",
    "Sergio Leone",
    "Dario Argento",
    "Bernardo Bertolucci",
    "Sergio Leone"
  ],
  "actors" : [
    "Claudia Cardinale",
    "Henry Fonda",
    "Jason Robards",
    "Charles Bronson"
  ],
  "plot" : "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
  "poster" : "http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg",
  "imdb" : {
    "id" : "tt0064116",
    "rating" : 8.6,
    "votes" : 201283
  },
  "tomato" : {
    "meter" : 98,
    "image" : "certified",
    "rating" : 9,
    "reviews" : 54,
    "fresh" : 53,
    "consensus" : "A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.",
    "userMeter" : 95,
    "userRating" : 4.3,
    "userReviews" : 64006
  },
  "metacritic" : 80,
  "awards" : {
    "wins" : 4,
    "nominations" : 5,
    "text" : "4 wins & 5 nominations."
  },
  "type" : "movie"
}

////// INSERTING

insertOne({"title" : "Once Upon a Time in the West", "year" : 1968,})
insertMany([
  {"title" : "Once Upon a Time in the West", "year" : 1968,},
  {"title" : "A new Hope", "year" : 1965,}
])
// - insertOne(): It inserts one document and creates a collection if it doesn’t exist
// - insertMany([{},{}]): You pass it an array of objects, and it creates all of them as documents in the collection, it returns an insertedIds array containing all insert _ids. You can pass it as a second argument the ordered: false  parameter that says the if there are error don’t stop just keep going.
// - You can pass “_id” to set an specific id of the document.

//////FINDING
/// Id matching
db.movieDetails.find(ObjectId('569190ca24de1e0ce2dfcd4f'))
db.movieDetails.find({_id: ObjectId('569190ca24de1e0ce2dfcd4f')})

/// Property Matching
db.movieDetails.find({title: "Once Upon a Time in the West"})
db.movieDetails.find({rated: "PG-13"})
// With and
db.movieDetails.find({rated: "PG-13", year: 1968})
db.movieDetails.find({ $and: [{'tomato.meter': {$exists: true}},{'tomato.meter': {$ne: null}}]})
// With Or
db.movieDetails.find({ $or: [{'tomato.meter':{$gt: 95}}, {'meteoritic.meter':{$gt: 88}}]})

// list of Comparison Operators:
// - $gt
// - $gte
// - $lt
// - $lte
// - $ne
// - $in: the value is always an array
// - $nin: the value is always an array


/// Array Mathching
db.movieDetails.find({actors: [
    "Claudia Cardinale",
    "Henry Fonda",
    "Jason Robards",
    "Charles Bronson"
]})


db.movieDetails.find({actors: {$all: ['Henry Fonda', 'Charles Bronson']}})
db.movieDetails.find({'actors.0': 'Claudia Cardinale'})
db.movieDetails.find({'actors': 'Claudia Cardinale'})

/// Nested Properties Matching
db.movieDetails.find({'tomato.consensus': 'A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.'})


////// UPDATING

//Update Methods
updateOne( {selection_critiria}, {update_operation} )
db.movieDetails.updateOne({ title: 'the martian' }, { $set: { poster: 'some poster' } })
// - updateMany
// - upserts
// - replaceOne

// Update Operators:
// $inc    Increments the value of the field by the specified amount.
// $mul    Multiplies the value of the field by the specified amount.
// $rename    Renames a field.
// $setOnInsert    Sets the value of a field if an update results in an insert of a docum Has  neffect on update operations that modify existing documents.
// $set    Sets the value of a field in a document.
// $unset    Removes the specified field from a document.
// $min    Only updates the field if the specified value is less than the existing fivalue.
// $max    Only updates the field if the specified value is greater than the existing fivalue.
// $currentDate    Sets the value of a field to current date, either as a Date or a Timestamp.

//update Array operators

// Array Operators
// $: Acts as a placeholder to update the first element that matches the query condition in an update.
// $addToSet: Adds elements to an array only if they do not already exist in the set.
// $pop: Removes the first or last item of an array.
// $pullAll:removes all matching values from an array.
// $pull: Removes all array elements that match a specified query.
// $pushAllDeprecated. Adds several items to an array.
// $push: Adds an item to an array.
  // Modifiers
    // $each: Modifies the $push and $addToSet operators to append multiple items for array updates.
    // $slice :Modifies the $push operator to limit the size of updated arrays.
    // $sort :Modifies the $push operator to reorder documents stored in an array.
    // $position :Modifies the $push operator to specify the position in the array to add elements.



