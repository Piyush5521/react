"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Send_1 = __importDefault(require("@mui/icons-material/Send"));
function Buttons() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(material_1.Stack, { spacing: 4 },
            react_1.default.createElement(material_1.Stack, { display: 'block', spacing: 1, direction: "row" },
                react_1.default.createElement(material_1.Button, { variant: "text" }, "Text"),
                react_1.default.createElement(material_1.Button, { variant: "contained" }, "contained"),
                react_1.default.createElement(material_1.Button, { variant: "outlined" }, "outlined")),
            react_1.default.createElement(material_1.Stack, { display: 'block', spacing: 1, direction: 'row' },
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary" }, "Primary"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "secondary" }, "Secondary"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "error" }, "Error"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "warning" }, "Warning"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "info" }, "Info"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "success" }, "Success")),
            react_1.default.createElement(material_1.Stack, { display: 'block', spacing: 2, direction: 'row' },
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", size: 'small' }, "small"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", size: 'medium' }, "medium"),
                react_1.default.createElement(material_1.Button, { variant: "contained", color: "primary", size: 'large' }, "large")),
            react_1.default.createElement(material_1.Stack, { display: 'block', spacing: 2, direction: 'row' },
                react_1.default.createElement(material_1.Button, { variant: "contained", startIcon: react_1.default.createElement(Send_1.default, null), disableRipple: true, onClick: () => alert('Clicked') }, "Send"),
                react_1.default.createElement(material_1.Button, { variant: "contained", endIcon: react_1.default.createElement(Send_1.default, null), disableElevation: true }, "Send"),
                react_1.default.createElement(material_1.IconButton, { "aria-label": "send", color: "success", size: 'small' },
                    react_1.default.createElement(Send_1.default, null))))));
}
exports.default = Buttons;
