import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'
import joinClassNames from '../../../utils/joinClassNames'

import FlexBox from '../../Flexbox/Flexbox'
import Responsive from '../../Responsive/Responsive'

import styles from './BaseButton.modules.scss'

/**
 * A common base for Button and ButtonLink.
 */
const BaseButton = ({ element, variant, dangerouslyAddClassName, children, ...rest }) => {
  return (
    <Responsive minWidth="md">
      {desktop =>
        React.createElement(
          element,
          {
            ...safeRest(rest),
            className: joinClassNames(
              desktop ? styles.inline : styles.fullWidth,
              styles[variant],
              dangerouslyAddClassName
            ),
          },
          <FlexBox direction="row" dangerouslyAddClassName={styles.centered}>
            {children}
          </FlexBox>
        )}
    </Responsive>
  )
}

BaseButton.propTypes = {
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']).isRequired,
  dangerouslyAddClassName: PropTypes.string,
  children: PropTypes.string.isRequired,
}

BaseButton.defaultProps = {
  dangerouslyAddClassName: undefined,
}

export default BaseButton
