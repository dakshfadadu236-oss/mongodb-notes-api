const express = require("express");
const connectDB = require("./config/db");
const notesRoutes = require("./routes/notesRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/notes", notesRoutes);

app.listen(3123, () => {
    console.log("Server running on port 3000");
});
