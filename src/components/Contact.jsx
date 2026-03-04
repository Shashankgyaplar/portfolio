export default function Contact() {
    return (
        <section className="section section--alt" id="contact">
            <div className="container">
                <div className="section__header reveal">
                    <span className="section__tag">06</span>
                    <h2 className="section__title">Let's Work Together</h2>
                </div>
                <div className="contact__container">
                    <p className="contact__text reveal">
                        Have an interesting project or opportunity? I'm always open to discussing
                        new ideas, collaborations, or just having a good conversation about tech.
                    </p>
                    <a
                        href="mailto:shashank.g.yaplar@gmail.com"
                        className="contact__email reveal"
                    >
                        shashank.g.yaplar@gmail.com
                    </a>
                    <div className="contact__socials reveal">
                        <a
                            href="https://github.com/shashankgyaplar"
                            className="contact__social"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shashank-g-yaplar/"
                            className="contact__social"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:shashank.g.yaplar@gmail.com"
                            className="contact__social"
                            aria-label="Email"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
