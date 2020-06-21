import React, {Fragment, ReactFragment} from 'react';
import {FormErrors} from './validator';
import Input from '../input/input';
import {scopedClassMaker} from '../utils/className';
import './form.scss';

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

  const sc = scopedClassMaker('apolo-ui-form');

  return (
    <form onSubmit={onSubmit}>
      <table>
        {props.fields.map(field => {
          return <Fragment>
            <tr className={sc('tr')}>
              <td className={sc('td')}>
                <span> {field.label} </span>
              </td>

              <td className={sc('td')}>
                <Input
                  type={field.input.type}
                  value={formData[field.name]}
                  onChange={onInputChange.bind(null, field.name)}
                />
              </td>
            </tr>
            {
              // 渲染 表单验证错误
              errors[field.name] &&
              errors[field.name].map((error) => {
                return <tr>
                  <td/>
                  <td className={sc('error')}>
                    {error}
                  </td>
                </tr>;
              })
            }
          </Fragment>;
        })
        }
      </table>
      {props.buttons}
    </form>
  );
};

export default Form;
