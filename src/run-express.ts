import express from "express";

const app: express.Application = express()
// The port the express app will listen on
const port: number = parseInt(process.env.PORT || '') || 3000;

// Dummy call for testing!
app.use('/', (req, res, next) => {
    res.status(200)
        .send({
            isItWorking: true
        })
});

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
