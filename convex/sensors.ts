import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getLatest = query({
  args: {},

  handler: async (ctx) => {
    return await ctx.db
      .query("sensorReadings")
      .order("desc")
      .first();
  },
});

export const getHistory = query({
  args: {
    limit: v.optional(v.number()),
  },

  handler: async (ctx, args) => {
    const limit = args.limit ?? 20;

    return await ctx.db
      .query("sensorReadings")
      .order("desc")
      .take(limit);
  },
});

export const addReading = mutation({
  args: {
    plant: v.string(),
    ph: v.number(),
    temperature: v.number(),
    deviceId: v.string(),
    status: v.string(),
  },

  handler: async (ctx, args) => {
    const timestamp = Date.now();

    const id = await ctx.db.insert("sensorReadings", {
      plant: args.plant,
      ph: args.ph,
      temperature: args.temperature,
      deviceId: args.deviceId,
      status: args.status,
      timestamp,
    });

    return id;
  },
});

export const deleteReading = mutation({
  args: {
    id: v.id("sensorReadings"),
  },

  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);

    return {
      success: true,
    };
  },
});

export const deleteReadings = mutation({
  args: {
    ids: v.array(v.id("sensorReadings")),
  },

  handler: async (ctx, args) => {
    for (const id of args.ids) {
      await ctx.db.delete(id);
    }

    return {
      success: true,
      deleted: args.ids.length,
    };
  },
});