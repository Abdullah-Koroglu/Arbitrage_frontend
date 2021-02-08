import Card from "../components/card";
import { Heading, Link, Text, Code, Container, Box, Flex, Button, Skeleton } from "@chakra-ui/react";


export default function List({data , page}) {
  page = !  isNaN(page) ?  page : 0
  return (
    <Flex flexDirection='column' justify='left' >
        {data !== [] ?
          data.slice((page )* 20,(page + 1)* 20 ).map(i => (
            <Card HbName={i.title}  AmzName={i.title}  persantage={i.id}  HbPrice={i.id}  AmzPrice={i.id} key={i.id}/>
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
