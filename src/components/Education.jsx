export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <div className="section__header reveal">
                    <span className="section__tag">05</span>
                    <h2 className="section__title">Education</h2>
                </div>
                <div className="education__card reveal">
                    <div className="education__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                    </div>
                    <div className="education__info">
                        <div className="education__top">
                            <div>
                                <h3 className="education__degree">BTech in Computer Science Engineering</h3>
                                <p className="education__spec">
                                    Specialization: IoT, Cybersecurity & Blockchain Technology
                                </p>
                            </div>
                            <span className="education__year">2023 — 2027</span>
                        </div>
                        <div className="education__stats">
                            <div className="education__stat">
                                <span className="education__stat-label">CGPA</span>
                                <span className="education__stat-value gradient-text">8.89</span>
                            </div>
                            <div className="education__stat">
                                <span className="education__stat-label">Status</span>
                                <span className="education__stat-value">In Progress</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
