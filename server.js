const port = process.env.PORT || 8800;

const color = require("colors");


const app = require('./App/App');
const connectDb = require('./db/db')

connectDb()


app.listen(port,()=> {
    console.log(color.red(`server running on ${port}`));
})

// 01979-705117