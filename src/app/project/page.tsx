import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { absoluteUrl, ogUrl } from "@/app/utils/url";

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;
  const ogImage = ogUrl(title);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl("/project"),
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Gallery() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: absoluteUrl("/project"),
            image: gallery.images.map((image) => ({
              "@type": "ImageObject",
              url: absoluteUrl(image.src),
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: absoluteUrl(person.avatar),
              },
            },
          }),
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
