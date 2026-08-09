/// <reference types="react-scripts" />

declare module '*.css' {
  const content: { [key: string]: string };
  export default content;
}
