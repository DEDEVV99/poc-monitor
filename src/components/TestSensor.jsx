import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import pocSettings from "../data/plantSettings";
import { getStatus } from "../utils/sensorStatus";

const testCases = [
  { id: 1, ph: 6.5, temperature: 28, label: "Normal / Normal" },
  { id: 2, ph: 6.5, temperature: 23, label: "Normal / Rendah" },
  { id: 3, ph: 3.5, temperature: 28, label: "Rendah / Normal" },
  { id: 4, ph: 3.5, temperature: 23, label: "Rendah / Rendah" },
  { id: 5, ph: 3.5, temperature: 32, label: "Rendah / Tinggi" },
  { id: 6, ph: 9.5, temperature: 28, label: "Tinggi / Normal" },
  { id: 7, ph: 9.5, temperature: 23, label: "Tinggi / Rendah" },
  { id: 8, ph: 9.5, temperature: 32, label: "Tinggi / Tinggi" },
  { id: 9, ph: 6.5, temperature: 32, label: "Normal / Tinggi" },
];

function TestSensor() {
  const addReading = useMutation(api.sensors.addReading);

  const sendData = async (testCase) => {
    const { ph, temperature, id, label } = testCase;

    const phStatus = getStatus(ph, pocSettings.ph);
    const temperatureStatus = getStatus(
      temperature,
      pocSettings.temperature
    );

    try {
      await addReading({
        plant: "kacang_panjang",
        ph,
        temperature,
        deviceId: "ESP8266-POC-01",
        status: "online",
      });

      alert(
        `Data dummy berhasil dikirim!\n\n` +
          `Objek: Tanaman Kacang Panjang\n` +
          `POC: Limbah Organik\n` +
          `Pengujian: Data ${id}\n\n` +
          `pH POC: ${ph}\n` +
          `Status pH: ${phStatus.label}\n\n` +
          `Suhu POC: ${temperature} °C\n` +
          `Status suhu: ${temperatureStatus.label}\n\n` +
          `Kombinasi: ${label}`
      );
    } catch (error) {
      console.error("Gagal mengirim data dummy:", error);
      alert("Gagal mengirim data dummy. Periksa koneksi database.");
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
        <strong>🌱 Tanaman Kacang Panjang</strong>
      </div>

      <p className="test-description">
        Gunakan sembilan skenario berikut untuk menguji kombinasi
        status pH dan suhu POC. Data ini merupakan data simulasi,
        bukan hasil pengukuran sensor aktual.
      </p>

      <div className="test-buttons">
        {testCases.map((testCase) => {
          const phStatus = getStatus(testCase.ph, pocSettings.ph);
          const temperatureStatus = getStatus(
            testCase.temperature,
            pocSettings.temperature
          );

          return (
            <button
              key={testCase.id}
              type="button"
              onClick={() => sendData(testCase)}
              title={`pH ${phStatus.label}, suhu ${temperatureStatus.label}`}
            >
              <strong>Data {testCase.id}</strong>
              <span>pH: {phStatus.label}</span>
              <span>Suhu: {temperatureStatus.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TestSensor;