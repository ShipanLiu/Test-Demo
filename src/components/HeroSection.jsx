import React from 'react'
import '../App.css'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd'
import { DownOutlined, TagOutlined } from '@ant-design/icons'
import './HeroSection.css'

function HeroSection(props) {
  function handleMenuClick(e) {
    props.choosedKey(e.key)
  }

  const buttonClick = () => {
    props.choosedKey(0)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<TagOutlined />}>
        Beer
      </Menu.Item>
      <Menu.Item key="2" icon={<TagOutlined />}>
        Wine
      </Menu.Item>
      <Menu.Item key="3" icon={<TagOutlined />}>
        Spirits
      </Menu.Item>
      <Menu.Item key="4" icon={<TagOutlined />}>
        Cider
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="cate">
      <div className="hero-container">
        <p>Filter by</p>
        <Space className="hero-btns">
          <Dropdown overlay={menu}>
            <Button onClick={buttonClick}>
              All <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}

export default HeroSection
