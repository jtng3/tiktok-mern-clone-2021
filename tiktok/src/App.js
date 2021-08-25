import "./App.css";
import Video from "./Video.js";

function App() {
  return (
    // BEM naming convention

    <div className="app">
      <div className="app__videos">
        <Video
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"
          channel="alicebobby"
          description="#summer #poolparty #raybans"
          song="Kool & The Gang - Summer Madness"
          likes={555}
          shares={333}
          messages={88}
        />
        <Video
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1258-large.mp4"
          channel="alicebobby"
          description="#summer #poolparty #underwater"
          song="Kool & The Gang - Summer Madness"
          likes={599}
          shares={222}
          messages={55}
        />
        <Video
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-inflatable-pool-ring-floating-in-a-pool-1260-large.mp4"
          channel="alicebobby"
          description="#summer #poolparty #donut"
          song="Kool & The Gang - Summer Madness"
          likes={400}
          shares={40}
          messages={10}
        />
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
