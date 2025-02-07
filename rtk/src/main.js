"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const App_1 = __importDefault(require("./App"));
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
ReactDOM.createRoot(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
