declare module "*.yml" {
  const content: any;
  export default content;
}

declare module "*?url" {
  const content: string;
  export default content;
}

declare module '*?raw' {
  const content: string
  export default content
}
