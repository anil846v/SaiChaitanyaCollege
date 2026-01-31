import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
// import Announcements from "./Announcements";
import Gallery from "./Gallery";
import Academic from "./Academic";
import ResultsAchievements from "./ResultsAchievements";

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
      <Route path="/academics" element={ <Layout><Academic /></Layout>} />
      <Route path="/results" element={ <Layout><ResultsAchievements /></Layout>} />
      <Route path="/contact" element={ <Layout><Contact /></Layout>} />
      <Route path="/about" element={ <Layout><AboutUs /></Layout>} />
      {/* <Route path="/announcements" element={ <Layout><Announcements /></Layout>} /> */}
      <Route path="/gallery" element={ <Layout><Gallery /></Layout>} />
      <Route path="/gallery/:category" element={ <Layout><Gallery /></Layout>} />
      {/* <Route path="/login" element={ <Layout><Login /></Layout>} /> */}
      {/* <Route path="/studentRegistration" element={ <Layout><StudentRegistration /></Layout>} />
      <Route path="/teacherRegistration" element={ <Layout><TeacherRegistration /></Layout>} />
      <Route path="/studentdashboard" element={ <Layout><StudentDashBoard /></Layout>} />
      <Route path="/teacherdashboard" element={ <Layout><TeacherDashBoard /></Layout>} />
      <Route path="/adminlogin" element={<Layout><AdminLogin /></Layout> } />
      <Route path="/adminregistration" element={ <Layout><AdminRegistration /></Layout> } />
      <Route path="/admindashboard" element={ <Layout><AdminDashboard /></Layout>} />       */}

      
    </Routes>
  );
};

export default AppRoutes;
