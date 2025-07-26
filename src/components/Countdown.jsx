import React, { useState } from "react";
import Box from "./Box";
import "../App.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Play from "./Play";
import Counter from "./Counter";
import cryingColour from "/crying_colour.png";
import "./fonts.css";
import { Confetti } from "@neoconfetti/react";
import ReactPlayer from "react-player";
import { FaTwitterSquare } from "react-icons/fa";
import ILoveYou from "../assets/iloveyou.mp4";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import Sparkle from 'react-sparkle'


const Countdown = () => {
  const [playing, setPlaying] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [playingVid, setPlayingVid] = useState(false);
  const [sparkles, setSparkles] = useState(false);
  const [credits, setCredits] = useState(false);

  const parkIcon = new L.Icon({
  iconUrl: '/countdown-leo/pine.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});
const museumIcon = new L.Icon({
  iconUrl: '/countdown-leo/museum.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});

const churchIcon = new L.Icon({
  iconUrl: '/countdown-leo/progress.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});

const timsIcon = new L.Icon({
  iconUrl: '/countdown-leo/donut.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});

const cnIcon = new L.Icon({
  iconUrl: '/countdown-leo/cn-tower.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});

const iconicIcon = new L.Icon({
  iconUrl: '/countdown-leo/location-pin.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});

const drinkIcon = new L.Icon({
  iconUrl: '/countdown-leo/beer-mug.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});

const concertIcon = new L.Icon({
  iconUrl: '/countdown-leo/mcr.png', // adjust path
  iconSize: [40, 40],
  iconAnchor: [19, 38],  // tip of the marker
  popupAnchor: [0, -38],
});



  return (
    <>
      {playing && (
        <AudioPlayer
          src="https://archive.org/download/mcr-the-black-parade/The%20Black%20Parade/05%20-%20Welcome%20to%20the%20Black%20Parade.mp3"
          volume={0.5}
          style={{ display: "None" }}
          loop={true}
          autoPlay={true}
        />
      )}

      <div className="flex">
        <div>
          <Play className="m-auto" playing={playing} setPlaying={setPlaying} />
        </div>

        <p
          className="align-bottom text-3xl pt-22"
          style={{ fontFamily: "Swanky and Moo Moo" }}
        >
          Hey, Leo <br />
          I'm super happy cause you're visiting in
          <span style={{ fontFamily: "Arial" }}>...</span>{" "}
        </p>

        
      </div>
      <div onClick={() => setConfetti(!confetti)}>
        <Box>
          {confetti && (
            <div className="w-fit mx-auto" >
              <Confetti
              particleCount={600}
              force={0.7}
              particleShape="mix"
              duration={5000}
              colors={["#ba181b", "#660708", "#0b090a", "#e5383b"]}
              stageHeight={1920}
              stageWidth={1600}
            
            />
            </div>
          )}
          <Counter />
        </Box>
      </div>

      <div>
        <p
          className="align-bottom text-3xl ml-20 pt-4"
          style={{ fontFamily: "Swanky and Moo Moo" }}
        >
          We'll see{" "}
          <span className="cursor-[url('/emo.png'),_auto]">
            My Chemical Romance
          </span> and it's gonna be awesome, but we'll also do a bunch of cool stuff together:{" "}
        </p>
      </div>

      <div className="my-10 mx-auto w-fit">
        <div className="rounded-xl shadow-xl overflow-hidden">
<MapContainer
          center={[43.65435193272175, -79.4082023695689]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "700px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[43.642674758411204, -79.38487930271252]} icon={cnIcon}>
            <Popup>CN Tower</Popup>
          </Marker>
          <Marker position={[43.65334409122496, -79.38316521590076]} icon={iconicIcon}>
            <Popup>Nathan Philips Square</Popup>
          </Marker>
          <Marker position={[43.67812946874554, -79.4089649567081]} icon={iconicIcon}>
            <Popup>Casa Loma</Popup>
          </Marker>
          <Marker position={[43.66797384722963, -79.3938534205212]} icon={museumIcon}>
            <Popup>Royal Ontario Museum</Popup>
          </Marker>
          <Marker position={[43.646655447038135, -79.46325503573856]} icon={parkIcon}>
            <Popup>High Park</Popup>
          </Marker>
          <Marker position={[43.65064564126307, -79.35872595140776]} icon={drinkIcon}>
            <Popup>Distillery District</Popup>
          </Marker>
          <Marker position={[43.65450749096199, -79.35182222299845]} icon={parkIcon}>
            <Popup>Corktown Common</Popup>
          </Marker>
          <Marker position={[43.648845590061896, -79.37070649016631]} icon={iconicIcon}>
            <Popup>St. Lawrence Market</Popup>
          </Marker>
          <Marker position={[43.62222482213766, -79.37480630258065]} icon={parkIcon}>
            <Popup>Toronto Islands</Popup>
          </Marker>
          <Marker position={[43.64399442494178, -79.36917429852957]} icon={iconicIcon}>
            <Popup>Sugar Beach</Popup>
          </Marker>
          <Marker position={[43.63805288242274, -79.38468671749936]} icon={drinkIcon}>
            <Popup>Amsterdam Brewhouse</Popup>
          </Marker>
          <Marker position={[43.64171972195761, -79.38938766267555]} icon={concertIcon}>
            <Popup>Rogers Centre</Popup>
          </Marker>
          <Marker position={[43.64724796837985, -79.37710219925438]} icon={timsIcon}>
            <Popup>Tim Hortons</Popup>
          </Marker>

          <Marker position={[43.67298093130023, -79.38748699695458]} icon={churchIcon}>
            <Popup>Church Street</Popup>
          </Marker>
        </MapContainer>
        </div>
        
        <p style={{ fontFamily: "Swanky and Moo Moo" }} className="text-end text-2xl mt-4">
         * And anything else you want!
        </p>
      </div>

      <div>
        <p
          className="align-bottom text-3xl ml-20 pt-4"
          style={{ fontFamily: "Swanky and Moo Moo" }}
        >
          You can start to get to know the{" "}
          <span className="cursor-[url('/toronto.png'),_auto]">city:</span>{" "}
        </p>
      </div>

      <div className="grid gap-25 grid-cols-2 m-auto w-fit my-10">
        <div className="border-b-10 border-r-10 border-red-400 rounded-xl">
          <ReactPlayer
            src="https://www.youtube.com/watch?v=7Bg-GDWkh5A"
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            config={{
              youtube: {
                start: 93,
              },
            }}
          />
        </div>
        <div className="border-b-10 border-l-10 border-rose-800 rounded-xl">
          <ReactPlayer
            src="https://youtu.be/YsnIdWMfPgE?si=GcU1cc99R62Z8rZD"
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            config={{
              youtube: {
                start: 74,
              },
            }}
          />
        </div>
      </div>

      <div>
        <p
          className="align-bottom text-3xl ml-20 mt-9 pt-5"
          style={{ fontFamily: "Swanky and Moo Moo" }}
        >
          {" "}
          And finally, here's a special gift:
        </p>{" "}
      </div>
      <div className="w-full text-center mt-5 ">
        <div
          className="relative mx-auto w-fit"
          onClick={() => {
            setPlayingVid(true);
            setSparkles(false);
          }}
          
        >
          {sparkles && <>
          <Sparkle color={"random"} count={100} overflowPx={60} flickerSpeed="slow" />
          </>}
          <ReactPlayer
            onEnded={() => {
              setPlayingVid(false);
              setSparkles(true);
            }}
            src={ILoveYou}
            playing={playingVid}
            loop={false}
          ></ReactPlayer>{" "}
        </div>
        <p style={{ fontFamily: "Swanky and Moo Moo" }} className="text-xl">
          PS: I'll also buy you 1 Boston Cream donut from Tim Hortons
        </p>
      </div>

      <p
          className="align-bottom text-3xl ml-20 mt-9 mb-8"
          style={{ fontFamily: "Swanky and Moo Moo" }}
        >Whatever you do in this life, it's not legendary unless your friends are there to see it.</p>

      <div className="w-full absolute bg-stone-900 p-2 border-t-6 border-dotted border-stone-400 outline-offset-2">
        <p className="text-center mx-auto w-fit flex font-semibold text-stone-100">
          Made by Gabi with{" "}
          <img className="size-6 ml-2 bottom-0" src={cryingColour}></img>. For
          Leo
        </p>
        <p className="text-stone-300 text-xs" onClick={() => setCredits(!credits)}>{"> "} Credits</p>
        {credits && <div className="text-stone-200 block text-xs">
          <a href="https://www.flaticon.com/free-icons/lgbt" title="lgbt icons">Lgbt icons created by Vlad Szirka - Flaticon</a>
          <br/>
          <a href="https://www.flaticon.com/free-icons/pine" title="pine icons">Pine icons created by Freepik - Flaticon</a>
          <br />
          <a href="https://www.flaticon.com/free-icons/maps-and-location" title="maps and location icons">Maps and location icons created by Vitaly Gorbachev - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/beer-mug" title="beer mug icons">Beer mug icons created by tulpahn - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/cn-tower" title="cn tower icons">Cn tower icons created by smalllikeart - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/art-gallery" title="art gallery icons">Art gallery icons created by Freepik - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/dessert" title="dessert icons">Dessert icons created by nawicon - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/emo" title="emo icons">Emo icons created by Freepik - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/people" title="people icons">People icons created by Freepik - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/emoji" title="emoji icons">Emoji icons created by amonrat rungreangfangsai - Flaticon</a>
            <br/>
            <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by Freepik - Flaticon</a>



          </div>}

      </div>
    </>
  );
};

export default Countdown;
