import React from "react";
import Productos from "../components/FeaturedProducts.js";
import Features from "../components/Features.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";

const LandingPage = () => (
    <>
        <Hero />
        <Features />
        <Productos />
        <Footer />
    </>
);

export default LandingPage;