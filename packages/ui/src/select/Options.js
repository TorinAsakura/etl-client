import React from 'react'
import { StyleSheet } from 'elementum'
import Option from './Option'
import OnOutsideClick from '../layer/OnOutsideClick'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: 'calc(100% + 3px)',
    background: '#ffffff',
    border: '1px solid #009AFF',
    borderRadius: '24px',
    maxHeight: '192px',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
})

const Options = ({
  valueField, displayField, options = [], onSelect,
  onToggle, locale, activeValue, select,
}) => (
  <OnOutsideClick
    onOutsideClick={onToggle}
    target={select}
  >
    <div className={styles()}>
      {options.map(option => (
        <Option
          key={option[valueField]}
          data={option}
          activeValue={activeValue}
          valueField={valueField}
          displayField={displayField}
          locale={locale}
          onSelect={onSelect}
        />
      ))}
    </div>
  </OnOutsideClick>
)

export default Options
