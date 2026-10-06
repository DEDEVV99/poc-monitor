import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page dashboard-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="page-label">
            POC MONITOR
          </p>

          <h1>
            Monitoring POC untuk
            Bibit Kelapa Sawit
          </h1>

          <p className="hero-description">
            POC Monitor merupakan website monitoring berbasis
            IoT yang digunakan untuk memantau parameter pH
            dan suhu Pupuk Organik Cair (POC) berbahan limbah
            organik yang digunakan pada bibit kelapa sawit
            tahap pembibitan awal (pre-nursery).
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
            🌴
          </div>

          <div className="floating-card ph-floating">

            <span>🧪</span>

            <div>
              <small>Parameter POC</small>
              <strong>pH</strong>
            </div>

          </div>

          <div className="floating-card temp-floating">

            <span>🌡️</span>

            <div>
              <small>Parameter POC</small>
              <strong>°C</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OBJEK PENELITIAN
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            OBJEK PENELITIAN
          </p>

          <h2>
            POC Limbah Organik untuk Bibit Kelapa Sawit
          </h2>

        </div>


        <div className="explanation-card">

          <div className="explanation-icon">
            🌴
          </div>

          <div>

            <h3>
              Bibit Kelapa Sawit Tahap Pembibitan Awal
            </h3>

            <p>
              Sistem ini dikembangkan untuk mendukung
              pemantauan Pupuk Organik Cair (POC) berbahan
              limbah organik yang digunakan pada bibit
              kelapa sawit pada tahap pembibitan awal
              atau pre-nursery.
            </p>

            <p>
              Pemantauan dilakukan terhadap parameter pH
              dan suhu POC. Data dari sensor dikirim melalui
              perangkat IoT dan ditampilkan pada website
              sehingga kondisi POC dapat dipantau secara
              lebih mudah.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PARAMETER YANG DIPANTAU
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            PARAMETER
          </p>

          <h2>
            Apa yang Dipantau?
          </h2>

          <p>
            Sistem memantau dua parameter utama pada
            Pupuk Organik Cair (POC).
          </p>

        </div>


        <div className="sensor-info-grid">

          {/* =================================================
              PARAMETER PH
          ================================================= */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🧪
            </div>

            <h3>
              pH POC
            </h3>

            <p>
              Sensor pH digunakan untuk mengukur tingkat
              keasaman atau kebasaan Pupuk Organik Cair.
              Nilai pH yang diperoleh dari sensor dicatat
              sebagai data monitoring POC.
            </p>

            <div className="info-highlight">

              <strong>
                Parameter
              </strong>

              <span>
                Tingkat keasaman POC
              </span>

            </div>

          </div>


          {/* =================================================
              PARAMETER SUHU
          ================================================= */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🌡️
            </div>

            <h3>
              Suhu POC
            </h3>

            <p>
              Sensor suhu digunakan untuk mengukur temperatur
              Pupuk Organik Cair. Data suhu dicatat bersama
              dengan data pH untuk membantu pemantauan kondisi
              POC.
            </p>

            <div className="info-highlight">

              <strong>
                Parameter
              </strong>

              <span>
                Temperatur POC
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KETERKAITAN DENGAN OBJEK PENELITIAN
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            PENGGUNAAN
          </p>

          <h2>
            POC pada Bibit Kelapa Sawit
          </h2>

        </div>


        <div className="explanation-card">

          <div className="explanation-icon">
            🌱
          </div>

          <div>

            <h3>
              Pembibitan Awal (Pre-Nursery)
            </h3>

            <p>
              Pupuk Organik Cair yang menjadi objek monitoring
              digunakan dalam konteks pemeliharaan bibit kelapa
              sawit pada tahap pembibitan awal (pre-nursery).
            </p>

            <p>
              Website tidak mengukur kondisi bibit secara
              langsung. Sensor digunakan untuk memperoleh
              data pH dan suhu dari POC yang kemudian
              ditampilkan dan disimpan sebagai data monitoring.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CARA KERJA SISTEM
      ===================================================== */}
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

          {/* SENSOR */}
          <div className="workflow-item">

            <div className="workflow-number">
              01
            </div>

            <div>

              <h3>
                Sensor
              </h3>

              <p>
                Sensor membaca nilai pH dan suhu
                dari Pupuk Organik Cair.
              </p>

            </div>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          {/* ESP8266 */}
          <div className="workflow-item">

            <div className="workflow-number">
              02
            </div>

            <div>

              <h3>
                ESP8266
              </h3>

              <p>
                ESP8266 menerima data sensor dan
                mengirimkan data melalui jaringan internet.
              </p>

            </div>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          {/* CONVEX */}
          <div className="workflow-item">

            <div className="workflow-number">
              03
            </div>

            <div>

              <h3>
                Convex
              </h3>

              <p>
                Data sensor disimpan dan dikelola
                menggunakan database Convex.
              </p>

            </div>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          {/* WEBSITE */}
          <div className="workflow-item">

            <div className="workflow-number">
              04
            </div>

            <div>

              <h3>
                Website
              </h3>

              <p>
                Data pH dan suhu POC ditampilkan
                pada halaman Monitoring.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMASI SISTEM
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            INFORMASI SISTEM
          </p>

          <h2>
            Fokus Monitoring
          </h2>

        </div>


        <div className="sensor-info-grid">

          <div className="sensor-info-card">

            <div className="large-info-icon">
              🧪
            </div>

            <h3>
              Pupuk Organik Cair
            </h3>

            <p>
              POC yang menjadi objek pemantauan merupakan
              pupuk organik cair berbahan limbah organik.
              Parameter yang diamati pada sistem adalah
              pH dan suhu POC.
            </p>

            <div className="info-highlight">

              <strong>
                Bahan
              </strong>

              <span>
                Limbah organik
              </span>

            </div>

          </div>


          <div className="sensor-info-card">

            <div className="large-info-icon">
              🌴
            </div>

            <h3>
              Objek Penggunaan
            </h3>

            <p>
              POC digunakan dalam konteks pemeliharaan
              bibit kelapa sawit pada tahap pembibitan awal
              atau pre-nursery.
            </p>

            <div className="info-highlight">

              <strong>
                Tahap
              </strong>

              <span>
                Pembibitan awal (Pre-Nursery)
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="monitoring-cta">

        <div>

          <p className="page-label">
            MONITORING
          </p>

          <h2>
            Lihat Data Sensor POC
          </h2>

          <p>
            Buka halaman Monitoring untuk melihat data
            pH dan suhu Pupuk Organik Cair dari perangkat IoT.
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