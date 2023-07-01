var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/jreinier/Documents/Me/1 now/zettelkablooey/remix/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/jreinier/Documents/Me/1 now/zettelkablooey/remix/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// empty-module:~/services/dom.client
var require_dom = __commonJS({
  "empty-module:~/services/dom.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/services/text.client
var require_text = __commonJS({
  "empty-module:~/services/text.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");

// app/tailwind.css
var tailwind_default = "/demos/zettelkablooey/build/_assets/tailwind-CDXO3OPO.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "h-full bg-black font-serif text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_react_router_dom.Link,
        {
          className: "absolute left-0 top-0 z-50 m-4",
          to: "/demos/zettelkablooey",
          children: "index"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/demos.zettelkablooey.growth-from-inside.tsx
var demos_zettelkablooey_growth_from_inside_exports = {};
__export(demos_zettelkablooey_growth_from_inside_exports, {
  default: () => GrowthFromInside,
  loader: () => loader2
});
var import_react12 = require("@remix-run/react");

// app/components/GptMesh.tsx
var import_react10 = require("@pixi/react"), import_lodash6 = __toESM(require("lodash")), import_open_simplex_noise = require("open-simplex-noise"), import_pixi = require("pixi.js"), import_react11 = require("react"), import_dom2 = __toESM(require_dom());

// app/components/LoopedGraphics.tsx
var import_react3 = require("@pixi/react"), import_react4 = require("react"), import_tiny_invariant = __toESM(require("tiny-invariant")), import_jsx_runtime3 = require("react/jsx-runtime");
function LoopedGraphics(props) {
  let [t, setT] = (0, import_react4.useState)(0);
  (0, import_react3.useTick)(() => setT(Date.now()));
  let draw = (0, import_react4.useCallback)(
    (g) => {
      (0, import_tiny_invariant.default)(props.draw), props.draw(g);
    },
    [t]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Graphics, { ...props, draw });
}

// app/components/MyLink.tsx
var import_react6 = require("react"), import_react_router_dom2 = require("react-router-dom");

// app/services/animation.ts
var import_lodash2 = __toESM(require("lodash")), import_react5 = require("react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/services/math.ts
var import_lodash = __toESM(require("lodash")), lerp = (a, b, progress, config = { clamp: !0 }) => {
  let value = a + (b - a) * progress;
  return config.clamp ? import_lodash.default.clamp(value, ...[a, b].sort()) : value;
};

// app/services/animation.ts
var useFlicker = (el, {
  go,
  key,
  from,
  to,
  duration,
  units,
  resetTo
}) => {
  let currentFlicker = (0, import_react5.useRef)({ ...from }), startTime = (0, import_react5.useRef)(), nextFrame = (0, import_react5.useRef)();
  (0, import_react5.useEffect)(() => {
    let styleElement = (setAmount) => {
      if (!el)
        return;
      let element = typeof el == "string" ? document.querySelector(el) : el.current;
      if (!element)
        return;
      let amount = setAmount ?? import_lodash2.default.round(
        import_lodash2.default.random(
          currentFlicker.current.min,
          currentFlicker.current.max,
          !0
        ),
        3
      ), unitAmount = typeof units == "function" ? units(amount) : `${amount}${units ?? ""}`;
      element.style.setProperty(key, unitAmount);
    }, flicker = (currentTime) => {
      if (startTime.current || (startTime.current = currentTime), styleElement(), to && duration) {
        let progress = (currentTime - startTime.current) / duration;
        if (currentFlicker.current.max = lerp(from.max, to.max, progress), currentFlicker.current.min = lerp(from.min, to.min, progress), progress > 1)
          return;
      }
      go && (nextFrame.current = requestAnimationFrame(flicker));
    };
    return go && (nextFrame.current = requestAnimationFrame(flicker)), () => {
      nextFrame.current && cancelAnimationFrame(nextFrame.current), styleElement(resetTo ?? from.max);
    };
  }, [go, el]);
}, useFlickers = (els, config) => {
  let i = 0;
  if (typeof config == "function")
    for (let el of els)
      useFlicker(el, config(i)), i++;
  else if (config instanceof Array)
    for (let el of els)
      (0, import_tiny_invariant2.default)(config[i], "Not enough configs in list"), i++, useFlicker(el, config[i]);
  else
    for (let el of els)
      useFlicker(el, config);
};

// app/components/MyLink.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function MyLink({
  to,
  children,
  altText
}) {
  let [isOver, setIsOver] = (0, import_react6.useState)(!1), el = (0, import_react6.useRef)(null);
  return useFlicker(el, {
    go: isOver,
    from: { max: 1, min: 0 },
    key: "opacity"
  }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react_router_dom2.Link,
    {
      to,
      onMouseEnter: () => setIsOver(!0),
      onMouseLeave: () => setIsOver(!1),
      ref: el,
      className: "font-bold text-blue-400",
      children: isOver && altText ? altText : children
    }
  );
}

// app/routes/demos.zettelkablooey._index.tsx
var demos_zettelkablooey_index_exports = {};
__export(demos_zettelkablooey_index_exports, {
  default: () => Index,
  loader: () => loader,
  text: () => text
});
var import_web = require("@react-spring/web"), import_react7 = require("@remix-run/react"), import_lodash4 = __toESM(require("lodash")), import_matter_js = require("matter-js"), import_react8 = require("react");
var import_dom = __toESM(require_dom());

// app/services/gpt.server.ts
var import_openai = require("openai");

// app/services/data.server.ts
var import_fs = require("fs"), import_lodash3 = __toESM(require("lodash")), data = JSON.parse(
  (0, import_fs.readFileSync)(process.cwd() + "/public/data.json").toString("utf-8")
);
function readResponse(post) {
  return import_lodash3.default.sample(data.posts[post]) ?? "";
}
function writeResponse(post, response) {
  data.posts[post] ? data.posts[post].push(response) : data.posts[post] = [response], saveData();
}
function saveData() {
  (0, import_fs.writeFileSync)(process.cwd() + "/public/data.json", JSON.stringify(data));
}

// app/services/gpt.server.ts
var generatePrompt = async (prompt, config = {
  temperature: 2,
  stream: !1
}) => {
  let openai = new import_openai.OpenAIApi(
    new import_openai.Configuration({ apiKey: process.env.GPT_SECRET })
  ), response = (async () => {
    var _a;
    let response2 = ((_a = (await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      ...config
    })).data.choices[0].message) == null ? void 0 : _a.content) ?? "";
    return response2 && writeResponse(prompt, response2), response2;
  })();
  return readResponse(prompt) || await response;
};

// app/routes/demos.zettelkablooey._index.tsx
var import_text = __toESM(require_text()), import_jsx_runtime5 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react8.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {}), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ClientIndex, {}) });
}
function ClientIndex() {
  let [data2, setData] = (0, import_react8.useState)({
    event: document.referrer ? "explode" : "start"
  }), { w } = (0, import_dom.useDimensions)(), titleRef = (0, import_react8.useRef)(null);
  return useFlicker(titleRef, {
    go: data2.event === "explode",
    key: "opacity",
    from: { max: 1, min: 0 },
    to: { max: 0, min: 0 },
    duration: 600
  }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative h-full w-full child:absolute child:-translate-x-1/2 child:-translate-y-1/2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        onClick: () => data2.event === "start" && setData({ ...data2, event: "explode" }),
        className: "left-1/2 top-1/2",
        style: {
          fontSize: w * 2 / 14 * 0.25
        },
        ref: titleRef,
        children: "zettelkablooey"
      }
    ),
    data2.event === "explode" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Explosion, {})
  ] });
}
async function loader() {
  return await generatePrompt("What is a Zettelkasten?");
}
var FONT_SIZE = 0.8, text = [
  {
    t: "zettelkasten",
    w: 12 * 48 * FONT_SIZE,
    s: { fontSize: 48 },
    o: 0.6,
    id: "zettelkasten"
  },
  {
    t: "kann hier nicht deduktiv, nicht aus einer Obersicht...nicht durch Auswahl der besten geantwortet werden.",
    w: 104 / 2 * 10 * FONT_SIZE,
    s: { fontSize: 10 },
    o: 0.5,
    id: "no-answer"
  },
  {
    t: "Verweisungsmoglichkeiten",
    w: 24 * 18 * FONT_SIZE,
    s: { fontSize: 18 },
    o: 0.8,
    id: "linking"
  },
  {
    t: "den Proze\xDF des Wiederfindens",
    w: 28 * 15 * FONT_SIZE,
    s: { fontSize: 15 },
    o: 0.7,
    id: "registry"
  },
  {
    t: "Stellordnung",
    w: 12 * 19,
    s: { fontSize: 19 },
    o: 0.8,
    id: "ordering"
  },
  {
    t: "gegen eine systematiscbe Ordnung",
    w: 32 * 20 * FONT_SIZE,
    s: { fontSize: 20 },
    o: 0.7,
    id: "without-order"
  },
  {
    t: "Systemtheorie",
    w: 13 * 24 * FONT_SIZE,
    s: { fontSize: 24 },
    o: 0.7,
    id: "systems"
  },
  {
    t: "Aber Kommunikation?",
    w: 19 * 36 * FONT_SIZE,
    s: { fontSize: 36 },
    o: 0.6,
    id: "communication"
  },
  {
    t: "Inkorporierung von Zufall",
    w: 25 * 14,
    s: { fontSize: 14 },
    o: 0.8,
    id: "chance"
  },
  {
    t: "eine Art Zweitged\xE4chtnis, ein alter Ego",
    w: 39 * 24 * FONT_SIZE,
    s: { fontSize: 24 },
    o: 0.9,
    id: "alter-ego"
  },
  {
    t: "die entsprechende Kombination von Ordnung und Unordnung",
    w: 55 / 2 * 13 * FONT_SIZE,
    s: { fontSize: 13 },
    o: 0.6,
    id: "order-disorder"
  },
  {
    t: "Wachstum nach innen",
    w: 19 * 17 * FONT_SIZE,
    s: { fontSize: 17 },
    o: 0.4,
    id: "growth-from-inside"
  },
  {
    t: "k\xF6nnen wir bestatigen.",
    w: 22 * 16 * FONT_SIZE,
    s: { fontSize: 16 },
    o: 0.8,
    id: "assured"
  }
];
function Explosion() {
  var _a;
  let gptText = (0, import_text.useFakeStream)((0, import_react7.useLoaderData)(), { speed: 50 }), { w, h } = (0, import_dom.useDimensions)(), mousePosition = (0, import_dom.useMousePosition)(), randomVectors = (0, import_react8.useMemo)(
    () => text.map(
      (fragment) => import_matter_js.Vector.create(import_lodash4.default.random(w - fragment.w, !0), import_lodash4.default.random(h - 50, !0))
    ),
    []
  ), [springs, api] = (0, import_web.useSprings)(
    text.length,
    (i) => {
      let toMouse = import_matter_js.Vector.sub(randomVectors[i], mousePosition);
      return {
        from: import_matter_js.Vector.create(w / 2, h / 2),
        to: import_matter_js.Vector.add(
          randomVectors[i],
          import_matter_js.Vector.mult(
            import_matter_js.Vector.normalise(toMouse),
            lerp(20, 0, import_matter_js.Vector.magnitude(toMouse) / w, { clamp: !0 })
          )
        ),
        config: {
          damping: 500,
          friction: 10 * import_lodash4.default.random(0.9, 1.1),
          tension: 250 * import_lodash4.default.random(0.8, 1.2)
        }
      };
    },
    [mousePosition]
  );
  useFlickers(
    text.map((fragment) => "#" + fragment.id),
    (i) => ({
      from: { min: 0, max: text[i].o },
      to: { min: text[i].o, max: text[i].o },
      duration: 2e3 * import_lodash4.default.random(0.8, 1.2),
      key: "opacity",
      go: !0
    })
  );
  let [over, setOver] = (0, import_react8.useState)("");
  return useFlicker(over ? "#" + over : "", {
    go: !!over,
    from: { max: 1, min: 0 },
    key: "opacity",
    resetTo: (_a = text.find((el) => el.id === over)) == null ? void 0 : _a.o
  }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "left-1/2 top-1/2 h-full w-full overflow-hidden opacity-20", children: gptText }),
    text.map((fragment, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_web.animated.div,
      {
        id: fragment.id,
        style: {
          width: fragment.w,
          ...fragment.s,
          ...springs[i]
        },
        onMouseEnter: () => setOver(fragment.id),
        onMouseLeave: () => setOver(""),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react7.Link, { to: fragment.id, children: fragment.t })
      },
      fragment.t
    ))
  ] });
}

