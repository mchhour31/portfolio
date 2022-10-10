import { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from './SocialIcons';

const Introduction = () => {
    return ( 
        <Router>
            <main>
                <div className="sm:px-8 mt-28">
                    <div className="max-w-7xl mx-auto lg:px-8">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-white dark:text-zinc-100 sm:text-5xl">Hello world</h1>
                                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
                                    <div className="mt-6 flex gap-6">
                                        <a href="/twitter.com">
                                            <img src={TwitterIcon} alt="" />
                                        </a>
                                        {/* <TwitterIcon /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Router>
     );
}
 
export default Introduction;