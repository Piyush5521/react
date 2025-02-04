"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
function Buttons() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(material_1.Button, { variant: "text" }, "Text"),
        react_1.default.createElement(material_1.Button, { variant: "contained" }, "contained"),
        react_1.default.createElement(material_1.Button, { variant: "outlined" }, "outlined")));
}
exports.default = Buttons;
