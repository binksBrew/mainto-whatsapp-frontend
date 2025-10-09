// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Header from "./components/Header";
// import Login from "./pages/Login";
// import Configure from "./pages/Configure";
// import Contact from "./pages/Contact";


// export default function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* 👇 Landing page with Login + Contact Us buttons */}
//         <Route path="/" element={<Landing />} />

//         {/* 👇 Login page */}
//         <Route path="/login" element={<Login />} />

//         {/* 👇 Configure page after login */}
//         <Route path="/configure" element={<Configure />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }





// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Landing from "./pages/Landing";
// import Header from "./components/Header";
// import Login from "./pages/Login";
// import Configure from "./pages/Configure";
// import Contact from "./pages/Contact";
// import TabsView from "./pages/TabsView"; // ✅ new combined tabs page

// export default function App() {
//   const [isConfigured, setIsConfigured] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ✅ Check if user has already submitted configuration
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setLoading(false);
//       return;
//     }

//     fetch("http://127.0.0.1:8000/user/form-status", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setIsConfigured(data.submitted || false);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;
//   }

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Landing page */}
//         <Route path="/" element={<Landing />} />

//         {/* Login page */}
//         <Route path="/login" element={<Login />} />

//         {/* 👇 Conditional routing based on config */}
//         <Route
//           path="/configure"
//           element={
//             isConfigured ? <Navigate to="/dashboard" replace /> : <Configure />
//           }
//         />

//         {/* Tabs View (Dashboard + My Details) */}
//         <Route path="/dashboard" element={<TabsView />} />

//         {/* Contact page */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }





import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Login from "./pages/Login";
import Configure from "./pages/Configure";
import Contact from "./pages/Contact";
import TabsView from "./pages/TabsView";

export default function App() {
  const [isConfigured, setIsConfigured] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    fetch("http://127.0.0.1:8000/user/form-status", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsConfigured(data.submitted || false);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;
  }

  return (
    <Router>
      <Header />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Configure (only first time) */}
        <Route
          path="/configure"
          element={
            isConfigured ? <Navigate to="/dashboard" replace /> : <Configure />
          }
        />

        {/* Dashboard with Tabs */}
        <Route path="/dashboard" element={<TabsView />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
