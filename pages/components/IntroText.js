const styles = {
  introText: {
    "margin": "auto",
    "float": "left",
    "padding": "4vw 3vw"
  },
  h1: {
    "letterSpacing": "0px",
    "fontSize": "3vh",
    "margin": "2px"
  },
  h3: {
    "letterSpacing": "1px",
    "fontSize": "1.2vw",
    "margin": "2px",
    "fontWeight": "600",
    "textShadow": "0px 1px #0070f3"
  },
  accent: {
    "color": "#0070f3",
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