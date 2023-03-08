import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <div className="flex space-x-8">
          <Sidebar />
          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
