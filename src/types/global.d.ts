// Allow TypeScript to understand CSS file imports
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
