import React from 'react'

import { version } from '../../../package.json'
import logo from './Logo.svg'

import Box from '../../../src/components/Box/Box'
import Text from '../../../src/components/Typography/Text/Text'
import ChevronLink from '../../../src/components/Link/ChevronLink/ChevronLink'

const Logo = () => (
  <div>
    <a href="#styleguidist-top" title="TELUS Design System">
      <img src={logo} alt="TELUS Logo" />
    </a>

    <Text size="small">v{version}</Text>

    <Box horizontal={1} vertical={2}>
      <ChevronLink
        href="https://github.com/telusdigital/tds/tree/master/guide"
        variant="secondary"
        direction="right"
      >
        TDS guidelines
      </ChevronLink>
    </Box>
  </div>
)

export default Logo
