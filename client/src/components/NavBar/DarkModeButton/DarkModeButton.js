import React, { useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkModeContext";

import "./DarkModeButton.scoped.scss";

const DarkModeButton = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);

  return (
    <div
      className="nav-logo"
      onClick={switchTheme}
      data-theme={theme}
      title="Click me!"
    >
      {/* referencing logo by import does not work for dynamic styling */}
      {/* <img src={logo} alt="Ghost looking logo" /> */}
      {/* <object data={logo} type="image/svg+xml">Ghost looking logo</object> */}

      {/* svg of logo imported directly as code */}
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet">
      <metadata>
      Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
      fill="#202020" stroke="none">
      <path d="M843 2248 c3 -13 11 -51 18 -85 l13 -62 -67 -70 c-46 -47 -78 -92
      -102 -143 -44 -93 -92 -262 -101 -355 -4 -50 -11 -74 -21 -78 -12 -4 -13 -8
      -3 -20 16 -19 0 -114 -41 -243 -17 -51 -32 -101 -34 -110 -13 -64 -31 -123
      -50 -162 -12 -25 -39 -88 -59 -140 -44 -110 -66 -154 -98 -194 -117 -148 -132
      -162 -148 -136 -13 21 -22 7 -14 -24 6 -26 27 -35 39 -17 3 6 19 16 35 24 29
      15 30 15 65 -33 53 -72 56 -74 114 -56 50 15 141 71 141 88 0 4 4 8 9 8 5 0
      18 -26 29 -57 l19 -58 44 2 c54 3 94 18 142 55 21 17 44 27 52 24 8 -3 31 -30
      51 -61 33 -50 41 -56 63 -50 40 10 83 32 163 85 l73 48 53 -50 c49 -47 56 -50
      92 -45 24 3 55 18 77 36 l38 32 15 -23 c30 -45 59 -68 88 -68 36 0 94 23 117
      47 16 16 18 16 28 -3 21 -38 75 -84 99 -84 26 0 48 33 48 70 0 24 -2 24 56 0
      30 -13 64 -20 90 -18 l43 3 -29 65 c-18 40 -30 82 -30 110 0 40 32 287 45 344
      7 29 14 66 36 181 33 169 14 456 -37 565 -25 53 -128 183 -206 261 l-38 37 19
      59 c27 83 61 227 61 257 0 32 -5 32 -66 -1 -27 -14 -63 -34 -80 -43 -16 -9
      -58 -37 -91 -63 -34 -26 -65 -47 -69 -47 -3 0 -29 16 -56 36 -27 19 -91 56
      -141 82 -87 44 -96 47 -172 47 -67 0 -89 -4 -133 -27 l-52 -26 -15 27 c-16 32
      -83 81 -109 81 -14 0 -17 -5 -13 -22z m98 -62 l22 -29 -29 -24 c-16 -12 -31
      -23 -34 -23 -4 0 -12 26 -19 58 -7 31 -15 63 -18 71 -9 23 53 -19 78 -53z
      m299 4 c31 -9 221 -113 263 -144 16 -12 14 -18 -24 -75 -23 -34 -38 -65 -34
      -69 7 -7 11 -2 65 75 l30 42 72 -40 c40 -23 86 -54 102 -69 28 -27 28 -30 17
      -74 -13 -53 -15 -146 -2 -146 4 0 11 34 14 76 3 42 10 81 15 86 12 12 196
      -209 228 -275 13 -29 27 -69 31 -89 l6 -38 -132 0 c-81 0 -131 -4 -131 -10 0
      -6 48 -10 123 -10 67 0 127 -4 134 -8 8 -5 14 -56 18 -147 6 -119 3 -156 -14
      -245 -54 -267 -70 -367 -78 -486 -5 -84 -4 -96 20 -148 l26 -56 -24 0 c-14 0
      -50 11 -81 25 -31 14 -60 23 -64 20 -4 -2 -10 -23 -13 -46 -3 -22 -8 -44 -12
      -47 -16 -17 -92 54 -107 100 -2 6 -23 -3 -49 -21 -24 -17 -60 -34 -80 -37 -32
      -5 -40 -2 -68 27 -17 19 -34 42 -37 52 -5 17 -34 24 -34 8 0 -4 -17 -20 -38
      -35 -58 -40 -97 -35 -152 19 -25 25 -50 45 -56 45 -6 0 -31 -15 -55 -34 -55
      -42 -156 -96 -179 -96 -9 0 -35 24 -56 52 -47 63 -72 70 -115 33 -36 -30 -79
      -49 -129 -59 -35 -6 -36 -5 -49 31 -24 73 -34 93 -43 93 -5 0 -24 -16 -43 -35
      -39 -38 -111 -75 -148 -75 -17 0 -36 16 -70 59 l-46 60 42 53 c23 29 44 55 47
      58 29 25 165 362 200 494 17 64 35 126 40 139 5 12 11 34 14 48 5 21 13 28 43
      34 53 9 103 35 103 51 0 18 -14 18 -29 1 -11 -14 -90 -42 -97 -34 -3 2 -1 30
      2 62 l7 58 69 -6 c37 -3 68 -2 68 2 0 12 -38 21 -89 21 l-44 0 7 66 c11 103
      66 293 112 383 9 19 45 64 80 100 l63 66 1 -47 c0 -27 5 -48 10 -48 6 0 10 25
      10 55 0 52 2 56 38 79 l37 24 36 -76 c20 -41 40 -97 43 -123 6 -42 20 -68 31
      -57 4 3 -16 89 -34 146 -5 18 -21 53 -34 77 l-25 43 57 26 c60 27 132 33 191
      16z m580 4 c0 -15 -63 -263 -69 -273 -6 -8 -17 -3 -38 16 -17 16 -55 41 -86
      56 -31 15 -58 31 -61 36 -7 11 90 86 173 133 66 38 81 43 81 32z"/>
      <path d="M1056 1692 c-2 -4 -6 -39 -7 -77 -2 -54 1 -71 12 -73 11 -2 14 14 14
      78 0 73 -5 94 -19 72z"/>
      <path d="M1189 1648 c0 -2 -2 -32 -3 -68 -1 -36 -4 -70 -7 -76 -2 -7 1 -13 6
      -14 6 0 13 9 17 22 10 37 9 126 -2 133 -5 3 -10 5 -11 3z"/>
      <path d="M1086 1341 c-3 -5 -4 -16 0 -24 6 -18 -34 -60 -79 -83 -18 -9 -39
      -23 -49 -31 -10 -9 -31 -13 -55 -11 l-38 3 1 63 c0 34 -2 62 -6 62 -25 0 -28
      -121 -4 -141 33 -27 85 -16 157 34 l69 47 25 -20 c19 -15 41 -20 85 -20 49 0
      65 4 94 28 33 26 45 52 24 52 -5 0 -10 -3 -10 -7 0 -21 -69 -53 -113 -53 -60
      0 -89 25 -81 69 6 28 -9 51 -20 32z"/>
      <path d="M1812 1280 c4 -49 9 -66 31 -88 30 -29 39 -12 10 20 -9 10 -18 42
      -21 73 -2 30 -9 55 -14 55 -6 0 -9 -24 -6 -60z"/>
      <path d="M699 1197 c-43 -46 -110 -157 -103 -169 8 -13 18 -3 44 47 13 26 42
      67 63 91 48 55 45 84 -4 31z"/>
      <path d="M1747 1094 c-4 -4 5 -21 20 -38 14 -17 33 -47 41 -66 11 -25 17 -30
      19 -18 8 34 -62 140 -80 122z"/>
      </g>
      </svg>

      <div className="sky">
        <div className="sun">
          <div className="outer" />
          <div className="inner" />
        </div>
        <div className="moon" />
        <div className="cloud cloud1">
          <div className="rect" />
          <div className="circle circle-lg" />
          <div className="circle circle-sm" />
        </div>
        <div className="cloud cloud2">
          <div className="rect" />
          <div className="circle circle-lg" />
          <div className="circle circle-sm" />
        </div>
      </div>
    </div>
  );
};

export default DarkModeButton;