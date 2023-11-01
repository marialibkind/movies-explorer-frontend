import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";


function Main() {

    return (

        <main className="main">

            <Promo></Promo>
            <NavTab></NavTab>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>

        </main>
    )
}
export default Main;