const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is alive on http://127.0.0.1:${port}...`);
});
