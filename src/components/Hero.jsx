import React from 'react';

export default function Hero() {

    return (
        <section className="hero" id="hero">
            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__badge reveal">
                        <span className="hero__badge-dot"></span>
                        Available for opportunities
                    </div>
                    <h1 className="hero__title reveal">
                        I'm <span className="gradient-text">Shashank</span>
                        <br />
                        <span className="hero__title--light">G Yaplar</span>
                    </h1>
                    <p className="hero__subtitle reveal">
                        <span className="hero__role">Software Developer</span>
                        <span className="hero__separator">•</span>
                        <span className="hero__role">Full Stack Engineer</span>
                        <span className="hero__separator">•</span>
                        <span className="hero__role">UI/UX Designer</span>
                    </p>
                    <p className="hero__description reveal">
                        I build things for the web — from clean React interfaces and robust Java backends
                        to blockchain smart contracts. Focused on crafting experiences that are
                        both beautiful and functional.
                    </p>
                    <div className="hero__actions reveal">
                        <a href="#projects" className="btn btn--primary" onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                        }}>
                            <span>View My Work</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn--outline" onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}>
                            Get In Touch
                        </a>
                    </div>

                    <div className="hero__stats reveal">
                        <div className="hero__stat">
                            <span className="hero__stat-number">3+</span>
                            <span className="hero__stat-label">Major Projects</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">2</span>
                            <span className="hero__stat-label">Hackathon Wins</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">8.89</span>
                            <span className="hero__stat-label">CGPA</span>
                        </div>
                    </div>
                </div>
                <div className="hero__scroll">
                    <div className="hero__scroll-line"></div>
                    <span>Scroll</span>
                </div>
            </div>
        </section>
    )
}
