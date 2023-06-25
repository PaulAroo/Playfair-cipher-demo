import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export function KeyInput({keyValue, onKeyChange}) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup w={'fit-content'}>
      <Input
        value={keyValue}
        type={show ? 'text' : 'password'}
        placeholder={`unique letters e.g "hack"`}
        _placeholder={{
          opacity: 0.6,
          fontStyle: 'italic',
        }}
        onChange={onKeyChange}
      />
      <InputRightElement>
        <Button onClick={handleClick} variant={'ghost'}>
          {show ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
