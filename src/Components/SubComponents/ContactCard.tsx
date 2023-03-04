import * as React from 'react';
import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
} from '@mantine/core';
import { useRef } from 'react';
import { ContactIconsList } from './ContactIcons';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'light' ?  theme.colors.gray[0] : theme.colors.dark[7] ,
            borderRadius: theme.radius.lg,
            padding: 4,
            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
                }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.xl * 2,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: -12,
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg - 2,
            backgroundImage: `url(${'/images/bg.svg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid transparent',
            padding: theme.spacing.xl,
            flex: '0 0 280px',

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: theme.spacing.xl * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    };
});


export default function ContactCard() {
    const { classes } = useStyles();
    const form = useRef(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current !== null) {
            emailjs
                .sendForm(
                    "service_zakxska",
                    "template_zo6tihr",
                    form.current,
                    "uBaZDk7Zt04HkBNTM"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        toast.success("Email sent successfully");
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };
    return (
        <div>
            <ToastContainer />
            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts}>
                        <Text size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
                            Contact information
                        </Text>

                        <ContactIconsList variant="white" />
                    </div>

                    <form className={classes.form} ref={form} onSubmit={(e) => sendEmail(e)}>
                        <Text size="lg" weight={700} className={classes.title}>
                            Get in touch
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                <TextInput type="text" name="from_name" label="Your name" placeholder="Your name" required />
                                <TextInput type="email" name="email_id" label="Your email" placeholder="your@email.com" required />
                            </SimpleGrid>

                            <TextInput type="text" name="subject" mt="md" label="Subject" placeholder="Subject" required />
 
                            <Textarea
                                mt="md"
                                label="Your message"
                                name="message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                                required
                            />

                            <Group position="right" mt="md">
                                <a>
                                    <button className='group w-fit px-6 py-3 my-0 text-white mx-auto font-semibold hover:ring-2 ring-red-900 flex items-center uppercase rounded-md bg-gradient-to-r from-red-300 to-red-900' type="submit" value="Send" >
                                        Send message
                                    </button>
                                </a>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </div>
    );
}