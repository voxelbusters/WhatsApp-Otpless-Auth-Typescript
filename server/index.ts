const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
import authRouter from "./routes/auth";


dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});