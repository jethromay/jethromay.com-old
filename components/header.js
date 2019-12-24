import React from 'react';
import Link from './activeLink';
import config from '../site.config';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            isOpen: false
        };
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

    render() {
        return (
            <header id="header"
                    className={`${ this.state.scrolled ? `scroll` : `` } w-full bg-white lg:p-2 xs:border-2 xs:border-gray-200 sm:border-2 sm:border-gray-200 md:border-2 md:border-gray-200 lg:border-0 fixed top-0 z-50`}>
                <div className="w-full container mx-auto flex flex-wrap items-center mt-0 py-3 xs:px-4 sm:px-4 md:px-4 lg:px-0">
                    <div
                        className="brand justify-between flex items-center xs:w-full sm:w-full md:w-full md:px-0 lg:px-0 lg:w-1/2">
                        <Link href="/">
                            <a className="flex text-black font-bold no-underline hover:no-underline">
                                <span>{config.siteTitle}</span>
                            </a>
                        </Link>

                            <div className="block lg:hidden">
                                <ul>
                                    <li>

                                    </li>
                                    <li className="">
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
                            </div>
                        </div>

                        <nav className="w-full flex-grow xs:hidden sm:hidden lg:flex lg:items-center lg:w-1/2 lg:block mt-2 lg:mt-0"
                             id="nav-content">
                            <ul className="lg:flex flex-1 items-center lg:justify-end md:px-0 py-2">
                                <li className="lg:mr-3 lg:ml-3 lg:invisible xs:pb-1">
                                    <Link activeClassName="active" href="/">
                                        <a className="text-gray-600 hover:underline">Home</a>
                                    </Link>
                                </li>
                                <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                                    <Link activeClassName="active" href="/about">
                                        <a className="text-gray-600 hover:underline">About</a>
                                    </Link>
                                </li>
                                <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                                    <Link activeClassName="active" href="/posts">
                                        <a className="text-gray-600 hover:underline">Posts</a>
                                    </Link>
                                </li>
                                <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                                    <Link activeClassName="active" href="/contact">
                                        <a className="text-gray-600 hover:underline">Contact</a>
                                    </Link>
                                </li>
                                <li className="lg:ml-3 xs:py-1 sm:py-3">
                                    <a href='https://ko-fi.com/jethromay'
                                       className="ko-fi"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       aria-label="Buy me a coffee!"
                                       title="Buy me a coffee!">
                                        <img src="/img/ko-fi.png" alt="Buy me a coffee!"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <nav className="py-3 px-4 lg:hidden xl:hidden">
                        <ul className="flex items-center justify-between">
                            <li className="">
                                <Link href="/">
                                    <a className="text-gray-600 font-normal">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className="text-gray-600 font-normal">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/posts">
                                    <a className="text-gray-600 font-normal">Posts</a>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/contact">
                                    <a className="text-gray-600 font-normal">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
        )
    }
}