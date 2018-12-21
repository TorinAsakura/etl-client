# Button

### button

```jsx harmony
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

### auth button

```jsx harmony
import React from 'react'
import AuthButton from './AuthButton'

const AuthButtons = () => (
  <div>
    <div style={{ margin: '10px' }}>
      <AuthButton
        height='medium'
        fontSize='medium'
      >
        Button
      </AuthButton>
    </div>
    <div style={{ margin: '10px' }}>
      <AuthButton
        height='large'
        fontSize='large'
        color='blue400'
      >
        Button
      </AuthButton>
    </div>
    <div style={{ margin: '10px' }}>
      <AuthButton
        height='xlarge'
        fontSize='xlarge'
        uppercase
      >
        Button
      </AuthButton>
    </div>
  </div>
)

export default AuthButtons
```
