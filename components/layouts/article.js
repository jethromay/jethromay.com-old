import React from "react"

const ArticleLayout = props => (
    <div className="flex flex-col min-h-full">
        <main className="container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 lg:mt-20">
            <article className="lg:mb-20">
                {props.children}
            </article>
        </main>
    </div>
);

export default ArticleLayout;