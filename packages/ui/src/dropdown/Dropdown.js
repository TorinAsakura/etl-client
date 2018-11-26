import React, { cloneElement, Component } from 'react'
import { Layer } from '../layer'

class Dropdown extends Component {
  static defaultProps = {
    align: 'tr-br',
  }

  state = {
    toggled: false,
  }

  toggle = () => {
    const { toggle, onToggle } = this.props
    const { toggled } = this.state

    if (onToggle) {
      onToggle(!toggle)
    } else {
      this.setState({ toggled: !toggled })
    }
  }

  render() {
    const {
      children,
      trigger,
      align,
      toggle,
      ...props
    } = this.props
    const { toggled } = this.state
    const content = []


    if (typeof trigger === 'function') {
      content.push(
        cloneElement(
          trigger({
            active: toggle || toggled,
            onClick: this.toggle,
          }),
          {
            key: 'dropdown-trigger',
          },
        ),
      )
    } else {
      content.push(
        cloneElement(
          trigger,
          {
            key: 'dropdown-trigger',
            active: toggle || toggled,
            onClick: this.toggle,
          },
        ),
      )
    }
    if (toggle || toggled) {
      content.push(
        <Layer
          {...props}
          key='dropdown-menu'
          align={align}
          constraints={[{ to: 'scrollParent', attachment: 'together' }]}
          onOutsideClick={this.toggle}
        >
          {children}
        </Layer>,
      )
    }
    return content
  }
}

export default Dropdown
