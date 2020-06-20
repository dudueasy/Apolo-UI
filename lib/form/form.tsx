import React, {ReactFragment} from 'react';

export type FormValue = { [name: string]: string }

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
  onChange: (value: FormValue) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  const formData = props.value;

  const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValue = {...formData, [name]: e.target.value};
    props.onChange(newFormValue);
  };

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
          </div>;
        })
      }
      {props.buttons}
    </form>
  );
};

export default Form;
