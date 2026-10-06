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
      return "Batas parameter pH POC belum ditetapkan. Nilai sensor tetap dicatat sebagai data monitoring.";
    }

    return "Batas parameter suhu POC belum ditetapkan. Nilai sensor tetap dicatat sebagai data monitoring.";
  }

  if (status === "normal") {
    if (parameter === "ph") {
      return "Nilai pH POC berada dalam rentang parameter yang ditetapkan. Lanjutkan pemantauan secara berkala.";
    }

    return "Suhu POC berada dalam rentang parameter yang ditetapkan. Lanjutkan pemantauan.";
  }

  if (status === "low") {
    if (parameter === "ph") {
      return "Nilai pH POC berada di bawah rentang parameter. Periksa kondisi POC dan lakukan evaluasi sesuai prosedur penelitian.";
    }

    return "Suhu POC berada di bawah rentang parameter. Periksa kondisi POC dan lingkungan penyimpanannya.";
  }

  if (parameter === "ph") {
    return "Nilai pH POC berada di atas rentang parameter. Periksa kondisi POC dan lakukan evaluasi sesuai prosedur penelitian.";
  }

  return "Suhu POC berada di atas rentang parameter. Periksa kondisi POC dan lingkungan penyimpanannya.";
}