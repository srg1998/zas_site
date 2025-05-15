import { useRef, useEffect } from "react";
import Header from "./sections/AboutUs";
import MachineDetails from "./sections/MachineDetails";
import Clients from "./sections/Clients";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <>
      <Navbar scrollContainerRef={scrollRef} />
      <div
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth"
      >
        <section id="home" className="snap-start min-h-screen">
          <Header />
        </section>
        <section id="machine" className="snap-start min-h-screen">
          <MachineDetails />
        </section>
        <section id="clients" className="snap-start min-h-screen">
          <Clients />
        </section>
        <section id="services" className="snap-start min-h-screen">
          <Services />
        </section>
        <section id="contact" className="snap-start min-h-screen">
          <Contact />
        </section>
        <section id="about">
          <Footer />
        </section>
      </div>
    </>
  );
}
