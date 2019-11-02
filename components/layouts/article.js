import React from "react"

const ArticleLayout = props => (
    <article className="md:mt-20 lg:mb-20">
        {props.children}
    </article>
);

export default ArticleLayout;