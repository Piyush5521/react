"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiTypography = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const MuiTypography = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(material_1.Typography, { variant: 'h1', gutterBottom: true }, "H1 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'h2' }, "H2 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'h3' }, "H3 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'h4', component: 'h1', gutterBottom: true }, "H4 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'h5' }, "H5 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'h6' }, "H6 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'subtitle1' }, "subtitle 1 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'subtitle2' }, "subtitle 2 Heading"),
        react_1.default.createElement(material_1.Typography, { variant: 'body1' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti omnis corporis rerum a voluptates voluptatem ipsum odio quam est recusandae, provident in doloremque, fuga repellat. Officia quibusdam in quo!"),
        react_1.default.createElement(material_1.Typography, { variant: 'body2' }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti omnis corporis rerum a voluptates voluptatem ipsum odio quam est recusandae, provident in doloremque, fuga repellat. Officia quibusdam in quo!")));
};
exports.MuiTypography = MuiTypography;
