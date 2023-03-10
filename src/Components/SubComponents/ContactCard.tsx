import * as React from 'react';
import {
    Paper,
    Text,
    Group,
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
        title: {
            marginBottom: theme.spacing.xl * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },
    };
});

export default function ContactCard() {
    const { classes } = useStyles();
    const form = useRef<HTMLFormElement>(null);

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
                        if (form.current !== null) {
                            // Clear the form inputs after submitting the form
                            form.current.reset();
                        }
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
                <div className='flex rounded-lg p-4 shadow-md dark:shadow-gray-300 shadow-gray-800 border dark:border-gray-800 border-gray-300 bg-white dark:bg-black md:flex-row flex-col dark:text-white text-black'>
                    <div className="box-border relative shadow-md md:p-4 rounded-lg-2 bg-cover rounded-lg md:m-2 bg-center md:mr-6 mb-3 border-transparent border-1 px-xl flex-0 w-280 md:mb-sm md:pl-md"
                        style={{ backgroundImage: `url(${'/images/bg.svg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Text size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
                            Contact information
                        </Text>

                        <ContactIconsList variant="white" />
                    </div>

                    <form className="box-border flex-0 px-xl pl-2xl border-l-0 border-transparent border-1 md:pl-0 md:pr-0 md:pt-0 md:pb-0"
                        style={{ padding: `var(--spacing-xl)`, paddingLeft: `calc(var(--spacing-xl) * 2)` }} ref={form} onSubmit={(e) => sendEmail(e)}>
                        <Text size="lg" weight={700} className={classes.title}>
                            Get in touch
                        </Text>

                        <div className="mt-n12 dark:text-white text-black">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <input type="text" name="from_name" placeholder="Your name" className='py-2 px-4 rounded-lg shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent  dark:text-white dark:bg-[#0f0f0f] bg-[#f0f0f0]' required />
                                <input type="email" name="email_id" placeholder="Your email" className='py-2 px-4 rounded-lg shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent dark:text-white dark:bg-[#0f0f0f] bg-[#f0f0f0]' required />
                            </div>
                            <input type="text" name="subject" className='block w-full mt-4 py-2 px-4 rounded-lg shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent  dark:text-white dark:bg-[#0f0f0f] bg-[#f0f0f0]' placeholder="Subject" required />
                            <textarea name="message" className='block w-full mt-4 py-2 px-4 rounded-lg shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent  dark:text-white dark:bg-[#0f0f0f] bg-[#f0f0f0] resize-none' placeholder="Please include all relevant information" rows={3} required />
                            <Group className="md:float-right mt-2 md:mt-8">
                                <a>
                                    <button className='group w-fit px-6 py-3 my-0 text-white font-semibold hover:ring-2 dark:ring-white ring-black hover:scale-105 duration-500 uppercase rounded-md bg-gradient-to-r from-red-300 to-red-900' type="submit" value="Send" >
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