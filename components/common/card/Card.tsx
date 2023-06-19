import React from "react";

interface Props {
  children: JSX.Element;
  className?: string;
}
export default function Card({ children, className }: Props) {
  return (
    <div className={`card has-hover ${className}`}>
      <>
        {children}
        <div className="card-hover">
          <div className="tl"></div>
          <div className="tm"></div>
          <div className="tr"></div>
          <div className="ml"></div>
          <div className="mm"></div>
          <div className="mr"></div>
          <div className="bl"></div>
          <div className="bm"></div>
          <div className="br"></div>
        </div>
      </>
    </div>
  );
}
