declare namespace ToggleModuleScssNamespace {
  export interface IToggleModuleScss {
    test: string;
  }
}

declare const ToggleModuleScssModule: ToggleModuleScssNamespace.IToggleModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ToggleModuleScssNamespace.IToggleModuleScss;
};

export = ToggleModuleScssModule;
