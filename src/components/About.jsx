export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="bento-grid">
                    <div className="bento-item bento-col-12 reveal" style={{ padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <div className="section__header" style={{ marginBottom: '24px' }}>
                            <span className="section__tag">01</span>
                            <h2 className="section__title">About Me</h2>
                        </div>
                    </div>

                    <div className="bento-item bento-item--glow bento-col-8 bento-row-2 reveal about__content">
                        <p className="about__text about__text--lead" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '32px' }}>
                            I'm a Computer Science student with a passion for building real things,
                            breaking them, and rebuilding them better.
                        </p>
                        <p className="about__text" style={{ fontSize: '1.05rem', lineHeight: '1.9' }}>
                            Currently pursuing my BTech at the intersection of IoT, Cybersecurity,
                            and Blockchain — I work across the full development spectrum. From
                            architecting Java-based systems and crafting React frontends to designing
                            in Figma and writing Solidity smart contracts.
                        </p>
                        <br />
                        <p className="about__text" style={{ fontSize: '1.05rem', lineHeight: '1.9' }}>
                            I thrive in hackathon environments where creative problem-solving
                            meets tight deadlines. My philosophy is simple: strong fundamentals,
                            clean code, and consistent improvement — one commit at a time.
                        </p>
                    </div>

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
                        <div className="bento-item bento-col-4 reveal" key={title} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="detail__icon" style={{ marginBottom: '16px' }}>{icon}</div>
                            <h4 className="detail__title" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{title}</h4>
                            <p className="detail__value" style={{ fontSize: '1rem', marginTop: '8px', lineHeight: '1.5' }}>{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
