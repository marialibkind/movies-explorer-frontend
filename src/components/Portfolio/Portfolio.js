function Portfolio() {
    return (
        <section className="portfolio">

            <h1 className="portfolio__name">Портфолио</h1>
            <ul className="portfolio__container">
                <li className="portfolio__part">
                    <a
                        href="https://github.com/marialibkind/how-to-learn"
                        className="portfolio__link" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        Статичный сайт

                        <span className="portfolio__arrow">↗</span>

                    </a>
                    
                    
                </li>
                <li className="portfolio__part">
                    <a
                        className="portfolio__link"
                        href="https://github.com/marialibkind/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Адаптивный сайт

                        <span className="portfolio__arrow">↗</span>
                        
                    </a>
                   
                </li>

                <li className="portfolio__part">
                    <a
                        className="portfolio__link"
                        href="https://github.com/marialibkind/react-mesto-auth"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Одностраничное приложение

                        <span className="portfolio__arrow">↗</span>

                    </a>
                    
                </li>

            </ul>

        </section>
    )
}
export default Portfolio;