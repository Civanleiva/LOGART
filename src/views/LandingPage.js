import React from "react";
import Productos from "../components/FeaturedProducts.js";
import Features from "../components/Features.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import OrderButton from "../components/OrderButton.js";

const LandingPage = () => (
    <>
        <Hero />
        <Features />
        <Productos />
        <OrderButton />
        <Footer />
    </>
);

export default LandingPage;