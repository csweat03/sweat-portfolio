import IntroText from './IntroText'
import LargeButton from './LargeButton'
import AnimArrow from './AnimArrow'

const styles = {
    introStart: {
        "margin": "auto",
        "float": "left",
        "padding": "15vw 6.25vw"
    },
    container: {
        "display": "inline-block",
        "margin-bottom": "80vh"
    }
}

export default function IntroStart() {
    return (
          <div style={styles.introStart}>
            <div style={styles.container}>
                <IntroText />
                <div style={{
                    "float": "left",
                    "padding": "0px 5vw",
                    "width": "auto"}}>
                    <LargeButton scale="3" text="Resume" link="https://www.google.com" />
                    <LargeButton scale="3" text="Projects" link="https://www.google.com" />
                </div>
                <div style={{
                    "float": "left",
                    "padding": "0px 5vw",
                    "width": "auto"}}>
                    <LargeButton scale="3" text="GitHub" link="https://www.google.com" />
                    <LargeButton scale="3" text="Contact" link="https://www.google.com" />
                </div>
                <AnimArrow />
            </div>
            <div style={styles.container}>
                <div>
                <IntroText /><IntroText /><IntroText /><IntroText />
                </div>
            </div>
            <div style={styles.container}>
                <div>
                <IntroText /><IntroText /><IntroText /><IntroText />
                </div>
            </div>
            <div style={styles.container}>
                <div>
                <IntroText /><IntroText /><IntroText /><IntroText />
                </div>
            </div>
            <div style={styles.container}>
                <div>
                <IntroText /><IntroText /><IntroText /><IntroText />
                </div>
            </div>
          </div>
    );
  }