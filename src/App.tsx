import "./global.css";
import { main, container, flex, paragrafh, link } from "./app.module.css";
import { Calculator } from "./components/Calculator";

const App = () => {
  return (
    <>
      <main className={main}>
        <section className={`${container} ${flex}`}>
          <p className={paragrafh}>
            The BMI (Body Mass Index) calculation is a formula used to assess
            whether a person is within a healthy weight range in relation to
            their height. It is widely used as a simple and quick measure to
            identify possible weight-related problems, such as obesity or
            malnutrition.
          </p>
          <Calculator />
        </section>
      </main>
      <footer>
        Project by{" "}
        <a className={link} href="https://github.com/inacio-developer">
          Rafael Inácio
        </a>
      </footer>
    </>
  );
};

export default App;
