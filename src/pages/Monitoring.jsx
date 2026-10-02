import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

import TestSensor from "../components/TestSensor";

import plantSettings from "../data/plantSettings";

import {
  getStatus,
  getRecommendation,
} from "../utils/sensorStatus";


function Monitoring() {

  // =========================
  // PILIH TANAMAN
  // =========================

  const [selectedPlant, setSelectedPlant] =
    useState("kangkung");


  // =========================
  // DATA YANG DIPILIH
  // =========================

  const [selectedHistory, setSelectedHistory] =
    useState([]);


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
  // PARAMETER TANAMAN
  // =========================

  const plant =
    plantSettings[selectedPlant];


  // =========================
  // STATUS DATA TERBARU
  // =========================

  const phStatus = latestData
    ? getStatus(
        latestData.ph,
        plant.ph
      )
    : null;


  const temperatureStatus = latestData
    ? getStatus(
        latestData.temperature,
        plant.temperature
      )
    : null;


  // =========================
  // REKOMENDASI
  // =========================

  const phRecommendation =
    latestData && phStatus
      ? getRecommendation(
          "ph",
          phStatus.type,
          plant.name
        )
      : "";


  const temperatureRecommendation =
    latestData && temperatureStatus
      ? getRecommendation(
          "temperature",
          temperatureStatus.type,
          plant.name
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
  // FORMAT NAMA TANAMAN
  // =========================

  const getPlantName = (plantId) => {

    if (plantId === "kangkung") {
      return "🌱 Kangkung";
    }

    if (plantId === "terong") {
      return "🍆 Terong";
    }

    return "Tidak diketahui";
  };


  // =========================
  // PARAMETER RIWAYAT
  // =========================

  const getHistoryPlant = (plantId) => {

    if (
      plantId &&
      plantSettings[plantId]
    ) {
      return plantSettings[plantId];
    }

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

            Pantau kondisi pH dan suhu POC
            berdasarkan jenis tanaman yang
            dipilih.

          </p>

        </div>

      </div>


      {/* =================================================
          PILIH TANAMAN
      ================================================= */}

      <div className="plant-selector-card">

        <div className="plant-selector-info">

          <p className="page-label">
            TANAMAN
          </p>

          <h3>
            Pilih Tanaman
          </h3>

          <p>

            Parameter sensor akan disesuaikan
            dengan tanaman yang dipilih.

          </p>

        </div>


        <div className="plant-select-wrapper">

          <select
            value={selectedPlant}
            onChange={(e) =>
              setSelectedPlant(
                e.target.value
              )
            }
          >

            <option value="kangkung">
              🌱 Kangkung
            </option>

            <option value="terong">
              🍆 Terong
            </option>

          </select>

        </div>

      </div>


      {/* =================================================
          PARAMETER TANAMAN
      ================================================= */}

      <div className="parameter-card">

        <div className="parameter-title">

          <span className="plant-icon">
            {plant.icon}
          </span>

          <div>

            <p className="page-label">
              PARAMETER
            </p>

            <h3>
              {plant.name}
            </h3>

          </div>

        </div>


        <div className="parameter-grid">

          <div className="parameter-item">

            <span>
              pH Normal
            </span>

            <strong>

              {plant.ph.low}
              {" – "}
              {plant.ph.high}

            </strong>

          </div>


          <div className="parameter-item">

            <span>
              Suhu Normal
            </span>

            <strong>

              {plant.temperature.low}
              {" – "}
              {plant.temperature.high}
              °C

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
                    pH
                  </span>

                  <p>
                    Tingkat keasaman
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

                Parameter {plant.name}:{" "}
                {plant.ph.low}
                {" – "}
                {plant.ph.high}

              </div>

            </div>


            {/* =========================
                SUHU
            ========================= */}

            <div className="sensor-card">

              <div className="sensor-card-top">

                <div>

                  <span className="sensor-name">
                    Suhu
                  </span>

                  <p>
                    Temperatur POC
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

                Parameter {plant.name}:{" "}
                {plant.temperature.low}
                {" – "}
                {plant.temperature.high}
                °C

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

            {latestData.status ===
            "online"
              ? "Online"
              : latestData.status}

          </span>

        </div>

      )}


      {/* =================================================
          REKOMENDASI
      ================================================= */}

      {latestData && (

        <div className="recommendation-card">

          <div className="recommendation-header">

            <div>

              <p className="page-label">
                REKOMENDASI
              </p>

              <h2>
                Perhatian Sistem
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
                  pH
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
                  Suhu
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

      <TestSensor
        selectedPlant={selectedPlant}
      />


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
                    selectedHistory.length === 0
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
                      ({selectedHistory.length})
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
                        Tanaman
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
                        // PARAMETER TANAMAN
                        // =========================

                        const historyPlant =
                          getHistoryPlant(
                            item.plant
                          );


                        // =========================
                        // DEFAULT STATUS
                        // =========================

                        let historyPhStatus = {
                          label: "-",
                          type: "normal",
                        };


                        let historyTemperatureStatus = {
                          label: "-",
                          type: "normal",
                        };


                        // =========================
                        // HITUNG STATUS
                        // =========================

                        if (
                          historyPlant
                        ) {

                          historyPhStatus =
                            getStatus(
                              item.ph,
                              historyPlant.ph
                            );


                          historyTemperatureStatus =
                            getStatus(
                              item.temperature,
                              historyPlant.temperature
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


                            {/* TANAMAN */}

                            <td>

                              <span className="history-plant">

                                {getPlantName(
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