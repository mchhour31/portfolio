const Header = () => {
    return (
        <div className="top-0 z-10 h-16 pt-6 ">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-20">
                    <div className="mx-auto max-w-7xl lg:max-w-5xl">
                        <div className="relative flex items-center">
                            <a aria-label="Home" className="pointer-events-auto text-white font-medium" href="/">
                                Home                      
                            </a>
                            <div className="flex flex-1 justify-end md:justify-center">
                                <nav className="pointer-events-auto md:block">
                                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ">

                                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/about">About</a>
                                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">Articles</a>
                                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
                                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/resources">Resources</a>
                                            <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/contact-me">Contact</a>
                                        
                                        </ul>
                                </nav>
                            </div>
                            
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Header;

