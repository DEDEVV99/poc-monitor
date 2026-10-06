import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sensorReadings: defineTable({
    plant: v.optional(v.string()),
    ph: v.number(),
    temperature: v.number(),
    deviceId: v.string(),
    status: v.string(),
    timestamp: v.number(),
  }).index("by_timestamp", ["timestamp"]),
});