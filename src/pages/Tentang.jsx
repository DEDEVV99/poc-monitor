/* =========================================
   ICON SVG MONOKROM INDIGO
========================================= */

function Icon({ name, size = 28 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),

    recycle: (
      <>
        <path d="m7 7 2.5-3h4L16 7" />
        <path d="m14 4 2 3h-4" />
        <path d="m5 10-2 4 2 3h5" />
        <path d="m3 14 3-1.5L5 10" />
        <path d="m18 10 3 4-2 3h-5" />
        <path d="m21 14-3-1.5 1.5-2.5" />
        <path d="M8 20h8l2-3" />
      </>
    ),

    flask: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
        <path d="M7.5 15h9" />
        <path d="M9 12h6" />
      </>
    ),

    seedling: (
      <>
        <path d="M12 21v-9" />
        <path d="M12 12C12 6 17 4 21 4c0 6-3 9-9 8" />
        <path d="M12 15C12 9 7 7 3 7c0 6 3 9 9 8" />
        <path d="M5 21h14" />
      </>
    ),

    ph: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 17h14" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    temperature: (
      <>
        <path d="M14 14.5V5a2 2 0 0 0-4 0v9.5a4 4 0 1 0 4 0Z" />
        <path d="M12 11v6" />
      </>
    ),

    microchip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </>
    ),

    cloud: (
      <>
        <path d="M5 18a4 4 0 0 1-.5-8A6 6 0 0 1 16 8a5 5 0 0 1 3 10H5Z" />
        <path d="M12 12v6" />
        <path d="m9 15 3 3 3-3" />
      </>
    ),

    network: (
      <>
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="19" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M12 7.5v5" />
        <path d="m10 11 2 2 2-2" />
        <path d="M12 12.5 5 16.5" />
        <path d="m12 12.5 7 4" />
      </>
    ),

    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </>
    ),
  };

  return (
    <span
      className="monitoring-icon"
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#5267D8",
        flexShrink: 0,
      }}
    >
      <svg {...common}>
        {icons[name] || icons.info}
      </svg>
    </span>
  );
}

/* =========================================
   HALAMAN TENTANG APLIKASI
========================================= */

