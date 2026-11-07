import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import TestSensor from "../components/TestSensor";
import pocSettings from "../data/plantSettings";
import {
  getStatus,
  getRecommendation,
} from "../utils/sensorStatus";

/* =========================================
   IKON SVG MONOKROM INDIGO
========================================= */

function Icon({ name, size = 24 }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const icons = {
    recycle: (
      <>
        <path d="M7 7.5 9.5 4h4L16 7.5" />
        <path d="m14 4 1.5 3.5H12" />
        <path d="M5.5 10 3.5 14l2 3.5H10" />
        <path d="m3.5 14 3-1.5L5 10" />
        <path d="M18.5 10 21 14l-2 3.5H14" />
        <path d="m21 14-3-1.5 1.5-2.5" />
        <path d="M8 20h8l2-3.5" />
        <path d="m16 20-1.5-3H18" />
      </>
    ),

    flask: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
        <path d="M7.5 15h9" />
        <path d="M9 12h6" />
      </>
    ),

    ph: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 17h14" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    temperature: (
      <>
        <path d="M14 14.5V5a2 2 0 0 0-4 0v9.5a4 4 0 1 0 4 0Z" />
        <path d="M12 11v6" />
      </>
    ),

    device: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M9 8h6" />
        <path d="M9 12h6" />
        <path d="M9 16h3" />
      </>
    ),

    light: (
      <>
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M8 14a6 6 0 1 1 8 0c-1 1-1.5 2-1.5 4h-5C9.5 16 9 15 8 14Z" />
      </>
    ),

    history: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    trash: (
      <>
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="m5 6 1 14h12l1-14" />
        <path d="M10 10v6" />
        <path d="M14 10v6" />
      </>
    ),

    signal: (
      <>
        <path d="M5 9a11 11 0 0 1 14 0" />
        <path d="M8 12a6 6 0 0 1 8 0" />
        <path d="M11 15a2 2 0 0 1 2 0" />
        <circle cx="12" cy="19" r="1" />
      </>
    ),
  };

  return (
    <span
      className="monitoring-icon"
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#5267D8",
        flexShrink: 0,
      }}
    >
      <svg {...commonProps}>
        {icons[name] || icons.device}
      </svg>
    </span>
  );
}

/* =========================================
   HALAMAN MONITORING
========================================= */

