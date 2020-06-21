import React, {Fragment, useState} from 'react';
import {ExampleWrapper} from '../ExampleWrappers';
import Demo from '../DemoWithCode';
import Form, {FormValue} from './form';
import Validator, {hasNoError} from './validator';

interface Props {
  code: string
}

const FormExampleWithCode: React.FC<Props> = (props) => {
  // 表示要渲染的数据
  const [formData, setFormData] = useState<FormValue>({username: '', password: ''});

  // 表示要渲染的字段
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);

  const [errors, setErrors] = useState({});

  const onSubmit: React.FormEventHandler = (e) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 16},
    ];
    const errors = Validator(formData, rules);
    if (hasNoError(errors)) {
      // 表示没有错误
    }
    setErrors(errors);
  };

  return <>
    <h4>Example for Form</h4>
    <Demo code={require('!!raw-loader!./formExampleWithCode.tsx').default}>
      <ExampleWrapper>
        <Form
          onChange={(newValue) => setFormData(newValue)}
          value={formData}
          fields={fields}
          buttons={
            <Fragment>
              <button type={'submit'}>提交</button>
            </Fragment>
          }

          onSubmit={onSubmit}
          errors={errors}
        />
      </ExampleWrapper>
    </Demo>
  </>;
};

export default FormExampleWithCode;
