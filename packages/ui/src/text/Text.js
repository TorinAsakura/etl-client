import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#000000',
  },
  'size=xxlarge': {
    fontSize: '36px',
  },
  'size=xlarge': {
    fontSize: '30px',
  },
  'size=large': {
    fontSize: '24px',
  },
  'size=medium': {
    fontSize: '18px',
  },
  'size=normal': {
    fontSize: '16px',
  },
  'size=small': {
    fontSize: '14px',
  },
  'size=xsmall': {
    fontSize: '12px',
  },
  'color=blue400': {
    color: '#0288d1',
  },
  'color=blue800': {
    color: '#009AFF',
  },
  'color=gray200': {
    color: '#aeb7be',
  },
  'color=gray250': {
    color: '#657684',
  },
  'color=gray300': {
    color: '#757575',
  },
  'color=gray400': {
    color: '#505458',
  },
  'color=gray444': {
    color: '#444444',
  },
  'color=gray700': {
    color: '#A8A8A8',
  },
  'color=gray900': {
    color: '#CACACA',
  },
  'color=black400': {
    color: '#303336',
  },
  'color=red400': {
    color: '#ff0000',
  },
  'color=orange500': {
    color: '#ff6701',
  },
  'color=green500': {
    color: '#00bb27',
  },
  'color=white': {
    color: '#ffffff',
  },
  'weight=light': {
    fontWeight: 300,
  },
  'weight=medium': {
    fontWeight: 500,
  },
  'weight=bold': {
    fontWeight: 700,
  },
  'align=center': {
    textAlign: 'center',
  },
  'lineHeight=extended': {
    lineHeight: 1.4,
  },
  'lineHeight=large': {
    lineHeight: 1.5,
  },
  'bgColor=blue800': {
    backgroundColor: '#009AFF',
  },
  'bgColor=blue1000': {
    backgroundColor: '#E0F2FF;',
  }
})

const Text = ({ id, children, size = 'normal', color, weight, family, align, bgColor, lineHeight, round }) => (
  <span id={id} className={styles({ size, color, weight, align, family, bgColor, lineHeight, round })}>
    {children}
  </span>
)

export default Text
