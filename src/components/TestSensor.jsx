import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

function TestSensor() {
  const addReading = useMutation(api.sensors.addReading);

  const sendData = async (ph, temperature, label) => {
    try {
      await addReading({
        plant: "bibit_sawit_pre_nursery",
        ph,
        temperature,
        deviceId: "ESP8266-POC-01",
        status: "online",
      });

      alert(
        `Data berhasil dikirim!\n\n` +
          `Objek: Bibit Kelapa Sawit\n` +
          `Tahap: Pembibitan Awal (Pre-Nursery)\n` +
          `POC: Limbah Organik\n\n` +
          `pH: ${ph}\n` +
          `Suhu: ${temperature} °C\n` +
          `Jenis data: ${label}`
      );
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim data sensor.");
    }
  };

  return (
    <div className="test-sensor-card">
      <div className="test-sensor-header">
        <div>
          <p className="page-label">MODE PENGUJIAN</p>
          <h3>Data Sensor Dummy</h3>
        </div>

        <span className="test-badge">TEST</span>
      </div>

      <div className="test-plant-info">
        <span>Objek monitoring:</span>

        <strong>🌴 Bibit Kelapa Sawit</strong>
      </div>

      <p className="test-description">
        Data dummy digunakan untuk menguji proses pengiriman data pH dan suhu
        POC limbah organik ke database sebelum sensor ESP8266 digunakan.
      </p>

      <div className="test-buttons">
        <button
          onClick={() => sendData(5.5, 28.0, "Data Pengujian 1")}
        >
          Data 1
        </button>

        <button
          onClick={() => sendData(6.0, 29.0, "Data Pengujian 2")}
        >
          Data 2
        </button>

        <button
          onClick={() => sendData(6.5, 30.0, "Data Pengujian 3")}
        >
          Data 3
        </button>

        <button
          onClick={() => sendData(4.5, 35.0, "Data Pengujian 4")}
        >
          Data 4
        </button>
      </div>
    </div>
  );
}

export default TestSensor;