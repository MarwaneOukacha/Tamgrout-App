import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import data from "./mockData/Data.json";
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(data);
  }, []);
  return (
    <div>
      <Navbar Header={landingPageData.Header} />
    </div>
  );
}

export default App;
