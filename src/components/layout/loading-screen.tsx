import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  fadeOut: boolean;
}

const quotes = [
  {
    text: "It eluded us then, but that's no matter- tomorrow we will run faster, stretch out our arms farther ... And one fine morning- So we beat on, boats against the current, borne back ceaselessly into the past.",
    author: "Francis Scott Key Fitzgerald",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Henry Stanley Haskins",
  },
  {
    text: "To see a world in a grain of sand\nAnd a heaven in a wild flower,\nHold infinity in the palm of your hand\nAnd eternity in an hour.",
    author: "William Blake, Auguries of Innocence",
  },
  {
    text: "If the going is tough and the pressure is on, if the reserves of strength have been drained and the summit is still not in sight, then the quality to seek in the person is neither great strength nor quickness of hand, but rather a resolute mind firmly set on its purpose that refuses to let its body slack or rest.",
    author: "Sir Edmund Henry",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Benjamin Franklin",
  },
  {
    text: "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.",
    author: "Sylvia Plath",
  },
  {
    text: "Two roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
    author: "Robert Frost",
  },
  {
    text: "Out of the night that covers me,\nBlack as the Pit from pole to pole,\nI thank whatever gods may be\nFor my unconquerable soul.\nI am the master of my fate,\nI am the captain of my soul.",
    author: "William Ernest Henley",
  },
  {
    text: "Noodles; don't noodles. You are too concerned with what was and what will be. There is a saying: yesterday is history, tomorrow is a mystery, but today is a gift.",
    author: "Master Oogway, Kung Fu Panda",
  },
  {
    text: "Time is a river which carries me along, but I am the river\nIt is a tiger that devours me, but I am the tiger.",
    author: "Jorge Luis Borges",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "I wanted the world to know that no one would ever again be able to hurt me. That my spirit had triumphed, even if my body hadn't.",
    author: "Elie Wiesel",
  },
  {
    text: "“I wish it need not have happened in my time,“ said Frodo. “So do I,“ said Gandalf, “and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.”",
    author: "J.R.R. Tolkien, The Fellowship of the Ring",
  },
  {
    text: "“What if I fail?”\n“You will. That’s what makes you strong.”",
    author: "Cressida Cowell, How to Cheat a Dragon's Curse"
  }
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ fadeOut }) => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-black text-white px-6 text-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } font-centaur`}
    >
      <div className="quote-container">
        <p className="text-lg md:text-xl italic tracking-wide mb-4 quote-text">
          {quote.text.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="quote-author-div">
          <p className="text-sm md:text-base tracking-widest quote-author">
            — {quote.author}
          </p>
        </div>
      </div>
      <style jsx>{`
        @font-face {
          font-family: "Centaur";
          src: url("/fonts/Centaur-Regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        .font-centaur {
          font-family: "Centaur", serif;
        }

        .quote-container {
          max-width: 42rem;
        }

        .quote-text {
          animation: fadeInUp 1.5s ease-out forwards;
          opacity: 0;
        }

        .quote-author {
          animation: fadeInUp 1.5s ease-out 0.5s forwards;
          text-align: right;
          opacity: 0;
        }

        .quote-author-div {
          text-align: right;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
