export interface ClassOptions {
  extra?: string
}

// {xxx: true, yy: false, zz: true}
export interface SuffixToggles {
  [k: string]: boolean
}

const scopedClassMaker = (prefix: string) =>
  (suffix?: string | SuffixToggles, options?: ClassOptions) => {
    return suffix? Object
        .entries(typeof suffix === 'string' ? {[suffix]: true} : suffix)
        .filter(kv => kv[0] && kv[1])
        .map(kv => kv[0])
        .map(suffix => [prefix, suffix].join('-'))
        .concat(options && options.extra? options.extra:[])
        .join(' ') :
      prefix
  };

// filter falsy value out & combine classNames into a string for react components
function combineClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
}

export default combineClassNames;
export {scopedClassMaker};
