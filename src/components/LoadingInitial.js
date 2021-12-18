import React, { useEffect } from 'react';

function LoadingInitial() {
  useEffect(() => {
    const scrollY = 1000;
    const waitingTime = 3600;
    const timer = setTimeout(() => document.scrollingElement.scroll(0, scrollY),
      waitingTime);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="div__loading-initial bg-black flex min-h-screen">
      <svg viewBox="0 0 100 75" className="m-auto max-w-screen-sm block">
        <g
          stroke="rgb(13, 202, 240)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <g transform="translate(9 10.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 10 h 8 a 7 7 0 0 0 0 -14 h 9 v -6 h -10 a 7 7 0 0 0 0 14 h -10 v 6 z"
              className="svg__letters-1"
            />
          </g>
          <g transform="translate(30 10.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 -10 h 20 v 6 h -7 v 15 h -6 v -15 h -7 z"
              className="svg__letters-2"
            />
          </g>
          <g transform="translate(51 10.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 10 l 7 -20 h 6 l 7 20 h -6 l -1.05 -3 h -5.9 l -1.05 3 z"
              className="svg__letters-3"
            />
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 8 2 h 4 l -2 -5.7 -2 5.7 z"
              className="svg__letters-3"
            />
          </g>
          <g transform="translate(76 10.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 -10 h 12 a 7 7 0 0 1 0 14 l 5 6 h -7 l -5 -6 v 6 h -5.5 z"
              className="svg__letters-4"
            />
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 5 -5 h 5 a 2 2 0 0 1 0 4 h -5 z"
              className="svg__letters-4"
            />
          </g>
          <g transform="translate(0.5 35.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 -10 l 7 20 h 6 l 1.75 -5 1.75 5 h 6 l 7 -20 h -7 l -2.375
              6.8 -2.375 -6.8 h -6 l -2.375 6.8 -2.375 -6.8 h -7z"
              className="svg__letters-5"
            />
          </g>
          <g transform="translate(30 35.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 10 l 7 -20 h 6 l 7 20 h -6 l -1.05 -3 h -5.9 l -1.05 3 z"
              className="svg__letters-6"
            />
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 8 2 h 4 l -2 -5.7 -2 5.7 z"
              className="svg__letters-6"
            />
          </g>
          <g transform="translate(56 35.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 -10 h 12 a 7 7 0 0 1 0 14 l 5 6 h -7 l -5 -6 v 6 h -5.5 z"
              className="svg__letters-7"
            />
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 5 -5 h 5 a 2 2 0 0 1 0 4 h -5 z"
              className="svg__letters-7"
            />
          </g>
          <g transform="translate(82.5 35.5)">
            <path
              strokeDasharray="200"
              strokeDashoffset="200"
              d="M 0 10 h 8 a 7 7 0 0 0 0 -14 h 9 v -6 h -10 a 7 7 0 0 0 0 14 h -10 v 6 z"
              className="svg__letters-8"
            />
          </g>
        </g>
        <g>
          <text
            x="50"
            y="55"
            textLength="100"
            lengthAdjust="spacing"
            textAnchor="middle"
            fill="hsl(0, 0%, 100%)"
            className="text__planets"
          >
            Planets

          </text>
        </g>
      </svg>
    </div>
  );
}

export default LoadingInitial;
