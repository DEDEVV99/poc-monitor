import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import TestSensor from "../components/TestSensor";
import pocSettings from "../data/plantSettings";
import {
  getStatus,
  getRecommendation,
} from "../utils/sensorStatus";


function Monitoring() {

  // =========================
  // DATA YANG DIPILIH
  // =========================

  const [selectedHistory, setSelectedHistory] = useState([]);


  // =========================
  // DATA SENSOR TERBARU
  // =========================

  const latestData = useQuery(
    api.sensors.getLatest
  );


  // =========================
  // RIWAYAT DATA
  // =========================

  const history = useQuery(
    api.sensors.getHistory,
    {
      limit: 20,
    }
  );


  // =========================
  // MUTATION HAPUS
  // =========================

  const deleteReadings = useMutation(
    api.sensors.deleteReadings
  );


  // =========================
  // PARAMETER POC
  // =========================

  const poc = pocSettings;


  // =========================
  // STATUS DATA TERBARU
  // =========================

  const phStatus = latestData
    ? getStatus(
        latestData.ph,
        poc.ph
      )
    : null;


  const temperatureStatus = latestData
    ? getStatus(
        latestData.temperature,
        poc.temperature
      )
    : null;


  // =========================
  // INFORMASI PARAMETER
  // =========================

  const phRecommendation =
    latestData && phStatus
      ? getRecommendation(
          "ph",
          phStatus.type
        )
      : "";


  const temperatureRecommendation =
    latestData && temperatureStatus
      ? getRecommendation(
          "temperature",
          temperatureStatus.type
        )
      : "";


  // =========================
  // FORMAT WAKTU
  // =========================

  const formatDate = (timestamp) => {

    if (!timestamp) {
      return "-";
    }

    return new Date(
      timestamp
    ).toLocaleString(
      "id-ID",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );
  };


  // =========================
  // FORMAT NAMA OBJEK
  // =========================

const getObjectName = (plantId) => {
  if (plantId === "kacang_panjang") {
    return "🌱 Kacang Panjang";
  }

  if (plantId === "kangkung") {
    return "Data Lama - Kangkung";
  }

  if (plantId === "terong") {
    return "Data Lama - Terong";
  }

  return "🌱 Kacang Panjang";
};


  // =========================
  // PARAMETER RIWAYAT
  // =========================

  const getHistorySettings = (plantId) => {

    // Data penelitian saat ini
    if (
      plantId === "kacang_panjang"
    ) {
      return poc;
    }


    // Data lama tidak menggunakan
    // parameter penelitian saat ini
    return null;
  };


  // =========================
  // CHECK DATA
  // =========================

  const isAllSelected =
    history &&
    history.length > 0 &&
    selectedHistory.length ===
      history.length;


  // =========================
  // PILIH SATU DATA
  // =========================

  const handleSelectHistory = (id) => {

    setSelectedHistory((current) => {

      if (current.includes(id)) {

        return current.filter(
          (item) => item !== id
        );
      }

      return [
        ...current,
        id,
      ];
    });
  };


  // =========================
  // PILIH SEMUA
  // =========================

  const handleSelectAll = () => {

    if (!history) {
      return;
    }


    if (isAllSelected) {

      setSelectedHistory([]);

      return;
    }


    setSelectedHistory(
      history.map(
        (item) => item._id
      )
    );
  };


  // =========================
  // HAPUS DATA TERPILIH
  // =========================

  const handleDeleteSelected = async () => {

    if (
      selectedHistory.length === 0
    ) {
      return;
    }


    const confirmed =
      window.confirm(
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


      alert(
        "Data riwayat berhasil dihapus."
      );

    } catch (error) {

      console.error(error);


      alert(
        "Gagal menghapus data riwayat."
      );
    }
  };


  // =========================
  // LOADING
  // =========================

  const isLoading =
    latestData === undefined;


  return (

    <div className="monitoring-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="page-header">

        <div>

          <p className="page-label">
            MONITORING
          </p>


          <h1>
            Monitoring POC
          </h1>


          <p className="page-description">
            Pantau parameter pH dan suhu
            Pupuk Organik Cair (POC)
            berbahan limbah organik
            dalam konteks penelitian
            tanaman kacang panjang.
          </p>

        </div>

      </div>


      {/* =================================================
          OBJEK PENELITIAN
      ================================================= */}

      <div className="plant-selector-card">

        <div className="plant-selector-info">

          <p className="page-label">
            OBJEK PENELITIAN
          </p>


          <h3>
            🌱 Tanaman Kacang Panjang
          </h3>


          <p>
            Konteks penelitian
          </p>

        </div>


        <div className="plant-select-wrapper">

          <strong>
            POC Limbah Organik
          </strong>

        </div>

      </div>


      {/* =================================================
          PARAMETER POC
      ================================================= */}

      <div className="parameter-card">

        <div className="parameter-title">

          <span className="plant-icon">
            🧪
          </span>


          <div>

            <p className="page-label">
              PARAMETER MONITORING
            </p>


            <h3>
              POC Limbah Organik
            </h3>

          </div>

        </div>


        <div className="parameter-grid">


          <div className="parameter-item">

            <span>
              pH POC
            </span>


            <strong>
              Belum ditetapkan
            </strong>

          </div>


          <div className="parameter-item">

            <span>
              Suhu POC
            </span>


            <strong>
              Belum ditetapkan
            </strong>

          </div>


        </div>

      </div>


      {/* =================================================
          DATA SENSOR
      ================================================= */}

      <div className="monitoring-section">

        <div className="section-heading">

          <div>

            <p className="page-label">
              DATA SENSOR
            </p>


            <h2>
              Kondisi Saat Ini
            </h2>

          </div>


          {latestData && (

            <span className="last-update">

              Update:{" "}

              {formatDate(
                latestData.timestamp
              )}

            </span>

          )}

        </div>


        {isLoading ? (

          <div className="empty-sensor-card">

            Memuat data sensor...

          </div>

        ) : !latestData ? (

          <div className="empty-sensor-card">

            <div className="empty-icon">
              📡
            </div>


            <h3>
              Belum ada data sensor
            </h3>


            <p>
              Gunakan tombol pengujian
              untuk mengirim data sensor
              dummy.
            </p>

          </div>

        ) : (

          <div className="sensor-grid">


            {/* =========================
                PH
            ========================= */}

            <div className="sensor-card">

              <div className="sensor-card-top">

                <div>

                  <span className="sensor-name">
                    pH POC
                  </span>


                  <p>
                    Tingkat keasaman
                    Pupuk Organik Cair
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

                Parameter POC:
                {" "}
                Belum ditetapkan

              </div>

            </div>


            {/* =========================
                SUHU
            ========================= */}

            <div className="sensor-card">

              <div className="sensor-card-top">

                <div>

                  <span className="sensor-name">
                    Suhu POC
                  </span>


                  <p>
                    Temperatur Pupuk
                    Organik Cair
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

                Parameter POC:
                {" "}
                Belum ditetapkan

              </div>

            </div>


          </div>

        )}

      </div>


      {/* =================================================
          STATUS PERANGKAT
      ================================================= */}

      {latestData && (

        <div className="device-status-card">

          <div className="device-status-info">

            <span className="online-dot">
            </span>


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

            {latestData.status ===
            "online"
              ? "Online"
              : latestData.status}

          </span>

        </div>

      )}


      {/* =================================================
          INFORMASI PARAMETER
      ================================================= */}

      {latestData && (

        <div className="recommendation-card">

          <div className="recommendation-header">

            <div>

              <p className="page-label">
                INFORMASI
              </p>


              <h2>
                Kondisi Parameter
              </h2>

            </div>


            <span className="recommendation-icon">
              💡
            </span>

          </div>


          <div className="recommendation-list">


            {/* PH */}

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


            {/* SUHU */}

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


      {/* =================================================
          TEST SENSOR
      ================================================= */}

      <TestSensor />


      {/* =================================================
          RIWAYAT DATA
      ================================================= */}

      <div className="history-section">

        <div className="section-heading">

          <div>

            <p className="page-label">
              RIWAYAT DATA
            </p>


            <h2>
              Monitoring Sebelumnya
            </h2>

          </div>

        </div>


        <div className="history-card">


          {/* =========================
              LOADING
          ========================= */}

          {history === undefined ? (

            <div className="history-empty">

              Memuat riwayat...

            </div>

          ) : history.length === 0 ? (


            /* =========================
               TIDAK ADA DATA
            ========================= */

            <div className="history-empty">

              <div className="empty-icon">
                📋
              </div>


              <p>
                Belum ada riwayat data.
              </p>

            </div>

          ) : (

            <>


              {/* =========================
                  AKSI RIWAYAT
              ========================= */}

              <div className="history-actions">

                <label className="select-all">

                  <input
                    type="checkbox"
                    checked={
                      isAllSelected
                    }
                    onChange={
                      handleSelectAll
                    }
                  />


                  <span>
                    Pilih Semua
                  </span>

                </label>


                <button
                  className="delete-history-button"
                  disabled={
                    selectedHistory.length ===
                    0
                  }
                  onClick={
                    handleDeleteSelected
                  }
                >

                  🗑 Hapus Terpilih

                  {selectedHistory.length >
                    0 && (

                    <span>
                      {" "}
                      (
                      {
                        selectedHistory.length
                      }
                      )
                    </span>

                  )}

                </button>

              </div>


              {/* =========================
                  TABEL
              ========================= */}

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

                    {history.map(
                      (item) => {


                        // =========================
                        // PARAMETER RIWAYAT
                        // =========================

                        const historySettings =
                          getHistorySettings(
                            item.plant
                          );


                        // =========================
                        // DEFAULT STATUS
                        // =========================

                        let historyPhStatus = {
                          label: "-",
                          type: "unknown",
                        };


                        let historyTemperatureStatus = {
                          label: "-",
                          type: "unknown",
                        };


                        // =========================
                        // HITUNG STATUS
                        // =========================

                        if (
                          historySettings
                        ) {

                          historyPhStatus =
                            getStatus(
                              item.ph,
                              historySettings.ph
                            );


                          historyTemperatureStatus =
                            getStatus(
                              item.temperature,
                              historySettings.temperature
                            );

                        }


                        return (

                          <tr
                            key={item._id}
                          >


                            {/* CHECKBOX */}

                            <td className="checkbox-column">

                              <input
                                type="checkbox"
                                checked={selectedHistory.includes(
                                  item._id
                                )}
                                onChange={() =>
                                  handleSelectHistory(
                                    item._id
                                  )
                                }
                              />

                            </td>


                            {/* WAKTU */}

                            <td>

                              {formatDate(
                                item.timestamp
                              )}

                            </td>


                            {/* OBJEK */}

                            <td>

                              <span className="history-plant">

                                {getObjectName(
                                  item.plant
                                )}

                              </span>

                            </td>


                            {/* PH */}

                            <td>

                              <strong>

                                {item.ph.toFixed(
                                  2
                                )}

                              </strong>

                            </td>


                            {/* STATUS PH */}

                            <td>

                              <span
                                className={`status-badge ${historyPhStatus.type}`}
                              >

                                {
                                  historyPhStatus.label
                                }

                              </span>

                            </td>


                            {/* SUHU */}

                            <td>

                              <strong>

                                {item.temperature.toFixed(
                                  1
                                )}

                                °C

                              </strong>

                            </td>


                            {/* STATUS SUHU */}

                            <td>

                              <span
                                className={`status-badge ${historyTemperatureStatus.type}`}
                              >

                                {
                                  historyTemperatureStatus.label
                                }

                              </span>

                            </td>


                            {/* PERANGKAT */}

                            <td>

                              {item.deviceId}

                            </td>


                          </tr>

                        );

                      }
                    )}

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