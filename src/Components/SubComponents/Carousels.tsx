import React from 'react'
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import ComingSoon from '../ComingSoon';
import { Navigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#0f0f0f',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 1)',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    textShadow: '0 0 10px rgba(0, 0, 0, 5)',
    color: theme.colors.gray[0],
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    fontWeight: 600,
    textShadow: '0 0 10px rgba(0, 0, 0, 5)',
    textTransform: 'uppercase',
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
    if (href.startsWith("#")) {
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
      <a href={href} onClick={navigate}>
        <button className='group w-fit px-6 py-3 my-0  text-white content-center font-semibold hover:ring-2 ring-white flex uppercase rounded-md bg-gradient-to-r from-red-300 to-red-900'>
          View Project
        </button>
      </a>
    </Paper>
  );
}

const data = [
  {
    image:
      'images/amizaweb1.png',
    title: 'Responsive Website for a construction company',
    category: 'Web Site',
    href: 'https://github.com/Youssef-Bounouacha/Construction-Website-Project',
  },
  {
    image:
      'images/flutter_app1.png',
    title: 'Task management mobile app',
    category: 'Mobile App',
    href: 'https://github.com/Youssef-Bounouacha/To_Do_List',
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon..',
    category: 'Coding',
    href: `url(${'/components/ComingSoon'})`,
  },
  {
    image:
      'images/man-developing-website-on-desk.png',
    title: 'Coming Soon..',
    category: 'Coding',
    href: `url(${'/components/ComingSoon'})`,
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

