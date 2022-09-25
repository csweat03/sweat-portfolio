const styles = {
  h1: {
    "letter-spacing": "0px",
    "font-size": "3vw",
    "margin": "2px"

  },
  h3: {
    "letter-spacing": "1px",
    "font-size": "1.2vw",
    "margin": "2px"
  },
  accent: {
    "color": "#0070f3"
  },
  introText: {
    "margin": "auto",
    "float": "left",
    "padding": "40vh 6.25vw"
  }
}

export default function IntroText() {
  return (
        <div style={styles.introText}>
          <h1 style={styles.h1}>Hi 👋, I'm <span style={styles.accent}>Christian Sweat</span></h1>
          <h3 style={styles.h3}>A passionate full-stack developer from the United States.</h3>
        </div>
  );
}