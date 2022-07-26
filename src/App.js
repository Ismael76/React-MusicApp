import React from "react";
import { Counter, Card } from "./components";
import "../public/styles.css";

const App = ({ name, otherName }) => {
  const songs = [
    {
      title: "Better",
      album: "Suncity",
      release: "2018",
      cover:
        "https://sundial.csun.edu/wp-content/uploads/2018/11/sun-900x642.jpg",
      link: "https://www.youtube.com/watch?v=cXrd_IQzCtM",
    },
    {
      title: "OTW",
      album: "OTW",
      release: "2018",
      cover: "https://i1.sndcdn.com/artworks-000389623602-fweezt-t500x500.jpg",
      link: "https://www.youtube.com/watch?v=u62rB_G_vao",
    },
    {
      title: "Motion",
      album: "Suncity",
      release: "2018",
      cover:
        "https://sundial.csun.edu/wp-content/uploads/2018/11/sun-900x642.jpg",
      link: "https://www.youtube.com/watch?v=ILsRLNzWyDU",
    },
  ];

  return (
    <div class="container">
      <h1 className="title">Khalid</h1>
      <p className="bio">
        Khalid Donnel Robinson is an American singer signed to Right Hand Music
        Group and RCA Records. He rose to fame after the release of his debut
        studio album American Teen, which was certified 4× platinum by the
        Recording Industry Association of America.
      </p>

      {songs.map((song, index) => {
        return (
          <Card
            key={index}
            title={song.title}
            album={song.album}
            release={song.release}
            cover={song.cover}
            link={song.link}
          />
        );
      })}
      {/* <Card
        title="OTW"
        album="OTW"
        release="2018"
        cover="https://i1.sndcdn.com/artworks-000389623602-fweezt-t500x500.jpg"
      /> */}
    </div>
  );
};

export default App;
