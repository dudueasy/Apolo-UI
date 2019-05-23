// filter falsy value out & combine classNames into a string for react components
function combineClassNames(...classNames: (string | undefined)[]): string {
    return classNames.filter(r => r).join(' ');
}

export default combineClassNames;