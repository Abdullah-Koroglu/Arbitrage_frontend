import Card from "../components/card";
import { Heading, Link, Text, Code, Container, Box, Flex, Button, Skeleton } from "@chakra-ui/react";


export default function List({data}) {
  return (
    <Flex flexDirection='column' justify='left' >
        {data.length !== 0 ?
          data.map(i => (
            <Card HbName={i.title}  AmzName={i.title}  persantage={i.id}  HbPrice={i.id}  AmzPrice={i.id} />
          )) : <SkeletonBucket />
        }
      </Flex>
  )
}

const SkeletonBucket = () => {
    return (
      <Box>
        <Skeleton p='3' m='3'borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden" >
              <div>contents wrapped</div>
              <div>won't be visible</div>
              <div>won't be visible</div>
            </Skeleton>
            
            <Skeleton p='3' m='3'borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden" >
              <div>contents wrapped</div>
              <div>won't be visible</div>
              <div>won't be visible</div>
            </Skeleton>
  
            <Skeleton p='3' m='3'borderWidth="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden" >
              <div>contents wrapped</div>
              <div>won't be visible</div>
              <div>won't be visible</div>
            </Skeleton>
      </Box>
    )
  }
