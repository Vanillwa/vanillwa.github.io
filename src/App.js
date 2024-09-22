import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { motion, stagger, useAnimate, useScroll } from "framer-motion";
import "./css/App.css";
import Section3 from "./components/Section3";

import { MenuToggle } from "./components/MenuToggle";
import Menu from "./components/Menu";

// 사이드바 애니메이션
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
  const [isOpen, setIsOpen] = useState(false); // 사이드바 state
  const scope = useMenuAnimation(isOpen);
  const { scrollYProgress } = useScroll(); // 하단 스크롤 진행도
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  // 사이드바 외부 클릭시 닫히게
  const handleClickOutside = (e) => {
    if (!scope.current.contains(e.target)) setIsOpen(false);
  };

  return (
    <>
      <div ref={sec1Ref}>
        <Section1 sec2Ref={sec2Ref} />
      </div>
      <div ref={sec2Ref}>
        <Section2 />
      </div>
      <div ref={sec3Ref}>
        <Section3 />
      </div>
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <div ref={scope}>
        <Menu sec1Ref={sec1Ref} sec2Ref={sec2Ref} sec3Ref={sec3Ref} />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>
    </>
  );
}

export default App;
