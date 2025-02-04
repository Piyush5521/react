"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const MuiTypography_1 = require("./Components/MuiTypography");
const Buttons_1 = __importDefault(require("./Components/Buttons"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(MuiTypography_1.MuiTypography, null),
        " ",
        react_1.default.createElement("br", null),
        react_1.default.createElement(Buttons_1.default, null)));
}
exports.default = App;
