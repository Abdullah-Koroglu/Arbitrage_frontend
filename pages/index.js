import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import List from "../components/list";
import { Heading, Link, Text, Code, Container, Box, Flex, Button, Skeleton } from "@chakra-ui/react";


export default function Home({data}) {
  const router = useRouter()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   async function func() {
  //     var data1 = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     var parsed = await data1.json()
  //     await setData(parsed)
  //     console.log(data);
  //   }
  //   func()
  // }, []);
  return (
    <div>
      <List data={data} page={router.query.page - 1}/>
    </div>
  )
}



Home.getInitialProps = async()=>{
  var response = await fetch('https://jsonplaceholder.typicode.com/todos')
  var data = await response.json()
  return {data}
}