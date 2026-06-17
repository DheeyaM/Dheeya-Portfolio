function ComingSoon() {
  return (
    <div style={styles.container}>
      <h1>Dheeya Manilal</h1>
      <p>Currently self-teaching React.js</p>
      <p>Portfolio coming soon.</p>
      <p>In the meantime, find me here:</p>
      <div style={styles.links}>
        <a href="https://github.com/DheeyaM">GitHub</a>
        <a href="https://www.linkedin.com/in/dheeya-manilal/">LinkedIn</a>
        <a href="mailto:dheeyam7@gmail.com">Email</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    textAlign: "center",
    gap: "0.75rem",
  },
  links: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.5rem",
  },
};
export default ComingSoon;