// app/components/MorphSpan.tsx
var import_lodash5 = __toESM(require("lodash")), import_react9 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime");
function MorphSpan({ children }) {
  let [text2, setText] = (0, import_react9.useState)(children), currentTimeout = (0, import_react9.useRef)();
  return (0, import_react9.useEffect)(() => {
    let updateText = () => {
      setText((text3) => {
        if (!text3)
          return "";
        let splitText = text3.split(" "), randomWord = import_lodash5.default.random(splitText.length - 1), splitWord = splitText[randomWord], randomLetter = import_lodash5.default.random(splitWord.length - 1);
        return splitText[randomWord] = splitText[randomWord].slice(0, randomLetter) + import_lodash5.default.sample("abcdefghijklmnopqrstuvwxyz") + splitText[randomWord].slice(randomLetter + 1), splitText.join(" ");
      }), text2 && (currentTimeout.current = window.setTimeout(updateText, import_lodash5.default.random(1e3)));
    };
    return text2 && updateText(), () => {
      currentTimeout.current && window.clearTimeout(currentTimeout.current);
    };
  }, [text2]), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "relative -z-10 mx-2 break-all opacity-50", children: text2 });
}

// app/components/GptMesh.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function GptMesh(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react11.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {}), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClientGptMesh, { ...props }) });
}
function ClientGptMesh({
  children,
  gptText
}) {
  let { w, h } = (0, import_dom2.useDimensions)(), formattedGptText = (0, import_react11.useMemo)(() => {
    if (!gptText)
      return;
    let area = w / 8 * (h / 24), fullLengthText = gptText;
    for (; fullLengthText.length < area; )
      fullLengthText += fullLengthText;
    let splitGptText = fullLengthText.slice(0, area).split(" "), splits = children.map(() => import_lodash6.default.random(splitGptText.length, !1)).sort(), currentSplit = 0, formattedGptText2 = [];
    for (let split of splits)
      formattedGptText2.push(splitGptText.slice(currentSplit, split).join(" ")), currentSplit = split;
    return formattedGptText2.push(splitGptText.slice(currentSplit).join(" ")), formattedGptText2;
  }, [gptText, children]), noise3D = (0, import_react11.useMemo)(() => (0, import_open_simplex_noise.makeNoise3D)(Date.now()), []), blurFilter = (0, import_react11.useMemo)(() => new import_pixi.BlurFilter(5), []);
  return formattedGptText ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "h-full w-full overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_react10.Stage,
      {
        className: "absolute left-0 top-0 z-0 bg-transparent",
        width: w,
        height: h,
        options: { backgroundAlpha: 0 },
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          LoopedGraphics,
          {
            filters: [blurFilter],
            width: w,
            height: h,
            x: 0,
            y: 0,
            draw: (g) => {
              g.clear();
              let t = Date.now();
              for (let x = 0; x <= w; x += 10)
                for (let y = 0; y <= h; y += 10) {
                  let n = noise3D(x, y, t / 1e3);
                  g.beginFill("white", n * 0.05), g.drawCircle(x, y, 20);
                }
            }
          }
        )
      }
    ),
    children.map((child, i) => {
      var _a;
      let splitChildren = child.props.children.split(" "), link = import_lodash6.default.random(splitChildren.length), newLink = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MyLink, { to: "/demos/zettelkablooey/" + ((_a = import_lodash6.default.sample(text)) == null ? void 0 : _a.id), children: splitChildren[link] });
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MorphSpan, { children: formattedGptText[i] }),
        (0, import_react11.cloneElement)(child, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: splitChildren.slice(0, link).join(" ") + " " }),
            newLink,
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: " " + splitChildren.slice(link + 1).join(" ") })
          ]
        })
      ] }, i);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MorphSpan, { children: formattedGptText[formattedGptText.length - 1] })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {});
}

