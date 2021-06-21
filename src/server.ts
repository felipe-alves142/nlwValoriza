import express from "express";

const app = express();
app.get("/test",(request,response) =>{
    return response.send("Ola get");
})
app.post("/test-post", (request, response) => {
    return response.send("Olá post NLW!")
})


app.listen(3000, () => console.log("Server is runnig nlw"));