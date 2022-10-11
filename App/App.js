const express = require("express");
const app = express()
const cors = require("cors")



app.use(cors())
app.use(express.json())

const  storeRoute = require('../routes/store.route')
const  brandRoute = require('../routes/brand.routes')
const  supplierRoute = require('../routes/supplier.route')
const  stockRoute = require('../routes/stock.route')
const  productRoute = require('../routes/product.route')
const  userRoute = require('../routes/user.route')

app.use('/api/v1/store',storeRoute)
app.use('/api/v1/brand', brandRoute)
app.use('/api/v1/supplier', supplierRoute)
app.use('/api/v1/stock', stockRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/user', userRoute)


app.get('/',(req,res)=> {
    res.send("server running")
})

module.exports = app