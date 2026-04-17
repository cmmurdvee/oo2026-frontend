import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import ManageProduct from './pages/admin/ManageProduct'
import ManageCategories from './pages/admin/ManageCategories'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PorductDetails from './pages/PorductDetails'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <Link to="/">
    <button>Avaleht</button>
    </Link>

    <Link to="/cart">
    <button>Ostukorv</button>
    </Link>

    <Link to="/add-product">
    <button>Lisa toode</button>
    </Link>

    <Link to="/manage-product">
    <button>Manage products</button>
    </Link>

    <Link to="/manage-categories">
    <button>Manage categories</button>
    </Link>

    <Link to="/login">
    <button>Login</button>
    </Link>

    <Link to="/signup">
    <button>Signup</button>
    </Link>

    <Link to="/profile">
    <button>Profile</button>
    </Link>
      
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/add-product" element={ <AddProduct />} />
        <Route path="/edit-product" element={ <EditProduct />} />
        <Route path="/manage-product" element={ <ManageProduct />} />
        <Route path="/manage-categories" element={ <ManageCategories />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/product" element={ <PorductDetails />} />
        <Route path="/*" element={ <NotFound />} />
      </Routes>
    </>
  )
}

export default App
