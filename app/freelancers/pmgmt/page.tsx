"use client"
import React from "react";
import { TabsDemo } from "./_components/Pro";
import { PlaceholdersAndVanishInputDemo } from "./_components/Chat";
import Image from "next/image";

const Page = () => {

    const chatHistory = [
        {
            "name": "Kramic.AI",
            "message": "Hello, how can I help you today?"
        },
        {
            "name": "Vaibhav",
            "message": "I need help with my project"
        },
        {
            "name": "Kramic.AI",
            "message": "Sure, what do you need help with?"
        },
        {
            "name": "Vaibhav",
            "message": "tell me action points from the last meeting with Wordpress Client"
        }
    ]
    const [randomParam, setRandomParam] = React.useState(Math.random().toString(36).substring(2, 8));
    const handleReloadAvatar = () => {
        setRandomParam(Math.random().toString(36).substring(2, 8));
    };
    return (
        <main className="h-screen text-black flex items-center justify-normal flex-col">
            <div className="bg-black h-64 w-full mt-1 rounded-3xl text-white flex p-10  justify-around items-center mx-20">
                <h1 className="font-medium text-6xl text-left w-full">
                 Kramic   Project Management
                </h1>
            </div>


            <div className="text-white">
                {
                    chatHistory.map((chat, index) => {
                        return (
                            <div key={index} className={`flex ${chat.name === "Kramic.AI" ? "justify-start" : "justify-end"} gap-10 mb-5`}>
                                <div className={`bg-${chat.name === "Kramic.AI" ? "green" : "blue"}-500 p-5 rounded-xl gap-10`}>
                                    <div className="flex gap-2">
                                    <Image src={`https://source.boringavatars.com/?${randomParam}`} alt="avatar" className="rounded-full" width={20} height={50} /> <span className="font-medium">{chat.name}</span>

                                    </div>
                                    <p>{chat.message}</p>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
            <div className="flex flex-col w-full items-center justify-center h-24 gap-5 absolute bottom-10">

                <div className="flex text-white gap-6">
                    <button className="border px-4 py-2 rounded-xl">Schedule  Meeting</button>
                    <button className="border px-4 py-2 rounded-xl">Meeting Notes</button>
                    <button className="border px-4 py-2 rounded-xl">To-Do List</button>
                </div>
                <PlaceholdersAndVanishInputDemo />

            </div>
        </main>
    );
};

export default Page;
