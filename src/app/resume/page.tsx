// src/app/resume/page.tsx
import { Column, Heading, Button, Flex, Text } from "@/once-ui/components";
import { person } from "@/app/resources/content";
import { absoluteUrl, ogUrl } from "@/app/utils/url";

const title = `Resume — ${person.name}`;
const description = `Download or read the resume of ${person.name}, ${person.role}.`;

export async function generateMetadata() {
  const ogImage = ogUrl(title);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl("/resume"),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl("/resume"),
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Resume() {
  return (
    <Column maxWidth="l" padding="l" className="mx-auto" gap="l" horizontal="center">
      <Heading variant="display-strong-xl" align="center">
        Resume
      </Heading>

      <Text variant="body-default-l" onBackground="neutral-weak" align="center">
        {person.role}
      </Text>

      <Flex horizontal="center" gap="m" wrap>
        <Button
          href="/pdf/resume.pdf"
          download="Ayush_Varma_Resume.pdf"
          variant="primary"
          label="Download PDF"
        />
        <Button
          href="/pdf/resume.pdf"
          target="_blank"
          variant="secondary"
          label="Open in new tab"
        />
      </Flex>

      {/*
        The inline PDF viewer is hidden on small screens: mobile browsers do not
        render a PDF inside an iframe, they render a blank grey box. Phone users
        get the buttons above instead.
      */}
      <Flex fillWidth hide="s">
        <iframe
          src="/pdf/resume.pdf"
          width="100%"
          height="1000px"
          style={{
            border: "1px solid var(--neutral-alpha-medium)",
            borderRadius: "var(--radius-m)",
            marginTop: "1rem",
          }}
          title={`${person.name} resume, PDF`}
        />
      </Flex>
    </Column>
  );
}
