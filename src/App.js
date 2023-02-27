import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex space-x-8">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
