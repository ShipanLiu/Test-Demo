import React from 'react'
import '../App.css'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import './HeroSection.css'

function HeroSection() {
  function handleMenuClick(e) {
    message.info('Click on menu item.')
    console.log('click', e)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="cate">
      <div className="hero-container">
        <p>Filter by</p>
        <Space className="hero-btns">
          <Dropdown overlay={menu}>
            <Button>
              All <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}

export default HeroSection
