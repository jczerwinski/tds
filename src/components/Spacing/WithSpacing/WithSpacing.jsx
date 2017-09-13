import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../safeRest'

import styles from './WithSpacing.modules.scss'

const WithSpacing = ({ amount, children, ...rest }) => (
  <div {...safeRest(rest)} className={styles[`marginBottom-${amount}`]}>
    {children}
  </div>
)
WithSpacing.propTypes = {
  amount: PropTypes.oneOf([2, 3]).isRequired,
  children: PropTypes.node.isRequired
}

export default WithSpacing