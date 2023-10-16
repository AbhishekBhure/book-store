import dotenv from "dotenv";
export const PORT = 5555;

//configuring env variables
dotenv.config();

export const mongoUrl = process.env.MONGO_ATLAS_URI;
("/paste mongodb atlas connection string -- add password and collection name/");
