import express from 'express'
import { config } from 'dotenv'
import { router } from './routes/users.routes.js'
import { router_basket } from './routes/Baskets.routes.js'
import { router_prodacts } from './routes/prodacts.routes.js'
import { router_categorya } from './routes/categorya.routes.js'
import { router_block } from './routes/blockUser.routes.js'
import { router_discount } from './routes/discount.routes.js'
import { router_newProducts } from './routes/newProducts.routes.js'
import { router_returnedProducts } from './routes/returnedProducts.routes.js'
import { router_trendProducts } from './routes/trendProducts.routes.js'
config()

const port = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use('/users',router)
app.use('/basket',router_basket)
app.use('/prodacts',router_prodacts)
app.use('/categorya',router_categorya)
app.use('/block',router_block)
app.use('/discount',router_discount)
app.use('/newProducts',router_newProducts)
app.use('/returnedProducts',router_returnedProducts)
app.use('/trendProducts',router_trendProducts)












app.listen(port,()=>{
    console.log(`server is running on ${port} port `)
})