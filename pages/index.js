import React from 'react'
import Layout from '../components/Layout'
import Box from '../components/Box'
import Container from '../components/Container'
import NoSSR from '../components/NoSSR'
import Loader from '../components/Loader'
import { Heading, Text } from '../components/Typography'
import { List, ListItem } from '../components/List'

const conversations = [...Array(20).keys()]

export default function HomePage() {
  return (
    <Layout>
      <Container pt={8}>
        <Heading variant="h1" mb={6}>
          Messages
        </Heading>
        <Box minHeight={40} justifyContent="center" alignItems="center">
          <NoSSR fallback={<Loader />}>
            <List>
              {conversations.map(conversation => (
                <ListItem key={conversation}>
                  <Box width={12} height={12} bg="gray" mr={4} flexShrink={0} />
                  <div>
                    <Text mb={0}>
                      <strong>Steve Doe</strong>
                    </Text>
                    <Text mb={0}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa, neque.
                    </Text>
                  </div>
                </ListItem>
              ))}
            </List>
          </NoSSR>
        </Box>
      </Container>
    </Layout>
  )
}
