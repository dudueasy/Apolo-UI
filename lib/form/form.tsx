import React, {ReactFragment} from 'react';
import { FormErrors } from './validator';

export type FormValue = { [name: string]: string }

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
  errors: FormErrors;
}

const Form: React.FC<FormProps> = (props) => {
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const formData = props.value;
  const {errors} = props;

  const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValue = {...formData, [name]: e.target.value};
    props.onChange(newFormValue);
  };

  console.log('errors: ', errors);

  return (
    <form onSubmit={onSubmit}>
      {
        props.fields.map(field => {
          return <div key={field.name}>
            {field.label}
            <input
              type={field.input.type}
              value={formData[field.name]}
              onChange={onInputChange.bind(null, field.name)}
            />
            {
              // 渲染 表单验证错误
              errors[field.name] &&
              errors[field.name].map((error) => {
                return <div style={{color: 'red'}}>
                  {error}
                </div>;
              })
            }
          </div>;
        })
      }
      {props.buttons}
    </form>
  );
};

export default Form;
