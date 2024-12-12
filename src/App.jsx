import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Nav from "./layout/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="w-full h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
