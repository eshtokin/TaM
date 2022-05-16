import React from 'react'
import Button from '@mui/material/Button'

type ButtonProps = {
  title: string
}
const MButton: React.FC<ButtonProps> = ({ title }) => {
  return (
    <Button variant="contained" color={'primary'}>
      {title}
    </Button>
  )
}

export default MButton
