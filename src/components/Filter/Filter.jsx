import React from 'react'
import '../../App.css'
import { Menu, Dropdown, Button, Space } from 'antd'
import { DownOutlined, TagOutlined } from '@ant-design/icons'
import './Filter.css'
import { useState } from 'react/cjs/react.development'

function HeroSection(props) {
  const itemArr = ['All', 'Beer', 'Wine', 'Spirits', 'Cider']
  const [choosedItem, setChoosedItem] = useState('All')
  function handleMenuClick(e) {
    setChoosedItem(itemArr[e.key])
    props.choosedKey(e.key)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0" icon={<TagOutlined />}>
        All
      </Menu.Item>
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
            <Button>
              {choosedItem} <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>
    </div>
  )
}

export default HeroSection
