import About from "../components/content/about/about";
import Products from "../components/content/products/products";
import Home from "../components/content/home/home";


export const allRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/products', component: Products, exact: true},
]