// app/components/Line.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Line({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "relative z-10", children });
}

// app/routes/demos.zettelkablooey.growth-from-inside.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
async function loader2() {
  return await generatePrompt("Do you have to throw up?");
}
function GrowthFromInside() {
  let gptText = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "my organs coalesced" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "or thinness will reconcile" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "this oroficial report, excised" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "thetic wish: more than a stern audience, closer wave" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "with his not-ever, the consequence of" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "every silence imploded outwards toward" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Line, { children: "the sequence asks, if you" })
  ] });
}

// app/routes/demos.zettelkablooey.order-disorder.tsx
var demos_zettelkablooey_order_disorder_exports = {};
__export(demos_zettelkablooey_order_disorder_exports, {
  default: () => Ordering,
  loader: () => loader3
});
var import_react13 = require("@remix-run/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
async function loader3() {
  return await generatePrompt("Is the world inherently good or evil?");
}
function Ordering() {
  let gptText = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "our offness, one organ fights another" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "the structural coupling of gravity" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "an essential determinant: sleepily taxonomized" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "foregone from essential fear insipid of ears begone" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "a corona of temporary reaction" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "and the slippery rot of make" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "believing that the olden days were" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Line, { children: "and progressing towards the completion" })
  ] });
}

// app/routes/demos.zettelkablooey.communication.tsx
var demos_zettelkablooey_communication_exports = {};
__export(demos_zettelkablooey_communication_exports, {
  default: () => Communication,
  loader: () => loader4
});
var import_react14 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime");
async function loader4() {
  return await generatePrompt("What is the truest way to communicate?");
}
function Communication() {
  let gptText = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "if one were to" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "and this other is before one" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "saying push me out of synechdoche with" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "but we were all deceived: the morning after" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "with open lines of lightning" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "stabbed beyond recognition" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "if ostracized" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Line, { children: "give up your ghosts, " })
  ] });
}

