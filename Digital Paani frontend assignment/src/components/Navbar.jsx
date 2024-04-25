/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Input,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar({ setCity }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value;
    setCity(cityInput);
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
      <Flex alignItems="center" justifyContent="space-between" flexDir={{ base: 'column', md: 'row' }}>
        <Flex alignItems="center">
          <Heading size="xl">Weather App</Heading>
        </Flex>
        <Flex mt={{ base: 4, md: 0 }} alignItems="center">
          <Button onClick={toggleColorMode} mr={2}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <form onSubmit={handleSubmit}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
              <Input type="text" name="city" placeholder="Enter city" size="sm" />
              <Button type="submit" size="sm">
                Search
              </Button>
            </Stack>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
}
