import React from 'react'
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.colors.black,
    fontWeight: 600,
    textTransform: 'uppercase',
    backgroundColor: theme.colors.transparent,
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  href: string;
}
type Props = {}

function Card({ image, title, category, href }: CardProps) {
  const { classes } = useStyles();
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // check if href is a local route or an external website
    if (href.startsWith("/")) {
      // navigate to local route
      window.location.href = href;
    } else {
      // navigate to external website
      window.open(href, "_blank");
    }
  };
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="md">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Link href={href}>
        <button className='group w-fit px-6 py-3 my-0 text-white mx-auto font-semibold hover:ring-2 ring-white flex items-center uppercase rounded-md bg-gradient-to-r from-red-300 to-red-900'>
          View Project
        </button>
      </Link>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Responsive Website for a construction company',
    category: 'Web site',
    href: 'https://www.google.com',
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon..',
    category: 'Coding',
    href: '',
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon..',
    category: 'Coding',
    href: '',
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon..',
    category: 'Coding',
    href: '',
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon..',
    category: 'Coding',
    href: '',
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon...',
    category: 'Coding',
    href: '',
  },
];

export default function Carousels() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

