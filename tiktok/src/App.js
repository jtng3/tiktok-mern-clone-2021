import "./App.css";
import Video from "./Video.js";

function App() {
  return (
    // BEM naming convention

    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Videos /> */}
      {/* <Videos /> */}
      {/* <Videos /> */}
    </div>
  );
}

export default App;
