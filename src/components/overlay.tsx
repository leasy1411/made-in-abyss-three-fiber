import React, { forwardRef } from "react";
import logo from "@public/logo.svg";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Overlay = forwardRef(
  function Overlay({ scroll }: { scroll: React.MutableRefObject<number> }, ref)
  {
    return (
      <div
        ref={ref as React.MutableRefObject<HTMLDivElement>}
        onScroll={(e) => {
          scroll.current = (e.target as HTMLElement).scrollTop / ((e.target as HTMLElement).scrollHeight - window.innerHeight);
        }}
        className="absolute top-0 left-0 overflow-y-auto snap-proximity snap-y text-white w-full h-full m-0 p-0 select-none overflow-hidden"
      >
        <div style={{ height: "200vh" }}className="snap-start">
          <motion.div  
            style={{ paddingTop: "25vh", paddingLeft: "10vh" }}
            className="sticky top-0"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image style={{ height: "50vh" }} src={logo} alt="" />
          </motion.div>
        </div>
        <div style={{ height: "200vh" }} className="snap-start">
        <motion.div  
            style={{ paddingTop: "25vh", paddingLeft: "10vh" }}
            className="sticky top-0"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <h1>Reg</h1>
              
          </motion.div>
        </div>
        <div style={{ height: "200vh" }} className="snap-start">
          <div style={{ paddingTop: "25vh", paddingLeft: "10vh" }} className="sticky top-0">
              <h1>Riko</h1>
              
          </div>
        </div>
        <div style={{ height: "200vh" }} className="snap-start">
          <div style={{ paddingTop: "25vh", paddingLeft: "10vh" }} className="sticky top-0">
              <h1>Nanachi</h1>
              
          </div>
        </div>
      </div>
    )
  }
);

export default Overlay;