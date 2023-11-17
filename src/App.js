
// import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Row from './components/Row';
import requests from './request'
// import YouTube from 'react-youtube'

// const opts = {
//   height : "390",
//   width : "100%",
//   playerVars : {
//       autoplay : 1,
//   },
// };

// var videoId = "";


function App() {

  // const [x, setX] = useState(false);
  // useEffect(() => {
        
     
  //       console.log("Themovie");
      
  // },[x]);

  // function video(){
  //   if(x)
  //       setX(false)
  //     else
  //       setX(true)
  // }

  return (
    <div className="App">

      {/* {videoId && <YouTube videoId={videoId} opts={opts}/>} */}

      <Header/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchURL={requests.originals} isLarge/>
      <Row title='Trending' fetchURL={requests.trending}/>
      <Row title='Top Rated' fetchURL={requests.rated}/>
      <Row title='Comedy' fetchURL={requests.comedy}/>
      <Row title='Action' fetchURL={requests.action}/>
      <Row title='Music' fetchURL={requests.music}/>
      <Row title='Animation' fetchURL={requests.animation}/>
      <Row title='Adventure' fetchURL={requests.adventure}/> 
      
    </div>
  );
}

export default App;
