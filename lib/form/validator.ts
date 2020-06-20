import {FormValue} from './form';

interface FormRule {
  key: string,
  required?: boolean,
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export type  FormRules = Array<FormRule>

interface FormErrors {
  [K: string]: string[]
}

function isEmpty(value: string): boolean {
  return (value === undefined || value === null || value === '');
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  const errors: FormErrors = {};

  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };

  rules.forEach((rule, index) => {
    const value = formValue[rule.key];

    if (rule.required && isEmpty(value)) {
      addError(rule.key, '不能为空');
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, '太短');
    }

    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, '太长');
    }

    if (rule.pattern && !isEmpty(value) && !rule.pattern.test(value)) {
      addError(rule.key, '格式不正确');
    }
  });

  return errors;
};

export default Validator;