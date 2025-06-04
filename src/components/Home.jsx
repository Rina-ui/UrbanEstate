import React from "react";
import {motion} from "framer-motion";
import "../styles/Home.css";

export default function Home(){
    return(
        <div>
            <header className="App-header"> 
                <h3>
                   <span>Urban</span>Estate
                </h3>
                <nav> 
                    <ul>
                        <div className="part1"> 
                             <li>Buy</li>
                            <li>Sell</li>
                            <li>Rent</li>
                            <li>Mortgage</li>
                            <li>Appartments</li>
                            <li>Townhomes</li>
                            <li>Real Estate Agents</li>
                        </div>
                        <div className="part2">
                            <li>log In</li>
                            <button>Sign Up</button>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

