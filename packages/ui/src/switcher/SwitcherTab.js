import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'inline-flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '500',
    color: '#009AFF',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color ease-in .2s',
    zIndex: 2,
    padding: '0 10px',
    borderRadius: '20px',
    '& span': {
      background: 'none',
      minWidth: '44px',
    },
  },
  active: {
    backgroundColor: '#009AFF',
    color: '#FFFFFF !important',
    minWidth: '44px',
    zIndex: 6,
  },
  'height=large': {
    height: '32px',
  },
  'height=normal': {
    height: '24px',
  },
  'radius=large': {
    borderRadius: '16px',
  },
  'radius=normal': {
    borderRadius: '12px',
  },
  padding: {
    padding: '0 16px',
  },
  'text=normal': {
    fontSize: '16px',
  },
  'text=small': {
    fontSize: '13px',
  },
})

const SwitcherTab = ({
  to,
  exact,
  onClick,
  children,
  height = 'normal',
  padding,
  text = 'small',
}) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({
      padding,
      text,
    })}
    activeClassName={styles({
      active: true,
      height,
      radius: height,
    })}
    onClick={onClick}
  >
    {children}
  </NavLink>
)

export default SwitcherTab
