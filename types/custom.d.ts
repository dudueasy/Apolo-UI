declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const url: string;
  export default url
}


declare module '*.scss';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
