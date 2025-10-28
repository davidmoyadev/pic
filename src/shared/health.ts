export function healthCheck(): { status: string; timestamp: number } {
  return {
    status: "ok",
    timestamp: Date.now(),
  };
}

export function isHealthy(): boolean {
  return true;
}
