import {registerModules} from "./register-modules";
import UserRouter from "@/views/pages/system/user/router"
import CustomerRouter from "@/views/pages/system/Customers/router"
import InvoiceRouter from "@/views/pages/system/Invoice/router"
import RecieptsRouter from "@/views/pages/system/Reciepts/router"


registerModules({
    UserRouter,
    CustomerRouter,
    InvoiceRouter,
    RecieptsRouter
})
