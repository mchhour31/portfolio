import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./SocialIcons";
import Footer from './Footer';

function MailIcon(props: any) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
    )
}

const About = ({...props}: any) => {
    return ( 
        <main>
            <div className="sm:px-8 mt:16 sm:mt-32">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                                <div className="lg:pl-20">
                                    <div className="max-w-xs px-2.5 lg:max-w-none">
                                        <img src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=750&q=75" className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 text-opacity-0" alt='space' />
                                    </div>
                                </div>

                                <div className="lg:order-first lg:row-span-2">
                                    <h1 className="text-4xl font-bold tracking-tight text-white dark:text-zinc-100 sm:text-5xl ">hello world</h1>
                                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt impedit eos. Rerum ad numquam id nam, iure dolorem, quasi est alias nostrum, mollitia aspernatur. Illum atque dolorum sapiente inventore.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt impedit eos. Rerum ad numquam id nam, iure dolorem, quasi est alias nostrum, mollitia aspernatur. Illum atque dolorum sapiente inventore.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt impedit eos. Rerum ad numquam id nam, iure dolorem, quasi est alias nostrum, mollitia aspernatur. Illum atque dolorum sapiente inventore.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt impedit eos. Rerum ad numquam id nam, iure dolorem, quasi est alias nostrum, mollitia aspernatur. Illum atque dolorum sapiente inventore.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt impedit eos. Rerum ad numquam id nam, iure dolorem, quasi est alias nostrum, mollitia aspernatur. Illum atque dolorum sapiente inventore.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt impedit eos. Rerum ad numquam id nam, iure dolorem, quasi est alias nostrum, mollitia aspernatur. Illum atque dolorum sapiente inventore.</p>
                                    </div>
                                </div>
                                <div className="lg:pl-20">
                                    <ul>
                                        <li className="flex">
                                            <a href="https://twitter.com" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                                                <TwitterIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow me on Twitter</span>
                                            </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a href="https://twitter.com" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                                                <InstagramIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow me on Twitter</span>
                                            </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a href="https://twitter.com" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                                                <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow me on Twitter</span>
                                            </a>
                                        </li>
                                        <li className="mt-4 flex">
                                            <a href="https://twitter.com" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                                                <LinkedInIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="ml-4">Follow me on Twitter</span>
                                            </a>
                                        </li>
                                        <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                                            <a href="mailto:marlon1293@gmail.com" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                                                <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="ml-4">marlon1293@gmail.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default About;