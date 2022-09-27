import { createRouter, createWebHistory } from 'vue-router'
import AllNews from '@/components/AllNews'
import HomeView from '@/views/HomeView'
import NewsItem from '@/components/ChildrenComponents/NewsItem'
import TheAbout from '@/components/TheAbout'
import TheServices from '@/components/TheServices'
import TheStocks from '@/components/TheStocks'
import StockComponent from '@/components/StockComponent'
import TheWholesale from '@/components/TheWholesale'
import TheDropshipping from '@/components/TheDropshipping'
import TheInstallment from '@/components/TheInstallment'
import TheContacts from '@/components/TheContacts'
import TheVacansy from '@/components/TheVacansy'
import SubCatProducts from '@/components/SubCatProducts'
import OneProduct from '@/components/OneProduct'
import FavsComponent from '@/components/FavsComponent'
import PersonalAccount from '@/components/PersonalAccount'
import OrderProcessing from '@/components/OrderProcessing'
import BrandProducts from '@/components/BrandProducts'
import GeneralInformation from '@/views/GeneralInformation'
import PersonalData from '@/views/PersonalData'
import PurchaseHistory from '@/views/PurchaseHistory'
import ChangePassword from '@/views/ChangePassword'
import LikedProducts from '@/store/LikedProducts'

const routes = [
  {path : '/', name : 'home', component : HomeView},
  {path: '/news', name: 'news', component: AllNews,},
  {path : '/news/:newsID', name : '', component : NewsItem},
  {path : '/about', name : 'about', component : TheAbout},
  {path : '/services', name : 'services', component : TheServices},
  {path : '/stocks', name : 'stocks', component : TheStocks},
  {path : '/stocks/:stockID',  component : StockComponent},
  {path : '/wholesale', name : 'wholesale', component : TheWholesale},
  {path : '/dropshipping', name : 'dropshipping', component : TheDropshipping},
  {path : '/installment', name : 'installment', component : TheInstallment},
  {path : '/contacts', name : 'contacts', component : TheContacts},
  {path : '/vacansy', name : 'vacansy', component : TheVacansy},
  {path : '/subcategory/:subcatID', name : 'subcategory', component : SubCatProducts},
  {path : '/brand/:brandID', name : 'brand', component : BrandProducts},
  {path : '/product/:productID', name : 'product', component : OneProduct},
  {path : '/favorites', name : 'favorites', component : FavsComponent},
  {path : '/account', name : 'account', component : PersonalAccount, children : [
    {path : 'generalinfo', name : 'generalinfo', component : GeneralInformation},
    {path : 'personaldata', name : 'personaldata', component : PersonalData},
    {path : 'purchasehistory', name : 'purchasehistory', component : PurchaseHistory},
    {path : 'changepassword', name : 'changepassword', component : ChangePassword},
    {path : 'likedproducts', name : 'likedproducts', component : LikedProducts},
  ]},
  {path : '/order', name : 'order', component : OrderProcessing},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


