import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function Layout({ path, children, pageTitle, ogImage }) {
    return (
        <div className="flex flex-col min-h-full">
            <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />
            <main className="flex-grow container mx-auto xs:px-4 sm:px-4 md:px-4 lg:px-0 md:mt-20 lg:mt-20">
                {children}
            </main>
            <Footer />
        </div>
    )
}