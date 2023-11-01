import { useNavigate } from "react-router-dom";

function ErrorPopup() {
    const navigate = useNavigate();
    return (
        <main className="error">
            <section className="error__container">
                <form >
                    <h1 className="error__title">404</h1>
                    <p className="error__in">Страница не найдена</p>
                    <div className="error__data">
                        <button type="button" className="error__out-data" onClick={() => navigate(-1)}>Назад</button>
                    </div>
                </form>
                <div>
                </div>
            </section>
        </main>
    )

}
export default ErrorPopup;