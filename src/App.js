import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CourseWebsite from "./pages/CourseWebsite";
import MobileView from "./pages/MobileView";
import TabView from "./pages/TabView";
import { useEffect } from "react";
// import "./App.css";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-view":
        title = "";
        metaDescription = "";
        break;
      case "/tab-view":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<CourseWebsite />} />

        <Route path="/mobile-view" element={<MobileView />} />

        <Route path="/tab-view" element={<TabView />} />
      </Routes>
    </div>
  );
}
export default App;
