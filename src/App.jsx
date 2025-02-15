import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    //....
    // get admin data from loacl storage
    const storedAdmin = JSON.parse(localStorage.getItem("admin")) || [];
    // validate admin credential
    const adminUser = storedAdmin.find(
      (admin) => admin.email === email && admin.password === password
    );

    // validate employe cred
    const employee = userData.find(
      (employee) => email == employee.email && employee.password == password
    );
    //..
    if (adminUser) {
      setUser("admin");
      setloggedInUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (employee) {
      setUser("employee");
      setloggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employees", data: employee })
      );
    } else {
      alert("invalid Credintial");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
