interface Options {
  extra?: string
}

// {xxx: true, yy: false, zz: true}
interface ClassToggles {
  [k: string]: boolean
}

function scopedClassMaker(prefix: string) {
  return function (name?: string | ClassToggles, options?: Options) {
    let prefixName;
    if (typeof name === 'string') {
      prefixName = [prefix, name].filter(Boolean).join('-');
    } else if (typeof name === 'object') {
      prefixName = Object.keys(name).filter(item => item && name[item]).map(item => {
        return [prefix, item].join('-');
      }).join(' ');
    }
    if (options && options.extra) {
      return [prefixName, options.extra].join(' ');
    } else {
      return prefixName;
    }
  };
}

export {scopedClassMaker};


// filter falsy value out & combine classNames into a string for react components
function combineClassNames(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(' ');
}

export default combineClassNames;
