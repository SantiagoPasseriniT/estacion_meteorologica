type PlaceholderPanelProps = {
  title: string;
};

export function PlaceholderPanel({ title }: PlaceholderPanelProps) {
  return (
    <section
      className="placeholder-panel"
      aria-label={title}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        opacity: 0.4,
      }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: 500 }}>{title}</h2>
    </section>
  );
}