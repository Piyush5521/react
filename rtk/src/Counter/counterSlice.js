"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const initalState = {
    value: 0,
};
const counterSlice = (0, toolkit_1.createSlice)({
    name: "counter",
});
