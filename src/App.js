import "./App.css";
import {  useState } from "react";



export default function App() {


  const [spbChar, setSpbChar] = useState([
    { "id": 1,
      "url": "https://64.media.tumblr.com/5b8f579afb69eebe64ad8efef66392ef/tumblr_nhn66gVk3M1u75st9o1_640.png",
      "clicked": false
    },
    {"id": 2,
      "url": "https://64.media.tumblr.com/eecc0dabc950626bd32c902f28c4e7fa/tumblr_nj4rfrJwwD1u75st9o1_640.png",
      "clicked": false
    },
    {"id": 3,
      "url": "https://i.pinimg.com/originals/df/8a/67/df8a670a28358af8f8213f40ec79f1d6.png",
      "clicked": false
    },
    {"id": 4,
      "url": "https://i.pinimg.com/originals/8a/9a/86/8a9a86e2411a7a5fc9f415f6c5a54e52.jpg",
      "clicked": false
    },
    {"id": 5,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM_8dwrVUweR-9zBMjqVyAqo-0NTdnLWQ3g&usqp=CAU",
      "clicked": false
    },
    {"id": 6,
      "url": "https://i.pinimg.com/originals/4d/d1/1a/4dd11a13ff5b32971b6461b9da9bc59b.png",
      "clicked": false
    },
    {"id":7 ,
      "url": "https://i.pinimg.com/originals/72/16/62/721662bd9314be1072c8cf510dc321b7.png",
      "clicked": false
    },
    {"id": 8,
      "url": "https://64.media.tumblr.com/053a07e0fbbc6199d5a70d61bb52cb2f/tumblr_ny3l5mMh8Q1u75st9o1_640.png",
      "clicked": false
    },
    {"id": 9,
      "url": "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO2_EverettCollection_SpongeBobChars.JPG",
      "clicked": false
    },
    {"id": 10,
      "url": "https://variety.com/wp-content/uploads/2019/03/spongebob.jpg?w=640",
      "clicked": false
    },
    {"id": 11,
      "url": "https://www.j-14.com/wp-content/uploads/2019/07/spongebob-squarepants-characters.jpg?fit=800%2C449&quality=86&strip=all",
      "clicked": false
    },
    {"id": 12,
      "url": "https://media.thetab.com/blogs.dir/90/files/2022/01/271520735-663204678154092-3084552772495202642-n.jpg",
      "clicked": false
    },
    {"id": 13,
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeC6UCGjfsgOcBnW1p3v7Cm_6CTTqSgzhxGQ&usqp=CAU",
      "clicked": false

    },
    {"id": 14,
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TEzHs9HI_3QioyD49IWaQt9ITcQsaQImfA&usqp=CAU",
    "clicked": false

    },
    {"id": 15,
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeoDuOGDJdMNrUHIrfYaUyJqJCFlF4KuBeg&usqp=CAU",
    "clicked": false

    },
    {"id": 16,
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwfrwgU4E7E8ywr-azgnLCDNRCfZV7TFtt3h9vrSAwBOdiHaMoxK6-zoYdkdEYfoerbw&usqp=CAU",
    "clicked": false

    },
    {"id": 17,
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-LHgWY463mZd5ujQ4hTTR7RrmMqjuhNMPg&usqp=CAU",
    "clicked": false

    },
    {"id": 18,
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AJ5S_XspXp8MHl2RxTd65KFzeikDc_pUWw&usqp=CAU",
    "clicked": false

    }
  ]);
  const [count, setCount] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const handleClick = (id) => {
    const updatedChar = spbChar.map((char) => {
      if (char.id === id && !char.clicked) {
        return { ...char, clicked: true };
      }
      return char;
    });

    setSpbChar([...updatedChar.sort(() => 0.5 - Math.random())]);

    // Update score only if the image was not previously clicked
    const clickedChar = spbChar.find((char) => char.id === id && !char.clicked);
    if (clickedChar) {
      setCount(count + 1);
      if (count >= topScore) {
        setTopScore(count + 1);
      }
    } else {
      // Reset score if the clicked image was previously clicked
      setCount(0);
    }
  };

  return (
    <>
      <nav className="navbar navbar-title bg-dark">Click Game</nav>
      <p className="navbar-subTitle bg-primary">
        Test your memory, don't click the same image twice!
        <p className="navbar-subTitle">Click an image to begin!</p>
      </p>
      <nav className="navbar navbar-text">
        Score:<span className="navbar-score"> {count}</span>
        <span>
          | Top Score: <span> {topScore}</span>
        </span>
      </nav>

      <div className="card-container">
        {spbChar.map((char) => (
          <div className="Card" key={char.id}>
            <img
              src={char.url}
              className="card-img"
              alt="spongeBobChar"
              onClick={() => handleClick(char.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
