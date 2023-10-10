import "./App.css";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Programs from "./components/programs/programs";
import Plans from "./components/Plans/Plans";
import Testimonial from "./components/Testimonial/Testimonial";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
