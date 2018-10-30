import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { Logo } from '@swt/ui/src/logo'

const Header = () => (
  <Column>
    <Layout basis='65px' />
    <Layout justify='center'>{<Logo height={44} />}</Layout>
    <Layout basis='24px' />
  </Column>
)

export default Header
