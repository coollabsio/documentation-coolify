/**
 * Track a custom event in Plausible
 */
export function trackEvent(eventName: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  const plausible = (window as any).plausible;
  if (typeof plausible === 'function') {
    plausible(eventName);
  }
}
