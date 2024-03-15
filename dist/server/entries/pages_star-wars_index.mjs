import { i as import_0 } from "../chunks/chunk-AN-qEkmI.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useData } from "../chunks/chunk-CGrb4-Sy.js";
import fetch from "node-fetch";
import "react-dom/server";
import "react";
import "prop-types";
import "vike/server";
function Page() {
  const { movies } = useData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Star Wars Movies" }),
    /* @__PURE__ */ jsx("ol", { children: movies.map(({ id, title, release_date }) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("a", { href: `/star-wars/${id}`, children: title }),
      " (",
      release_date,
      ")"
    ] }, id)) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Source: ",
      /* @__PURE__ */ jsx("a", { href: "https://brillout.github.io/star-wars/", children: "brillout.github.io/star-wars" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Data can be fetched by using the ",
      /* @__PURE__ */ jsx("code", { children: "data()" }),
      " hook."
    ] })
  ] });
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async (pageContext) => {
  await sleep(700);
  const response = await fetch("https://brillout.github.io/star-wars/api/films.json");
  const moviesData = await response.json();
  const movies = minimize(moviesData);
  return {
    movies,
    // The page's <title>
    title: `${movies.length} Star Wars Movies`
  };
};
function minimize(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
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
    importPath: "/pages/star-wars/index/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "data",
    importPath: "/pages/star-wars/index/+data.js",
    isValueFile: true,
    exportValues: import_2
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
