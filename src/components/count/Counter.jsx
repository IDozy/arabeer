import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./Counter.css";

const CounterElement = () => {
  const [counterOn, setCounterOn] = useState(false);
  const counterRef = useRef(null);

  // Definir un arreglo de datos para los contadores
  const countersData = [
    { title: "MÁS DE", end: 12, description: "Años de experiecia" },
    { title: "MÁS DE", end: 8, description: "Variedades de Cerveza" },
    { title: "MÁS DE", end: 1000, description: "Clientes que nos prefieren" },
    { title: "MÁS DE", end: 28, description: "Locales de distribución " },
  ];

  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCounterOn(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef}>
      <div
        className="container__count container-valores"
        style={{ marginTop: "3rem", padding: "3rem 4%" }}
      >
        <div className="image-overlay-count"></div>

        {counterOn &&
          countersData.map((counter, index) => (
            <div
              className="container__item"
             
              key={index}
            >
              <h1 className="count-title">{counter.title}</h1>
              <h2 className="count-number">
                <CountUp
                  start={0}
                  end={counter.end}
                  duration={3}
                  delay={0}
                  formattingFn={(value) => formatNumber(value)}
                />
              </h2>
              <p className="count-description">{counter.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CounterElement;
