import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page dashboard-page">

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="page-label">
            POC MONITOR
          </p>

          <h1>
            Monitoring Kondisi Pupuk POC
            Berbasis IoT
          </h1>

          <p className="hero-description">
            POC Monitor merupakan website monitoring yang
            digunakan untuk memantau kondisi pH dan suhu
            pupuk POC melalui perangkat Internet of Things
            atau IoT.
          </p>

          <Link
            to="/monitoring"
            className="hero-button"
          >
            Lihat Monitoring
            <span>→</span>
          </Link>

        </div>

        <div className="hero-visual">
          <div className="hero-icon">
            🌱
          </div>

          <div className="floating-card ph-floating">
            <span>🧪</span>
            <div>
              <small>Sensor pH</small>
              <strong>pH</strong>
            </div>
          </div>

          <div className="floating-card temp-floating">
            <span>🌡️</span>
            <div>
              <small>Sensor Suhu</small>
              <strong>°C</strong>
            </div>
          </div>
        </div>

      </section>


      {/* MENGENAL POC */}
      <section className="content-section">

        <div className="section-heading">
          <p className="page-label">
            PENGENALAN
          </p>

          <h2>
            Mengenal Pupuk Organik Cair
          </h2>
        </div>

        <div className="explanation-card">

          <div className="explanation-icon">
            🌿
          </div>

          <div>
            <h3>
              Apa itu POC?
            </h3>

            <p>
              Pupuk Organik Cair atau POC merupakan pupuk
              berbentuk cair yang berasal dari bahan-bahan
              organik dan dapat dimanfaatkan untuk membantu
              menyediakan unsur yang dibutuhkan tanaman.
            </p>

            <p>
              Dalam proses pengelolaannya, kondisi pupuk
              perlu diperhatikan. Salah satu parameter yang
              dapat dipantau adalah tingkat pH dan suhu.
            </p>
          </div>

        </div>

      </section>


      {/* SENSOR */}
      <section className="content-section">

        <div className="section-heading">
          <p className="page-label">
            SENSOR
          </p>

          <h2>
            Apa yang Dipantau?
          </h2>

          <p>
            Website ini dirancang untuk menampilkan data
            dari dua parameter utama.
          </p>
        </div>


        <div className="sensor-info-grid">

          {/* SENSOR PH */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🧪
            </div>

            <h3>
              Sensor pH
            </h3>

            <p>
              Sensor pH digunakan untuk mengukur tingkat
              keasaman atau kebasaan suatu larutan. Pada
              alat ini, sensor pH digunakan untuk memperoleh
              nilai pH dari pupuk POC.
            </p>

            <div className="info-highlight">
              <strong>Parameter</strong>
              <span>Tingkat keasaman POC</span>
            </div>

          </div>


          {/* SENSOR SUHU */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🌡️
            </div>

            <h3>
              Sensor Suhu
            </h3>

            <p>
              Sensor suhu digunakan untuk mengukur temperatur
              pupuk POC. Informasi suhu dapat digunakan untuk
              mengetahui perubahan temperatur selama proses
              pengelolaan pupuk.
            </p>

            <div className="info-highlight">
              <strong>Parameter</strong>
              <span>Temperatur POC</span>
            </div>

          </div>

        </div>

      </section>


      {/* CARA KERJA */}
      <section className="content-section">

        <div className="section-heading">
          <p className="page-label">
            SISTEM
          </p>

          <h2>
            Cara Kerja POC Monitor
          </h2>
        </div>


        <div className="workflow">

          <div className="workflow-item">
            <div className="workflow-number">
              01
            </div>

            <div>
              <h3>
                Sensor
              </h3>

              <p>
                Sensor membaca nilai pH dan suhu pupuk POC.
              </p>
            </div>
          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-item">
            <div className="workflow-number">
              02
            </div>

            <div>
              <h3>
                ESP8266
              </h3>

              <p>
                Perangkat IoT menerima dan mengirimkan
                data sensor melalui jaringan internet.
              </p>
            </div>
          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-item">
            <div className="workflow-number">
              03
            </div>

            <div>
              <h3>
                Convex
              </h3>

              <p>
                Data sensor disimpan dan dikelola pada
                database Convex.
              </p>
            </div>
          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-item">
            <div className="workflow-number">
              04
            </div>

            <div>
              <h3>
                Website
              </h3>

              <p>
                Data ditampilkan pada halaman Monitoring.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="monitoring-cta">

        <div>
          <p className="page-label">
            MONITORING
          </p>

          <h2>
            Lihat Data Sensor
          </h2>

          <p>
            Buka halaman Monitoring untuk melihat output
            sensor pH dan suhu dari perangkat IoT.
          </p>
        </div>

        <Link
          to="/monitoring"
          className="hero-button"
        >
          Buka Monitoring →
        </Link>

      </section>

    </div>
  );
}

export default Dashboard;
