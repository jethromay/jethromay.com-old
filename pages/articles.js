import React from 'react';
import Link from "next/link";
import posts from '../posts.json'

export default class Articles extends React.Component {
    render() {
        return (
            <div className="container lg:mt-20 lg:mb-20">
                <h1 className="font-bold text-5xl mb-4">Articles</h1>
                {Object.entries(posts).map((value, index) => {
                    return (
                        <li key={index}>
                            <Link href='/posts/[id]' as={'/articles/' + value[0]}>
                                <a>{value[1].title}</a>
                            </Link>
                        </li>
                    )
                })}
            </div>
        )
    }
}