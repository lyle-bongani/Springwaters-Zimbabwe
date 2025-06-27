import React from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        const mailto = `mailto:sales@springwaterszim.co.zw?subject=${encodeURIComponent('Newsletter Subscription')}&body=${encodeURIComponent('Please subscribe me to the newsletter. My email: ' + email)}`;
        window.location.href = mailto;
    };

    return (
        <section className="w-full flex justify-center items-center py-16 px-4 bg-white">
            <div className="w-full max-w-5xl bg-[#4169e1] rounded-3xl flex flex-col items-center py-16 px-4 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                    New Things Will Always<br />Update Regularly
                </h2>
                <form className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-center gap-4" onSubmit={handleSubmit}>
                    <div className="flex items-center w-full bg-white rounded-md px-4 py-3 md:py-0 md:rounded-l-md md:rounded-r-none border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400">
                        <svg className="w-6 h-6 text-[#4169e1] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4a4 4 0 01-8 0v-4" /></svg>
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="flex-1 bg-transparent outline-none text-[#4169e1] placeholder:text-gray-400 text-base py-2"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#4169e1] border border-white text-white font-bold px-8 py-3 rounded-md md:rounded-l-none md:rounded-r-md hover:bg-blue-800 transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection; 