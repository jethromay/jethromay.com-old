import React from "react";

export default class Project extends React.Component {
    render() {
        return (
            <div className="bg-blue-600 overflow-hidden shadow rounded">
                <div className="md:flex">
                    <div className="md:w-1/2 md:pt-16 md:pr-0 md:pl-12">
                        <a href="https://github.com/jethromay/jethromay.com" className="project-link block relative">
                            <img className="absolute inset-0 block rounded-t md:shadow-lg-dark"
                                 src="/img/project-jethromay.jpg" alt="Tailwind CSS"
                            />
                        </a>
                    </div>
                    <div className="px-6 pt-8 pb-6 md:w-1/2 md:px-12 md:py-8 md:flex md:items-center">
                        <div>
                            <div className="text-white antialiased text-xl md:text-2xl font-medium">jethromay.com
                            </div>
                            <div className="mt-2 md:mt-3 text-white antialiased text-sm md:text-md leading-tight md:leading-normal opacity-75">
                                I wanted to redesign my website and give it a much needed face lift as well
                                as create a platform where I could share the knowledge I have learnt throughout my
                                career.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}