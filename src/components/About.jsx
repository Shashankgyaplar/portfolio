export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section__header reveal">
                    <span className="section__tag">01</span>
                    <h2 className="section__title">About Me</h2>
                </div>
                <div className="about__grid">
                    <div className="about__content reveal">
                        <p className="about__text about__text--lead">
                            I'm a Computer Science student with a passion for building real things,
                            breaking them, and rebuilding them better.
                        </p>
                        <p className="about__text">
                            Currently pursuing my BTech at the intersection of IoT, Cybersecurity,
                            and Blockchain — I work across the full development spectrum. From
                            architecting Java-based systems and crafting React frontends to designing
                            in Figma and writing Solidity smart contracts.
                        </p>
                        <p className="about__text">
                            I thrive in hackathon environments where creative problem-solving
                            meets tight deadlines. My philosophy is simple: strong fundamentals,
                            clean code, and consistent improvement — one commit at a time.
                        </p>
                    </div>
                    <div className="about__details reveal">
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3z" />
                                        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" />
                                    </svg>
                                ),
                                title: 'Education',
                                value: 'BTech CSE — IoT, Cybersecurity & Blockchain',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                ),
                                title: 'Focus',
                                value: 'Full Stack Development & Blockchain',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                ),
                                title: 'Approach',
                                value: 'Design → Build → Deploy → Iterate',
                            },
                        ].map(({ icon, title, value }) => (
                            <div className="about__detail-card" key={title}>
                                <div className="detail__icon">{icon}</div>
                                <div>
                                    <h4 className="detail__title">{title}</h4>
                                    <p className="detail__value">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
