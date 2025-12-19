"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "¡Hola! Soy SENABot, ¿En qué puedo ayudarte hoy?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const res = await fetch("/api/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            setMessages([...newMessages, { sender: "bot", text: data.reply }]);
        } catch (error) {
            console.error("Error al conectar con SENABot:", error);
            setMessages([
                ...newMessages,
                { sender: "bot", text: "Lo siento, hubo un error al procesar tu mensaje." },
            ]);
        }
    };

    return (
        <div className="flex flex-col h-[84vh] w-full mx-auto border border-[#A4D789] rounded-lg shadow-sm font-work-sans">
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#A4D789] text-white px-4 py-3 rounded-t-lg">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E1F2DB] justify-items-center content-center">
                    <Image src="/img/pfpBot.png" alt="SENABot" width={20} height={30} />
                </div>
                <div>
                    <p className="text-base text-white font-semibold">SENABot</p>
                    <p className="text-sm text-[#E1F2DB] flex items-center gap-1">
                        <span className="w-3 h-3 border-2 border-white bg-green-400 rounded-full inline-block"></span>
                        Online
                    </p>
                </div>
            </div>
            {/* Contenido del chat */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex items-start gap-3 ${msg.sender === "bot" ? "justify-start" : "justify-end"
                            }`}
                    >
                        {msg.sender === "bot" && (
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-full overflow-hidden bg-[#E1F2DB] justify-items-center content-center">
                                    <Image src="/img/pfpBot.png" alt="SENABot" width={20} height={30} />
                                </div>
                                <div className="max-w-[90%]">
                                    <p className="text-sm text-[#C9CBCE] font-medium mb-1">SENABot</p>
                                    <div className="px-4 py-2 rounded-lg bg-[#262626]/8 text-[#262626] shadow-[2px_2px_0_rgba(0,0,0,0.15)]">
                                        {msg.text}
                                    </div>
                                </div>
                            </div>
                        )}
                        {msg.sender === "user" && (
                            <div
                                className="max-w-[70%] wrap-break-word px-4 py-2 rounded-lg bg-[#E1F2DB] text-[#262626] self-end ml-auto shadow-[2px_2px_0_rgba(0,0,0,0.15)]"
                            >
                                {msg.text}
                            </div>
                        )}

                    </div>
                ))}
            </div>
            {/* Input */}
            < div className="flex items-center gap-2 p-4 border-t border-[#A4D789] bg-white rounded-b-lg" >
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    placeholder="Pregúntale a SENABot..."
                    className="flex-1 p-2 outline-none resize-none overflow-y-auto rounded-lg"
                    rows={2}
                />
                <button
                    onClick={handleSend}
                    className="bg-[#A4D789] text-black p-3 rounded-4xl hover:bg-[#85CA62] transition"
                >
                    <Icon icon="tabler:send" width="16" height="16" />
                </button>
            </div>
        </div>
    );
};

export default ChatBot;