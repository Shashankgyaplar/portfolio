const categories = [
    {
        title: 'Languages',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: [
            { name: 'Java' },
            { name: 'JavaScript' },
            { name: 'Python' },
            { name: 'Dart' },
            { name: 'Solidity' },
        ],
    },
    {
        title: 'Frontend',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        skills: [
            { name: 'React', accent: true },
            { name: 'Flutter' },
            { name: 'TailwindCSS' },
            { name: 'HTML/CSS' },
        ],
    },
    {
        title: 'Backend & Databases',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <circle cx="6" cy="6" r="1" fill="currentColor" />
                <circle cx="6" cy="18" r="1" fill="currentColor" />
            </svg>
        ),
        skills: [
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'Firebase', accent: true },
            { name: 'MongoDB' },
            { name: 'PostgreSQL' },
        ],
    },
    {
        title: 'Tools & DevOps',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        skills: [
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'Docker', accent: true },
            { name: 'Linux' },
            { name: 'Bash' },
        ],
    },
    {
        title: 'Design',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        skills: [
            { name: 'Figma', accent: true },
            { name: 'UI/UX Design' },
            { name: 'Responsive Design' },
        ],
    },
    {
        title: 'Blockchain & Security',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        skills: [
            { name: 'Ethereum' },
            { name: 'Hardhat' },
            { name: 'Ethers.js' },
            { name: 'Cybersecurity' },
        ],
    },
]

export default function Skills() {
    return (
        <section className="section section--alt" id="skills">
            <div className="container">
                <div className="section__header reveal">
                    <span className="section__tag">02</span>
                    <h2 className="section__title">Skills & Technologies</h2>
                </div>
                <div className="skills__grid">
                    {categories.map(({ title, icon, skills }) => (
                        <div className="skills__category reveal" key={title}>
                            <h3 className="skills__category-title">
                                {icon}
                                {title}
                            </h3>
                            <div className="skills__tags">
                                {skills.map(({ name, accent }) => (
                                    <span
                                        className={`skill__tag${accent ? ' skill__tag--accent' : ''}`}
                                        key={name}
                                    >
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
