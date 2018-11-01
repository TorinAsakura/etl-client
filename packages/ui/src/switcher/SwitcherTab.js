import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'
import { Text } from '../text'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    height: '24px',
    color: '#009AFF',
    cursor: 'pointer',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'background-color ease-in .2s',
    zIndex: 2,
    '& span': {
      background: 'none',
      width: '44px',
    },
  },
  active: {
    backgroundColor: '#009AFF',
    borderRadius: '12px',
    color: '#FFFFFF',
    width: '44px',
    zIndex: 6,
  },
})

const SwitcherTab = ({ to, exact, onClick, children }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true })}
    activeClassName={styles({ active: true })}
    onClick={onClick}
  >
    <Text
      size='small'
      height='small'
      color='ebony'
    >
      {children}
    </Text>
  </NavLink>
)

export default SwitcherTab
