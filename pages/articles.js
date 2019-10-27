import React from "react"
import Layout from "../components/layout"

export default class Articles extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container lg:mt-20 lg:mb-20">
                    <h1 className="font-bold text-5xl mb-4">Articles</h1>
                </div>
            </Layout>
        )
    }
}