export function getStatus(value, range) {
  if (value < range.low) {
    return {
      label: "Rendah",
      type: "low",
    };
  }

  if (value > range.high) {
    return {
      label: "Tinggi",
      type: "high",
    };
  }

  return {
    label: "Normal",
    type: "normal",
  };
}

export function getRecommendation(
  parameter,
  status,
  plantName
) {
  // =========================
  // NORMAL
  // =========================

  if (status === "normal") {
    if (parameter === "ph") {
      return `Nilai pH berada dalam rentang parameter yang ditetapkan untuk ${plantName}. Lanjutkan pemantauan secara berkala.`;
    }

    return `Suhu berada dalam rentang parameter yang ditetapkan untuk ${plantName}. Lanjutkan pemantauan.`;
  }

  // =========================
  // RENDAH
  // =========================

  if (status === "low") {
    if (parameter === "ph") {
      return `Nilai pH berada di bawah rentang parameter ${plantName}. Periksa kondisi larutan atau media dan lakukan penyesuaian secara bertahap.`;
    }

    return `Suhu berada di bawah rentang parameter ${plantName}. Periksa kondisi lingkungan atau penyimpanan POC.`;
  }

  // =========================
  // TINGGI
  // =========================

  if (parameter === "ph") {
    return `Nilai pH berada di atas rentang parameter ${plantName}. Periksa kondisi larutan atau media dan lakukan penyesuaian secara bertahap.`;
  }

  return `Suhu berada di atas rentang parameter ${plantName}. Periksa kondisi lingkungan atau penyimpanan POC.`;
}