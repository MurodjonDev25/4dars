import express from "express"
import { config } from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import userRoutes from "./routes/users.routes.js"
import productRoutes from "./routes/products.routes.js"
import categoryRoutes from "./routes/categories.routes.js"
import basketRoutes from "./routes/basket.routes.js"
import blockedUserRoutes from "./routes/blockedUser.routes.js";
import router_discount from "./routes/discount.routes.js";
import newProductsRoutes from "./routes/newProducts.routes.js";
import returnedProductsRoutes from "./routes/returnedProducts.routes.js";
import trendProductsRoutes from "./routes/trendProducts.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
config({ path: path.join(__dirname, ".env") })

const port = process.env.PORT || 3002
const app = express()

app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/basket", basketRoutes)
app.use("/api/blocked-users", blockedUserRoutes);
app.use("/api/discount", router_discount);
app.use("/api/new-products", newProductsRoutes);
app.use("/api/returned-products", returnedProductsRoutes);
app.use("/api/trend-products", trendProductsRoutes);

app.use((req, res) => {
    res.status(404).json({ success: false, message: "route topilmadi" })
})

app.listen(port, () => {
    console.log(`server ${port}-portda ishlayapti`)
})
