import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import styled, { css } from 'styled-components'

const Wrap = styled.div`
  background: greenyellow;
  ${props =>
    props.nochild &&
    css`
      background: rebeccapurple;
      color: white;
    `};
`

// Define type of property
interface Props {
  text: string
}

export class Crop extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: 'Hello World!',
    children: null,
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: 'Text' },
  }

  render() {
    // make child with id
    const { children } = this.props
    const ChildrenWithProps = () => {
      return React.Children.map(children, child =>
        React.cloneElement(child, {})
      )
    }
    return children.length ? (
      <ChildrenWithProps />
    ) : (
      <Wrap nochild>please add a child!</Wrap>
    )
  }
}
