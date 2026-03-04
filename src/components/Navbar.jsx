import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 40)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.3, rootMargin: '-72px 0px -40% 0px' }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    const scrollTo = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setMenuOpen(false)
        document.body.style.overflow = ''
    }

    const toggleMenu = () => {
        setMenuOpen((prev) => {
            document.body.style.overflow = !prev ? 'hidden' : ''
            return !prev
        })
    }

    const links = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'education', label: 'Education' },
    ]

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
            <nav className="nav container">
                <a href="#hero" className="nav__logo" onClick={(e) => scrollTo(e, 'hero')}>
                    <span className="logo__accent">Shashank</span>
                    <span className="logo__dot"></span>
                </a>
                <div className={`nav__menu${menuOpen ? ' active' : ''}`}>
                    <ul className="nav__list">
                        {links.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={`nav__link${activeSection === id ? ' active' : ''}`}
                                    onClick={(e) => scrollTo(e, id)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="nav__link nav__link--cta"
                                onClick={(e) => scrollTo(e, 'contact')}
                            >
                                Let's Talk
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className={`nav__toggle${menuOpen ? ' active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    )
}
