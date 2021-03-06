import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../src/components/Box/Box'
import Paragraph from '../../../src/components/Typography/Paragraph/Paragraph'

const MarkdownParagraph = ({small, children}) => (
  <Box below={3}>
    <Paragraph size={small ? 'small' : 'medium'}>{children}</Paragraph>
  </Box>
)

MarkdownParagraph.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

MarkdownParagraph.defaultProps = {
  small: false,
}

export default MarkdownParagraph
