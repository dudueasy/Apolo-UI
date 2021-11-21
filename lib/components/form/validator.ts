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

  // 两层数组拍平
  const flattenValidationErrors = flat(Object.keys(errors).map((key) => {
    return errors[key].map<[string, ValidationError]>((validationError) => {
      return [key, validationError];
    });
  }));

  const promisifiedList = flattenValidationErrors.map(([key, validationError]) => {
    const promise = validationError instanceof Promise ?
      validationError :
      Promise.reject(validationError);

    return promise.then<[string, undefined], [string, string]>(
      () => [key, undefined],
      (reason) => [key, reason],
    );
  });

  function hasError(item: [string, undefined] | [string, string]): item is [string, string] {
    return item[1] !== undefined
  }

  // 在 promise.all 中 提供参数给 callback
  Promise.all(promisifiedList).then((errorList) => {
    const formErrorsStringList = errorList.filter(hasError); //类型守卫函数

    const formErrors = zip(formErrorsStringList);
    callback(formErrors);
  });
};

// 用来拍平二维数组
function flat<T>(array: Array<T[] | T>): Array<T> {
  const result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i] as T[]);
    } else {
      result.push(array[i] as T);
    }
  }
  return result;
}

/**
 *  [[name,'apolo'], [name, 'alex' ], [age, 18]] =>  {name: ['apolo', 'alex'], age: [18]}
 */
function zip(array: Array<[string, string]>): Record<string, string[]> {
  return array.reduce<Record<string, any>>(
    (container, [key, value]) => {
      if (!container[key]) {
        container[key] = [];
      }
      container[key].push(value);
      return container;
    }, {});
}

export default Validator;