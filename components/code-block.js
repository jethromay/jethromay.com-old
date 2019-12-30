import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default ({ className, language, children }) => (
    <SyntaxHighlighter
        className={className}
        language={language}
        children={children}
        style={okaidia}
        customStyle={{
            color: 'white',
            fontSize: '.85rem',
            overflow: 'auto',
            background: '#202e59',
            height: 'auto'
        }}
    />
)