import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const CustomChatbot = () => {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const [name, setName] = useState("");

    const [steps, setSteps] = useState(
        [
            {
                id: '1',
                message: 'What is your name?',
                trigger: '2',
            },
            {
                id: '2',
                user: setName(name),
                trigger: '3',
            },
            {
                id: '3',
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
            },
        ]);
    return (

        <ChatBot headerTitle="Hi"
            recognitionEnable={true} steps={steps} {...config} />

    );
}
export default CustomChatbot;