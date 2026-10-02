import adminImage from "../images/admin.jpg";

function Tentang() {
  return (
    <div className="page">

      {/* =========================
          HEADER
      ========================== */}
      <div className="page-header">

        <p className="page-label">
          TENTANG
        </p>

        <h1>
          Tentang POC Monitor
        </h1>

        <p className="page-description">
          Informasi developer, tujuan, alat IoT, dan
          website monitoring.
        </p>

      </div>


      {/* =========================
          PROFILE DEVELOPER
      ========================== */}
      <section className="developer-profile">

        <div className="developer-photo">

          <img
            src={adminImage}
            alt="Delon Dede Afdilah"
          />

        </div>

        <div className="developer-info">

          <p className="page-label">
            DEVELOPER
          </p>

          <h2>
            Delon Dede Afdilah
          </h2>

          <p className="developer-role">
            IoT & Website Developer
          </p>

          <p>
            Website POC Monitor dikembangkan sebagai bagian
            dari penerapan teknologi Internet of Things
            untuk membantu proses pemantauan kondisi pupuk
            POC melalui sensor dan sistem monitoring berbasis
            website.
          </p>

          <div className="developer-tags">

            <span>IoT</span>
            <span>Web Development</span>
            <span>Monitoring</span>

          </div>

        </div>

      </section>


      {/* =========================
          TUJUAN
      ========================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            TUJUAN
          </p>

          <h2>
            Tujuan Pengembangan
          </h2>

        </div>

        <div className="purpose-grid">

          <div className="purpose-card">

            <span>📊</span>

            <h3>
              Monitoring
            </h3>

            <p>
              Membantu memantau nilai pH dan suhu pupuk POC
              melalui sistem digital.
            </p>

          </div>


          <div className="purpose-card">

            <span>📡</span>

            <h3>
              Internet of Things
            </h3>

            <p>
              Menghubungkan sensor dengan perangkat IoT
              sehingga data dapat dikirim dan dipantau
              melalui jaringan.
            </p>

          </div>


          <div className="purpose-card">

            <span>💻</span>

            <h3>
              Digitalisasi
            </h3>

            <p>
              Menyajikan hasil pembacaan sensor dalam bentuk
              website yang mudah diakses.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          ALAT IOT
      ========================== */}
      <section className="information-section">

        <div className="information-icon">
          📡
        </div>

        <div>

          <p className="page-label">
            ALAT IOT
          </p>

          <h2>
            Tentang Alat IoT
          </h2>

          <p>
            Alat IoT pada sistem POC Monitor terdiri dari
            perangkat mikrokontroler dan sensor yang digunakan
            untuk memperoleh data kondisi pupuk POC.
          </p>

          <div className="component-list">

            <div>
              <strong>
                ESP8266
              </strong>

              <span>
                Mikrokontroler dan konektivitas jaringan.
              </span>
            </div>


            <div>
              <strong>
                Sensor pH
              </strong>

              <span>
                Mengukur tingkat pH pupuk POC.
              </span>
            </div>


            <div>
              <strong>
                DS18B20
              </strong>

              <span>
                Mengukur temperatur pupuk POC.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WEBSITE
      ========================== */}
      <section className="information-section">

        <div className="information-icon">
          🌐
        </div>

        <div>

          <p className="page-label">
            WEBSITE
          </p>

          <h2>
            Tentang Website
          </h2>

          <p>
            POC Monitor merupakan antarmuka berbasis web
            yang digunakan untuk menampilkan data hasil
            pembacaan sensor dari perangkat IoT.
          </p>

          <p>
            Sistem menggunakan Convex sebagai backend dan
            database untuk menyimpan serta menyediakan data
            sensor kepada halaman Monitoring.
          </p>

          <div className="technology-list">

            <span>
              React
            </span>

            <span>
              Vite
            </span>

            <span>
              Convex
            </span>

            <span>
              IoT
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          RANGKUMAN
      ========================== */}
      <section className="summary-card">

        <div className="summary-icon">
          🌱
        </div>

        <div>

          <p className="page-label">
            RANGKUMAN
          </p>

          <h2>
            POC Monitor
          </h2>

          <p>
            POC Monitor merupakan sistem monitoring berbasis
            IoT yang mengintegrasikan sensor pH dan sensor
            suhu dengan perangkat ESP8266. Data pembacaan
            sensor dikirimkan melalui jaringan dan disimpan
            pada Convex, kemudian ditampilkan melalui website
            pada halaman Monitoring.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Tentang;