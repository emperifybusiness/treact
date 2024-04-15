import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
// import Features from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Features from "components/features/TwoColSingleFeatureWithStats2";
import Planner from "components/features/TwoColWithButton";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import truss from "./images/trusss.png"
import Card from "components/cards/TabCardGrid";
import Footer from "components/footers/SimpleFiveColumn.js";


export default () => (
  <AnimationRevealPage>
    <Hero />
    <div className="truss">
      <img src={truss} alt="" srcset="" />
    </div>
    <Features />
    <Card />
    <Planner />
    <Blog />
    <Testimonial />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
