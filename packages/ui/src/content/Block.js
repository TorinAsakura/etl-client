import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    transition: '0.2s',
    backgroundColor: '#F5F8Fa',
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
  'hoverColor=brightGray': {
    '&:hover': {
      backgroundColor: '#3A3F53',
    },
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
  heightFill: {
    height: '100%',
  },
  sidebar: {
    background: 'linear-gradient(180deg, #4C526A 0%, #3A3F53 100%)',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)',
  },
  border: {
    border: '1px solid #E3E7F0',
  },
  shadow: {
    boxShadow: '0 2px 4px 0 rgba(131,144,173,0.05)',
  },
  rounded: {
    borderRadius: '50%',
  },
  auth: {
    borderRadius: '40px',
    width: '407px',
    height: '404px',
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
})

const Block = ({
  children,
  color,
  backgroundColor,
  transparent,
  radius,
  sidebar,
  hoverColor,
  overflowHidden,
  heightFill,
  border,
  shadow,
  topRadius,
  rounded,
  auth,
  exchange,
  exchangeSplit,
  height,
}) => (
  <div
    className={styles({
      color,
      backgroundColor,
      transparent,
      radius,
      sidebar,
      hoverColor,
      overflowHidden,
      heightFill,
      border,
      shadow,
      topRadius,
      rounded,
      auth,
      exchange,
      exchangeSplit,
      height,
    })}
  >
    {children}
  </div>
)

export default Block
