import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box  } from '@chakra-ui/react';
import React from 'react';

const FAQ = () => {
    return (
        <div className='mx-36 mb-20'>
            <h1 className='text-4xl font-bold text-center mb-6 text-white'>Frequently Asked Questions </h1>
            <Accordion allowMultiple>
                <AccordionItem className='bg-slate-900 px-10 py-4 rounded-lg'>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' className='text-lg font-bold'>
                            How can TaskifyHub help me manage my tasks more efficiently?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} >
                    TaskifyHub offers a user-friendly interface that allows you to create, organize, and prioritize tasks effortlessly. With features like drag-and-drop task management, real-time collaboration, and customizable task lists, TaskifyHub is designed to streamline your workflow and boost your productivity.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='bg-slate-900 px-10 py-4 mt-1 rounded-lg'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' className='text-lg font-bold'>
                                    Is TaskifyHub suitable for teams and collaborative projects?
                                    </Box>
                                    {isExpanded ? (
                                        <div>-</div>
                                    ) : (
                                        <div>+</div>
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Absolutely! TaskifyHub is built with collaboration in mind. It enables teams to work together seamlessly by providing shared task lists, commenting features, and real-time updates. Whether you're working on a group project or managing tasks within your team, TaskifyHub enhances communication and collaboration.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem className='bg-slate-900 px-10 py-4 mt-1 rounded-lg'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' className='text-lg font-bold'>
                                    Can I access TaskifyHub on multiple devices?
                                    </Box>
                                    {isExpanded ? (
                                        <div>-</div>
                                    ) : (
                                        <div>+</div>
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Yes, TaskifyHub is designed to be accessible from anywhere. You can use TaskifyHub on your desktop, laptop, tablet, or smartphone. The responsive design ensures a consistent and user-friendly experience across various devices, allowing you to stay organized and connected on the go.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
                <AccordionItem className='bg-slate-900 px-10 py-4 mt-1 rounded-lg'>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' className='text-lg font-bold'>
                                    What security measures does TaskifyHub have in place to protect my data?
                                    </Box>
                                    {isExpanded ? (
                                        <div>-</div>
                                    ) : (
                                        <div>+</div>
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            TaskifyHub prioritizes the security and privacy of your data. We use encryption protocols to secure your information, and our servers adhere to industry-standard security practices. Additionally, TaskifyHub offers user authentication and authorization features to control access to your tasks and projects, ensuring your data is kept confidential and secure.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FAQ;