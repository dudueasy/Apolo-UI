import React, {ReactFragment} from 'react';
import Input from '../input/input';
import {scopedClassMaker} from '../../utils/className';
import './form.global.scss';
import {EnumApoloUIComponentType} from "../../typing";

export type FormValue = { [name: string]: string };
export type FormErrors = { [K: string]: string[] };

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
  errors: FormErrors;
  errorDisplayMode?: 'single' | 'all'
  transformErrors?: Record<string, string>
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

  const sc = scopedClassMaker(EnumApoloUIComponentType.Form);

  const transformErrors = (message: string) => {
    enum internalTransformErrorEnum {
      required = '必填',
      minLength = '太短了',
      maxLength = '太长了',
    }

    const transFormErrorEnum = {...internalTransformErrorEnum, ...props.transformErrors};

    // 将预设的 ErrorEnum 和用户传入的 ErrorEnum 合并
    return transFormErrorEnum[(message as keyof typeof transFormErrorEnum)] || '未知错误';
  };


  return (
    <form onSubmit={onSubmit}>
      <table className={sc('table')}>
        <tbody>
        {props.fields.map(field => {
          return <tr className={sc('tr')} key={field.name}>
            <td className={sc('td')}>
              <span className={sc('label')}> {field.label} </span>
            </td>

            <td className={sc('td')}>
              <Input
                type={field.input.type}
                value={formData[field.name]}
                onChange={onInputChange.bind(null, field.name)}
              />
              <div className={sc('error')}>
                {
                  errors[field.name] ?
                    (props.errorDisplayMode === 'single' ?
                      transformErrors!(errors[field.name][0]) :
                      errors[field.name].map(transformErrors!).join('，')) :
                    <span>&nbsp;</span>
                }
              </div>
            </td>
          </tr>;
        })
        }
        <tr>
          <td className={sc('td')}/>
          <td className={sc('td')}>
            {props.buttons}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};


Form.defaultProps = {
  errorDisplayMode: 'single',
};

export default Form;
