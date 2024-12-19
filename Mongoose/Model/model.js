import mongoose from "mongoose";

const databaseSchema = mongoose.Schema({
    isActive: { type: Boolean },
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true },
    genre: { type: Array, required: true },
    description: { type: String, required: true },
    Comment: [{ value: { type: String } }],
})

let model = new mongoose.model('Movie', databaseSchema);

const insertAllData = async () => {
    try {

        let m1 = new model({
            isActive: true,
            name: "Inception",
            ratings: 8.8,
            genre: ["Action", "Sci-Fi"],
            description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
            Comment: [{ value: "Amazing movie with a mind-bending plot." }],
        })
        let m2 = new model({
            isActive: true,
            name: "The Shawshank Redemption",
            ratings: 9.3,
            genre: ["Drama"],
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
            Comment: [{ value: "A masterpiece of storytelling." }],
        })
        let m3 = new model({
            isActive: true,
            name: "The Godfather",
            ratings: 9.2,
            genre: ["Crime", "Drama"],
            description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
            Comment: [{ value: "A classic mafia movie." }],
        })
        let m4 = new model({
            isActive: true,
            name: "The Dark Knight",
            ratings: 9.0,
            genre: ["Action", "Crime", "Drama"],
            description: "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            Comment: [{ value: "Heath Ledger's performance is legendary." }],
        })
        let m5 = new model({
            isActive: true,
            name: "Pulp Fiction",
            ratings: 8.9,
            genre: ["Crime", "Drama"],
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
            Comment: [{ value: "Quentin Tarantino at his best." }],
        })
        let m6 = new model({
            isActive: true,
            name: "Schindler's List",
            ratings: 8.9,
            genre: ["Biography", "Drama", "History"],
            description: "In German-occupied Poland, Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            Comment: [{ value: "A powerful and moving story." }],
        })
        let m7 = new model({
            isActive: true,
            name: "Fight Club",
            ratings: 8.8,
            genre: ["Drama"],
            description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
            Comment: [{ value: "An intriguing exploration of identity and consumerism." }],
        })
        let m8 = new model({
            isActive: true,
            name: "Forrest Gump",
            ratings: 8.8,
            genre: ["Drama", "Romance"],
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            Comment: [{ value: "A heartwarming and inspiring tale." }],
        })
        let m9 = new model({
            isActive: true,
            name: "The Matrix",
            ratings: 8.7,
            genre: ["Action", "Sci-Fi"],
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            Comment: [{ value: "A groundbreaking sci-fi film." }],
        })
        let m10 = new model({
            isActive: true,
            name: "The Lord of the Rings: The Fellowship of the Ring",
            ratings: 8.8,
            genre: ["Action", "Adventure", "Drama"],
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.",
            Comment: [{ value: "An epic start to a legendary trilogy." }],
        })
        let result = await model.insertMany([m1, m2, m3, m4, m5, m6, m7, m8, m9, m10]);
        console.log('inserted successfully');
        console.log(result);
    } catch (error) {
        console.log("data can't be inserted")
    }
}
const insertOneData = async () => {
    try {
        let m11 = new model({
            isActive: true,
            name: "movie11",
            ratings: 8.8,
            genre: ["Action", "Sci-Fi"],
            description: "movie 11.",
            Comment: [{ value: "comment1" }, { value: "comment2" },],
        })

        let result = await m11.save([m]);
        console.log(result);
    } catch (error) {
        console.log("data can't be inserted")
    }
}
const findData = async () => {
    try {
        let result = await model.find();
        console.log(result);
    } catch (error) {
        console.log("find data function not working");
    }
}
const sortData = async () => {
    try {
        let result = await model.find({}, { name: 1 }).sort({ name: 1 });
        console.log(result);
    } catch (error) {
        console.log("sort function not working");
    }
}
const findDataWithLogic = async () => {
    try {
        let result = await model.find({ $and: [{ isActive: true }, { ratings: { $gt: 8.8 } }] });
        console.log(result);
    } catch (error) {
        console.log("find data with logic function not working");
    }
}
const updateOneData = async () => {
    try {
        let result = await model.updateOne({ name: "movie11" }, { name: 'updated' });
        console.log(result);
    } catch (error) {
        console.log("update one data function not working");
    }
}
const updateManyData = async () => {
    try {
        let result = await model.updateMany({ ratings: 8.8 }, { name: 'updated many' });
        console.log(result);
    } catch (error) {
        console.log("update many data function not working");
    }
}
const deleteOneData = async () => {
    try {
        let result = await model.deleteOne({
            name:
                "The Shawshank Redemption"
        });
        console.log(result);
    } catch (error) {
        console.log("delete one function not working");
    }
}
const deleteManyData = async () => {
    try {
        let result = await model.deleteMany({ ratings: {$gt:5}});
        console.log(result);
    } catch (error) {
        console.log("delete many function not working");
    }
}
export { insertAllData, insertOneData, deleteManyData, deleteOneData, updateOneData, updateManyData, findData, findDataWithLogic, sortData };