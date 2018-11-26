import React from 'react'
import { StyleSheet } from 'elementum'
import { FavoritesIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
    '& .tabs': {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#E5E9F1',
      width: '100%',
      borderRadius: '20px',
    },
    '& .switcher_icon': {
      display: 'none',
    },
  },
  'height=large': {
    height: '32px',
  },
  'height=normal': {
    height: '24px',
  },
  star: {
    '& .switcher_icon': {
      display: 'flex',
      minWidth: '24px',
      height: '24px',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F2FF',
      marginRight: '4px',
    },
  },
  mobile: {
    overflowX: 'auto',
  },
})

const Switcher = ({
  children,
  star,
  height = 'normal',
  mobile,
}) => (
  <div className={styles({
    height,
    star,
    mobile,
  })}
  >
    <span className='switcher_icon'>
      <FavoritesIcon />
    </span>
    <div className='tabs'>
      {children}
    </div>
  </div>
)

export default Switcher
