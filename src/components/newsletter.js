import React from "react"

export default class Newsletter extends React.Component {
    render() {
        return (
            <aside className="mt-10 mb-10 xs:px-4 sm:px-4 md:px-4 lg:px-0">
                <div className="container mx-auto bg-gray-200 py-6 px-6 rounded">
                    <p className="mt-2">Want to stay up to date with the latest content? Join my mailing list to receive updates.
                        Unsubscribe when ever.</p>
                    <p className="mt-2 mb-5"><span className="underline">No spam, I promise.</span></p>

                    <form className="w-full mb-2">
                        <label className="block hidden" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="mb-3 p-2 mr-2 border-b-2 appearance-none rounded focus:bg-white focus:outline-none focus:border-blue-500"
                            type="email" name="email" id="email" placeholder="Email Address"/>

                        <button className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded" type="submit">Subscribe</button>
                    </form>
                </div>
            </aside>
        )
    }
}