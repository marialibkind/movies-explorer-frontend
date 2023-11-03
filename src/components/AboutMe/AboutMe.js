function Aboutme() {
    return (
            <section className="student"
            id="about-me">

                <h1 className="student__info">Студент</h1>
                
                <div className="student__container">
                    <div className="student__part">
                        <h2 className="student__name">Мария</h2>
                        <p className="student__desc">Фронтенд-разработчик, 16 лет</p>
                        <p className="student__story">Я живу в Хайфе, закончиваю школу через год. 
                        Люблю играть в теннис и кодить. </p>
                        <a
                            href="https://github.com/marialibkind"
                            className="student__git"
                            target="_blank"
                            rel="noreferrer"
                        >
                           https://github.com/marialibkind
                        </a>
                    </div>
                    <img className="student__photo" alt=""></img>
                </div>

            </section>
            )
}
export default Aboutme;