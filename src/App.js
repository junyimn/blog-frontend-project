import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import BlogCard from "./components/BlogCard/BlogCard";

function App() {
  return (
    <div>
      <NavBar />
      <BlogCard />
      <p> Welcome to Michael's Blog</p>
    </div>
  );
}

export default App;
