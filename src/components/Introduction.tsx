import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from './SocialIcons';

const Introduction = () => {
    return ( 
        <main>
            <div className="sm:px-8 mt-40">
                <div className="max-w-7xl mx-auto lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-white dark:text-zinc-100 sm:text-5xl">Hello world,</h1>
                                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m Maron, a software designer and aspiring data scientised based in Auckland, New Zealand. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
                                <div className="mt-6 flex gap-6">
                                    <a href="https://twitter.com">
                                        <TwitterIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                    </a>
                                    <a href="https://www.instagram.com/mchhour__/">
                                        <InstagramIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                    </a>
                                    <a href="https://github.com/mchhour31/">
                                        <GitHubIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mchhour/">
                                        <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Introduction;