import react from "react";
import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  return (
    // <>
    //   <Header />
    //   <Entry />
    //   <Entry />
    // </>
    <div className="flex flex-wrap">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
};
export default App;
