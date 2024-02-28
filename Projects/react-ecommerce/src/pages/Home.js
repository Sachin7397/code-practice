import NavBar from "../features/navbar/Navbar";
import ProducList from "../features/product-list/ProductList";

function Home(){
    return (
        <div>
            <NavBar>
                <ProducList>
                </ProducList>
            </NavBar>
        </div>
    )
}

export default Home