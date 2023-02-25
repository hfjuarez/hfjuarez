import React from "react";

interface Props {
  children: JSX.Element;
  className?: string;
}
export default function Card({ children, className }: Props) {
  return (
    <div className={`card ${className}`}>
      <>
        {children}
        <div className="card-hover">
          <div class="tl"></div>
          <div class="tm"></div>
          <div class="tr"></div>
          <div class="ml"></div>
          <div class="mm"></div>
          <div class="mr"></div>
          <div class="bl"></div>
          <div class="bm"></div>
          <div class="br"></div>
        </div>
      </>
    </div>
  );
}
