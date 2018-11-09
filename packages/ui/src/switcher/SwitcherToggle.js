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
    transition: 'all ease-in 0.1s',
    borderRadius: '20px',
    backgroundColor: '#FF9600',
    color: '#FFF',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.2,
  },
  'color=green700': {
    backgroundColor: '#52BD00',
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
  onClick,
  color,
}) => (
  <div
    className={styles({
      hide: activeTab !== target,
      color,
    })}
    onClick={() => onClick(target)}
  >
    {children}
  </div>
)

export default SwitcherToggle
