import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sensorReadings: defineTable({
    // Tanaman yang sedang dipantau
    // Data baru akan selalu memiliki nilai ini
    plant: v.optional(v.string()),

    // Data sensor
    ph: v.number(),
    temperature: v.number(),

    // Informasi perangkat
    deviceId: v.string(),
    status: v.string(),

    // Waktu data diterima
    timestamp: v.number(),
  }).index("by_timestamp", ["timestamp"]),
});