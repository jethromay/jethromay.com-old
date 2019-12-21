import React, { createRef } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default class Newsletter extends React.Component {
    render() {
        const mailchimpURL = process.env.MAILCHIMP_URL;
        const emailRef = createRef(undefined);

        return (
            <aside className="subscribe mt-10 mb-10">
                <div className="container mx-auto bg-gray-200 py-6 px-6 rounded">
                    <p className="text-base mt-2">Want to stay up to date with the latest content? Join my mailing list to receive updates.
                        Unsubscribe when ever.</p>
                    <p className="text-base mt-2 mb-5"><span className="underline">No spam, I promise.</span></p>
                    <MailchimpSubscribe
                        url={mailchimpURL}
                        render={({ subscribe, status, message }) => {
                            switch (status) {
                                case "sending":
                                    return <div>Sending...</div>;
                                case "success":
                                    return <div className="underline">Check your email to confirm your subscription.</div>;
                                case "error":
                                    return <div dangerouslySetInnerHTML={{ __html: message }} />;
                                default:
                                    return (
                                        <form
                                            className="w-full mb-2"
                                            onSubmit={() => {
                                                event.preventDefault();
                                                subscribe({
                                                    EMAIL: emailRef.current.value,
                                                })
                                            }}
                                        >
                                            <label className="block hidden" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input className="mb-3 p-2 mr-2 border-b-2 appearance-none rounded focus:bg-white focus:outline-none focus:border-blue-500" type="email" name="email" id="email" placeholder="Email Address" ref={emailRef} />
                                            <button className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded" type="submit">Subscribe</button>
                                        </form>
                                    )
                            }
                        }}
                    />
                </div>
            </aside>
        )
    }
}