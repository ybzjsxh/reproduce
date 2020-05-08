import React, { useState, FormEvent } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { Row, Col, Input, Button, Form } from 'antd';
import md5 from 'md5';
import styles from './index.less';

import HeadAvatar from './components/HeadAvatar';

interface LoginProps {
  dispatch: Dispatch<AnyAction>;
}

const Login: React.FC<LoginProps> = props => {
  const { dispatch } = props;
  const [form] = Form.useForm();
  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = async () => {
    form.validateFields(['password']).then(val => {
      dispatch({ type: 'login/login', payload: { pass: md5(val.password) } });
    });
  };

  return (
    <div className={styles.login}>
      <Row justify="center" style={{ marginTop: 80 }}>
        <Col xs={24} sm={18} md={12} lg={12} xl={8}>
          <HeadAvatar show={show} />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={12} xl={8}>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="password" rules={[{ required: true, message: '是否忘记输入密码？' }]}>
              <Input.Password
                placeholder="请输入密码"
                style={{ marginTop: '20px' }}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" block style={{ marginTop: '10px' }}>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default connect()(Login);