// app/routes/demos.zettelkablooey.without-order.tsx
var demos_zettelkablooey_without_order_exports = {};
__export(demos_zettelkablooey_without_order_exports, {
  default: () => WithoutOrder,
  loader: () => loader5
});
var import_react15 = require("@remix-run/react");
var import_jsx_runtime12 = require("react/jsx-runtime");
async function loader5() {
  return await generatePrompt("Is there order in the world?");
}
function WithoutOrder() {
  let gptText = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "For there to be a spark" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "mainly without us, the original" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "classic idea: a commenced measurement" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "of the\u2014" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "somewhat offset by the theoretical considerations of" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "and if they could be reordered\u2014a minimum standard of" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Line, { children: "daily renewal" })
  ] });
}

// app/routes/demos.zettelkablooey.zettelkasten.tsx
var demos_zettelkablooey_zettelkasten_exports = {};
__export(demos_zettelkablooey_zettelkasten_exports, {
  default: () => Zettelkasten,
  loader: () => loader6
});
var import_react16 = require("@remix-run/react");
var import_jsx_runtime13 = require("react/jsx-runtime");
async function loader6() {
  return await generatePrompt("Why is the Zettelkasten useful?");
}
function Zettelkasten() {
  let gptText = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Line, { children: "There is nothing between" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Line, { children: "What would you see if" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Line, { children: "the morningstar of this everlasting" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Line, { children: "remains" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Line, { children: "about itself? about golden?" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Line, { children: "the index, nonwithstanding" })
  ] });
}

// app/routes/demos.zettelkablooey.alter-ego.tsx
var demos_zettelkablooey_alter_ego_exports = {};
__export(demos_zettelkablooey_alter_ego_exports, {
  default: () => Assured,
  loader: () => loader7
});
var import_react17 = require("@remix-run/react");
var import_jsx_runtime14 = require("react/jsx-runtime");
async function loader7() {
  return await generatePrompt("Are you conscious?");
}
function Assured() {
  let gptText = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "the original doppelg\xE4nger" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "before we warned you" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "a mode of address, a pessimism" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "broke the bond" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "\u2014it's out, parallelism, confounded" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "released upon called-relation" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Line, { children: "cofounding" })
  ] });
}

