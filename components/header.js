import React from 'react';
import Link from './activeLink';
import config from '../config/config.js'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isOpen: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.headerOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.headerOnScroll);
    }

    headerOnScroll = () => {
        if (window.scrollY > 60) {
            this.setState({scrolled: true})
        } else {
            this.setState({scrolled: false})
        }
    };

    onToggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        return (
            <header id="header"
                    className={`${ this.state.scrolled ? `scroll` : `` } w-full bg-white lg:p-5 xs:border-2 xs:border-gray-200 sm:border-2 sm:border-gray-200 md:border-2 md:border-gray-200 lg:border-0 fixed top-0 z-50`}>
                <div className="w-full container mx-auto flex flex-wrap items-center mt-0 py-3 xs:border-b xs:px-4 sm:px-4 md:px-4 lg:px-0">
                    <div
                        className="brand justify-between flex items-center xs:w-full sm:w-full md:w-full md:px-0 lg:px-0 lg:w-1/2">
                        <Link href="/">
                            <a className="flex text-black font-bold no-underline hover:no-underline">
                                <span>{config.siteTitle}</span>
                            </a>
                        </Link>

                        <div className="block lg:hidden">
                            <button onClick={this.onToggle}
                                    id="nav-toggle"
                                    className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-grey-lightest hover:border-blue-300 appearance-none focus:outline-none">
                                <svg className="inline fill-current text-gray-500 h-3 w-3" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <nav className="w-full flex-grow xs:hidden sm:hidden lg:flex lg:items-center lg:w-1/2 lg:block mt-2 lg:mt-0"
                         id="nav-content">
                        <ul className="lg:flex flex-1 items-center lg:justify-end md:px-0 py-2">
                            <li className="lg:mr-3 lg:ml-3 lg:invisible xs:pb-1">
                                <Link activeClassName="active" href="/">
                                    <a className="hover:underline">Home</a>
                                </Link>
                            </li>
                            <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                                <Link activeClassName="active" href="/about">
                                    <a className="hover:underline">About</a>
                                </Link>
                            </li>
                            <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                                <Link activeClassName="active" href="/articles">
                                    <a className="hover:underline">Articles</a>
                                </Link>
                            </li>
                            <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                                <Link activeClassName="active" href="/contact">
                                    <a className="hover:underline">Contact</a>
                                </Link>
                            </li>
                            <li className="lg:ml-3 xs:py-1 sm:py-3">
                                <a href='https://ko-fi.com/jethromay'
                                   className="ko-fi"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="Buy me a coffee on Kofi!"
                                   title="Buy me a coffee on Kofi!">
                                    <img src="/img/ko-fi.png" alt="Buy me a coffee on Kofi!"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav className={`${ this.state.isOpen ? `active` : ``} hidden px-4`}>
                    <ul className="sm:flex sm:items-center">
                        <li className="pt-3">
                            <Link href="/">
                                <a className="block font-normal py-1">Home</a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/">
                                <a className="block font-normal py-1">About</a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/">
                                <a className="block font-normal py-1">Articles</a>
                            </Link>
                        </li>
                        <li className="pb-3">
                            <Link href="/">
                                <a className="block font-normal py-1">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}