function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__x">Учебный проект Яндекс.Практикум х BeatFilm.</h1>

            <div className="footer__container">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>

                <ul className="footer__links">
                    <li className="footer__text">
                        <a
                            href="https://ya.ru"
                            className="footer__text-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Яндекс.Практикум
                        </a></li>
                    <li className="footer__text">
                        <a
                            href="https://github.com"
                            className="footer__text-link"
                            target="_blank"
                            rel="noreferrer"
                        >Github
                        </a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;