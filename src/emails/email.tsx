import * as React from "react"
import {
  Body,
  Button,
  Container,
  Heading,
  Hr,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components"

interface EmailProps {
  mainImage?: string
  topHeadline?: string
  topStory?: string
  promoHeadline: string
  promoContent: string
  ctaLink: string
  ctaText: string
  endMessage?: string
  unSubLink: string
}

const emailContent: EmailProps = {
  mainImage: "https://www.edumentorme.com/emm-og.jpg",
  topHeadline: "test",
  topStory: "test...",
  promoHeadline: "promo test",
  promoContent: "promo content test",
  ctaLink: "https://www.edumentorme.com/study_timer",
  ctaText: "Join us now",
  endMessage:
    "You may send this email to others and get rewarded upwards of $3 per valid email referral.",
  unSubLink: "https://www.edumentorme.com/contact_us",
}

interface SocialLink {
  href: string
  src: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/profile.php?id=100093014401203",
    src: "https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico",
  },
  {
    href: "https://x.com/craciun_07",
    src: "https://abs.twimg.com/favicons/twitter.3.ico",
  },
  {
    href: "https://www.instagram.com/craciun_007/",
    src: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",
  },
  {
    href: "https://www.linkedin.com/in/dcraciun07/",
    src: "https://static.licdn.com/sc/h/8s162nmbcnfkg7a0k8nq9wwqo",
  },
  {
    href: "https://www.tiktok.com/@craciun_07",
    src: "https://www.tiktok.com/favicon.ico",
  },
  {
    href: "https://www.youtube.com/channel/UCb4hFKRvnQUlWHysG_OnU6A",
    src: "https://www.youtube.com/s/desktop/510f0670/img/favicon_32x32.png",
  },
]

export default function Email({
  topStory,
  ctaLink,
  ctaText,
  promoContent,
  promoHeadline,
  unSubLink,
  endMessage,
  mainImage,
  topHeadline,
}: EmailProps) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="mx-auto my-12 bg-white font-sans">
          <Container className="rounded-lg p-8 shadow-lg">
            <Hr className="h-3 rounded-sm bg-orange-500" />

            <Container>
              <Heading className="text-center">
                🎉Your weekly newsletter🎉
              </Heading>
              <Img
                src={mainImage}
                alt="main image"
                width="600"
                height="315"
                className="rounded-lg"
              />
            </Container>

            <Container className="mb-4">
              <Heading className="pt-4 text-2xl">{topHeadline}</Heading>
              <Text className="font-serif text-lg">{topStory}</Text>
            </Container>

            <Hr />

            <Container className="mb-6 pt-6 text-center">
              <Heading className="text-3xl">{promoHeadline}</Heading>
              <Text className="font-serif text-lg">{promoContent}</Text>
              <Button
                href={ctaLink}
                className="rounded bg-orange-400 px-12  py-3 text-center text-lg font-semibold text-white no-underline"
              >
                {ctaText}
              </Button>
            </Container>

            <Hr className="h-3 rounded-sm bg-orange-500" />

            <Container className="mx-auto pt-3 text-center">
              {socialLinks.map((link) => (
                <Button key={link.href} href={link.href} className="px-3">
                  <Img
                    src={link.src}
                    alt="."
                    className="rounded-lg"
                    width="24"
                    height="24"
                  />
                </Button>
              ))}

              <Container className="pt-4 text-xs">
                <p className="text-gray-700">{endMessage}</p>
                <Button href={unSubLink} className="text-blue-500">
                  Unsubscribe
                </Button>
              </Container>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

// ? Maybe need this later, this is to add additional content
// ? to the email.
{
  /* <Row>
              <Column className="w-1/2">
                <Img
                  src="https://edumentorme.com/emm-og.jpg"
                  alt="EMM Logo"
                  width="250"
                  height="150"
                  className="rounded-lg inline-block"
                />
              </Column>
              <Column className="align-top">
                <Heading className="text-xl">Sub headline</Heading>
                <Text className="text-sm font-medium text-gray-700">
                  Sub story...
                </Text>
              </Column>
            </Row>
            <Row>
              <Column className="w-1/2">
                <Img
                  src="https://edumentorme.com/emm-og.jpg"
                  alt="EMM Logo"
                  width="250"
                  height="150"
                  className="rounded-lg inline-block"
                />
              </Column>
              <Column className="align-top">
                <Heading className="text-xl">Sub headline</Heading>
                <Text className="text-sm font-medium text-gray-700">
                  Sub story...
                </Text>
              </Column>
</Row> */
}
