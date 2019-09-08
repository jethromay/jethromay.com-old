import React, { Component } from "react"

export default class Footer extends Component {
    render() {
        return (
            <footer className="flex-none pt-10 pb-10 pr-5 pl-5">
                <div className="flex items-center justify-center">
                    <span className="text-gray-500">© {new Date().getFullYear()}</span>
                </div>
                <div className="flex items-center justify-center">
                    <a href="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">Ko-Fi</a>
                    <a href="https://github.com/jethromay" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">GitHub</a>
                    <a href="https://twitter.com/may_jethro" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">Twitter</a>
                    <a href="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">RSS</a>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <a href="//www.dmca.com/Protection/Status.aspx?ID=394f8905-24de-43d6-a1fa-041fdf07bc58"
                       title="DMCA.com Protection Status" className="dmca-badge"> <img
                        src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=394f8905-24de-43d6-a1fa-041fdf07bc58"
                        alt="DMCA.com Protection Status"/>
                    </a>
                </div>
            </footer>
        )
    }
}