const app = require("./app");

const port = 3501;
app.listen(port, () => {
    console.log(`Server is alive on http://127.0.0.1:${port}...`);
});
