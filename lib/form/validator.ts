import {FormValue} from './form';

interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: (value: string) => Promise<string>;
}

export type FormRules = Array<FormRule>

export interface FormErrors {
  [K: string]: Array<ValidationError>
}

function isEmpty(value: string): boolean {
  return (value === undefined || value === null || value === '');
}

export function hasNoError(errors: FormErrors) {
  return Object.keys(errors).length === 0;
}

interface OneError {
  message: string;
  promise?: Promise<string>;
}

type ValidationError = string | Promise<string>

const Validator = (
  formValue: FormValue,
  rules: FormRules,
  // 需要构造一个 errors 给 callback 函数
  // callback: (errors: FormErrors) => void,
  callback: (errors: { [K: string]: ValidationError[] }) => void
)
  : void => {
  const errors: FormErrors = {};

  const addError = (key: string, error: ValidationError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };

  rules.forEach((rule, index) => {
    const value = formValue[rule.key];

    if (rule.required && isEmpty(value)) {
      addError(rule.key, 'required');
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, 'minLength');
    }

    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, 'maxLength');
    }

    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      addError(rule.key, 'pattern');
    }

    if (rule.validator) {
      //   自定义的校验器
      addError(rule.key, rule.validator(value));
    }
  });

  console.log(errors);
  const xx = Object.keys(errors).map((key) => {
    return errors[key].map((validationError) => {
      return [key, validationError];
    }); // [p1, p2, m3]

  });

  console.log('xx: ', xx);
  const y = flat(xx);
  const promiseList = y.map(([key, validationError]) => {
    // 返回一个永远不会 reject 的 promise , 接下来才用以可 Promise.all() 来玩
    return typeof validationError === 'string' ?
      Promise.resolve([key, validationError]) :
      validationError.then(
        (a) => { return [key, undefined];},
        (reason) => { return [key, reason]; }
      )
      ;
  });

  console.log(promiseList);
  Promise.all(promiseList).then((errorList: [string, string][]) => {
    console.log(errorList);

    const formErrors: FormErrors = errorList.filter(([key, message]) => {
      return message;
    }).reduce<FormErrors>((accumulator, [key, message]) => {
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(message);
      return accumulator;
    }, {});

    console.log('formErrors: ', formErrors);
    callback(formErrors);
  });
};

// 用来拍平二维数组
function flat<T>(array: ArrayLike<T[] | T>): Array<T> {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...(array as ArrayLike<T[]>) [i]);
    } else {
      result.push((array as ArrayLike<T>)[i]);
    }
  }
  return result;
}

export default Validator;