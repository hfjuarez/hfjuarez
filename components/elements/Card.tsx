import React, { useRef, useEffect } from "react";
import styles from "../../styles/Stack.module.css";

interface Props {
  children: JSX.Element;
  className?: string;
}
export default function Card({ children, className }: Props) {
  let bounds;
  const inputRef = useRef<any>();
  const rotateToMouse = (e: any) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
  };
  const removeListener = (e: any) => {
    inputRef.current.style.transform = "";
    inputRef.current.style.background = "";
  };
  useEffect(() => {});

  return (
    <div
      className={`${className} card`}
      ref={inputRef}
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}
    >
      <>{children}</>
    </div>
  );
}