function Monitoring() {
  const [selectedHistory, setSelectedHistory] = useState([]);

  // DATA SENSOR TERBARU
  const latestData = useQuery(api.sensors.getLatest);

  // RIWAYAT PEMANTAUAN
  const history = useQuery(api.sensors.getHistory, {
    limit: 20,
  });

  // MUTATION HAPUS RIWAYAT
  const deleteReadings = useMutation(api.sensors.deleteReadings);

  // PARAMETER POC
  const poc = pocSettings;

  // STATUS DATA TERBARU
  const phStatus = latestData
    ? getStatus(latestData.ph, poc.ph)
    : null;

  const temperatureStatus = latestData
    ? getStatus(latestData.temperature, poc.temperature)
    : null;

  // INFORMASI PARAMETER
  const phRecommendation =
    latestData && phStatus
      ? getRecommendation("ph", phStatus.type)
      : "";

  const temperatureRecommendation =
    latestData && temperatureStatus
      ? getRecommendation("temperature", temperatureStatus.type)
      : "";

  // FORMAT WAKTU
  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "-";
    }

    return new Date(timestamp).toLocaleString("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // FORMAT NAMA OBJEK
  const getObjectName = (plantId) => {
    if (plantId === "kacang_panjang") {
      return "POC Limbah Organik";
    }

    if (plantId === "kangkung") {
      return "Data Lama - Kangkung";
    }

    if (plantId === "terong") {
      return "Data Lama - Terong";
    }

    return "POC Limbah Organik";
  };

  // PARAMETER RIWAYAT
  const getHistorySettings = (plantId) => {
    if (plantId === "kacang_panjang") {
      return poc;
    }

    return null;
  };

  // CHECK DATA
  const isAllSelected =
    history &&
    history.length > 0 &&
    selectedHistory.length === history.length;

  // PILIH SATU DATA
  const handleSelectHistory = (id) => {
    setSelectedHistory((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  // PILIH SEMUA
  const handleSelectAll = () => {
    if (!history) {
      return;
    }

    if (isAllSelected) {
      setSelectedHistory([]);
      return;
    }

    setSelectedHistory(history.map((item) => item._id));
  };

  // HAPUS DATA TERPILIH
  const handleDeleteSelected = async () => {
    if (selectedHistory.length === 0) {
      return;
    }

    const confirmed = window.confirm(
      `Apakah Anda yakin ingin menghapus ${selectedHistory.length} data riwayat?\n\nData yang sudah dihapus tidak dapat dikembalikan.`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteReadings({
        ids: selectedHistory,
      });

      setSelectedHistory([]);

      alert("Data riwayat berhasil dihapus.");
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus data riwayat.");
    }
  };

  // LOADING
  const isLoading = latestData === undefined;

  return (
    <div className="sensor-card poc-interactive-card poc-animate-up">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <p className="page-label">
            PEMANTAUAN
          </p>

          <h1>
            Pemantauan Sampah Organik
          </h1>

          <p className="page-description">
            Pantau parameter pH dan suhu Pupuk Organik Cair (POC)
            yang dihasilkan dari pengolahan sampah organik rumah tangga.
          </p>
        </div>
      </div>

      {/* OBJEK PEMANTAUAN */}
      <div className="plant-selector-card">
        <div className="plant-selector-info">
          <p className="page-label">
            OBJEK PEMANTAUAN
          </p>

          <h3>
            <Icon name="recycle" size={23} />
            {" "}Sampah Organik Rumah Tangga
          </h3>

          <p>
            Bahan pengolahan Pupuk Organik Cair
          </p>
        </div>

        <div className="plant-select-wrapper">
          <strong>
            POC Limbah Organik
          </strong>
        </div>
      </div>

      {/* PARAMETER POC */}
      <div className="parameter-card">
        <div className="parameter-title">
          <span className="plant-icon">
            <Icon name="flask" size={28} />
          </span>

          <div>
            <p className="page-label">
              PARAMETER PEMANTAUAN
            </p>

            <h3>
              POC Limbah Organik
            </h3>
          </div>
        </div>

        <div className="parameter-grid">
          <div className="parameter-item">
            <span>
              <Icon name="ph" size={17} />
              {" "}pH POC
            </span>

            <strong>
              {poc.ph.low}–{poc.ph.high}
            </strong>
          </div>

          <div className="parameter-item">
            <span>
              <Icon name="temperature" size={17} />
              {" "}Suhu POC
            </span>

            <strong>
              {poc.temperature.low}–{poc.temperature.high} °C
            </strong>
          </div>
        </div>
      </div>

      {/* DATA PEMANTAUAN */}
      <div className="monitoring-section">
        <div className="section-heading">
          <div>
            <p className="page-label">
              DATA PEMANTAUAN
            </p>

            <h2>
              Kondisi POC Saat Ini
            </h2>
          </div>

          {latestData && (
            <span className="last-update">
              Pembaruan:{" "}
              {formatDate(latestData.timestamp)}
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="empty-sensor-card">
            Memuat data pemantauan...
          </div>
        ) : !latestData ? (
          <div className="empty-sensor-card">
            <div className="empty-icon">
              <Icon name="signal" size={38} />
            </div>

            <h3>
              Belum ada data pemantauan
            </h3>

            <p>
              Gunakan tombol pengujian untuk mengirim data simulasi
              pH dan suhu POC.
            </p>
          </div>
        ) : (
          <div className="sensor-grid">

            {/* pH POC */}
            <div className="sensor-card poc-interactive-card poc-animate-up poc-delay-1">
              <div className="sensor-card-top">
                <div>
                  <span className="sensor-name">
                    <Icon name="ph" size={19} />
                    {" "}pH POC
                  </span>

                  <p>
                    Tingkat keasaman Pupuk Organik Cair
                  </p>
                </div>

                <span
                  className={`status-badge ${phStatus.type}`}
                >
                  {phStatus.label}
                </span>
              </div>

              <div className="sensor-value">
                {latestData.ph.toFixed(2)}
              </div>

              <div className="sensor-range">
                Rentang acuan POC:{" "}
                {poc.ph.low}–{poc.ph.high}
              </div>
            </div>

            {/* SUHU POC */}
            <div className="sensor-card poc-interactive-card poc-animate-up poc-delay-2">
              <div className="sensor-card-top">
                <div>
                  <span className="sensor-name">
                    <Icon name="temperature" size={19} />
                    {" "}Suhu POC
                  </span>

                  <p>
                    Temperatur Pupuk Organik Cair
                  </p>
                </div>

                <span
                  className={`status-badge ${temperatureStatus.type}`}
                >
                  {temperatureStatus.label}
                </span>
              </div>

              <div className="sensor-value">
                {latestData.temperature.toFixed(1)}

                <span className="unit">
                  °C
                </span>
              </div>

              <div className="sensor-range">
                Rentang acuan POC:{" "}
                {poc.temperature.low}–{poc.temperature.high} °C
              </div>
            </div>

          </div>
        )}
      </div>

      {/* STATUS PERANGKAT */}
      {latestData && (
        <div className="device-status-card">
          <div className="device-status-info">
            <span className="online-dot"></span>

            <div>
              <p className="page-label">
                STATUS PERANGKAT
              </p>

              <h3>
                {latestData.deviceId}
              </h3>
            </div>
          </div>

          <span className="device-status-text">
            {latestData.status === "online"
              ? "Terhubung"
              : latestData.status}
          </span>
        </div>
      )}

      {/* INFORMASI PARAMETER */}
      {latestData && (
        <div className="recommendation-card">
          <div className="recommendation-header">
            <div>
              <p className="page-label">
                INFORMASI
              </p>

              <h2>
                Kondisi Parameter POC
              </h2>
            </div>

            <span className="recommendation-icon">
              <Icon name="light" size={27} />
            </span>
          </div>

          <div className="recommendation-list">

            {/* INFORMASI pH */}
            <div className="recommendation-item">
              <div className="recommendation-item-title">
                <strong>
                  pH POC
                </strong>

                <span
                  className={`status-badge ${phStatus.type}`}
                >
                  {phStatus.label}
                </span>
              </div>

              <p>
                {phRecommendation}
              </p>
            </div>

            {/* INFORMASI SUHU */}
            <div className="recommendation-item">
              <div className="recommendation-item-title">
                <strong>
                  Suhu POC
                </strong>

                <span
                  className={`status-badge ${temperatureStatus.type}`}
                >
                  {temperatureStatus.label}
                </span>
              </div>

              <p>
                {temperatureRecommendation}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* PENGUJIAN SENSOR */}
      <TestSensor />

      {/* RIWAYAT PEMANTAUAN */}
      <div className="history-section">
        <div className="section-heading">
          <div>
            <p className="page-label">
              RIWAYAT PEMANTAUAN
            </p>

            <h2>
              <Icon name="history" size={23} />
              {" "}Riwayat Pemantauan POC
            </h2>
          </div>
        </div>

        <div className="history-card">

          {/* LOADING */}
          {history === undefined ? (
            <div className="history-empty">
              Memuat riwayat pemantauan...
            </div>
          ) : history.length === 0 ? (
            /* TIDAK ADA DATA */
            <div className="history-empty">
              <div className="empty-icon">
                <Icon name="history" size={38} />
              </div>

              <p>
                Belum ada riwayat pemantauan POC.
              </p>
            </div>
          ) : (
            <>
              {/* AKSI RIWAYAT */}
              <div className="history-actions">
                <label className="select-all">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                  />

                  <span>
                    Pilih Semua
                  </span>
                </label>

                <button
                  className="delete-history-button"
                  disabled={selectedHistory.length === 0}
                  onClick={handleDeleteSelected}
                >
                  <Icon name="trash" size={17} />
                  {" "}Hapus Terpilih

                  {selectedHistory.length > 0 && (
                    <span>
                      {" "}
                      ({selectedHistory.length})
                    </span>
                  )}
                </button>
              </div>

              {/* TABEL RIWAYAT */}
              <div className="history-table-wrapper">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th className="checkbox-column">
                        Pilih
                      </th>

                      <th>
                        Waktu
                      </th>

                      <th>
                        Objek
                      </th>

                      <th>
                        pH
                      </th>

                      <th>
                        Status pH
                      </th>

                      <th>
                        Suhu
                      </th>

                      <th>
                        Status Suhu
                      </th>

                      <th>
                        Perangkat
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {history.map((item) => {
                      // PARAMETER RIWAYAT
                      const historySettings =
                        getHistorySettings(item.plant);

                      // STATUS DEFAULT
                      let historyPhStatus = {
                        label: "-",
                        type: "unknown",
                      };

                      let historyTemperatureStatus = {
                        label: "-",
                        type: "unknown",
                      };

                      // HITUNG STATUS
                      if (historySettings) {
                        historyPhStatus = getStatus(
                          item.ph,
                          historySettings.ph
                        );

                        historyTemperatureStatus = getStatus(
                          item.temperature,
                          historySettings.temperature
                        );
                      }

                      return (
                        <tr
                          key={item._id}
                          className="history-row-animated"
                        >
                          {/* CHECKBOX */}
                          <td className="checkbox-column">
                            <input
                              type="checkbox"
                              checked={selectedHistory.includes(
                                item._id
                              )}
                              onChange={() =>
                                handleSelectHistory(item._id)
                              }
                            />
                          </td>

                          {/* WAKTU */}
                          <td>
                            {formatDate(item.timestamp)}
                          </td>

                          {/* OBJEK */}
                          <td>
                            <span className="history-plant">
                              {getObjectName(item.plant)}
                            </span>
                          </td>

                          {/* pH */}
                          <td>
                            <strong>
                              {item.ph.toFixed(2)}
                            </strong>
                          </td>

                          {/* STATUS pH */}
                          <td>
                            <span
                              className={`status-badge ${historyPhStatus.type}`}
                            >
                              {historyPhStatus.label}
                            </span>
                          </td>

                          {/* SUHU */}
                          <td>
                            <strong>
                              {item.temperature.toFixed(1)}
                              °C
                            </strong>
                          </td>

                          {/* STATUS SUHU */}
                          <td>
                            <span
                              className={`status-badge ${historyTemperatureStatus.type}`}
                            >
                              {historyTemperatureStatus.label}
                            </span>
                          </td>

                          {/* PERANGKAT */}
                          <td>
                            {item.deviceId}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}

export default Monitoring;