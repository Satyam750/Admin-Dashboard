import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"


const Dashboard = lazy(()=>import("./pages/DashBoard"))
const Products = lazy(()=>import("./pages/Products"))
const Transaction = lazy(()=>import("./pages/Transaction"))
const Customer = lazy(()=>import("./pages/Customers"))


const NewProduct = lazy(()=>import("./pages/management/NewProduct"))
const ProductManagement = lazy(()=>import("./pages/management/ProductManagement"))
const TransactionManagement = lazy(()=>import("./pages/management/TransactionManagement"))


const BarCharts = lazy(()=>import("./pages/charts/BarCharts"))
const PieCharts = lazy(()=>import("./pages/charts/PieCharts"))
const LineCharts = lazy(()=>import("./pages/charts/LineCharts"))

const Coupon = lazy(()=>import("./pages/app/Coupon"))
const StopWatch = lazy(()=>import("./pages/app/StopWatch"))
const Toss = lazy(()=>import("./pages/app/Toss"))






const App = () => {
  return (
   <Router>
   <Suspense fallback={<Loader/>}>
   <Routes>
    
    <Route path="/" element={<Link to="/admin/dashboard"><button style={{marginTop:"20vw", marginLeft:"35vw", border:"none",fontSize:"5vw",background:'#6868c4', padding:"1.3vw", borderRadius:"50px", cursor:"pointer"}}>Visit Dashboard</button> </Link>}/>


      <Route path="/admin/dashboard" element={<Dashboard/>}  />
      <Route path="/admin/product" element={<Products/>}  />
      <Route path="/admin/transaction" element={<Transaction/>}  />
      <Route path="/admin/customer" element={<Customer/>}  />


         <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts/>} />
          <Route path="/admin/chart/line" element={<LineCharts />} />  


          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

    
     

     
      <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />



    </Routes>
   </Suspense>
   </Router>
  )
}

export default App