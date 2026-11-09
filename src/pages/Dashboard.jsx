
function Dashboard() {
  return (
    <div className="page dashboard-page poc-animate-fade">

      {/* =========================
          HERO / BAGIAN UTAMA
      ========================= */}
      <section className="content-section dashboard-hero poc-animate-up">
        <div className="dashboard-hero-copy">
          <p className="page-label">
            MONITOR SAMPAH ORGANIK
          </p>

          <h1>
            Pemantauan pH dan Suhu Sampah Organik serta Pupuk Organik Cair
          </h1>

          <p className="dashboard-hero-description">
            Monitor Sampah Organik merupakan sistem pemantauan berbasis
            Internet of Things (IoT) dan web untuk memantau parameter
            pH dan suhu pada sampah organik serta Pupuk Organik Cair (POC)
            hasil pengolahan sampah organik rumah tangga.
          </p>

          <p className="dashboard-hero-note">
            Sistem berfokus pada pemantauan parameter pH dan suhu
            sampah organik selama proses pengolahan serta Pupuk
            Organik Cair (POC) yang dihasilkan.
          </p>
        </div>

        <div
          className="dashboard-hero-visual"
          aria-hidden="true"
        >
          <div className="dashboard-hero-orbit dashboard-orbit-one" />
          <div className="dashboard-hero-orbit dashboard-orbit-two" />

          <div className="dashboard-hero-icon">
            ♻️
          </div>

          <div className="dashboard-hero-caption">
            <span>Pengolahan Sampah Organik</span>
            <strong>Monitoring pH dan Suhu POC</strong>
          </div>
        </div>
      </section>


      {/* =========================
          OBJEK PEMANTAUAN
      ========================= */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">
            OBJEK PEMANTAUAN
          </p>

          <h2>
            Sampah Organik dan Pupuk Organik Cair
          </h2>

          <p>
            Sampah organik rumah tangga dan Pupuk Organik Cair (POC)
            menjadi fokus pemantauan parameter pH dan suhu pada sistem.
          </p>
        </div>

        <div className="sensor-info-grid">

          {/* KARTU SAMPAH ORGANIK */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-1">
            <div
              className="large-info-icon"
              aria-hidden="true"
            >
              ♻️
            </div>

            <h3>
              Sampah Organik
            </h3>

            <p>
              Sampah organik rumah tangga, seperti sisa sayuran
              dan bahan organik lainnya, menjadi bahan yang
              dipantau kondisi pH dan suhunya selama proses
              pengolahan menjadi Pupuk Organik Cair.
            </p>

            <div className="info-highlight">
              <strong>
                Bahan Dasar
              </strong>

              <span>
                Sampah Organik Rumah Tangga
              </span>
            </div>
          </div>


          {/* KARTU PUPUK ORGANIK CAIR */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-2">
            <div
              className="large-info-icon"
              aria-hidden="true"
            >
              🧪
            </div>

            <h3>
              Pupuk Organik Cair
            </h3>

            <p>
              Pupuk Organik Cair merupakan hasil pengolahan
              sampah organik yang turut menjadi objek pemantauan
              sistem melalui pengukuran parameter pH dan suhu.
            </p>

            <div className="info-highlight">
              <strong>
                Objek Pengukuran
              </strong>

              <span>
                pH dan Suhu POC
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          PARAMETER PEMANTAUAN
      ========================= */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">
            PARAMETER PEMANTAUAN
          </p>

          <h2>
            Parameter yang Dipantau
          </h2>

          <p>
            Sistem memantau dua parameter utama, yaitu tingkat
            keasaman (pH) dan temperatur (suhu) pada sampah
            organik serta Pupuk Organik Cair (POC).
          </p>
        </div>

        <div className="sensor-info-grid">

          {/* PARAMETER pH */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-1">
            <div
              className="large-info-icon"
              aria-hidden="true"
            >
              ⚗️
            </div>

            <h3>
              Derajat Keasaman (pH)
            </h3>

            <p>
              Sensor pH digunakan untuk memperoleh nilai
              tingkat keasaman atau kebasaan sampah organik
              dalam proses pengolahan dan Pupuk Organik Cair.
            </p>

            <div className="info-highlight">
              <strong>
                Rentang Acuan Sistem
              </strong>

              <span>
                pH 4–9
              </span>
            </div>
          </div>


          {/* PARAMETER SUHU */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-2">
            <div
              className="large-info-icon"
              aria-hidden="true"
            >
              🌡️
            </div>

            <h3>
              Suhu Sampah Organik dan POC
            </h3>

            <p>
              Sensor suhu digunakan untuk memperoleh nilai
              temperatur sampah organik selama proses pengolahan
              serta Pupuk Organik Cair yang dihasilkan.
            </p>

            <div className="info-highlight">
              <strong>
                Rentang Acuan Sistem
              </strong>

              <span>
                25–30 °C
              </span>
            </div>
          </div>

        </div>

        <p className="dashboard-threshold-note">
          Rentang tersebut merupakan acuan klasifikasi yang
          digunakan dalam sistem saat ini. Rentang suhu perlu
          dijelaskan berdasarkan sumber ilmiah yang relevan
          dan tidak dianggap sebagai standar universal
          untuk seluruh jenis sampah organik dan Pupuk Organik Cair.
        </p>
      </section>


      {/* =========================
          ALUR KERJA SISTEM
      ========================= */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">
            ALUR SISTEM
          </p>

          <h2>
            Cara Kerja Sistem
          </h2>

          <p>
            Data hasil pembacaan sensor diproses oleh ESP8266,
            dikirimkan ke database Convex, kemudian ditampilkan
            melalui website Monitor Sampah Organik.
          </p>
        </div>

        <div className="workflow">

          {/* TAHAP 1 */}
          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">
              01
            </div>

            <div>
              <h3>
                Sensor
              </h3>

              <p>
                Sensor membaca nilai pH dan suhu
                sampah organik serta Pupuk Organik Cair.
              </p>
            </div>
          </div>

          <div
            className="workflow-arrow"
            aria-hidden="true"
          >
            →
          </div>


          {/* TAHAP 2 */}
          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">
              02
            </div>

            <div>
              <h3>
                ESP8266
              </h3>

              <p>
                ESP8266 menerima data sensor dan
                mengirimkannya melalui jaringan internet.
              </p>
            </div>
          </div>

          <div
            className="workflow-arrow"
            aria-hidden="true"
          >
            →
          </div>


          {/* TAHAP 3 */}
          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">
              03
            </div>

            <div>
              <h3>
                Database Convex
              </h3>

              <p>
                Data hasil pembacaan sensor disimpan
                dan dikelola pada database.
              </p>
            </div>
          </div>

          <div
            className="workflow-arrow"
            aria-hidden="true"
          >
            →
          </div>


          {/* TAHAP 4 */}
          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">
              04
            </div>

            <div>
              <h3>
                Website
              </h3>

              <p>
                Data pH dan suhu sampah organik serta POC
                ditampilkan melalui aplikasi Monitor Sampah Organik.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          INFORMASI SISTEM
      ========================= */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">
            INFORMASI SISTEM
          </p>

          <h2>
            Pemantauan Sampah Organik dan POC Berbasis IoT
          </h2>
        </div>

        <div className="explanation-card poc-interactive-card">
          <div
            className="explanation-icon"
            aria-hidden="true"
          >
            📡
          </div>

          <div>
            <h3>
              Pemantauan Parameter Sampah Organik dan POC
            </h3>

            <p>
              Monitor Sampah Organik menggunakan teknologi
              Internet of Things (IoT) untuk memperoleh data
              pH dan suhu sampah organik serta Pupuk Organik Cair
              melalui sensor yang terhubung dengan ESP8266.
            </p>

            <p>
              Data hasil pembacaan sensor dikirimkan ke
              database Convex dan ditampilkan melalui
              website sehingga pengguna dapat melakukan
              pemantauan secara terpusat.
            </p>

            <p>
              Sistem mendukung pemantauan kondisi sampah organik
              selama proses pengolahan dan Pupuk Organik Cair
              yang dihasilkan dari sampah organik rumah tangga.
            </p>
          </div>
        </div>
      </section>


      {/* =========================
          FOKUS DAN BATASAN SISTEM
      ========================= */}
      <section className="content-section">
        <div className="explanation-card poc-interactive-card">
          <div
            className="explanation-icon"
            aria-hidden="true"
          >
            📋
          </div>

          <div>
            <h2>
              Fokus dan Batasan Sistem
            </h2>

            <p>
              Sistem Monitor Sampah Organik berfokus
              pada pemantauan parameter pH dan suhu
              sampah organik selama proses pengolahan serta
              Pupuk Organik Cair (POC) yang dihasilkan.
            </p>

            <p>
              Sampah organik rumah tangga menjadi bahan dasar
              pengolahan POC. Sistem memfokuskan pemantauan
              parameter pH dan suhu pada sampah organik
              serta Pupuk Organik Cair.
            </p>

            <p>
              Sistem tidak berfokus pada pengamatan tanaman.
              Pengukuran diarahkan pada parameter pH dan suhu
              sampah organik serta Pupuk Organik Cair.
            </p>

            <p>
              Klasifikasi status sensor mengikuti
              rentang acuan yang ditetapkan dalam
              sistem dan perlu dijelaskan berdasarkan
              sumber ilmiah yang relevan.
            </p>
          </div>
        </div>
      </section>


      {/* =========================
          PENUTUP / CALL TO ACTION
      ========================= */}
      <section className="monitoring-cta poc-animate-up">
        <div>
          <p className="page-label">
            MONITOR SAMPAH ORGANIK
          </p>

          <h2>
            Pemantauan pH dan Suhu Sampah Organik serta POC Berbasis IoT
          </h2>

          <p>
            Pantau data pH dan suhu sampah organik serta
            Pupuk Organik Cair hasil pengolahan melalui
            perangkat IoT dan website.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;
