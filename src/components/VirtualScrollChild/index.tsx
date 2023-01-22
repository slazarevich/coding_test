import React from 'react'
import { useInView } from 'react-intersection-observer'

import { ItemWrapper } from './style'

interface VirtualScrollChildProps {
  children: React.ReactNode
}

/**
 * A wrapper component for children of CountryList and GrouppedCountryList.
 * Computes inline style and handles whether to display props.children.
 */
export const VirtualScrollChild = ({ children }: VirtualScrollChildProps): JSX.Element => {
  const [ref, inView] = useInView()

  return <ItemWrapper ref={ref}>{inView ? children : null}</ItemWrapper>
}
