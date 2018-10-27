import * as React from 'react'
import ReactDOM from 'react-dom'

import { PropertyControls, ControlType } from 'framer'
import styled, { css } from 'styled-components'
import { TweenMax, Elastic, Power1, Power3, Power4 } from 'gsap'

import { log } from 'ruucm-util'

// Style

const Wrap = styled.div`
  background: greenyellow;
  ${props =>
    props.nochild &&
    css`
      background: red;
      color: white;
    `};
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `};

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `};
`

// Define type of property
interface Props {
  playing: boolean
}

export class AnimateFrame extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    playing: false,
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    playing: { type: ControlType.Boolean, title: 'Playing' },
  }
  constructor(props) {
    super(props)
    this.childId = 'my-child-' + Date.now()
  }
  componentWillReceiveProps(nextProps) {
    const { playing } = this.props

    if (nextProps.playing !== playing) {
      log('play it!')

      // gsap animation
      var myChild = document.getElementById(this.childId)
      log('myChild', myChild)
      TweenMax.to(myChild, 1, { scale: 2 })
    }
  }

  render() {
    // make child with id
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        id: this.childId,
      })
    )

    return children.length ? (
      <Wrap width={children[0].props.width} height={children[0].props.height}>
        {childrenWithProps}
      </Wrap>
    ) : (
      <Wrap nochild>please add a child!</Wrap>
    )
  }
}
