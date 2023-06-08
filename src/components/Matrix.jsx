import { useEffect, useRef } from "react";
import { stringLetters, font, colorBagraund, colorLetters } from "../variables";

export const Matrix = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const C = canvasRef.current;
    const $ = C.getContext("2d");
    const W = (C.width = window.innerWidth);
    const H = (C.height = window.innerHeight);
    const matrix = stringLetters.split("");

    let col = W / font;
    let arr = [];

    for (let i = 0; i < col; i++) arr[i] = 1;

    function draw() {
      $.fillStyle = colorBagraund;
      $.fillRect(0, 0, W, H);
      $.fillStyle = colorLetters;
      $.font = font + "px system-ui";
      for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        $.fillText(txt, i * font, arr[i] * font);
        if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
        arr[i]++;
      }
    }

    setInterval(draw, 123);
  }, []);

  window.addEventListener("resize", () => location.reload());
  return <canvas ref={canvasRef}></canvas>;
};