function Tentang() {
  return (
    <div className="page tentang-page poc-animate-fade">

      {/* HEADER */}
      <section className="content-section poc-animate-up">
        <div className="section-heading">
          <p className="page-label">
            TENTANG APLIKASI
          </p>

          <h1>
            Tentang Monitor Sampah Organik
          </h1>

          <p>
            Monitor Sampah Organik merupakan website pemantauan
            berbasis Internet of Things (IoT) yang digunakan
            untuk memantau parameter pH dan suhu pada Pupuk
            Organik Cair (POC) hasil pengolahan limbah organik.
          </p>
        </div>
      </section>

      {/* TUJUAN SISTEM */}
      <section className="content-section poc-animate-up poc-delay-2">
        <div className="explanation-card">
          <div className="explanation-icon">
            <Icon name="target" size={30} />
          </div>

          <div>
            <h2>
              Tujuan Sistem Dibuat
            </h2>

            <p>
              Sistem ini dikembangkan untuk memudahkan
              pemantauan parameter pH dan suhu Pupuk Organik
              Cair menggunakan teknologi Internet of Things
              (IoT).
            </p>

            <p>
              Sistem dirancang untuk menerima data hasil
              pembacaan sensor, menyimpan data, dan
              menampilkan hasil pemantauan melalui website.
            </p>

            <p>
              Tujuan utama sistem adalah:
            </p>

            <ol>
              <li>
                Memantau nilai pH Pupuk Organik Cair.
              </li>

              <li>
                Memantau suhu Pupuk Organik Cair.
              </li>

              <li>
                Mengirimkan data sensor menggunakan ESP8266.
              </li>

              <li>
                Menyimpan data hasil pembacaan sensor.
              </li>

              <li>
                Menampilkan data pemantauan melalui website.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* OBJEK PEMANTAUAN */}
      <section className="content-section poc-animate-up poc-delay-2">
        <div className="section-heading">
          <p className="page-label">
            OBJEK PEMANTAUAN
          </p>

          <h2>
            Sampah Organik dan Pupuk Organik Cair
          </h2>

          <p>
            Sistem berfokus pada pemantauan parameter Pupuk
            Organik Cair yang dihasilkan dari pengolahan
            sampah organik rumah tangga.
          </p>
        </div>

        <div className="sensor-info-grid">

          {/* SAMPAH ORGANIK */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="recycle" size={32} />
            </div>

            <h3>
              Sampah Organik
            </h3>

            <p>
              Sampah organik rumah tangga seperti sisa
              sayuran dan bahan organik lainnya dapat
              dimanfaatkan sebagai bahan dasar pengolahan
              Pupuk Organik Cair.
            </p>

            <div className="info-highlight">
              <strong>
                Bahan Dasar
              </strong>

              <span>
                Limbah Organik Rumah Tangga
              </span>
            </div>
          </div>

          {/* PUPUK ORGANIK CAIR */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="flask" size={32} />
            </div>

            <h3>
              Pupuk Organik Cair
            </h3>

            <p>
              Pupuk Organik Cair merupakan objek pengukuran
              sistem yang dipantau melalui parameter pH
              dan suhu.
            </p>

            <div className="info-highlight">
              <strong>
                Parameter
              </strong>

              <span>
                pH dan Suhu POC
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* KONTEKS PENELITIAN */}
      <section className="content-section poc-animate-up poc-delay-1">
        <div className="section-heading">
          <p className="page-label">
            KONTEKS PENELITIAN
          </p>

          <h2>
            Tanaman Kacang Panjang
          </h2>
        </div>

        <div className="explanation-card">
          <div className="explanation-icon">
            <Icon name="seedling" size={30} />
          </div>

          <div>
            <h3>
              Kacang Panjang
            </h3>

            <p>
              Tanaman kacang panjang digunakan sebagai
              konteks penelitian dalam pengembangan sistem
              pemantauan Pupuk Organik Cair.
            </p>

            <p>
              Sistem pemantauan berfokus pada pengukuran
              parameter pH dan suhu Pupuk Organik Cair
              yang digunakan dalam konteks penelitian
              tanaman kacang panjang.
            </p>

            <p>
              Sistem tidak mengukur parameter tanaman
              kacang panjang secara langsung. Parameter
              yang dipantau adalah pH dan suhu Pupuk
              Organik Cair.
            </p>
          </div>
        </div>
      </section>

      {/* PARAMETER YANG DIPANTAU */}
      <section className="content-section poc-animate-up poc-delay-2">
        <div className="section-heading">
          <p className="page-label">
            PARAMETER PEMANTAUAN
          </p>

          <h2>
            Parameter yang Dipantau
          </h2>
        </div>

        <div className="sensor-info-grid">

          {/* PH */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="ph" size={32} />
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
                Parameter
              </strong>

              <span>
                Nilai pH
              </span>
            </div>
          </div>

          {/* SUHU */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="temperature" size={32} />
            </div>

            <h3>
              Suhu POC
            </h3>

            <p>
              Sensor DS18B20 digunakan untuk memperoleh
              nilai temperatur dari Pupuk Organik Cair.
            </p>

            <div className="info-highlight">
              <strong>
                Parameter
              </strong>

              <span>
                Suhu (°C)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* TEKNOLOGI */}
      <section className="content-section poc-animate-up poc-delay-3">
        <div className="section-heading">
          <p className="page-label">
            TEKNOLOGI
          </p>

          <h2>
            Teknologi yang Digunakan
          </h2>

          <p>
            Sistem pemantauan terdiri dari perangkat sensor,
            mikrokontroler, database, dan website.
          </p>
        </div>

        <div className="sensor-info-grid">

          {/* SENSOR PH */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="flask" size={32} />
            </div>

            <h3>
              Sensor pH
            </h3>

            <p>
              Digunakan untuk membaca nilai pH pada
              Pupuk Organik Cair.
            </p>
          </div>

          {/* DS18B20 */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="temperature" size={32} />
            </div>

            <h3>
              DS18B20
            </h3>

            <p>
              Digunakan untuk mengukur suhu Pupuk
              Organik Cair.
            </p>
          </div>

          {/* ESP8266 */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="microchip" size={32} />
            </div>

            <h3>
              ESP8266
            </h3>

            <p>
              Digunakan sebagai mikrokontroler yang
              membaca sensor dan mengirimkan data.
            </p>
          </div>

          {/* CONVEX */}
          <div className="sensor-info-card poc-interactive-card poc-animate-up">
            <div className="large-info-icon">
              <Icon name="cloud" size={32} />
            </div>

            <h3>
              Convex
            </h3>

            <p>
              Digunakan untuk menyimpan dan mengelola
              data hasil pembacaan sensor.
            </p>
          </div>

        </div>
      </section>

      {/* ALUR SISTEM */}
      <section className="content-section poc-animate-up poc-delay-1">
        <div className="section-heading">
          <p className="page-label">
            ALUR SISTEM
          </p>

          <h2>
            Cara Kerja Sistem
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
                Sensor membaca nilai pH dan suhu
                Pupuk Organik Cair.
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
                ESP8266 menerima data hasil pembacaan
                sensor dan mengirimkannya.
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
                Data sensor disimpan dan dikelola
                pada database Convex.
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
                Data hasil pemantauan ditampilkan
                pada website Monitor Sampah Organik.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BATASAN SISTEM */}
      <section className="content-section poc-animate-up poc-delay-2">
        <div className="explanation-card">
          <div className="explanation-icon">
            <Icon name="info" size={30} />
          </div>

          <div>
            <h2>
              Fokus dan Batasan Sistem
            </h2>

            <p>
              Monitor Sampah Organik berfokus pada
              pemantauan dua parameter, yaitu pH dan
              suhu Pupuk Organik Cair.
            </p>

            <p>
              Sampah organik rumah tangga merupakan
              bahan dasar pengolahan POC, sedangkan
              Pupuk Organik Cair menjadi objek
              pengukuran sensor.
            </p>

            <p>
              Tanaman kacang panjang merupakan konteks
              penelitian, bukan objek pengukuran sensor
              secara langsung.
            </p>

            <p>
              Sistem ini tidak menentukan bahan
              pembuatan POC dan tidak melakukan
              pengolahan POC.
            </p>

            <p>
              Sistem juga tidak melakukan pengukuran
              langsung terhadap pertumbuhan maupun
              parameter tanaman kacang panjang.
            </p>
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="monitoring-cta poc-animate-up poc-delay-4">
        <div>
          <p className="page-label">
            MONITOR SAMPAH ORGANIK
          </p>

          <h2>
            Pemantauan POC Berbasis IoT dan Web
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

export default Tentang;