// app/routes/demos.zettelkablooey.no-answer.tsx
var demos_zettelkablooey_no_answer_exports = {};
__export(demos_zettelkablooey_no_answer_exports, {
  default: () => NoAnswer,
  loader: () => loader8
});
var import_react18 = require("@remix-run/react");
var import_jsx_runtime15 = require("react/jsx-runtime");
async function loader8() {
  return await generatePrompt("Is the world inherently good or evil?");
}
function NoAnswer() {
  let gptText = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "our offness, one organ fights another" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "the structural coupling of gravity" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "an essential determinant: sleepily taxonomized" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "foregone from essential fear insipid of ears begone" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "a corona of temporary reaction" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "and the slippery rot of make" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "believing that the olden days were" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Line, { children: "and progressing towards the completion" })
  ] });
}

// app/routes/demos.zettelkablooey.ordering.tsx
var demos_zettelkablooey_ordering_exports = {};
__export(demos_zettelkablooey_ordering_exports, {
  default: () => Ordering2,
  loader: () => loader9
});
var import_react19 = require("@remix-run/react");
var import_jsx_runtime16 = require("react/jsx-runtime");
async function loader9() {
  return await generatePrompt("Describe the ideal order.");
}
function Ordering2() {
  let gptText = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: "one first then another" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: "and so Adam named the animals: " }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: "\u2014but if the starry-eyed have purpose to" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: 'remarking upon their "one-another," a hierarchy emerges' }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: "climbing towards the sky, a Babel" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: "when we learn instigation of force" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Line, { children: "but what offset is there?" })
  ] });
}

