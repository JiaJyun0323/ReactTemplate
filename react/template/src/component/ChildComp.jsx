import React from "react";
import { useState, useCallback } from "react";

function ClickEvenHandler(params){
    params((count) => count + 1)
}
export default function ChildComp({params}){
    return (
        <dev>
            <button onClick={() => ClickEvenHandler(params)}>
                aaaaaaa
            </button>
        </dev>
);
}