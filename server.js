import express from "express";
import translate from "translate";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config()

const app = express();

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(process.cwd() + "/src/public"))

app.set("views", process.cwd() + "/src/views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index");
});


app.post("/api/translate", async (req, res) => {
    try {
        const { text } = req.body;
        console.log(text);
        const data = await translate(text, 'ru');
        console.log(data);

        res.send({
            status:200,
            data:data,
            message:"success"
        });

    } catch (error) {
        console.log(error.message);
        ctx.reply("An error occurred while translating.");
    }
})


const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
