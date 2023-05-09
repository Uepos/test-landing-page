import styles from './app.module.scss';
import { ReactComponent as Logo } from './images/Logo.svg';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.promoSection}>
          <span>
            Image Form: You can now generate multi format visuals from static
            and animated templates!
          </span>
          <a href="/#">
            <span>Try it out</span>
            <span>→</span>
          </a>
        </div>
        <nav className={`${styles.container} ${styles.navigationBar}`}>
          <Logo />
          <ul>
            <li>
              <a href="/#"> Product</a>
            </li>
            <li>
              <a href="/#"> Solutions</a>
            </li>
            <li>
              <a href="/#"> Pricing</a>
            </li>
            <li>
              <a href="/#"> Integrations</a>
            </li>
            <li>
              <a href="/#"> Resources</a>
            </li>
          </ul>
          <div className={styles.headerButtonContainer}>
            <a href="/#"> Sign in</a>
            <a href="/#"> Sign up</a>
          </div>
        </nav>
      </header>
      <main className={`${styles.container} ${styles.main}`}>
        <section className={styles.heroSection}>
          <div className={styles.heroSectionContent}>
            <span>Growth & ROI</span>
            <h1>Personalized images for Email marketing</h1>
            <p>
              Send unique and personalized images to each of your recipient!
              Works perfectly for email marketing campaigns, E-commerce stores,
              or blogs at scale..
            </p>
            <div>
              <a href="/#">Personalize my Images</a>
              <a href="/#">Request Demo</a>
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/6214efb2d4b5d94158f2ff03/628608d8bf802b1939ee7507_Dynamic%20image%20landing.svg"
            loading="eager"
            id="w-node-_327d61ae-6f58-a928-f5f1-a26849d3ec70-49d3ec5e"
            alt=""
          />
        </section>
        <section className={styles.secondSection}>
          <img
            src="https://uploads-ssl.webflow.com/6214efb2d4b5d94158f2ff03/62178150e3733c63f89896f1_spreadsheet-deco.webp"
            loading="lazy"
            width="344"
            height="305"
            alt=""
            className={styles.coloredBlob}
          />
          <div>
            <span>Personalization</span>
            <h2>What is a Personalized Image?</h2>
            <p>
              Engage with your audience like never before. Use your subscriber
              data to Personalize your visual content. Stand out from the crowd
              and deliver a fully customized customer experience
            </p>
          </div>
          <div>Image Video</div>
          <div>
            <span>Personalize any layer</span>
            <p>
              Every layer of your Abyssale templates can be personalized with
              subscriber data
            </p>
          </div>
        </section>
      </main>
      <footer>my footer</footer>
    </>
  );
}
