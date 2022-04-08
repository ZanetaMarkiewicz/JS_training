import { createWebHistory, createRouter } from "vue-router";
import EmployeeOfTheMonthPage from './pages/EmployeeOfTheMonthPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailesPage from './pages/ProductDetailesPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserInfoPage from './pages/UserInfoPage';

const routes = [
    { path: '/', component: ProductListPage },
    { path: '/products/:id', component: ProductDetailesPage },
    { path: '/cart', component: ShoppingCartPage },
    { path: '/user-info', component: UserInfoPage },
    { path: '/employee', component: EmployeeOfTheMonthPage },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;