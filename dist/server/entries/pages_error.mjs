import { u as usePageContext, i as import_0 } from "../chunks/chunk-AN-qEkmI.js";
import { jsx } from "react/jsx-runtime";
import "react-dom/server";
import "react";
import "prop-types";
import "vike/server";
function Page() {
  const pageContext = usePageContext();
  let { abortReason } = pageContext;
  if (!abortReason) {
    abortReason = pageContext.is404 ? "Page not found." : "Something went wrong.";
  }
  return /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx("p", { style: { fontSize: "1.3em" }, children: abortReason }) });
}
function Center({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children
    }
  );
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
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
    importPath: "/pages/_error/+Page.jsx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {};
export {
  configValuesImported,
  configValuesSerialized
};
