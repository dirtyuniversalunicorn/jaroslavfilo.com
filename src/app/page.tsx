import { AbsoluteCenter, Link, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <AbsoluteCenter>
      <VStack>
        <Text>Please visit this API endpoint:</Text>
        <Link href="/api/beverages">Get beverages</Link>
      </VStack>
    </AbsoluteCenter>
  );
}
