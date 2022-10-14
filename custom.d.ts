declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module '*.mp4' {
  const content: unknown;
  export default content;
}
