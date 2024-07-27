import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/insure",(req,res)=>{
    res.render("health.ejs",{
        content : "You'll Prioritize Your New Job Over Old One",
        para : "Your family's Health Deserve Health Insurance",
        url:"images/Untitled design.png"
    });
})

app.get("/assist",(req,res)=>{
    res.render("policy.ejs",{
        content : "Believe in Transparency",
        para : "Empowering change through effective governance, faith and believe",
        url2:"images/Untitled design.png"
    });
})

app.get("/about",(req,res)=>{
    res.render("about.ejs",{});
})


app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})