import React from 'react'
import { StyleSheet } from 'elementum'
import { FavoritesIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
    height: '24px',
    '& .tabs': {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#E5E9F1',
      width: '100%',
      borderRadius: '20px',
    },
    '& span': {
      display: 'flex',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F2FF',
    },
  },
})

const Switcher = ({ children }) => (
  <div className={styles()}>
    <span>
      <FavoritesIcon />
    </span>
    <div className='tabs'>
      {children}
    </div>
  </div>
)

export default Switcher
