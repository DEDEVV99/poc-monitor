import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import plantSettings from "../data/plantSettings";

function TestSensor({ selectedPlant }) {
  const addReading = useMutation(api.sensors.addReading);

  const plant = plantSettings[selectedPlant];

  const normalPh = Number(
    ((plant.ph.low + plant.ph.high) / 2).toFixed(1)
  );

  const normalTemperature = Number(
    ((plant.temperature.low + plant.temperature.high) / 2).toFixed(1)
  );

  const sendData = async (label, ph, temperature) => {
    try {
      await addReading({
        plant: selectedPlant,
        ph,
        temperature,
        deviceId: "ESP8266-POC-01",
        status: "online",
      });

      alert(
        `Data berhasil dikirim!\n\n` +
          `Pengujian: ${label}\n` +
          `Tanaman: ${plant.icon} ${plant.name}\n` +
          `pH: ${ph}\n` +
          `Suhu: ${temperature} °C`
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
          <h3>Demo Data Sensor</h3>
        </div>

        <span className="test-badge">DEMO</span>
      </div>

      <div className="test-plant-info">
        <span>Tanaman yang dipilih:</span>

        <strong>
          {plant.icon} {plant.name}
        </strong>
      </div>

      <p className="test-description">
        Gunakan tombol berikut untuk menguji kondisi pH dan suhu berdasarkan
        parameter tanaman yang dipilih.
      </p>

      <div className="demo-section">
        <h4>Data Normal</h4>

        <button
          className="demo-button normal"
          onClick={() =>
            sendData(
              "Data Normal",
              normalPh,
              normalTemperature
            )
          }
        >
          ✓ Normal
        </button>
      </div>

      <div className="demo-section">
        <h4>Uji pH</h4>

        <div className="demo-buttons">
          <button
            className="demo-button low"
            onClick={() =>
              sendData(
                "pH Rendah",
                Number((plant.ph.low - 0.5).toFixed(1)),
                normalTemperature
              )
            }
          >
            ↓ pH Rendah
          </button>

          <button
            className="demo-button high"
            onClick={() =>
              sendData(
                "pH Tinggi",
                Number((plant.ph.high + 0.5).toFixed(1)),
                normalTemperature
              )
            }
          >
            ↑ pH Tinggi
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h4>Uji Suhu</h4>

        <div className="demo-buttons">
          <button
            className="demo-button low"
            onClick={() =>
              sendData(
                "Suhu Rendah",
                normalPh,
                Number((plant.temperature.low - 2).toFixed(1))
              )
            }
          >
            ↓ Suhu Rendah
          </button>

          <button
            className="demo-button high"
            onClick={() =>
              sendData(
                "Suhu Tinggi",
                normalPh,
                Number((plant.temperature.high + 2).toFixed(1))
              )
            }
          >
            ↑ Suhu Tinggi
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestSensor;