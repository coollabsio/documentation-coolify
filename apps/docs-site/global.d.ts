export {} 
declare global {
  interface Window {
    /**
     * The Plausible analytics function injected by their script.
     * @param eventName - the name of your custom event
     * @param options    - e.g. { debug?: boolean }
     */
    plausible?: (eventName: string, options?: { debug?: boolean }) => void
  }
}