// app/routes/demos.zettelkablooey.registry.tsx
var demos_zettelkablooey_registry_exports = {};
__export(demos_zettelkablooey_registry_exports, {
  default: () => Registry,
  loader: () => loader10
});
var import_react20 = require("@remix-run/react");
var import_jsx_runtime17 = require("react/jsx-runtime");
async function loader10() {
  return await generatePrompt(
    "What is the best way to store tags in a database?"
  );
}
function Registry() {
  let gptText = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Line, { children: "A single world" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Line, { children: "word connotes" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Line, { children: "the unpacked expanse, a lively" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Line, { children: "of sorts, a literary ecosystem" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Line, { children: "the constant thicket of" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Line, { children: "nonessence, quintessence, or a sequence? But" })
  ] });
}

// app/routes/demos.zettelkablooey.assured.tsx
var demos_zettelkablooey_assured_exports = {};
__export(demos_zettelkablooey_assured_exports, {
  default: () => Assured2,
  loader: () => loader11
});
var import_react21 = require("@remix-run/react");
var import_jsx_runtime18 = require("react/jsx-runtime");
async function loader11() {
  return await generatePrompt("Give me assurance for the future.");
}
function Assured2() {
  let gptText = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Line, { children: "the error of our ways" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Line, { children: "in thinking there is" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Line, { children: "flourishing without bound, without boundaries" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Line, { children: "upon\u2014is this not assurance? or the open wound" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Line, { children: "without which one? a log lies" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Line, { children: "\u2014your mind, behind me" })
  ] });
}

// app/routes/demos.zettelkablooey.linking.tsx
var demos_zettelkablooey_linking_exports = {};
__export(demos_zettelkablooey_linking_exports, {
  default: () => Linking,
  loader: () => loader12
});
var import_react22 = require("@remix-run/react");
var import_jsx_runtime19 = require("react/jsx-runtime");
async function loader12() {
  return await generatePrompt("What describes a connection?");
}
function Linking() {
  let gptText = (0, import_react22.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Line, { children: "the world thwarted between our own offerings" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Line, { children: "a system of control, of barbaric mutiny towards" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Line, { children: "or claustrophobic, catacombed, convalescent" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Line, { children: "my mother explains the doorway:" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Line, { children: "and visited sound, reneging on the original" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Line, { children: "favorably?" })
  ] });
}

// app/routes/demos.zettelkablooey.systems.tsx
var demos_zettelkablooey_systems_exports = {};
__export(demos_zettelkablooey_systems_exports, {
  default: () => Systems,
  loader: () => loader13
});
var import_react23 = require("@remix-run/react");
var import_jsx_runtime20 = require("react/jsx-runtime");
async function loader13() {
  return await generatePrompt("Explain Luhmann's systems theory.");
}
function Systems() {
  let gptText = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: "a system" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: "of interlinked offset" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: "grapheme-control" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: "with every source collided" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: ': the "gravitation"\u2014a simple determinant' }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: "complexified by redoings, reorderings" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Line, { children: "\u2014if you're not before yourself" })
  ] });
}

