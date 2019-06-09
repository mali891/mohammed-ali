import React from "react"

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
    <defs>
      <linearGradient
        id="a"
        x1=".5"
        x2=".5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#8fd3f4" />
        <stop offset="1" stop-color="#37ecba" />
      </linearGradient>
    </defs>
    <g transform="translate(92 -61)" fill="url(#a)">
      <path d="M-59.168 95.9V81.185l-6.45 14.715h-2.4l-6.397-14.715V95.9H-77V77h3.545l6.664 15.38L-60.074 77h3.492v18.9z" />
      <path d="M-67 111a25.007 25.007 0 0 1-9.731-48.035 25.007 25.007 0 0 1 19.462 46.07A24.844 24.844 0 0 1-67 111zm0-46.666a21.672 21.672 0 0 0-8.434 41.631 21.673 21.673 0 0 0 16.868-39.929A21.531 21.531 0 0 0-67 64.334z" />
    </g>
  </svg>
)

export default Logo
