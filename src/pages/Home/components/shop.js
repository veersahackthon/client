import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Deck from './CardDeck';
const shop = () => {
    const imageStyle="rounded-xl m-2 object-cover object-center max-w-lg max-h-96 inline-block";
    return (
        <>
            <Container fluid={true} className="py-5">
               <p className="text-6xl px-14 text-lime-800">Healthcare products</p>
                <div className="grid grid-cols-4 grid-rows-5 gap-4 p-14">
                    <div className="row-span-3 p-14 col-start-1 col-end-5 bg-cyan-600 rounded-2xl">
                        <div className=""> 
                            <p className="text-xl text-white">Shop Safely And Worry-Free On Weebly!</p>

                            <p className="text-5xl font-semibold text-white tracking-wider leading-relaxed">upto 20% discount on medicines</p>
                            <p className="text-2xl font-medium text-white">Personal care, Fitness & Supplements.Covid essentials etc...</p>
                            
                        </div>
                        <button class="text-gray-100 text-lg bg-stone-800 rounded-full px-3 py-2 hover:bg-stone-100 hover:text-black my-3.5">Shop Now </button>
                    </div>
                    <div className="row-span-2 col-start-1 col-end-5 px-auto justify-items-center content-center">
                    <div className="inline-block ">
                    <div className="col-start-1 col-end-3 relative -mt-36 ">
                            <img className={imageStyle} src="https://images.unsplash.com/photo-1624990306661-b742b5a19514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="prod"/>
                            <img className={imageStyle} src="https://cdn01.pharmeasy.in/dam/products_otc/270551/revital-h-health-supplement-capsules-strip-of-10-1-1643883344.jpg" alt="prod"/>
                            <img  className={imageStyle} src="https://images.unsplash.com/photo-1584707824245-f67bad2c62d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="prod"/>
                            <img  className={imageStyle} src="https://images.unsplash.com/photo-1618120508902-c8d05e7985ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="prod"/>
                        </div>
                    </div>
                        
                    </div>

                </div>
            </Container>
        </>
    );
}
export default shop;