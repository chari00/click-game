import "./App.css";
import { useState } from "react";

function App() {
  const [spbChar, setSpbChar] = useState([
    {
      url: "https://64.media.tumblr.com/5b8f579afb69eebe64ad8efef66392ef/tumblr_nhn66gVk3M1u75st9o1_640.png",
    },
    {
      url: "https://64.media.tumblr.com/eecc0dabc950626bd32c902f28c4e7fa/tumblr_nj4rfrJwwD1u75st9o1_640.png",
    },
    {
      url: "https://i.pinimg.com/originals/df/8a/67/df8a670a28358af8f8213f40ec79f1d6.png",
    },
    {
      url: "https://i.pinimg.com/originals/8a/9a/86/8a9a86e2411a7a5fc9f415f6c5a54e52.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM_8dwrVUweR-9zBMjqVyAqo-0NTdnLWQ3g&usqp=CAU",
    },
    {
      url: "https://i.pinimg.com/originals/4d/d1/1a/4dd11a13ff5b32971b6461b9da9bc59b.png",
    },
    {
      url: "https://i.pinimg.com/originals/72/16/62/721662bd9314be1072c8cf510dc321b7.png",
    },
    {
      url: "https://64.media.tumblr.com/053a07e0fbbc6199d5a70d61bb52cb2f/tumblr_ny3l5mMh8Q1u75st9o1_640.png",
    },
    {
      url: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO2_EverettCollection_SpongeBobChars.JPG",
    },
    {
      url: "https://variety.com/wp-content/uploads/2019/03/spongebob.jpg?w=1000",
    },
    {
      url: "https://www.j-14.com/wp-content/uploads/2019/07/spongebob-squarepants-characters.jpg?fit=800%2C449&quality=86&strip=all",
    },
    {
      url: "https://media.thetab.com/blogs.dir/90/files/2022/01/271520735-663204678154092-3084552772495202642-n.jpg",
    },
  ]);

  const [count, setCount] = useState(0);
  return (
    <div>
      <nav className="navbar navbar-title bg-dark">Clicky Game</nav>
      <p className="navbar-subTitle bg-primary">
        Test your memory, do not click the same image. <p className="='navbar-subTitle">Click an image to begin!</p>
      </p>
      <nav className="navbar navbar-text">
        Score:<span className="navbar-score"> 0</span>
      </nav>

      <div className="card-container">
        {spbChar.map((char) => {
          return (
            <div className="Card col-md-6 col-lg-4">
              <img
                src={char.url}
                className="card-img"
                alt="spongebobChar"
                onClick={() => {
                  setSpbChar([...spbChar.sort(() => 0.5- Math.random())]);
                  setCount(count + 1);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
