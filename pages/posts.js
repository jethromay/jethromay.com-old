import React from 'react';
import Link from "next/link";

export default function Posts({ path, pageTitle, ogImage }) {
    return (
            <div className="container lg:mt-20 lg:mb-20">
                <h1 className="font-bold text-5xl mb-4">Posts</h1>
                <p>A collection of the various posts i have written.</p>
                <ul>
                    {/*{posts*/}
                    {/*    .map((post, index) => (*/}
                    {/*        <li className="mb-8" key={index}>*/}
                    {/*            <Link href={post.path} as={post.path}>*/}
                    {/*                <a className="text-lg text-black font-bold no-underline hover:underline">{post.title}</a>*/}
                    {/*            </Link>*/}
                    {/*            <p className="text-grey-darkest text-base leading-normal mt-1">*/}
                    {/*                {post.summary}*/}
                    {/*            </p>*/}
                    {/*            <div className="text-grey-darkest text-base leading-normal mt-2">*/}
                    {/*                <Link href={post.path} as={post.path}>*/}
                    {/*                    <a className="text-grey-darker hover:text-black text-sm no-underline hover:underline">*/}
                    {/*                        Read article →*/}
                    {/*                    </a>*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                </ul>
            </div>
    )
}