
import './App.css';
import Header from "./components/Header"
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import BasicExercises from "./components/videoscategories/BasicExercises"
import DietPlan from "./components/videoscategories/DietPlan";
import FatLoss from "./components/videoscategories/FatLoss";
import MuscleGain from "./components/videoscategories/MuscleGain";
import {Routes,Route} from "react-router-dom"
import VideoCard from "./components/VideoCard"
import PlayLists from "./components/PlayLists"
import CreatePlayListFromVideos from './components/CreatePlayListFromVideos';
import PlayList from "./components/PlayList";
   
function App() {

  return (
    <div className="App">
    <Header/>
    <BottomBar/>
    <Routes>
          <Route  path="/" element={<Home/>}>
            <Route path="/createplaylist/:videoId" element={<CreatePlayListFromVideos  />}></Route>
          </Route>
          <Route path="/basicexercises" element={<BasicExercises/>}></Route>
          <Route path="/diets" element={<DietPlan/>}></Route>
          <Route path="/musclegain" element={<MuscleGain/>}></Route>
          <Route path="/fatloss" element={<FatLoss/>}></Route>
          <Route path="/videos/:id" element={<VideoCard/>}></Route>
          <Route path="/playlists" element={<PlayLists/>}></Route>
          <Route path="/playlists/:playlistname" element={<PlayList/>}></Route>
    </Routes>

   

    </div>
  );
}

export default App;
