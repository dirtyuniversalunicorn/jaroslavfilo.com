import { Flex } from "@chakra-ui/react";
import { AboutMe } from "@/shared/components/sections/about-me/about-me";
import { TechStack } from "@/shared/components/sections/tech-stack/tech-stack";
import { Band } from "@/shared/components/ui/band";
import { BottomText } from "@/shared/components/ui/bottom-text";
import { Section } from "@/shared/components/ui/section";

export default function Home() {
  return (
    <>
      <Flex
        as="section"
        id="landing_page_section"
        backgroundImage="url('/landing_page_image.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        minH="100svh"
      >
        <Section
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minH="100svh"
          py={{ base: "8", md: "10" }}
        >
          <Band />
          <BottomText text="jaroslav filo" />
        </Section>
      </Flex>
      <AboutMe />
      <TechStack />
    </>
  );
}
