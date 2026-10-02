import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">🌱</div>

        <div>
          <h2>POC Monitor</h2>
          <span>IoT Monitoring</span>
        </div>
      </div>

      <nav className="navigation">
        <NavLink to="/" end>
          <span>🏠</span>
          Dashboard
        </NavLink>

        <NavLink to="/monitoring">
          <span>📊</span>
          Monitoring
        </NavLink>

        <NavLink to="/tentang">
          <span>ℹ️</span>
          Tentang
        </NavLink>
      </nav>

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