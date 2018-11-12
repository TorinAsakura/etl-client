import React from 'react'
import { StyleSheet } from 'elementum'
import { AccountMenuIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '40px',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: '#E0F2FF',
    borderRadius: '50%',
  },
})

const AccountImage = () => (
  <div
    className={styles()}
  >
    <AccountMenuIcon
      width={13}
      height={17}
    />
  </div>
)

export default AccountImage
