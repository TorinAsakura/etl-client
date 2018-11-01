import React from 'react'
import { StyleSheet } from 'elementum'
import {
  MenuHomeIcon,
  MenuModulesIcon,
  MenuEditIcon,
} from '../icons'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '40px',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  inactive: {
    backgroundColor: '#E0F2FF',
    border: 'none',
  },
  active: {
    backgroundColor: '#FFF',
    border: '1px solid #E0F2FF',
  },
})

const icons = {
  home: <MenuHomeIcon />,
  modules: <MenuModulesIcon />,
  edit: <MenuEditIcon />,
}

const MenuButton = ({
  icon = 'home',
  active,
  onClick = f => f,
  ...props
}) => (
  <div
    {...props}
    onClick={() => onClick()}
    className={styles({ active, inactive: !active })}
  >
    {icons[icon]}
  </div>
)

export default MenuButton
