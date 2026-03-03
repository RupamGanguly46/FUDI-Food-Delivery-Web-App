const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://RupamGanguly46:123@cluster0.3l3fc1a.mongodb.net/fudibase?retryWrites=true&w=majority"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected!");
    } catch (error) {
        console.log("Error connecting to database:", error);
        return;
    }
    try{
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find().toArray();
        console.log("Data existing :", data.length);
    }
    catch (error) {
        console.log("Error fetching food items", error);
    }

}

module.exports = mongoDB;