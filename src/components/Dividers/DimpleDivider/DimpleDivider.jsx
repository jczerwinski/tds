import React from 'react'

import safeRest from '../../../utils/safeRest'

import styles from './DimpleDivider.modules.scss'

/**
 * Separate modules.
 */
const DimpleDivider = ({ ...rest }) => <hr {...safeRest(rest)} className={styles.dimple} />

export default DimpleDivider
