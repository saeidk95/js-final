import Navigo from 'navigo'
// import './style.css'
import './src/input.css'
import homePage, { loadingPage } from './pages/homePage'
import welcomePage, { clickWrapper } from './pages/welcomePage'
import welcomePage1, {  clickNext1 } from './pages/welcomePage1'
import welcomePage2, { clickNext2 } from './pages/welcomePage2'
import welcomePage3, { clickNext3 } from './pages/welcomePage3'
import loginPage, { login } from './pages/loginPage'

export const routs = {
  home: "/",
  products: "/product",
  productDetails: "/product/:id",
  dashboard: "/dashboard",
  login: "/login",
  register: "/registaer",
  logout: "/logout",
  welcome: "/welcome",
  welcome1: "/welcome1",
  welcome2: "/welcome2",
  welcome3: "/welcome3"
}

export function render(child, func1) {
  document.querySelector("#app").innerHTML = `
  ${child}
  `
  if (func1) {
    func1()
  }
  

}

export const router = new Navigo("/")
router
  .on(routs.home, () => render(homePage(), loadingPage))
  .on(routs.welcome, () => render(welcomePage(), clickWrapper))
  .on(routs.welcome1, () => render(welcomePage1(), clickNext1))
  .on(routs.welcome2, () => render(welcomePage2(), clickNext2))
  .on(routs.welcome3, () => render(welcomePage3(), clickNext3))
  .on(routs.login, () => render(loginPage(),login))//sign in
  .on(routs.register)//sign up
  .on(routs.logout)
  .on(routs.products)
  .on(routs.productDetails)
  .on(routs.dashboard)
  .resolve()