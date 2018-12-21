# Select

### Select

```jsx harmony
import React from 'react'
import { Select } from '../select'

const Selects = () => (
  <div>
    <div style={{ margin: '10px' }}>
      <Select
        value='deposit'
        options={[
           {
             id: 'deposit',
             name: 'Deposit',
           },
           {
             id: 'withdrawal',
             name: 'Withdrawal',
           },
         ]}
      />
    </div>
  </div>
)

export default Selects
```
