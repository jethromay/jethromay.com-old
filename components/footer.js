import React from "react";
import config from "../site.config";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="flex-shrink-0 pt-10 pb-10 pr-5 pl-5">
                <div className="flex items-center justify-center">
                    <span className="text-gray-500">© {new Date().getFullYear()}</span>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://ko-fi.com/jethromay" className="text-gray-500 mr-2 ml-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Ko-Fi</a>
                    <a href="https://github.com/jethromay" className="text-gray-500 mr-2 ml-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/may_jethro" className="text-gray-500 mr-2 ml-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </footer>
        )
    }
}