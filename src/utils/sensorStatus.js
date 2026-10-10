export function getStatus(value, range) {
  if (
    !range ||
    range.low === null ||
    range.high === null ||
    range.low === undefined ||
    range.high === undefined
  ) {
    return {
      label: "Belum ditetapkan",
      type: "unknown",
    };
  }

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

export function getRecommendation(parameter, status) {
  if (status === "unknown") {
    if (parameter === "ph") {
      return "Batas acuan pH POC belum ditetapkan. Nilai sensor tetap dicatat sebagai data monitoring.";
    }

    return "Batas acuan suhu POC belum ditetapkan. Nilai sensor tetap dicatat sebagai data monitoring.";
  }

  if (status === "normal") {
    if (parameter === "ph") {
      return "Nilai pH POC berada dalam rentang acuan 4–9 yang digunakan oleh sistem monitoring.";
    }

    return "Suhu POC berada dalam rentang acuan 25–30°C yang digunakan oleh sistem monitoring.";
  }

  if (status === "low") {
    if (parameter === "ph") {
      return "Nilai pH POC berada di bawah rentang acuan 4. Sistem mencatat kondisi ini sebagai status rendah.";
    }

    return "Suhu POC berada di bawah rentang acuan 25°C. Sistem mencatat kondisi ini sebagai status rendah.";
  }

  if (parameter === "ph") {
    return "Nilai pH POC berada di atas rentang acuan 9. Sistem mencatat kondisi ini sebagai status tinggi.";
  }

  return "Suhu POC berada di atas rentang acuan 30°C. Sistem mencatat kondisi ini sebagai status tinggi.";
}