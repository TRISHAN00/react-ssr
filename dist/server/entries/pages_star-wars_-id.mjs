import { i as import_0 } from "../chunks/chunk-AN-qEkmI.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useData } from "../chunks/chunk-CGrb4-Sy.js";
import fetch from "node-fetch";
import "react-dom/server";
import "react";
import "prop-types";
import "vike/server";
function Page() {
  const { movie } = useData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: movie.title }),
    "Release Date: ",
    movie.release_date,
    /* @__PURE__ */ jsx("br", {}),
    "Director: ",
    movie.director,
    /* @__PURE__ */ jsx("br", {}),
    "Producer: ",
    movie.producer
  ] });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async (pageContext) => {
  await sleep(300);
  const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
  let movie = await response.json();
  movie = minimize(movie);
  return {
    movie,
    // The page's <title>
    title: movie.title
  };
};
function minimize(movie) {
  const { id, title, release_date, director, producer } = movie;
  movie = { id, title, release_date, director, producer };
  return movie;
}
function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds));
}
const import_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/renderer/+onRenderHtml.jsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/pages/star-wars/@id/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "data",
    importPath: "/pages/star-wars/@id/+data.js",
    isValueFile: true,
    exportValues: import_2
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
