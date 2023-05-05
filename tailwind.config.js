/** @type {import('tailwindcss').Config} */
import { black as _black, white as _white, gray as _gray, slate as _slate, zinc as _zinc, neutral as _neutral, stone as _stone, red as _red, orange as _orange, amber as _amber, yellow as _yellow, lime as _lime, green as _green, emerald as _emerald, teal as _teal, cyan as _cyan, sky as _sky, blue as _blue, indigo as _indigo, violet as _violet, purple as _purple, fuchsia as _fuchsia, pink as _pink, rose as _rose } from "tailwindcss/colors";

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
    center: true,
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: _black,
    white: _white,
    gray: _gray,
    slate: _slate,
    zinc: _zinc,
    neutral: _neutral,
    stone: _stone,
    red: _red,
    orange: _orange,
    amber: _amber,
    yellow: _yellow,
    lime: _lime,
    green: _green,
    emerald: _emerald,
    teal: _teal,
    cyan: _cyan,
    sky: _sky,
    blue: _blue,
    indigo: _indigo,
    violet: _violet,
    purple: _purple,
    fuchsia: _fuchsia,
    pink: _pink,
    rose: _rose,
  },
  extend: {},
};
export const plugins = [];
