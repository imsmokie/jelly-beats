import React from 'react'
import SideBar from './view'
import { connect } from 'unistore/react'

export default connect(
  'navigation, favorites',
  { doNavigate: 'doNavigate' }
)(SideBar)
