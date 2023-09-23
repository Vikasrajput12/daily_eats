import Navbar from "./Components/Navbar/navbar.jsx"
import Hero from "./Components/Hero/hero.jsx"
import Cards from "./Components/headlineCard/card.jsx"
import Food from "./Components/Food/food"
import Category from "./Components/category/category.jsx"

export default function App(){
    return(
       <div>
             <Navbar/>
             <Hero/>
             <Cards/>
             <Food/>
             <Category/>

       </div>
    );
}