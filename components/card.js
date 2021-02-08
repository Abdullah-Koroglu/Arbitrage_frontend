import { useEffect, useState } from "react";
import { Heading, Link, Text, Code, Box, VStack, StackDivider, Flex, Spacer, Button, Divider } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function card({HbName , AmzName , persantage , HbPrice , AmzPrice}) {
  return (
    <Box p='3' m='3' borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden">
      <Flex px='5' m='3' >
        <Flex >
          <Text>
            %{persantage}
        </Text>
          <Flex flexDir='column' mx='3' >
            <Link >
              <Text isTruncated w='xl'>
                  {HbName}
              </Text>
            </Link>
            <Link isTruncated w='xl'>
                {AmzName}
            </Link>
          </Flex>
        </Flex>
        <Flex>
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} style={{ marginLeft: 0, width: 20 }} onClick={() => { window.open('https://chakra-ui.com/docs/features/style-props'), window.open('https://chakra-ui.com/docs/navigation/link') }} />
        </Flex>
        <Spacer />
        <Flex w='40%'>
          <Text align='center'>
            HB Price : {HbPrice}
        </Text>
          <Spacer />
          <Divider orientation="vertical" color='gray.500' />
          <Spacer />
          <Text>
            Amz Price : {AmzPrice}
        </Text>
          <Spacer />
          <Divider orientation="vertical" color='gray.500' />
          <Spacer />
          <Text>
            Helium
        </Text>
          <Spacer />
          <Divider orientation="vertical" color='gray.500' />
          <Spacer />          <Text>
            naber2
        </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
