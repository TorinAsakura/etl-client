import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '79px',
    height: '40px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'border ease-in .2s',
    borderRadius: '20px',
    backgroundColor: '#FF9600',
    color: '#FFF',
  },
  hide: {
    backgroundColor: '#FFF',
    color: '#444444',
  },
})

const SwitcherToggle = ({
  children,
  target,
  activeTab,
  borderColor,
  onClick,
  right,
  left,
}) => (
  <div
    className={styles({
      hide: activeTab !== target,
      borderColor,
      right,
      left,
    })}
    onClick={() => onClick(target)}
  >
    {children}
  </div>
)

export default SwitcherToggle
