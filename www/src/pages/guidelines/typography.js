import React from "react"
import { ThemeProvider } from "emotion-theming"
import MdWarning from "react-icons/lib/md/warning"

import Annotation from "../../components/guidelines/annotation"
import {
  Container,
  Section,
  Columns,
  ContentColumn,
  CopyColumn,
} from "../../components/guidelines/containers"
import {
  Intro,
  PageHeading,
  SectionHeading,
  SectionSubheading,
} from "../../components/guidelines/typography"
import Layout from "../../components/guidelines/layout"
import Badge from "../../components/guidelines/badge"
import Starter from "../../components/guidelines/cards/starter"
import Words from "../../components/guidelines/words"
import Blog from "../../components/guidelines/cards/blog"
import ImagePlaceholder from "../../components/guidelines/placeholder"

import theme from "../../utils/guidelines/theme"
import themeInverted from "../../utils/guidelines/theme-inverted"
import {
  Box,
  Button,
  Flex,
  Link,
  Heading,
  Text,
} from "../../components/guidelines/system"

const MarketingColumn = ({ children, title }) => (
  <Box width={{ lg: 1 / 2 }} px={{ lg: 7 }} py={{ xxs: 4, lg: 0 }}>
    <Heading fontSize={5} mb={3} fontWeight={1}>
      {title}
    </Heading>
    <Text color="grey.70">{children}</Text>
  </Box>
)

const Typeface = ({ children, fontFamily }) => (
  <Text
    color="grey.90"
    fontFamily={fontFamily}
    fontSize={{ xxs: 8, lg: 12 }}
    lineHeight="solid"
    mt={5}
    width="100%"
  >
    {children}
  </Text>
)

const Weight = ({ children, fontFamily, fontWeight }) => (
  <Text
    fontFamily={fontFamily}
    fontSize={13}
    fontWeight={fontWeight}
    lineHeight="solid"
    mb={2}
  >
    {children}
  </Text>
)

const Background = () => (
  <Flex
    alignItems="flex-end"
    flexDirection="column"
    css={{
      position: `absolute`,
      left: 0,
      right: 0,
      top: 0,
      overflow: `hidden`,
    }}
  >
    <Text
      fontFamily="header"
      fontStyle="italic"
      color="grey.20"
      fontSize={6}
      lineHeight="solid"
      width="50%"
      display={{ xxs: `none`, lg: `block` }}
    >
      <Words
        config={{
          tension: 4000,
          friction: 150,
          clamp: true,
        }}
        css={{ userSelect: `none` }}
      >
        Gatsby believed in the green light, the orgastic future that year by
        year recedes before us. It eluded us then, but that's no matter—tomorrow
        we will run faster, stretch out our arms farther… And one fine morning—
        So we beat on, boats against the current, borne back ceaselessly into
        the past.
      </Words>
    </Text>
    <Text
      fontFamily="header"
      color="white"
      fontWeight={2}
      fontSize="24vw"
      lineHeight="solid"
      css={{
        textShadow: `-1px -1px 0 ${theme.colors.grey[`20`]}, 1px -1px 0 ${
          theme.colors.grey[`20`]
        }, -1px 1px 0 ${theme.colors.grey[`20`]}, 1px 1px 0 ${
          theme.colors.grey[`20`]
        }`,
      }}
    >
      <Words css={{ userSelect: `none` }}>Typography</Words>
    </Text>
  </Flex>
)

