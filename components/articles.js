import React from "react"
import Link from 'next/link';

export default class Articles extends React.Component {
    render() {
        return (
            <article className="mb-8">
                <header>
                    <Link to="/article"
                          className="text-lg text-black font-bold no-underline hover:underline">
                        Website Overhaul
                    </Link>
                </header>
                <p className="text-grey-darkest text-base leading-normal mt-1">
                    I wanted to redesign my website and give it a much needed face lift. After many
                    different iterations, i finally got to a point where i was happy with the look and
                    functionality that my new site gave me.
                </p>
                <footer className="text-grey-darkest text-base leading-normal mt-2">
                    <Link to="/article"
                          className="text-grey-darker hover:text-black text-sm no-underline hover:underline">Read
                        this article →
                    </Link>
                </footer>
            </article>
        )
    }
}