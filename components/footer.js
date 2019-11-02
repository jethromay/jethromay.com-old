import React  from "react"

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="flex-none pt-10 pb-10 pr-5 pl-5">
                <div className="flex items-center justify-center">
                    <span className="text-gray-500">© {new Date().getFullYear()}</span>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://www.buymeacoffee.com/jethromay" className="text-gray-500 mr-2 ml-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>
                    <a href="https://github.com/jethromay" className="text-gray-500 mr-2 ml-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/may_jethro" className="text-gray-500 mr-2 ml-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="/" className="text-gray-500 mr-2 ml-2 hover:text-blue-400">RSS</a>
                </div>
            </footer>
        )
    }
}