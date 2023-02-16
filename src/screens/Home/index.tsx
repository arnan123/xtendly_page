import React from 'react';
import styles from './styles.module.scss';
import {
  Image,
  Row,
  Space,
  Typography,
  Input,
  Form,
  Button,
} from 'antd';

const IMAGE_URL = 'assets/banner.png';

function Homescreen() {
  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['banner-image']} />
      <Space className={styles['title-wrapper']}>
        <div className={styles['title-name']} />
      </Space>
      <Space className={styles['form']}>
        <Space className={styles['form-content1']}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
            }}
          >
            <Typography.Title level={3} className={styles['text']}>
              SCHEDULE A DEMO
            </Typography.Title>
            <Typography className={styles['text']}>
              Lean More About FloQast
            </Typography>
          </div>
        </Space>
        <Space className={styles['form-content2']}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography.Title
              level={4}
              className={styles['form-content2-title']}
            >
              Learn How FloQast Can
              <Typography.Title
                level={4}
                style={{ color: '#8BC540' }}
              >
                Improve Your Month-End
              </Typography.Title>
            </Typography.Title>
            <Form>
              <Space className={styles['form-content2-input']}>
                <Form.Item>
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item>
                  <Button
                    color="#8BC53F"
                    style={{
                      background: '#8BC53F',
                      borderColor: '#6F973B',
                    }}
                    type="primary"
                  >
                    SCHEDULE NOW
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </div>
        </Space>
      </Space>
    </div>
  );
}

export default Homescreen;