// app/routes/demos.zettelkablooey.chance.tsx
var demos_zettelkablooey_chance_exports = {};
__export(demos_zettelkablooey_chance_exports, {
  default: () => Chance,
  loader: () => loader14
});
var import_react24 = require("@remix-run/react");
var import_jsx_runtime21 = require("react/jsx-runtime");
async function loader14() {
  return await generatePrompt("What is up to chance?");
}
function Chance() {
  let gptText = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(GptMesh, { gptText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Line, { children: "if this were to become oneself, a simple arrangement" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Line, { children: "gone outward, spit off the dock towards" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Line, { children: "and nobody would ask first, without warning" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Line, { children: "a light, a boring soul caresses your slighted" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Line, { children: "grammar within, collected as if repenting" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Line, { children: "a secret inward" })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/demos/zettelkablooey/build/entry.client-3JJNHDPH.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-JUZUIKNG.js", "/demos/zettelkablooey/build/_shared/chunk-S6U2TU6A.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/root-C34FR74N.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey._index": { id: "routes/demos.zettelkablooey._index", parentId: "root", path: "demos/zettelkablooey", index: !0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey._index-LMJ4YMLH.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.alter-ego": { id: "routes/demos.zettelkablooey.alter-ego", parentId: "root", path: "demos/zettelkablooey/alter-ego", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.alter-ego-CMRYPXQ5.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.assured": { id: "routes/demos.zettelkablooey.assured", parentId: "root", path: "demos/zettelkablooey/assured", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.assured-7OXRLEJQ.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.chance": { id: "routes/demos.zettelkablooey.chance", parentId: "root", path: "demos/zettelkablooey/chance", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.chance-RUZA6CH7.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.communication": { id: "routes/demos.zettelkablooey.communication", parentId: "root", path: "demos/zettelkablooey/communication", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.communication-LRNLHLFO.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.growth-from-inside": { id: "routes/demos.zettelkablooey.growth-from-inside", parentId: "root", path: "demos/zettelkablooey/growth-from-inside", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.growth-from-inside-IDMSQVGU.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.linking": { id: "routes/demos.zettelkablooey.linking", parentId: "root", path: "demos/zettelkablooey/linking", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.linking-AHHL5DXO.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.no-answer": { id: "routes/demos.zettelkablooey.no-answer", parentId: "root", path: "demos/zettelkablooey/no-answer", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.no-answer-W6A3HLHI.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.order-disorder": { id: "routes/demos.zettelkablooey.order-disorder", parentId: "root", path: "demos/zettelkablooey/order-disorder", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.order-disorder-TLEASTLK.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.ordering": { id: "routes/demos.zettelkablooey.ordering", parentId: "root", path: "demos/zettelkablooey/ordering", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.ordering-PW7NMGHI.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.registry": { id: "routes/demos.zettelkablooey.registry", parentId: "root", path: "demos/zettelkablooey/registry", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.registry-BGGKTFHT.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.systems": { id: "routes/demos.zettelkablooey.systems", parentId: "root", path: "demos/zettelkablooey/systems", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.systems-RTILH55H.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.without-order": { id: "routes/demos.zettelkablooey.without-order", parentId: "root", path: "demos/zettelkablooey/without-order", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.without-order-XGZFHGQH.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos.zettelkablooey.zettelkasten": { id: "routes/demos.zettelkablooey.zettelkasten", parentId: "root", path: "demos/zettelkablooey/zettelkasten", index: void 0, caseSensitive: void 0, module: "/demos/zettelkablooey/build/routes/demos.zettelkablooey.zettelkasten-GBSF46SI.js", imports: ["/demos/zettelkablooey/build/_shared/chunk-E2L2CJFX.js", "/demos/zettelkablooey/build/_shared/chunk-IEVMTJA5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "1ce4f13f", hmr: void 0, url: "/demos/zettelkablooey/build/manifest-1CE4F13F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/demos/zettelkablooey/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/demos/zettelkablooey/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos.zettelkablooey.growth-from-inside": {
    id: "routes/demos.zettelkablooey.growth-from-inside",
    parentId: "root",
    path: "demos/zettelkablooey/growth-from-inside",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_growth_from_inside_exports
  },
  "routes/demos.zettelkablooey.order-disorder": {
    id: "routes/demos.zettelkablooey.order-disorder",
    parentId: "root",
    path: "demos/zettelkablooey/order-disorder",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_order_disorder_exports
  },
  "routes/demos.zettelkablooey.communication": {
    id: "routes/demos.zettelkablooey.communication",
    parentId: "root",
    path: "demos/zettelkablooey/communication",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_communication_exports
  },
  "routes/demos.zettelkablooey.without-order": {
    id: "routes/demos.zettelkablooey.without-order",
    parentId: "root",
    path: "demos/zettelkablooey/without-order",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_without_order_exports
  },
  "routes/demos.zettelkablooey.zettelkasten": {
    id: "routes/demos.zettelkablooey.zettelkasten",
    parentId: "root",
    path: "demos/zettelkablooey/zettelkasten",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_zettelkasten_exports
  },
  "routes/demos.zettelkablooey.alter-ego": {
    id: "routes/demos.zettelkablooey.alter-ego",
    parentId: "root",
    path: "demos/zettelkablooey/alter-ego",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_alter_ego_exports
  },
  "routes/demos.zettelkablooey.no-answer": {
    id: "routes/demos.zettelkablooey.no-answer",
    parentId: "root",
    path: "demos/zettelkablooey/no-answer",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_no_answer_exports
  },
  "routes/demos.zettelkablooey.ordering": {
    id: "routes/demos.zettelkablooey.ordering",
    parentId: "root",
    path: "demos/zettelkablooey/ordering",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_ordering_exports
  },
  "routes/demos.zettelkablooey.registry": {
    id: "routes/demos.zettelkablooey.registry",
    parentId: "root",
    path: "demos/zettelkablooey/registry",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_registry_exports
  },
  "routes/demos.zettelkablooey.assured": {
    id: "routes/demos.zettelkablooey.assured",
    parentId: "root",
    path: "demos/zettelkablooey/assured",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_assured_exports
  },
  "routes/demos.zettelkablooey.linking": {
    id: "routes/demos.zettelkablooey.linking",
    parentId: "root",
    path: "demos/zettelkablooey/linking",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_linking_exports
  },
  "routes/demos.zettelkablooey.systems": {
    id: "routes/demos.zettelkablooey.systems",
    parentId: "root",
    path: "demos/zettelkablooey/systems",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_systems_exports
  },
  "routes/demos.zettelkablooey._index": {
    id: "routes/demos.zettelkablooey._index",
    parentId: "root",
    path: "demos/zettelkablooey",
    index: !0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_index_exports
  },
  "routes/demos.zettelkablooey.chance": {
    id: "routes/demos.zettelkablooey.chance",
    parentId: "root",
    path: "demos/zettelkablooey/chance",
    index: void 0,
    caseSensitive: void 0,
    module: demos_zettelkablooey_chance_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.18.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
