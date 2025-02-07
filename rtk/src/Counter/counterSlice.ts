import {createSlice} from "@reduxjs/toolkit";
interface CounterState {
    value: number;
}

const initalState: CounterState ={
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
})
