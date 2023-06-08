const mongoose = require('mongoose')
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name: String,
    cuisine: String,
    location: String,
    image: String,
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant;