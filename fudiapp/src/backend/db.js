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
        console.log("Food Items :", data.length);
        
        // Fetched data is shared as global variable
        global.food_items = data;
    }
    catch (error) {
        console.log("Error fetching food items", error);
        return;
    }

    try{
        const fetched_data2 = mongoose.connection.db.collection("food_categories")
        data2 = await fetched_data2.find().toArray();
        console.log("Food Categories :", data2.length);
        
        global.food_categories = data2;
    } catch (error) {
        console.log("Error fetching food categories", error);
    }

}

module.exports = mongoDB;