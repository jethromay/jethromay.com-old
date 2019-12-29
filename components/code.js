import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";

const Code = (props) => {
    const { language, value } = props;
    return (
        <SyntaxHighlighter language={language} style={okaidia}>
            {value}
        </SyntaxHighlighter>
    );
};

export default Code