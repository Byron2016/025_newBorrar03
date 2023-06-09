declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      SECRET: string;
      NODE_ENV: "development" | "production";
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

// declare namespace NodeJS {
//   export interface ProcessEnv {
//     PORT?: string;
//     SECRET: string;
//   }
// }
