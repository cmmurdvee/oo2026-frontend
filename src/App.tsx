import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import ManageProduct from './pages/admin/ManageProduct'
import ManageCategories from './pages/admin/ManageCategories'
import Cart from './pages/Cart'

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

    <Link to="/manage-prodcut">
    <button>Manage products</button>
    </Link>

    <Link to="/manage-categories">
    <button>Manage categories</button>
    </Link>
      
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/add-product" element={ <AddProduct />} />
        <Route path="/edit-product" element={ <EditProduct />} />
        <Route path="/manage-prodcut" element={ <ManageProduct />} />
        <Route path="/manage-categories" element={ <ManageCategories />} />
      </Routes>
    </>
  )
}

export default App
