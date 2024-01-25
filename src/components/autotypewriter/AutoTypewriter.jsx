  import React from "react";
  import { Cursor, Typewriter } from "react-simple-typewriter";
  import "./AutoTypewriter.css";

  const AutoTypewriter = () => {
    return (
      <div className="container__card" >
        <div className="card">
          <div className="texto">
            <div>
              <h2 className="subtitulo">Nosotros somos</h2>
            </div>
            <div>
              <h1 className="titulo">
                <Typewriter
                  words={["ARABEER", "CERVECEROS", "CALIDAD", " CERVEZA ARTESANAL"]}
                  loop={0}
                  typeSpeed={150}
                  deleteSpeed={120}
                  delaySpeed={1000}
                />
                <Cursor cursorColor="blue" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AutoTypewriter;
