function AboutProject() {
    return (

        <section className="project"
        id="about-project">

            <h1 className="project__info">О проекте</h1>

            <div className="project__description">
                <div className="project__description-part">
                    <h2 className="project__description-m">Дипломный проект включал 5 этапов</h2>
                    <p className="project__description-s">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className="project__description-part">
                    <h3 className="project__description-m"> На выполнение диплома ушло 5 недель</h3>
                    <p className="project__description-s">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                        было соблюдать, чтобы успешно защититься. </p>
                </div>
            </div>


            <ul className="project__list">
                <li className="project__list-part">
                    <p className="project__list-black">1 неделя</p>
                    <p className="project__list-i">Back-end</p>
                </li>

                <li className="project__list-part project__list-part_long">
                    <p className="project__list-white">4 недели</p>
                    <p className="project__list-i">Front-end</p>
                </li>
            </ul>
        </section>

    )
}
export default AboutProject;