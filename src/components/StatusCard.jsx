function StatusCard({
  deviceId,
  status,
  timestamp,
}) {

  const isOnline = status === "online";

  const formattedTime = timestamp
    ? new Date(timestamp).toLocaleString("id-ID")
    : "-";

  return (
    <div className="status-card">

      <div className="status-card-header">

        <div>
          <p className="page-label">
            STATUS PERANGKAT
          </p>

          <h3>
            ESP8266
          </h3>
        </div>

        <div className="online-status">

          <span
            className="online-dot"
            style={{
              background: isOnline
                ? "#51a65e"
                : "#d9534f",
            }}
          />

          {isOnline ? "Online" : "Offline"}

        </div>

      </div>

      <div className="status-info">

        <div>
          <span>
            Perangkat
          </span>

          <strong>
            {deviceId}
          </strong>
        </div>

        <div>
          <span>
            Update terakhir
          </span>

          <strong>
            {formattedTime}
          </strong>
        </div>

      </div>

    </div>
  );
}

export default StatusCard;