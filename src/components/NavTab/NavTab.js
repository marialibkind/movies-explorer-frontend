// import {useNavigate } from 'react-router-dom';

function Navtab() {

//     const navigate = useNavigate();

//     function handleAboutProject() {
//         navigate("/", {replace : true});
//      window.scrollTo("AboutProject");
//    }
    return (
        <section className="navtab">
            <nav className="navtab__list">
                    <a href="#about-project" className="navtab__list-p" >О проекте</a>
                    <a href="#techs" className="navtab__list-p">Технологии</a>
                    <a href="#about-me" className="navtab__list-p">Студент</a>
                </nav>
            </section>
    )
}
export default Navtab;