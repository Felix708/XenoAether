import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export default function AccordionComponent({ question }) {
    return (
        <div className="mx-10">
            <Accordion className="my-4 mx-10">
                {
                    question.map((item) => (
                        <AccordionPanel key={item.id}>
                            <AccordionTitle><h1 className="text-xl font-bold">{item.title}</h1></AccordionTitle>
                            <AccordionContent>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {item.content}
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    ))
                }
            </Accordion>
        </div>
    )
}