import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Layout from "./components/layout/Layout";
import Banner from "./components/banner/Banner";
import About from "./components/pages/about/About";
import OurTeam from "./components/pages/ourteams/OurTeam";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import toast, { Toaster } from "react-hot-toast";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import Staffs from "./components/admin/Staffs";
import StaffsList from "./components/admin/StaffsList";
import Contact from "./components/pages/contact/Contact";
import ContactData from "./components/admin/ContactData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Count from "./components/countingNumber/Count";
import ProjectCompleted from "./components/countingNumber/ProjectCompleted";
import OnGoingProject from "./components/countingNumber/OnGoingProject";
import NewAbout from "./components/pages/about/NewAbout";
import Gallery from "./components/admin/Gallery";
import Announcement from "./components/pages/announcement/Announcement";
import Members from "./components/countingNumber/Member";
import Announce from "./components/admin/Announce";

const App = () => {
  //for aos animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/abouts" element={<NewAbout/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/announcement" element={<Announcement/>} />
            
        
        <Route path="/" element={<Count />} />
        <Route path="/project-completed" element={<ProjectCompleted />} />
        <Route path="/ongoing-project" element={<OnGoingProject />} />
        <Route path="/members" element={<Members />} />
     

            {/* protected admin routes */}
            <Route path="/dashboard" element={<AdminProtectedRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="/dashboard/admin/staffs" element={<Staffs />} />
              <Route path="/dashboard/admin/staffList" element={<StaffsList />}/>
              <Route path="/dashboard/admin/contact" element={<ContactData />}/>
              <Route path="/dashboard/admin/gallery" element={<Gallery/>}/>
              <Route path="/dashboard/admin/announce" element={<Announce/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
