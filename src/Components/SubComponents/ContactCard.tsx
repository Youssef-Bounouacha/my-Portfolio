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



const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
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
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
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
            backgroundColor: theme.colors.red[7],
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
    const [from_name, setName] = React.useState('');
    const [email_id, setEmail] = React.useState('');
    const [Subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'from_name') {
            setName(value);
        } else if (name === 'email_id') {
            setEmail(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setIsError(false);

        emailjs.sendForm('service_e31lare', 'service_e31lare', event.target, 'n2Vx0_-_xZTdNYEVp')
            .then((result) => {
                setIsLoading(false);
                setSuccessMessage('Your message was sent successfully');
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.error(error);
            });
    };

    return (
        <Paper shadow="md" radius="lg">
            <div className="flex flex-col md:flex-row bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#222121] shadow-md shadow-gray-800 dark:shadow-gray-500 rounded-xl p-4 xs:flex-col">
                <div className={classes.contacts} >
                    <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/bg.svg')]">
                        <Text size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
                            Contact information
                        </Text>

                        <ContactIconsList variant="white" />
                    </div>
                </div>

                <form className="form box-border flex-1 px-10 md:px-4 py-8 md:pl-4 border-l-0 
                     text-black dark:text-white md:py-4" onSubmit={(event) => event.preventDefault()}>
                    <Text size="lg" weight={700} className={classes.title}>
                        Get in touch
                    </Text>

                    <div className='md:mt--12'  >
                        <form onSubmit={handleSubmit}>
                            {isError && <p>There was an error sending your message. Please try again later.</p>}
                            {successMessage && <p>{successMessage}</p>}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                                <div className="block text-sm font-medium text-black dark:text-white mb-1">
                                    <div className='grid grid-cols-2  '>
                                        <label htmlFor="name" className="block font-bold mb-3 mr-5">
                                            Your name <span className='text-red-600'>*</span>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Your name"
                                                required
                                                name="from_name"
                                                value={from_name}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                                onChange={handleChange}
                                            />
                                        </label>

                                        <label htmlFor="email" className="block font-bold mb-3">
                                            Your email <span className='text-red-600'>*</span>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Your email"
                                                required
                                                name="email_id"
                                                value={email_id}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>

                                    <label htmlFor="subject" className="block font-bold mb-3">
                                        Subject <span className='text-red-600'>*</span>
                                        <input
                                            id="subject"
                                            type="text"
                                            placeholder="Subject"
                                            required
                                            name="subject"
                                            value={Subject}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={handleChange}
                                        />
                                    </label>

                                    <label htmlFor="message" className="block font-bold mb-2">
                                        Your message <span className='text-red-600'>*</span>
                                        <textarea
                                            id="message"
                                            placeholder="Please include all relevant information"
                                            required
                                            name="message"
                                            value={message}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-none overflow-y-auto"
                                            onChange={handleChange}
                                        />
                                    </label>

                                </div>
                            </div>

                            <Group position="right" mt="md">
                                <a>
                                    <button className='group w-fit px-6 py-3 my-0 text-white mx-auto font-semibold hover:ring-2 ring-red-900 flex items-center uppercase rounded-md bg-gradient-to-r from-red-300 to-red-900' type="submit">
                                        Send message
                                    </button>
                                </a>
                            </Group>
                        </form>
                    </div>
                </form>
            </div>
        </Paper>
    );
}