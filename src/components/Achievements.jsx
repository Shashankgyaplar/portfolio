const achievements = [
    {
        rank: '1st',
        type: 'gold',
        badge: 'Winner',
        title: 'CloudSEK Quantum Breach Hackathon',
        description:
            'Secured first position for developing an innovative cybersecurity solution tackling modern digital threats.',
    },
    {
        rank: '2nd',
        type: 'silver',
        badge: 'Runner-up',
        title: 'TechFusion IOTRIX Hackathon',
        description:
            'Runner-up for building an innovative IoT-based solution combining hardware integration with smart software.',
    },
]

export default function Achievements() {
    return (
        <section className="section section--alt" id="achievements">
            <div className="container">
                <div className="section__header reveal">
                    <span className="section__tag">04</span>
                    <h2 className="section__title">Achievements</h2>
                </div>
                <div className="achievements__grid">
                    {achievements.map((a) => (
                        <div className="achievement__card reveal" key={a.title}>
                            <div className={`achievement__rank achievement__rank--${a.type}`}>
                                <span>{a.rank}</span>
                            </div>
                            <div className="achievement__content">
                                <h3 className="achievement__title">{a.title}</h3>
                                <p className="achievement__desc">{a.description}</p>
                            </div>
                            <div className={`achievement__badge achievement__badge--${a.type}`}>
                                {a.badge}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
