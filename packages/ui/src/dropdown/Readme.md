# Dropdown

### dropdown

```jsx harmony
import React from 'react'
import { Dropdown, Content, Item } from './index'
import { Input } from '../input'

const Checkboxes = () => (
  <div>
    <div style={{ margin: '10px' }}>
      <Dropdown
        trigger={(
          <Input />
        )}
      >
        <Content>
          <Item>
            Item 1
          </Item>
          <Item>
            Item 2
          </Item>
        </Content>
      </Dropdown>
    </div>
  </div>
)

export default Checkboxes
```
