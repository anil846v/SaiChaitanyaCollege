import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
// import Announcements from "./Announcements";
import Gallery from "./Gallery";
import Academic from "./Academic";
import ResultsAchievements from "./Resultsachievements";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      {/* <Route path="/admission" element={ <Layout><AdmissionForm /></Layout>} /> */}
      <Route path="/academics" element={<Layout><Academic /></Layout>} />
      <Route path="/results" element={<Layout><ResultsAchievements /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/about" element={<Layout><AboutUs /></Layout>} />
      {/* <Route path="/announcements" element={ <Layout><Announcements /></Layout>} /> */}
      <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      <Route path="/gallery/:category" element={<Layout><Gallery /></Layout>} />



    </Routes>
  );
};

export default AppRoutes;
