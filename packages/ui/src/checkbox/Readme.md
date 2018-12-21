# Checkbox

### checkbox

```jsx harmony
import React from 'react'
import { Checkbox } from './index'

const Checkboxes = () => (
  <div>
    <div style={{ margin: '10px' }}>
      <Checkbox
        value={true}
        label
      />
    </div>
    <div style={{ margin: '10px' }}>
      <Checkbox
        value={false}
      />
    </div>
  </div>
)

export default Checkboxes
```
