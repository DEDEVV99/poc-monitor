function SensorCard({ title, value, unit, icon, status }) {
  return (
    <div className="sensor-card">
      <div className="sensor-card-top">
        <div>
          <span className="sensor-icon">{icon}</span>
          <p>{title}</p>
        </div>

        <span className="sensor-status">
          {status}
        </span>
      </div>

      <div className="sensor-value">
        <strong>{value}</strong>
        <span>{unit}</span>
      </div>

      <div className="sensor-card-footer">
        Data sensor terbaru
      </div>
    </div>
  );
}

export default SensorCard;