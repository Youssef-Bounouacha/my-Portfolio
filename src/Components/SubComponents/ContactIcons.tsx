import React, { FC } from "react";
import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons";



type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
    variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
    title: {
        color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === 'gradient' ? theme.black : theme.white,
    },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    // icon: FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
    variant?: ContactIconVariant;
}

function ContactIcon({
    // icon: Icon,
    title,
    description,
    variant = 'gradient',
    className,
    ...others
}: ContactIconProps) {
    const { classes, cx } = useStyles({ variant });
    return (
        <div className="flex md:mx-0 mx-auto text-white">
            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}
interface ContactIconsListProps {
    data?: ContactIconProps[];
    variant?: ContactIconVariant;
}

const MOCKDATA: ContactIconProps[] = [
    { title: "Email", description: "bnyoussef00@gmail.com", },
    { title: "Phone", description: "+212 610 353 236", },
    { title: "Address", description: "Tangier, Morocco", },
    { title: "Working hours", description: "8 a.m. – 10 p.m.", },
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
    const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
    return <Stack>{items}</Stack>;
}
export default function ContactIcons() {
    return (
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
            <Box
                sx={(theme) => ({
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    backgroundColor: theme.white,
                })}
            >
                <ContactIconsList />
            </Box>

            <Box
                sx={(theme) => ({
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][4]
                        } 100%)`,
                })}
            >
                <ContactIconsList variant="white" />
            </Box>
        </SimpleGrid>
    );
}