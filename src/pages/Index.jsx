import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const articles = [
  {
    title: "New Clinic Opens in Downtown",
    description: "We are excited to announce the opening of our new state-of-the-art clinic in the heart of downtown. The new facility offers expanded services and improved patient experience.",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwY2xpbmljJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzEwNDEzMDY1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Dr. Smith Recognized for Excellence in Patient Care",
    description: "Congratulations to Dr. Jane Smith for receiving the prestigious Patient Care Excellence Award. Her dedication to providing compassionate and high-quality care is an inspiration to us all.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nfGVufDB8fHx8MTcxMDQxMzA2NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Clinic Introduces New Telemedicine Services",
    description: "We are now offering telemedicine services for the convenience of our patients. Consult with our doctors from the comfort of your own home using our secure video conferencing platform.",
    image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBvbiUyMHZpZGVvJTIwY2FsbCUyMHdpdGglMjBwYXRpZW50fGVufDB8fHx8MTcxMDQxMzA2NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="blue.500" color="white" py={16}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Healthwise Clinic News
          </Heading>
          <Text fontSize="xl">Stay up-to-date with the latest news and updates from Healthwise Clinic.</Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {articles.map((article, index) => (
            <Box key={index} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={article.image} alt={article.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {article.title}
                </Heading>
                <Text>{article.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
            <Text fontSize="lg" fontWeight="bold">
              Follow Us:
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="#">
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="#">
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link href="#">
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
