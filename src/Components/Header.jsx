import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import {tokens} from '../Theme'

//:where(.css-dev-only-do-not-override-gzal6t)

const Header=({title,subtitle})=> {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
  return (
    <Box backgroundColor={`${theme.palette.mode==='dark'?"#141b2d":"#fcfcfc"}`}>
      <Typography variant="h2" color={colors.gray[100]} fontWeight="bold">{title}</Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
  )
}

export default Header
