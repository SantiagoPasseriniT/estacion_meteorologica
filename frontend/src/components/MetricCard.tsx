type MetricCardProps = {
  label: string;
  value: string;
  unit: string;
  detail: string;
  tone: string;
};

export function MetricCard({ label, value, unit, detail, tone }: MetricCardProps) {
  return (
    <article className={`metric-card ${tone}`}>
      <div className="metric-header">
        <span>{label}</span>
        <span className="metric-signal" aria-hidden="true" />
      </div>
      <div className="metric-value">
        <span>{value}</span>
        {unit && <small>{unit}</small>}
      </div>
      <p>{detail}</p>
    </article>
  );
}