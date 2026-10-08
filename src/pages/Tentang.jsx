import adminImage from "../images/admin.jpg";

function Tentang() {
  return (
    <div className="page tentang-page">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            TENTANG
          </p>

          <h1>
            Tentang POC Monitor
          </h1>

          <p>
            POC Monitor merupakan website monitoring berbasis
            Internet of Things (IoT) yang digunakan untuk
            memantau parameter pH dan suhu pada Pupuk Organik
            Cair (POC).
          </p>

        </div>

      </section>


      {/* =====================================================
          TUJUAN SISTEM
      ===================================================== */}
      <section className="content-section">

        <div className="explanation-card">

          <div className="explanation-icon">
            🎯
          </div>

          <div>

            <h2>
              Tujuan Alat dan Website Ini Dibuat
            </h2>

            <p>
              Alat dan website ini dibuat untuk memudahkan
              pemantauan parameter pH dan suhu pada Pupuk
              Organik Cair (POC) menggunakan teknologi
              Internet of Things (IoT).
            </p>

            <p>
              Sistem dirancang untuk menerima data hasil
              pembacaan sensor, menyimpan data, dan
              menampilkan hasil monitoring melalui website.
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
                Menampilkan data monitoring melalui website.
              </li>

            </ol>

          </div>

        </div>

      </section>


      {/* =====================================================
          OBJEK MONITORING
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            OBJEK MONITORING
          </p>

          <h2>
            Pupuk Organik Cair
          </h2>

          <p>
            Sistem berfokus pada pemantauan parameter yang
            terdapat pada Pupuk Organik Cair yang digunakan
            dalam penelitian.
          </p>

        </div>


        <div className="sensor-info-grid">

          {/* POC */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🧪
            </div>

            <h3>
              Pupuk Organik Cair
            </h3>

            <p>
              Pupuk Organik Cair (POC) yang digunakan dalam
              penelitian berbahan dasar limbah organik.
              Sistem tidak menentukan atau mengolah bahan
              POC, tetapi berfokus pada pemantauan parameter
              pH dan suhu.
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


          {/* PARAMETER */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              📊
            </div>

            <h3>
              Parameter Monitoring
            </h3>

            <p>
              Parameter yang dipantau oleh sistem terdiri
              dari pH dan suhu Pupuk Organik Cair. Data
              diperoleh melalui sensor yang terhubung dengan
              perangkat ESP8266.
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
          OBJEK PENELITIAN
      ===================================================== */}
      <section className="content-section">

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
            🌱
          </div>

          <div>

            <h3>
              Kacang Panjang
            </h3>

            <p>
              Tanaman kacang panjang digunakan sebagai konteks
              penelitian dalam pengembangan sistem monitoring
              Pupuk Organik Cair.
            </p>

            <p>
              Informasi mengenai tanaman kacang panjang
              digunakan sebagai konteks penelitian, sedangkan
              sistem monitoring yang dikembangkan berfokus pada
              pengukuran parameter pH dan suhu Pupuk Organik
              Cair.
            </p>

            <p>
              Sistem tidak mengukur parameter tanaman kacang
              panjang secara langsung. Parameter yang dipantau
              oleh sistem adalah pH dan suhu Pupuk Organik Cair.
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
            Parameter yang Dipantau
          </h2>

        </div>


        <div className="sensor-info-grid">

          {/* PH */}
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
                Parameter
              </strong>

              <span>
                Nilai pH
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


      {/* =====================================================
          TEKNOLOGI
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            TEKNOLOGI
          </p>

          <h2>
            Teknologi yang Digunakan
          </h2>

          <p>
            Sistem monitoring terdiri dari perangkat sensor,
            mikrokontroler, database, dan website.
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
              Digunakan untuk membaca nilai pH
              pada Pupuk Organik Cair.
            </p>

          </div>


          {/* DS18B20 */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              🌡️
            </div>

            <h3>
              DS18B20
            </h3>

            <p>
              Digunakan untuk mengukur suhu
              Pupuk Organik Cair.
            </p>

          </div>


          {/* ESP8266 */}
          <div className="sensor-info-card">

            <div className="large-info-icon">
              📡
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
          <div className="sensor-info-card">

            <div className="large-info-icon">
              ☁️
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


      {/* =====================================================
          ALUR SISTEM
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            ALUR SISTEM
          </p>

          <h2>
            Cara Kerja Sistem
          </h2>

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
                sensor dan mengirimkannya.
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
                Data sensor disimpan dan dikelola
                pada database Convex.
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
                Data hasil monitoring ditampilkan
                pada website POC Monitor.
              </p>

            </div>

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
              POC Monitor berfokus pada pemantauan dua
              parameter, yaitu pH dan suhu Pupuk Organik Cair.
            </p>

            <p>
              Tanaman kacang panjang merupakan konteks
              penelitian, sedangkan objek yang diukur oleh
              sensor adalah Pupuk Organik Cair.
            </p>

            <p>
              Sistem menerima data dari sensor, mengirimkan
              data melalui ESP8266, menyimpan data, kemudian
              menampilkan hasil monitoring pada website.
            </p>

            <p>
              Sistem ini tidak menentukan bahan pembuatan
              POC dan tidak melakukan pengolahan POC.
            </p>

            <p>
              Sistem juga tidak melakukan pengukuran langsung
              terhadap pertumbuhan maupun parameter tanaman
              kacang panjang.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROFILE DEVELOPER
      ===================================================== */}
      <section className="content-section">

        <div className="section-heading">

          <p className="page-label">
            DEVELOPER
          </p>

          <h2>
            Profile Developer
          </h2>

          <p>
            POC Monitor dikembangkan sebagai bagian dari
            penelitian dan pengembangan sistem monitoring
            parameter Pupuk Organik Cair berbasis Internet
            of Things (IoT) dan web.
          </p>

        </div>


        <div className="developer-profile">

          {/* FOTO DEVELOPER */}
          <div className="developer-avatar">

            <img
              src={adminImage}
              alt="Delon Dede Afdilah"
            />

          </div>


          {/* INFORMASI DEVELOPER */}
          <div className="developer-info">

            <h3>
              Delon Dede Afdilah
            </h3>

            <p className="developer-role">
              Mahasiswa Teknologi Informasi
            </p>


            <div className="developer-details">

              <div className="developer-detail-item">

                <div>

                  <strong>
                    NIM
                  </strong>

                  <p>
                    2308100013
                  </p>

                </div>

              </div>


              <div className="developer-detail-item">

                <div>

                  <strong>
                    Program Studi
                  </strong>

                  <p>
                    Teknologi Informasi
                  </p>

                </div>

              </div>


              <div className="developer-detail-item">


                <div>

                  <strong>
                    Universitas
                  </strong>

                  <p>
                    Universitas Labuhanbatu
                  </p>

                </div>

              </div>


              <div className="developer-detail-item">


                <div>

                  <strong>
                    Penelitian
                  </strong>

                  <p>
                    Rancang Bangun Sistem Monitoring
                    Parameter Suhu dan pH Pupuk Organik
                    Cair Berbasis IoT dan Web
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PENUTUP
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

export default Tentang;