import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000

const dailyActivities = []

const workActivities = []

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", { dailyActivities });
})

app.get("/work", (req, res) => {
    res.render("work.ejs")
})

app.post('/', (req, res) => {
    const newTask = req.body.newItem;
    dailyActivities.push(newTask);
    res.redirect('/');
});

app.post("/remove", (req, res) => {
    const toremoveTask = req.body.removeTask

    if (Array.isArray(toremoveTask)) {
         toremoveTask.reverse();
         toremoveTask.forEach(index => {
            dailyActivities.splice(index, 1)
         })
    } else if (typeof toremoveTask === "string") {
        dailyActivities.splice(toremoveTask, 1)
    }
    
    res.redirect("/")
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  