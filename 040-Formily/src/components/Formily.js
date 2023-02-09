import React from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Card } from 'antd'
import { VerifyCode } from './VerifyCode'
import { VerifyCode1 } from './VerifyCode1'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

console.log('FormItem: ', FormItem);

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
    VerifyCode1,
  },
  scope: {
    icon(name) {
      return React.createElement('span')
    },
  },
})

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
    },
  },
}

const phoneSchema = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      title: '手机号',
      required: true,
      'x-validator': 'phone',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('PhoneOutlined')}}",
      },
    },
    jsliang: {
      type: 'string',
      title: '梁峻荣',
      required: true,
      // 'x-decorator': 'FormItem',
      'x-component': 'VerifyCode1',
      'x-reactions': [
        {
          dependencies: ['.jsliang#value', '.jsliang#valid'],
          fulfill: {
            state: {
              'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
              'component[1].phoneNumber': '{{$deps[0]}}',
            },
          },
        },
      ],
    },
    verifyCode: {
      type: 'string',
      title: '验证码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'VerifyCode',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
      'x-reactions': [
        {
          dependencies: ['.phone#value', '.phone#valid'],
          fulfill: {
            state: {
              'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
              'component[1].phoneNumber': '{{$deps[0]}}',
            },
          },
        },
      ],
    },
  },
}

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}
    >
      <Card style={{ width: 400 }}>
        <Form
          form={phoneForm}
          layout="vertical"
          size="large"
          onAutoSubmit={console.log}
        >
          <SchemaField schema={phoneSchema} />
          <Submit block size="large">
            登录
          </Submit>
        </Form>
      </Card>
    </div>
  )
}