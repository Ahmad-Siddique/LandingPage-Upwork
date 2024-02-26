import React, { useEffect, useState } from "react";
import "./App.css";
import Logo from "./images/logo.png";
function App() {

  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);
  useEffect(() => {
    

    const timer1 = setTimeout(() => {
      setAnimate1(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setAnimate2(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      setAnimate3(true);
    }, 3000);

    const timer4 = setTimeout(() => {
      setAnimate4(true);
    }, 4000);

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    }; // Cleanup the timer
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {animate1 &&
          <h1
            style={{
              animation: animate1 ? "fadeInAnimation 2s ease-out forwards" : "",
            }}
            className="fade-in first"
          >
            eclipse.com
          </h1>
        }

        {animate2 &&
          <p
            style={{
              animation: animate2 ? "fadeInAnimation 2s ease-out forwards" : "",
            }}
            className="fade-in second"
          >
            may be available...
          </p>
        }

        {animate3 &&
          <p
            style={{
              animation: animate3 ? "fadeInAnimation 2s ease-out forwards" : "",
            }}
            className="fade-in third"
          >
            Inquiries: info<span className="ate">@</span>newreach.com
          </p>
        }
      </header>
      {animate4 && <div class="image-placement">
        <a
          style={{
            animation: animate4 ? "fadeInAnimation 2s ease-out forwards" : "",
          }}
          href="https://www.newreach.com"
          target="_blank"
        >
          <img className="image" src={Logo} alt="Logo" />
        </a>
      </div>
      }
    </div>
  );
}

export default App;
