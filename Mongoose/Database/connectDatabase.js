import mongoose from "mongoose";
const connectDatabase = async (URL) => {
    try {
        await mongoose.connect(URL);
        console.log(`${URL} connected successfully`)
    }
    catch (error) {
        console.log('connecting error');
    }
}
export default connectDatabase;