import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export default function AccordionComponent({ question }) {
    return (
        <div className="mx-10">
            <h2 className="text-2xl font-bold mx-10 mb-2 mt-12">Frequently Asked Questions</h2>
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