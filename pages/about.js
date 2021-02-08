import Head from 'next/head'
import { Heading, Link, Text, Code , Box } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Heading>
                naber
            </Heading>
            <Box m={2} bg='brown'>Tomato</Box>
            <Box maxW="960px" mx="auto" bg='khaki' >Tomato</Box>

        </div>

    )
}
