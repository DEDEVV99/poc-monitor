
function Dashboard() {
  return (
    <div className="page dashboard-page poc-animate-fade">
      {/* HERO */}
      <section className="content-section dashboard-hero poc-animate-up">
        <div className="dashboard-hero-copy">
          <p className="page-label">POC MONITOR</p>
          <h1>Monitoring POC untuk Tanaman Kacang Panjang</h1>
          <p className="dashboard-hero-description">
            POC Monitor merupakan sistem monitoring berbasis Internet of
            Things (IoT) dan web untuk memantau parameter pH dan suhu
            Pupuk Organik Cair (POC).
          </p>
          <p className="dashboard-hero-note">
            POC yang digunakan berbahan dasar limbah organik dalam konteks
            penelitian tanaman kacang panjang. Sensor mengukur parameter
            POC, bukan parameter tanaman secara langsung.
          </p>
        </div>

        <div className="dashboard-hero-visual" aria-hidden="true">
          <div className="dashboard-hero-orbit dashboard-orbit-one" />
          <div className="dashboard-hero-orbit dashboard-orbit-two" />
          <div className="dashboard-hero-icon">🌱</div>
          <div className="dashboard-hero-caption">
            <span>IoT Monitoring</span>
            <strong>pH &amp; Suhu POC</strong>
          </div>
        </div>
      </section>

      {/* OBJEK PENELITIAN */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">OBJEK PENELITIAN</p>
          <h2>Tanaman Kacang Panjang</h2>
          <p>
            Tanaman kacang panjang digunakan sebagai konteks penelitian
            dalam pengembangan sistem monitoring Pupuk Organik Cair.
          </p>
        </div>

        <div className="sensor-info-grid">
          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-1">
            <div className="large-info-icon" aria-hidden="true">🌱</div>
            <h3>Kacang Panjang</h3>
            <p>
              Kacang panjang menjadi objek tanaman dalam konteks penelitian.
              Sistem tidak mengukur parameter tanaman secara langsung.
            </p>
            <div className="info-highlight">
              <strong>Objek</strong>
              <span>Tanaman Kacang Panjang</span>
            </div>
          </div>

          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-2">
            <div className="large-info-icon" aria-hidden="true">🧪</div>
            <h3>Pupuk Organik Cair</h3>
            <p>
              POC berbahan dasar limbah organik merupakan objek pengukuran
              yang dipantau melalui parameter pH dan suhu.
            </p>
            <div className="info-highlight">
              <strong>Parameter</strong>
              <span>pH dan suhu POC</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARAMETER MONITORING */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">PARAMETER MONITORING</p>
          <h2>Parameter yang Dipantau</h2>
          <p>
            Sistem memantau dua parameter utama dari Pupuk Organik Cair,
            yaitu tingkat keasaman dan suhu.
          </p>
        </div>

        <div className="sensor-info-grid">
          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-1">
            <div className="large-info-icon" aria-hidden="true">🧪</div>
            <h3>pH POC</h3>
            <p>
              Sensor pH digunakan untuk memperoleh nilai tingkat keasaman
              atau kebasaan dari Pupuk Organik Cair.
            </p>
            <div className="info-highlight">
              <strong>Rentang acuan sistem</strong>
              <span>pH 4–9</span>
            </div>
          </div>

          <div className="sensor-info-card poc-interactive-card poc-animate-up poc-delay-2">
            <div className="large-info-icon" aria-hidden="true">🌡️</div>
            <h3>Suhu POC</h3>
            <p>
              Sensor suhu digunakan untuk memperoleh nilai temperatur
              dari Pupuk Organik Cair.
            </p>
            <div className="info-highlight">
              <strong>Rentang acuan sistem</strong>
              <span>25–30 °C</span>
            </div>
          </div>
        </div>

        <p className="dashboard-threshold-note">
          Rentang tersebut merupakan acuan klasifikasi yang digunakan
          dalam sistem saat ini. Rentang suhu perlu dijelaskan berdasarkan
          sumber ilmiah yang relevan dan bukan dianggap sebagai standar
          universal untuk seluruh jenis POC.
        </p>
      </section>

      {/* CARA KERJA SISTEM */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">SISTEM</p>
          <h2>Cara Kerja Sistem</h2>
          <p>
            Data hasil pembacaan sensor dikirimkan melalui ESP8266,
            disimpan pada database, lalu ditampilkan pada website.
          </p>
        </div>

        <div className="workflow">
          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">01</div>
            <div>
              <h3>Sensor</h3>
              <p>Sensor membaca nilai pH dan suhu Pupuk Organik Cair.</p>
            </div>
          </div>

          <div className="workflow-arrow" aria-hidden="true">→</div>

          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">02</div>
            <div>
              <h3>ESP8266</h3>
              <p>
                ESP8266 menerima data sensor dan mengirimkannya melalui
                jaringan.
              </p>
            </div>
          </div>

          <div className="workflow-arrow" aria-hidden="true">→</div>

          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">03</div>
            <div>
              <h3>Convex</h3>
              <p>Data pembacaan sensor disimpan dan dikelola pada database.</p>
            </div>
          </div>

          <div className="workflow-arrow" aria-hidden="true">→</div>

          <div className="workflow-item poc-interactive-card">
            <div className="workflow-number">04</div>
            <div>
              <h3>Website</h3>
              <p>Data pH dan suhu POC ditampilkan melalui POC Monitor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMASI SISTEM */}
      <section className="content-section">
        <div className="section-heading">
          <p className="page-label">INFORMASI SISTEM</p>
          <h2>Monitoring Berbasis IoT</h2>
        </div>

        <div className="explanation-card poc-interactive-card">
          <div className="explanation-icon" aria-hidden="true">📡</div>
          <div>
            <h3>Monitoring Data POC</h3>
            <p>
              POC Monitor menggunakan teknologi Internet of Things untuk
              memperoleh data pH dan suhu Pupuk Organik Cair melalui sensor
              yang terhubung dengan ESP8266.
            </p>
            <p>
              Data kemudian dikirimkan ke database dan ditampilkan melalui
              website sehingga hasil pembacaan dapat dipantau secara
              terpusat.
            </p>
            <p>
              Sistem berfokus pada monitoring parameter POC dan tidak
              mengukur parameter tanaman secara langsung.
            </p>
          </div>
        </div>
      </section>

      {/* BATASAN SISTEM */}
      <section className="content-section">
        <div className="explanation-card poc-interactive-card">
          <div className="explanation-icon" aria-hidden="true">ℹ️</div>
          <div>
            <h2>Fokus dan Batasan Sistem</h2>
            <p>
              Sistem POC Monitor berfokus pada pemantauan parameter pH dan
              suhu Pupuk Organik Cair.
            </p>
            <p>
              Tanaman kacang panjang merupakan konteks penelitian,
              sedangkan objek yang diukur oleh sensor adalah Pupuk Organik
              Cair.
            </p>
            <p>
              Sistem tidak mengukur pH tanaman, suhu tanaman, pertumbuhan
              tanaman, maupun parameter tanaman lainnya secara langsung.
            </p>
            <p>
              Klasifikasi status sensor mengikuti rentang acuan yang
              ditetapkan untuk sistem dan perlu dijelaskan bersama sumber
              ilmiah yang mendasarinya.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="monitoring-cta poc-animate-up">
        <div>
          <p className="page-label">POC MONITOR</p>
          <h2>Monitoring POC Berbasis IoT dan Web</h2>
          <p>
            Sistem dirancang untuk memudahkan pemantauan data pH dan suhu
            Pupuk Organik Cair melalui perangkat IoT dan website.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
