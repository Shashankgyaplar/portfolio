import { useState } from 'react'

const projects = [
    {
        number: '01',
        title: 'CardAdvisor',
        subtitle: 'Smart Credit Card Advisor for India',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        description:
            'A production-grade web application to help users select, optimize, and evaluate credit cards based on actual spending behavior. Features personalized recommendations and a net yearly benefit calculator.',
        link: 'https://github.com/Shashankgyaplar/CardAdvisor',
        liveLink: 'https://card-advisor-snowy.vercel.app/',
    },
    {
        number: '02',
        title: 'ShadowBrowse',
        subtitle: 'Secure Sandbox Virtual Browser',
        tags: ['Go', 'React', 'Docker', 'Browser Extension'],
        description:
            'A containerized virtual browser environment for secure web exploration with integrated malware analysis. Ensures maximum privacy through Docker isolation and real-time threat detection.',
        link: 'https://github.com/VincentSamuelPaul/ShadowBrowse',
    },
    {
        number: '03',
        title: 'Voting DApp',
        subtitle: 'Decentralized Election Platform',
        tags: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
        description:
            'A blockchain-based decentralized voting application ensuring transparent, tamper-proof elections on Ethereum. Features smart contract-powered voting with verifiable results on-chain.',
        link: 'https://github.com/shashankgyaplar/Voting_app',
    },
]

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleClick = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index))
    }

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section__header reveal">
                    <span className="section__tag">03</span>
                    <h2 className="section__title">Featured Projects</h2>
                </div>
                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div className="reveal" key={project.title}>
                            <article
                                className={`project__card bento-item${expandedIndex === index ? ' expanded' : ''}`}
                                onClick={() => handleClick(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleClick(index)}
                            >
                                <div className="project__card-inner">
                                    <div className="project__card-front">
                                        <div className="project__number">{project.number}</div>
                                        <div className="project__info">
                                            <h3 className="project__title">{project.title}</h3>
                                            <p className="project__subtitle">{project.subtitle}</p>
                                            <div className="project__tags">
                                                {project.tags.map((tag) => (
                                                    <span key={tag}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="project__arrow">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="project__description">
                                        <p>{project.description}</p>
                                        <div className="project__links">
                                            <a
                                                href={project.link}
                                                className="project__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                View on GitHub
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                            {project.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    className="project__link project__link--live"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Live Demo
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
