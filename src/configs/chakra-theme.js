import chakraTheme from '@chakra-ui/theme'
import { extendBaseTheme } from '@chakra-ui/react'

const { Button, Input, Container, Heading, FormLabel, Textarea } =
  chakraTheme.components

export const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Container,
    Heading,
    FormLabel,
    Textarea,
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
})
