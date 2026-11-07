
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* LOGO DAN IDENTITAS APLIKASI */}
      <div className="brand">
        <div className="brand-icon">♻️</div>

        <div>
          <h2>Monitor Sampah Organik</h2>
          <span>Pemantauan POC Berbasis IoT</span>
        </div>
      </div>

      {/* MENU NAVIGASI */}
      <nav className="navigation">
        <NavLink to="/" end>
          <span>🏠</span>
          Beranda
        </NavLink>

        <NavLink to="/monitoring">
          <span>📊</span>
          Pemantauan
        </NavLink>

        <NavLink to="/tentang">
          <span>ℹ️</span>
          Tentang Aplikasi
        </NavLink>
      </nav>

      {/* STATUS PERANGKAT */}
      <div className="sidebar-footer">
        <div className="connection-status">
          <span className="status-dot"></span>

          <div>
            <small>Status Perangkat</small>
            <strong>Menunggu data sensor</strong>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
