import React, {useState} from 'react';
import Form, {FormValue} from './form';
import Button from '../button/button';
import Validator, {FormRules} from './validator';

const usernames = ['frank', 'jack', 'alice', 'bob'];

const checkUserName = (username: string, success: (value?: any) => void, fail: (reason: any) => void) => {
  setTimeout(() => {
    if (!usernames.includes(username)) {
      return success('yes');
    }
    return fail('用户名已存在');
  }, 1000);
};

const validator = (username: string) => {
  return new Promise<string>((resolve, reject) => {
    checkUserName(username, resolve, () => { reject('unique');});
  });
};


const FormExample: React.FC = (props) => {
  // 表示要渲染的数据
  const [formData, setFormData] = useState<FormValue>({username: '', password: ''});
  // 表示要渲染的字段
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);

  const [errors, setErrors] = useState({});

  const onSubmit: React.FormEventHandler = (e) => {
    const rules: FormRules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
      {key: 'username', validator},
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 16},
      {key: 'password', validator},
    ];

    Validator(formData, rules, (errors: any) => {
      setErrors(errors);
    });
  };

  const transformErrors = {
    unique: '字段值重复'
  };

  return (
    <Form
      errorDisplayMode={'all'}
      onChange={(newValue) => setFormData(newValue)}
      value={formData}
      fields={fields}
      buttons={
        <div>
          <Button type={'submit'}>提交</Button>
          <Button level={'important'}>返回</Button>
        </div>
      }
      onSubmit={onSubmit}
      errors={errors}
      transformErrors={transformErrors}
    />
  );
};

export default FormExample;
