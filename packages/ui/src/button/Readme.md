# Button

### button

```
import React from 'react'
import { Button } from './index'

const Buttons = () => (
  <div>
    <div style={{ margin: '10px' }}>
      <Button text>
      Button
      </Button>
    </div>
    <div style={{ margin: '10px' }}>
      <Button text color='lightGray'>
        Button
      </Button>
    </div>
    <div style={{ margin: '10px' }}>
      <Button text height='medium'>
        Button
      </Button>
    </div>
    <div style={{ margin: '10px' }}>
      <Button text color='lightGray' height='medium'>
        Button
      </Button>
    </div>
  </div>
)

export default Buttons

```
