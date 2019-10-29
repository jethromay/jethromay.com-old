import React from "react"
import Layout from "../components/layout"

export default class About extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container lg:mt-20 lg:mb-20">
                    <h1 className="font-bold text-5xl mb-4">About</h1>
                    <div className="mb-10">
                        <p className="mt-2 mb-2">
                            I'm Jethro May, a web developer from South Africa. I love writing code and i am lucky enough
                            to do this as my job! I currently work for <a href="https://www.plusnarrative.com/"
                                                                          className="font-bold underline hover:text-blue-400">PlusNarrative</a>,
                            primarily developing websites and applications using PHP/Laravel.
                        </p>
                        <p className="mt-2 mb-2">My goal for this website is to document and share what i learn
                            throughout my career, creating a resource that other developers can use to learn the
                            concepts i have become familiar with. </p>
                        <p className="mt-2 mb-2">When i'm not coding i enjoy playing music, travelling and keeping
                            fit.</p>
                    </div>

                    <article className="w-full mb-10">
                        <header>
                            <h2 className="font-bold text-3xl mb-4">Work Experience</h2>
                        </header>
                        <p className="mt-2 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi impedit in minus odio
                            sed. Accusantium asperiores at blanditiis commodi dolore doloribus ex ipsam molestiae nihil
                            sequi soluta, tempore ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eligendi impedit in minus odio sed. Accusantium asperiores at blanditiis commodi dolore
                            doloribus ex ipsam molestiae nihil sequi soluta, tempore ut voluptas. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Eligendi impedit in minus odio sed.
                        </p>
                        <p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, beatae
                            corporis cum delectus eaque enim est ex excepturi illo inventore iste molestiae molestias
                            natus nesciunt officiis omnis, porro quibusdam vero.</p>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded mt-4"
                                type="submit">Download Resume
                        </button>
                    </article>

                    <article className="w-full mb-10">
                        <header>
                            <h2 className="font-bold text-3xl mb-4">Setup</h2>
                        </header>
                        <p className="mt-2 mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi impedit in minus odio
                            sed. Accusantium asperiores at blanditiis commodi dolore doloribus ex ipsam molestiae nihil
                            sequi soluta, tempore ut voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eligendi impedit in minus odio sed. Accusantium asperiores at blanditiis commodi dolore
                            doloribus ex ipsam molestiae nihil sequi soluta, tempore ut voluptas. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Eligendi impedit in minus odio sed.
                        </p>
                        <p className="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, beatae
                            corporis cum delectus eaque enim est ex excepturi illo inventore iste molestiae molestias
                            natus nesciunt officiis omnis, porro quibusdam vero.</p>
                    </article>
                </div>
            </Layout>
        )
    }
}
