function Dashboard() {
  return (
    <div className="page dashboard-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            POC MONITOR
          </p>

          <h1>
            Monitoring POC untuk Tanaman Kacang Panjang
          </h1>

          <p>
            POC Monitor merupakan sistem monitoring berbasis
            Internet of Things (IoT) dan web yang digunakan
            untuk memantau parameter pH dan suhu Pupuk
            Organik Cair (POC).
          </p>

          <p>
            Pupuk Organik Cair yang digunakan dalam penelitian
            berbahan dasar limbah organik dan digunakan dalam
            konteks penelitian tanaman kacang panjang.
          </p>

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
            Tanaman Kacang Panjang
          </h2>

          <p>
            Tanaman kacang panjang digunakan sebagai konteks
            penelitian dalam pengembangan sistem monitoring
            Pupuk Organik Cair.
          </p>

        </div>


        <div className="sensor-info-grid">

          <div className="sensor-info-card">

            <div className="large-info-icon">
              🌱
            </div>

            <h3>
              Kacang Panjang
            </h3>

            <p>
              Kacang panjang menjadi objek tanaman dalam
              konteks penelitian. Sistem yang dikembangkan
              tidak mengukur parameter tanaman secara langsung.
            </p>

            <div className="info-highlight">

              <strong>
                Objek
              </strong>

              <span>
                Tanaman Kacang Panjang
              </span>

            </div>

          </div>


          <div className="sensor-info-card">

            <div className="large-info-icon">
              🧪
            </div>

            <h3>
              Pupuk Organik Cair
            </h3>

            <p>
              Pupuk Organik Cair (POC) berbahan dasar limbah
              organik digunakan sebagai objek yang parameter
              pH dan suhunya dipantau oleh sistem.
            </p>

            <div className="info-highlight">

              <strong>
                Parameter
              </strong>

              <span>
                pH dan suhu POC
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PARAMETER MONITORING
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            PARAMETER MONITORING
          </p>

          <h2>
            Parameter yang Dipantau
          </h2>

          <p>
            Sistem memantau dua parameter utama dari Pupuk
            Organik Cair, yaitu pH dan suhu.
          </p>

        </div>


        <div className="sensor-info-grid">

          {/* pH */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🧪
            </div>

            <h3>
              pH POC
            </h3>

            <p>
              Sensor pH digunakan untuk memperoleh nilai
              tingkat keasaman atau kebasaan dari Pupuk
              Organik Cair.
            </p>

            <div className="info-highlight">

              <strong>
                Batas Parameter
              </strong>

              <span>
                Belum ditetapkan
              </span>

            </div>

          </div>


          {/* SUHU */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🌡️
            </div>

            <h3>
              Suhu POC
            </h3>

            <p>
              Sensor suhu digunakan untuk memperoleh nilai
              temperatur dari Pupuk Organik Cair.
            </p>

            <div className="info-highlight">

              <strong>
                Batas Parameter
              </strong>

              <span>
                Belum ditetapkan
              </span>

            </div>

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
            Cara Kerja Sistem
          </h2>

          <p>
            Data hasil pembacaan sensor dikirimkan melalui
            ESP8266 dan ditampilkan pada website.
          </p>

        </div>


        <div className="workflow">

          {/* 01 */}
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
                Pupuk Organik Cair.
              </p>

            </div>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          {/* 02 */}
          <div className="workflow-item">

            <div className="workflow-number">
              02
            </div>

            <div>

              <h3>
                ESP8266
              </h3>

              <p>
                ESP8266 menerima data hasil pembacaan
                sensor dan mengirimkan data melalui jaringan.
              </p>

            </div>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          {/* 03 */}
          <div className="workflow-item">

            <div className="workflow-number">
              03
            </div>

            <div>

              <h3>
                Convex
              </h3>

              <p>
                Data hasil pembacaan sensor disimpan dan
                dikelola pada database.
              </p>

            </div>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          {/* 04 */}
          <div className="workflow-item">

            <div className="workflow-number">
              04
            </div>

            <div>

              <h3>
                Website
              </h3>

              <p>
                Data pH dan suhu POC ditampilkan melalui
                website POC Monitor.
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
            Monitoring Berbasis IoT
          </h2>

        </div>


        <div className="explanation-card">

          <div className="explanation-icon">
            📡
          </div>

          <div>

            <h3>
              Monitoring Data POC
            </h3>

            <p>
              POC Monitor menggunakan teknologi Internet of
              Things untuk memperoleh data pH dan suhu dari
              Pupuk Organik Cair melalui sensor yang terhubung
              dengan ESP8266.
            </p>

            <p>
              Data kemudian dikirimkan ke database dan
              ditampilkan melalui website sehingga data hasil
              pembacaan dapat dipantau secara terpusat.
            </p>

            <p>
              Sistem berfokus pada proses monitoring parameter
              POC dan tidak melakukan pengukuran parameter
              tanaman secara langsung.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BATASAN SISTEM
      ===================================================== */}
      <section className="content-section">

        <div className="explanation-card">

          <div className="explanation-icon">
            ℹ️
          </div>

          <div>

            <h2>
              Fokus Sistem
            </h2>

            <p>
              Sistem POC Monitor berfokus pada pemantauan
              parameter pH dan suhu Pupuk Organik Cair.
            </p>

            <p>
              Tanaman kacang panjang merupakan konteks
              penelitian, sedangkan objek yang diukur oleh
              sensor adalah Pupuk Organik Cair.
            </p>

            <p>
              Sistem tidak mengukur pH tanaman, suhu tanaman,
              pertumbuhan tanaman, maupun parameter tanaman
              lainnya secara langsung.
            </p>

            <p>
              Batas parameter pH dan suhu akan ditentukan
              berdasarkan hasil kajian dan sumber ilmiah yang
              relevan dengan Pupuk Organik Cair dalam konteks
              penelitian kacang panjang.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}
      <section className="monitoring-cta">

        <div>

          <p className="page-label">
            POC MONITOR
          </p>

          <h2>
            Monitoring POC Berbasis IoT dan Web
          </h2>

          <p>
            Sistem dirancang untuk memudahkan pemantauan
            data pH dan suhu Pupuk Organik Cair melalui
            perangkat IoT dan website.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;