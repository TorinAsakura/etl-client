import React from 'react'
import { withRouter } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'none',
  },
  active: {
    display: 'block',
    flexGrow: 1,
  },
})

const SwitcherTabContent = ({ children, path, location }) => (
  <div className={styles({ active: path === location.pathname })}>
    {children}
  </div>
)

export default withRouter(SwitcherTabContent)
