// src/app/resume/page.tsx
import { Column, Heading, Button, Flex } from "@/once-ui/components";

export default function Resume() {
  return (
    <Column maxWidth="l" padding="l" className="mx-auto" gap="l">
      <Heading variant="display-strong-xl" align="center">
        Ayush Varma — Resume
      </Heading>

      {/* Download Button */}
      <Flex horizontal="center" gap="m">
        <Button
          href="/pdf/resume.pdf"
          download="Ayush_Varma_Resume.pdf"
          variant="primary"
          label="Download Resume"
        />
      </Flex>

      {/* PDF Viewer */}
      <iframe
        src="/pdf/resume.pdf"
        width="100%"
        height="1000px"
        style={{ border: "1px solid #ccc", marginTop: "2rem" }}
        title="Resume PDF"
      ></iframe>
    </Column>
  );
}
