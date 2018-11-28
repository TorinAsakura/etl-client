import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    transition: '0.2s',
  },
  'color=brightGray': {
    backgroundColor: '#3A3F53',
  },
  'color=white': {
    backgroundColor: '#FFFFFF',
  },
  'color=mythic': {
    backgroundColor: '#E3E7F0',
  },
  'color=gray1200': {
    backgroundColor: '#F4F4F4',
  },
  'color=gray900': {
    backgroundColor: '#E6E6E6',
  },
  'color=blue': {
    backgroundColor: '#1A9CFC',
  },
  'hoverColor=brightGray': {
    '&:hover': {
      backgroundColor: '#3A3F53',
    },
  },
  'radius=large': {
    borderRadius: '40px',
  },
  'radius=medium': {
    borderRadius: '18px',
  },
  'radius=small': {
    borderRadius: '4px',
  },
  'topRadius=small': {
    borderRadius: '4px 4px 0 0',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  'height=fill': {
    minHeight: '100%',
    height: '100%',
  },
  'height=minfill': {
    minHeight: '-webkit-fill-available',
  },
  sidebar: {
    background: 'linear-gradient(180deg, #4C526A 0%, #3A3F53 100%)',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)',
  },
  border: {
    border: '1px solid #E3E7F0',
  },
  shadow: {
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.06)',
  },
  rounded: {
    borderRadius: '50%',
  },
  exchange: {
    borderRadius: '4px',
  },
  'height=normal': {
    height: '343px',
  },
  'height=double': {
    height: '702px',
  },
  exchangeSplit: {
    height: '16px',
  },
  'zIndex=high': {
    zIndex: '3',
  },
})

const Block = ({
  children,
  color = 'white',
  transparent,
  radius,
  sidebar,
  hoverColor,
  overflowHidden,
  border,
  shadow,
  topRadius,
  rounded,
  auth,
  exchange,
  exchangeSplit,
  height,
  zIndex,
}) => (
  <div
    className={styles({
      color,
      transparent,
      radius,
      sidebar,
      hoverColor,
      overflowHidden,
      border,
      shadow,
      topRadius,
      rounded,
      auth,
      exchange,
      exchangeSplit,
      height,
      zIndex,
    })}
  >
    {children}
  </div>
)

export default Block
