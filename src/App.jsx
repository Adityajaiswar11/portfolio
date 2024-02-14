
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Components/Loader";
import "./index.css"
function AnimatedSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.75, delay: 0.35 }}
      exit="hidden"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="all bg-[#0D0A0B]">
      <ToastContainer />
      <Header />

      <AnimatedSection>
        <Home />
      </AnimatedSection>

      <About />

      <Skills />

      <Project />

      <Contact />
    </div>
  );
}

export default App;
