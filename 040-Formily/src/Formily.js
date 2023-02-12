import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';

// 自定义组件，渲染了一个普通的 Input
const Input = (props) => {
  const { onChange, placeholder, value = '' } = props;
  console.log('props:', props);
  return (
    <input onChange={onChange} placeholder={placeholder} value={value} />
  );
};

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    Input,
  },
});

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      // 自定义组件
      'x-component': 'Input',
      // 自定义参数
      'x-component-props': {
        placeholder: '请输入',
        required: true,
      },
    },
  },
};

export default () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
  </FormProvider>
)
