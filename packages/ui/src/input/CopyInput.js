import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CopyIcon } from '../icons'
import { HintInput, Hint } from './index'

const CopyInput = ({
  value = '',
}) => (
  <CopyToClipboard
    text={value}
  >
    <HintInput
      value={value}
      readonly
      data-lpignore
      rightHint={(
        <Hint
          align='right'
        >
          <CopyIcon />
        </Hint>
      )}
    />
  </CopyToClipboard>
)

export default CopyInput
