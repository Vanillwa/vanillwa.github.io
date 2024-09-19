import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { motion, stagger, useAnimate, useScroll } from "framer-motion";
import "./css/App.css";
import Section3 from "./components/Section3";
import Menu from "./components/Menu";
import { MenuToggle } from "./components/MenuToggle";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          ["nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 }],
          ["li", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05), at: "-0.3" }],
        ]
      : [
          ["li", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }), at: "<" }],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.2" }],
        ];

    animate([["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }], ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }], ["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }], ...menuAnimations]);
  }, [isOpen]);
  return scope;
}

function App() {
  const [theme, setTheme] = useState(localStorage.theme);

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    if (localStorage.theme === "dark") document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      {/* <Navi theme={theme} setTheme={setTheme} /> */}
      <div ref={scope}>
        <Menu theme={theme} setTheme={setTheme} />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
    </>
  );
}

export default App;
