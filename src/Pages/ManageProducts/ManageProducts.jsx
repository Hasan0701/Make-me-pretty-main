
import Footer from "../../Components/Shared/Footer";
import Navbar from "../../Components/Shared/Navbar";
import ManageProductsTable from "./ManageProductsTable";

function ManageProducts()
{
   
    
    return (
        
        <div>
         <Navbar></Navbar>
         <div className="text-center my-10">
          <p className="text-orange-500 font-bold">Manage Product</p>
          <h2 className="text-2xl font-bold">
           You can update or delete any product here.
          </h2>
          <div className="max-w-3xl mx-auto">  <ManageProductsTable></ManageProductsTable></div>
        
        </div>
         <Footer></Footer>
        </div>
    )
}
export default ManageProducts;