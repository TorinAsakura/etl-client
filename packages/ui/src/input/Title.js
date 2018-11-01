import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    marginBottom: '6px',
    fontFamily: '"SF UI Text", sans-serif',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#293246',
  },
})

const Title = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Title
