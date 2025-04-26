import "../pages/App.css"
import { useState } from "react"

export default function FooterComp(){
    function register(){
        const input = document.getElementById("emailInput").value; 
        if(input != ""){
            document.getElementById("emailInput").value = "";
            document.getElementById("footerMsg").className = "flex text-stone-800 text-md";
        };
    }

    return(
        <>
            <div className="w-full flex flex-wrap p-10 justify-around text-white bg-black">
                <div className="flex-col justify-between items-center lg:w-1/3">
                    <div className="p-5 border-2 border-white rounded-3xl">
                        <h1 className="text-2xl text-center"> Vision & Philosophy</h1><br/>
                        <p className="text-stone-200">At Kairox School of Futures, we believe that education is not just a preparation for life — it is life, unfolding in its most imaginative, dynamic form. Our vision is to radically reimagine what it means to learn, grow, and thrive in an age where change is the only constant. We are not confined by conventional systems or outdated models; instead, we are pioneering a future where learners become co-creators of knowledge, architects of their own reality, and responsible stewards of an interconnected world. At the core of our philosophy lies the belief that every student is a unique constellation of potential, and our role is to ignite that potential through personalized, purpose-driven, and deeply human-centered experiences.</p>
                    </div>
                </div>

                <div className="flex-col justify-between items-center lg:w-1/3">
                    <div className="bg-black p-5 rounded-3xl">
                        <h1 className="text-2xl text-stone-300">SOCIAL</h1><br/><br/>
                        <div className="flex justify-around text-white">
                            <i className="bi bi-instagram text-5xl not-italic hover:text-stone-300 cursor-pointer"></i>
                            <i className="bi bi-facebook text-5xl not-italic hover:text-stone-300 cursor-pointer"></i>
                            <i className="bi bi-linkedin text-5xl not-italic hover:text-stone-300 cursor-pointer"></i>
                            <i className="bi bi-twitter-x text-5xl not-italic hover:text-stone-300 cursor-pointer"></i>
                        </div>
                    </div><br/>
                    <div className="p-5 rounded-3xl"> 
                        <h1 className="text-2xl text-stone-300">CONTACT US</h1><br/>
                        <div>
                            <p><i className="bi bi-pin-map"></i> Expressway, Sector 126, Noida, UP 201313</p>
                            <p><i className="bi bi-envelope-fill"></i> kairoxinternation@gmail.com</p>
                            <p><i className="bi bi-telephone"></i> 986754121 | Admissions: 9874561223</p>
                            <p><i className="bi bi-clock"></i> Mon-Sat</p>
                        </div><br/>
                    </div><br/>
                </div>    

                <div className="flex-col justify-between items-center lg:w-1/4">
                    <div className="bg-white p-5 rounded-3xl"> 
                        <h1 className="text-2xl text-black">QUICK RESGISTER</h1><br/>
                       <input id="emailInput" placeholder="Email" className="p-3 shadow-lg rounded-3xl bg-black text-stone-200 w-full"/><br/><br/>
                       <p id="footerMsg" className="hidden">Registration Complete! We will revert back in 2-3 business days <br/><br/></p>
                       <button className="p-3 bg-black rounded-3xl w-full cursor-pointer hover:bg-white hover:text-black border-2 hover:border-black" onClick={register}>REGISTER <i className="bi bi-caret-right"></i></button>
                    </div><br/>
                    <div className="bg-black p-5 rounded-3xl border-2 border-stone-400">
                        <h1 className="text-2xl text-stone-300 text-center">DOWNLOAD APP</h1><br/>
                        <div className="flex justify-evenly">
                            <i className="bi bi-google-play text-4xl text-center cursor-pointer hover:text-stone-300"> <p className="text-lg not-italic">Playstore</p></i>
                            <i className="bi bi-apple text-4xl text-center cursor-pointer hover:text-stone-300"><p className="text-lg not-italic">App Store</p></i>
                        </div>
                    </div>
                </div>               
            </div>
        </>
    )
}