import { describe, it, expect } from "vitest";
import { healthCheck, isHealthy } from "@shared/health.js";

describe("health", () => {
  describe("healthCheck", () => {
    it("should return status ok", () => {
      const result = healthCheck();
      expect(result.status).toBe("ok");
    });

    it("should return a timestamp", () => {
      const result = healthCheck();
      expect(result.timestamp).toBeTypeOf("number");
      expect(result.timestamp).toBeGreaterThan(0);
    });

    it("should return current timestamp", () => {
      const before = Date.now();
      const result = healthCheck();
      const after = Date.now();
      
      expect(result.timestamp).toBeGreaterThanOrEqual(before);
      expect(result.timestamp).toBeLessThanOrEqual(after);
    });
  });

  describe("isHealthy", () => {
    it("should return true", () => {
      expect(isHealthy()).toBe(true);
    });
  });
});
