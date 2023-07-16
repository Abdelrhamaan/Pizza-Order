import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
function App (){
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header(){
    return (
        <div className="header">
            <h1>Fast Pizaa Co.</h1>
        </div>
    )
} 

function Footer(){
    const hourNow = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hourNow >= openHour && hourNow <= closeHour;
    // isOpen ? alert("We are currently open") : alert("we are currently closed");
    
    return (
        <Order openHour={openHour} closeHour={closeHour} isOpen={isOpen}/>
    )
}

function Order(isOpen,openHour,closeHour){
    return (
        isOpen ? 
            <div className="footer">
                <footer>{new Date().toLocaleTimeString()}. we are currently open </footer>
                <button className="btn order" style={{marginTop:"7px"}}>order now</button>
            </div>
            :<div>
                <h3 className="footer" >we open from {openHour}:00 to {closeHour}:00 </h3>
            </div>
    )
    }


function Menu(){
    const pizzas = pizzaData
    // const pizzas = [];

    return (
        pizzas.length > 0 ?
        <>
            <main className="menu">
                <h2>Our Menu</h2>
                <ul className="pizzas"> 
                    {pizzas.map((pizza)=>(
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))} 
                </ul>
            </main>
        </>
        :<div className="menu">
            <p>we are working on menu visit us later :)</p>  
        </div>
        
        // <main className="menu">
        //     <h2>Our Menu</h2>
        //     {pizzas && (
        //     <ul className="pizzas"> 
        //         {pizzas.map((pizza)=>(
        //             <Pizza pizzaObj={pizza} key={pizza.name}/>
        //         ))} 
        //     </ul> 
        //     )
        //     }
    
)}

function Pizza({ pizzaObj }) {
    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `} style={{marginTop:"5px"}}>
        <img src={pizzaObj.photoName} alt="spinaci.jpg"/>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLDOUT" : pizzaObj.price}</span>
      </li>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
) 