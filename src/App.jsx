import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

import ColorModeToggle from './components/colorModeToggle'
import { KeyInput } from './components/keyInput'
import { Playfair } from './utils/playfair'


const cipher = new Playfair()

function App() {
  const [plain_text_value, setPlainTextValue] = useState('')
  const [cipher_text_value, setCipherTextValue] = useState('')
  const [keyValue, setKeyValue] = useState('')

  const handlePlainTextInputChange = (
    e
  ) => {
    setPlainTextValue(e.target.value)
  }
  const handleCipherTextInputChange = (
    e
  ) => {
    setCipherTextValue(e.target.value)
  }

  const handleKeyChange = (e) => {
    setKeyValue(e.target.value)
		cipher.setKey(e.target.value)
  }

  const handleEncrption = () => {
    const cipher_text = cipher.process({input: plain_text_value})
    setCipherTextValue(cipher_text)
    setPlainTextValue('')
  }
  const handleDecryption = () => {
    const plain_text = cipher.process({input: cipher_text_value, decrypt: true})
    setPlainTextValue(plain_text)
    setCipherTextValue('')
  }

  return (
    <Container pt={'6'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Heading as={'h1'} size={'lg'}>
          Playfair Cipher
        </Heading>
        <ColorModeToggle />
      </Flex>
      <VStack mt={'10'} spacing={'14'}>
        <FormControl width={'full'} display={'flex'} flexDir={'column'}>
          <FormLabel>Plain text</FormLabel>
          <Textarea
            resize={'vertical'}
            variant={'filled'}
            placeholder={`e.g "winter is coming"`}
            _placeholder={{
              opacity: 0.6,
              fontStyle: 'italic',
            }}
            value={plain_text_value}
            onChange={handlePlainTextInputChange}
          />
          <Button
            isDisabled={!plain_text_value.length || !keyValue.length}
            alignSelf={'flex-end'}
            mt={'4'}
            variant={'outline'}
            type="submit"
            colorScheme="blue"
            size={'sm'}
            onClick={handleEncrption}
          >
            encrypt
          </Button>
        </FormControl>
        <FormControl width={'full'}>
          <FormLabel>Key</FormLabel>
          <KeyInput onKeyChange={handleKeyChange} keyValue={keyValue} />
        </FormControl>
        <FormControl width={'full'} display={'flex'} flexDir={'column'}>
          <FormLabel>Cipher text</FormLabel>
          <Textarea
            value={cipher_text_value}
            onChange={handleCipherTextInputChange}
            resize={'vertical'}
            variant={'filled'}
            placeholder={`e.g "sd_srhgg_sdqewsd_s"`}
            _placeholder={{
              opacity: 0.6,
              fontStyle: 'italic',
            }}
            isDisabled
            _disabled={{
              opacity: 1,
              cursor: 'not-allowed',
            }}
          />
          <Button
            isDisabled={!cipher_text_value.length || !keyValue.length}
            alignSelf={'flex-end'}
            mt={'4'}
            variant={'outline'}
            type="submit"
            colorScheme="blue"
            size={'sm'}
            onClick={handleDecryption}
          >
            decrypt
          </Button>
        </FormControl>
      </VStack>
    </Container>
  )
}

export default App
