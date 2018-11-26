import React from 'react'
import { StyleSheet } from 'elementum'
import { Layout } from 'flex-layouts'
import { AccountMenuIcon, ArrowInputIcon } from '../icons'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #E0F2FF',
    borderRadius: '20px',
    width: '61px',
    height: '40px',
    cursor: 'pointer',
  },
})

const Profile = ({ ...props }) => (
  <div
    className={styles()}
    {...props}
  >
    <Layout>
      <AccountMenuIcon
        width={13}
        height={17}
      />
    </Layout>
    <Layout basis='6px' />
    <Layout>
      <ArrowInputIcon
        width={8}
      />
    </Layout>
  </div>
)

export default Profile
