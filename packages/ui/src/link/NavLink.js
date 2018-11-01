import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    textDecoration: 'none',
  },
})

const NavLink = ({
  to,
  children,
}) => (
  <Link
    to={to}
    className={styles()}
  >
    {children}
  </Link>
)

export default NavLink
