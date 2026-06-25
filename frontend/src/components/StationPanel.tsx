type StationPanelProps = {
  name: string;
  location: string;
  status: string;
  badge: string;
  lastUpdated: string;
};

export function StationPanel({
  name,
  location,
  status,
  badge,
  lastUpdated,
}: StationPanelProps) {
  return (
    <section className="station-panel" aria-labelledby="station-name">
      <div>
        <div className="status-line">
          <span className="status-dot" aria-hidden="true" />
          <span>
            {name} - {status}
          </span>
        </div>
        <h2 id="station-name">{name}</h2>
        <p className="station-location">{location}</p>
      </div>
      <div className="station-meta">
        <span className="system-badge">{badge}</span>
        <span className="last-updated">{lastUpdated}</span>
      </div>
    </section>
  );
}