const Typography = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <Container>
      <div css={{ position: `relative`, zIndex: 1 }}>
        <PageHeading>
          <Annotation type="circle">Typography</Annotation>
        </PageHeading>
        <Intro>
          Typography provides the core structure of a well-designed interface.
          Gatsby’s typography strives to create clear hierarchies, useful
          organizations, and purposeful alignments that guide the user through
          content, product, and experience.
        </Intro>
        <Badge my={3}>
          Work in Progress{` `}
          <MdWarning style={{ fontSize: 16, marginLeft: `0.25rem` }} />
        </Badge>
      </div>
      <Background />
    </Container>
    <Section>
      <SectionHeading>
        <Annotation delay={1000}>Font stack</Annotation>
      </SectionHeading>
      <Columns>
        <CopyColumn sticky={false}>
          <p>
            Gatsby uses the all-time classic Futura for headlines and display
            copy. Long form text such as articles and documentation currently
            use the native font stack, but we are actively looking for a serif
            to increase the reading experience.
          </p>
          <SectionSubheading>The native font stack</SectionSubheading>
          <p>
            The “native font stack” depends on the user’s operating system and
            device; depending on that, we use San Francisco UI, Roboto or Segoe
            UI.
          </p>
          <Text as="p">
            Our monospace font stack also makes use of the default fonts
            available: That’s usually San Francisco Mono, Menlo or Monaco on Mac
            OS X, Consolas on Windows, or Liberation Sans on Linux
            distributions.
          </Text>
          <Text as="p" mb={0}>
            In our (Figma, Sketch, etc.) designs we use Roboto as it’s easily
            available.
          </Text>
        </CopyColumn>
        <ContentColumn css={{ alignSelf: `flex-end`, display: `flex` }}>
          <Flex flexDirection="column">
            <Typeface fontFamily="header">Futura PT</Typeface>
            <Typeface fontFamily="system">Sans-serif</Typeface>
            <Typeface fontFamily="monospace">Monospace</Typeface>
          </Flex>
        </ContentColumn>
      </Columns>
    </Section>
    <Section bg="yellow.40" pr={{ xxs: 0, xs: 0, sm: 0, md: 0, lg: 0 }}>
      <SectionHeading>
        <Annotation color="white">Scale</Annotation>
      </SectionHeading>
      <Columns>
        <CopyColumn pr={{ xxs: 5, xs: 6, sm: 7, lg: 0 }}>
          <p>
            Since our primary use for the design system is interface design, our
            typographic scale is hand-crafted. This way we don’t have to worry
            about decimals in our design tools or when calculating line heights,
            don’t have to worry about subpixel rounding errors, and have total
            control over which sizes exist instead of outsourcing that job to a
            mathematical formula.
          </p>
          <p>
            For long form content like articles, using a modular scale is
            totally fine though. Typography.js makes setting up and using such a
            scale easy.
          </p>
        </CopyColumn>
        <ContentColumn fullWidth>
          {theme.fontSizes.map((size, index) => (
            <div key={`${index}-${size}`}>
              <Text
                // don't scale based on root font size
                fontSize={`${parseFloat(size) * 16}px`}
                color="grey.90"
                css={{
                  overflow: `hidden`,
                  position: `relative`,
                  // textOverflow: 'ellipsis',
                  whiteSpace: `nowrap`,
                }}
              >
                Gatsby believed in the green light, the orgastic future that
                year by year recedes before us. It eluded us then, but that's no
                matter—tomorrow we will run faster, stretch out our arms
                farther… And one fine morning— So we beat on, boats against the
                current, borne back ceaselessly into the past.
              </Text>
              <Box fontSize={0} mb={3} color="blackFade.70">
                <strong>{parseFloat(size) * 16}</strong>&nbsp;&nbsp;&nbsp;{size}
                &nbsp;&nbsp;&nbsp;
                <code
                  css={{
                    background: `transparent`,
                    ":before, :after": { display: `none` },
                  }}
                >
                  fontSizes[{index}]
                </code>
              </Box>
            </div>
          ))}
        </ContentColumn>
      </Columns>
    </Section>
    <Section>
      <h2>
        <Annotation>Sample hierarchy</Annotation> and{` `}
        <Annotation>weights</Annotation>
      </h2>
      <Columns>
        <CopyColumn>
          <p>
            A couple of usage examples lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </CopyColumn>
        <ContentColumn>
          <Box>
            <p>
              While Futura Bold works well at display size, it gets hard to read
              below ~30px. For screens, use it for the page title (once per
              page). Do not use it for "bold" text—that is the job of Futura PT
              Demi.
            </p>
            <Flex justifyContent="flex-end" flexDirection="column" width="100%">
              <Box alignSelf="flex-end">
                <Weight fontFamily="header" fontWeight={2}>
                  Bold
                </Weight>
                <Weight fontFamily="header" fontWeight={1}>
                  Demi
                </Weight>
                <Weight fontFamily="header" fontWeight={0}>
                  Normal
                </Weight>
              </Box>
            </Flex>
          </Box>
          <Box maxWidth="35rem">
            <Text
              as="p"
              fontFamily="header"
              fontWeight={0}
              fontSize={4}
              letterSpacing="tracked"
              css={{
                textTransform: `uppercase`,
              }}
            >
              The Future is Fast
            </Text>
            <Heading
              fontSize={{ xxs: 8, sm: 12, lg: 13 }}
              letterSpacing="tight"
              lineHeight="solid"
              mb={5}
            >
              Create digital experiences on the edge—
              <Annotation type="circle" color="green.30">
                faster
              </Annotation>
            </Heading>
            <Heading as="h2" mb={5} fontSize={6} fontWeight={1}>
              Gatsby provides a modern framework for turning content into
              feature-rich, visually engaging apps and websites.
            </Heading>
            <Text fontSize={{ xxs: 2, md: 3 }} mb={7}>
              <p>
                Over the last few years, the modern Javascript ecosystem has
                created tools that allow developers to build quicker with fewer
                bugs. Gatsby gives you easy access to features like modern
                Javascript syntax, code bundling and hot reloading, without
                having to maintain custom tooling. Build app-like experiences
                faster — with Gatsby.
              </p>
              <p>
                Websites come in a thousand different flavors. Timeframes,
                budgets, interactivity requirements and content systems can vary
                wildly from one project to the next.
              </p>
              <p>
                This variety puts website teams between a rock and a hard place.
                They often have to maintain frontends built in multiple
                development systems, stretching their developers’ skill sets.
                Implementing the same dropdown in five different frameworks can
                be a huge headache. But what’s the alternative — turn down good
                client projects?
              </p>
              <p>
                To add to the difficulty, when your UI development framework is
                coupled to your client’s CMS backend, it doesn’t just cause
                technical problems; it causes people problems. It makes your
                team’s staffing plans dependent on specific projects. It
                hamstrings your ability to respond to changing client
                requirements by shifting resources around.
              </p>
            </Text>
            <Button bg="black">Read more</Button>
          </Box>
        </ContentColumn>
      </Columns>
    </Section>

    <ThemeProvider theme={themeInverted}>
      <Container
        bg="white"
        py={8}
        my={8}
        textAlign="center"
        css={{ WebkitFontSmoothing: `antialiased` }}
      >
        <Text fontSize={1} color="blackFade.60">
          Simple landing page
        </Text>

        <Box maxWidth={1040} mx="auto">
          <PageHeading
            fontSize={{ md: 11 }}
            lineHeight="solid"
            maxWidth="48rem"
            mb={3}
            mx="auto"
          >
            Stop managing content.
            <br /> Start telling your story.
          </PageHeading>
          <Intro color="blackFade.80" maxWidth="40rem" mx="auto" mb={6}>
            Gatsby brings your content to the edge for lightning fast, safe
            website delivery with no CMS overhead.
          </Intro>
          <Button bg="black" mx="auto" mb={3}>
            Start a free trial
          </Button>
          <Text color="blackFade.60" fontSize={1}>
            14 day free trial — no credit card required
          </Text>

          <Box display={{ lg: `flex ` }} mt={9} textAlign="left">
            <MarketingColumn title="Scale to the entire internet">
              Forget complicated deploys with databases and servers and their
              expensive, time-consuming setup costs, maintenance, and scaling
              fears — Gatsby builds your site as “static” files which can be
              deployed easily on various services.
            </MarketingColumn>
            <MarketingColumn title="Bring your own data">
              Gatsby’s rich data plugin ecosystem lets you build sites with the
              data you want — pull data from headless CMSs, SaaS services, APIs,
              databases, your file system, and more.
            </MarketingColumn>
          </Box>
          <Box display={{ lg: `flex ` }} mt={7} textAlign="left">
            <MarketingColumn title="Speed past the competition">
              Gatsby.js builds the fastest possible website. Instead of waiting
              to generate pages when requested, pre-build pages and lift them
              into a global cloud of servers — ready to be delivered instantly
              to your users wherever they are.
            </MarketingColumn>
            <MarketingColumn title="Static Progressive Web Apps">
              Gatsby.js is a static PWA (Progressive Web App) generator. You get
              code and data splitting out-of-the-box. Gatsby loads only the
              critical HTML, CSS, data, and JavaScript so your site loads as
              fast as possible. Once loaded, Gatsby prefetches resources for
              other pages so clicking around the site feels incredibly fast.
            </MarketingColumn>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

    <Container>
      <Box bt={1} py={8} my={8}>
        <Text color="grey.60" fontSize={1} textAlign="center">
          Cards
        </Text>
        <Flex mt={7} flexWrap="wrap" justifyContent="space-around">
          <Starter mx={6} />
          <Blog mx={6} />
        </Flex>
      </Box>
    </Container>

    <Container>
      <Text color="grey.60" fontSize={1} textAlign="center">
        Long-form text (with sidebar on large screens)
      </Text>
      <Flex py={4} my={4}>
        <Box mt={8} mr="auto" pr={7} display={{ xxs: `none`, md: `block` }}>
          <Box
            css={{
              borderRightWidth: 1,
              borderRightStyle: `solid`,
              borderColor: `#F5F5F5`,
            }}
            pr={7}
          >
            <Heading fontWeight="1" fontSize={3} mb={5}>
              Documentation
            </Heading>
            {[`Introduction`, `Quickstart`, `Recipes`].map((item, index) => (
              <Text
                key={`sidebar-item-${index}`}
                as="li"
                p={0}
                fontSize={1}
                my={3}
                color="grey.50"
                css={{ listStyle: `none` }}
              >
                {item}
              </Text>
            ))}
            <Heading fontWeight="1" fontSize={3} mt={8} mb={5}>
              Guides
            </Heading>
            {[
              `Preparing your environment`,
              `Deploying & hosting`,
              `Custom configuration`,
              `Images and files`,
              `Sourcing content and data`,
              `Querying your data with GraphQl`,
              `Plugins`,
              `Starters`,
              `Styling your site`,
              `Adding testing`,
              `Debugging Gatsby`,
              `Adding website functionality`,
              `Improving performance`,
              `Localizing your site`,
            ].map((item, index) => (
              <Text
                key={`typographic-scale-${index}`}
                as="li"
                fontSize={1}
                my={3}
                color="grey.50"
                css={{ listStyle: `none` }}
              >
                {item}
              </Text>
            ))}
          </Box>
        </Box>

        <Box maxWidth="48rem" mx="auto" css={{ minWidth: `0` }}>
          <PageHeading
            fontSize={{ md: 11 }}
            lineHeight="solid"
            maxWidth="40rem"
            mb={7}
          >
            How we're migrating a government open data site to Gatsby
          </PageHeading>

          <Text
            fontSize={{ xxs: 2, md: 3, lg: 4 }}
            color="black.50"
            fontWeight="400"
            // fontFamily="serif"
          >
            <ImagePlaceholder mb={4} />
            <p>
              React Hooks are <em>cool</em>. Besides simplifying your code and
              removing the need for a lot of boilerplate associated with classes
              in JavaScript (looking at you, <code>this</code>), they enable
              some serious shareability. They also make it possible to use state
              in functional components.
            </p>
            <p>
              You can probably tell that we’ve been super excited about{` `}
              <Link href="https://reactjs.org/docs/hooks-intro.html">
                React Hooks
              </Link>
              . So when they finally landed in React 16.8, we figured it was
              time to give our very own{` `}
              <Annotation>
                <code>StaticQuery</code>
              </Annotation>
              {` `}
              component the hook treatment!
            </p>
            <Heading as="h2" fontSize={{ xxs: 3, md: 6, lg: 7 }} mt={6} mb={4}>
              Baking PWAs, React and GraphQL into a web framework
            </Heading>
            <p>
              One of Gatsby’s goals is to provider users all the benefits of
              modern web out of the box, from implementing a Progressive Web App
              (PWA) checklist of features, React, accessibility by default,
              CSS-in-JS support, headless CMSs, and GraphQL.
            </p>
            <p>
              <strong>
                No more Render Props necessary to use a Static Query
              </strong>
            </p>
            <p>
              This simplifies accessing data in your components and also keeps
              your component tree shallow.
            </p>
            <p>
              Let’s quickly check out a basic example. Here’s a typical Header
              component, first written using{` `}
              <Annotation>
                <code>StaticQuery</code>
              </Annotation>
              {` `}
              and then{` `}
              <Annotation color="purple.20">
                <code>useStaticQuery</code>
              </Annotation>
              .
            </p>
            <Box bg="grey.10" p={5} my={6}>
              💡 For a great introduction to using the command line, check out
              {` `}
              <a href="https://www.codecademy.com/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command">
                Codecademy’s Command Line tutorial
              </a>
              {` `}
              for Mac and Linux users, and this tutorial for Windows users. Even
              if you are a Windows user, the first page of the Codecademy
              tutorial is a valuable read.
            </Box>
            {/* {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <Text
                key={`logo-footnotes-${index}`}
                mb={3}
                width="100%"
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            ))} */}
          </Text>
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default Typography
