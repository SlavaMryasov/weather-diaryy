import { Provider } from "react-redux";
import "./App.scss";
import WeatherTable from "./components/weatherTable/WeatherTable";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherTable />
      </div>
    </Provider>
  );
}

export default App;
