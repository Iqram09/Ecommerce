/*declare module 'payload' {
    // Define the module exports here, for example:
    export function init(options: any): Promise<any>;
    export interface InitOptions {
      secret: string;
      local?: boolean;
      express?: any;
      onInit?: (cms: any) => void;
      // Add other options as needed
    }
    declare module '@payloadcms/bundler-webpack' {
        const webpackBundler: any;
        export { webpackBundler };
      }
      
      declare module '@payloadcms/db-mongodb' {
        const mongooseAdapter: any;
        export { mongooseAdapter };
      }
      
      declare module '@payloadcms/richtext-slate' {
        const slateEditor: any;
        export { slateEditor };
      }
  }
  */