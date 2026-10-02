import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

function TestSensor({ selectedPlant }) {
  const addReading = useMutation(
    api.sensors.addReading
  );

  const sendData = async (ph, temperature) => {
    try {
      await addReading({
        plant: selectedPlant,
        ph,
        temperature,
        deviceId: "ESP8266-POC-01",
        status: "online",
      });

      const plantName =
        selectedPlant === "kangkung"
          ? "🌱 Kangkung"
          : "🍆 Terong";

      alert(
        `Data berhasil dikirim!\n\n` +
        `Tanaman: ${plantName}\n` +
        `pH: ${ph}\n` +
        `Suhu: ${temperature} °C`
      );

    } catch (error) {
      console.error(error);

      alert(
        "Gagal mengirim data sensor."
      );
    }
  };

  return (
    <div className="test-sensor-card">

      {/* =========================
          HEADER
      ========================= */}

      <div className="test-sensor-header">

        <div>

          <p className="page-label">
            MODE PENGUJIAN
          </p>

          <h3>
            Data Sensor Dummy
          </h3>

        </div>

        <span className="test-badge">
          TEST
        </span>

      </div>


      {/* =========================
          TANAMAN AKTIF
      ========================= */}

      <div className="test-plant-info">

        <span>
          Tanaman yang dipilih:
        </span>

        <strong>
          {selectedPlant === "kangkung"
            ? "🌱 Kangkung"
            : "🍆 Terong"}
        </strong>

      </div>


      {/* =========================
          DESKRIPSI
      ========================= */}

      <p className="test-description">

        Gunakan tombol berikut untuk
        mensimulasikan data sensor.
        Data akan disimpan bersama
        tanaman yang sedang dipilih.

      </p>


      {/* =========================
          BUTTON
      ========================= */}

      <div className="test-buttons">

        <button
          onClick={() =>
            sendData(6.2, 28.5)
          }
        >
          Normal
        </button>


        <button
          onClick={() =>
            sendData(6.5, 30.0)
          }
        >
          Data 2
        </button>


        <button
          onClick={() =>
            sendData(5.8, 27.5)
          }
        >
          Data 3
        </button>


        <button
          onClick={() =>
            sendData(4.8, 35.0)
          }
        >
          Data Rendah/Tinggi
        </button>

      </div>

    </div>
  );
}

export default TestSensor;