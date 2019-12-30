import React from "react";
import Code from "./code-block";

export default {
    pre: ({ children }) => children,
    code: ({ className, children }) => (
        <Code
            className="my-8 p-6 leading-normal rounded"
            language={className.replace('language-', '')}
            children={children}
        />
    ),
}