export interface ClassOptions {
  extra?: string
}

// {xxx: true, yy: false, zz: true}
export interface SuffixToggles {
  [k: string]: boolean
}


function scopedClassMaker(prefix: string) {
  return function (suffix?: string | SuffixToggles, options?: ClassOptions) {
    let suffixObjWrapper: SuffixToggles;
    let suffixList: string[];

    let classNames: string = prefix;

    if (suffix) {
      // 如果是字符串,  就包装成 SuffixToggle 再进行处理.
      suffixObjWrapper = typeof suffix === 'string' ?  {[ suffix ]: true}: suffix

      suffixList = Object.keys(suffixObjWrapper).filter(key => key && suffixObjWrapper[key]);

      classNames = (suffixList)
        .filter(Boolean).map(suffix => [prefix, suffix].join('-'))
        .join(' ');
    }


    if (options && options.extra) {
      return [classNames, options.extra].join(' ');
    } else {
      return classNames;
    }
  };
}

// filter falsy value out & combine classNames into a string for react components
function combineClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
}

export default combineClassNames;
export {scopedClassMaker};
