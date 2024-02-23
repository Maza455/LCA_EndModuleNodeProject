import { userRouter, express } from "./controller/UserController.js";
import {productRouter} from "./controller/ProductController.js";
import "dotenv/config.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from 'path'
import { isAuthenticatedRouter } from "./middleware/isAuthenticated.js";
import { imageRouter } from "./controllers/ImageController.js";
import { checkoutRouter } from "./controllers/CheckoutController.js";
import { categoryRouter } from "./controllers/CategoryController.js";
import { orderItemRouter } from "./controllers/OrderItemController.js";
import { authenticationRouter } from "./middleware/Authentication.js";
import {errorHandling} from "./middleware/ErrorHandling.js";

const app = express()
const port = +process.env.POST || 5500

//Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/lifechoices', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use('/Users', userRouter)
app.use('/Products', productRouter)
app.use('/OrderItem', orderItemRouter)
app.use('/Image', imageRouter)
app.use('/Category', categoryRouter)
app.use('/Checkout', checkoutRouter)
app.use(errorHandling)
app.use(isAuthenticatedRouter)
app.use(authenticationRouter)

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})
