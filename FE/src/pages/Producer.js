import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Sidebar from "parts/Sidebar";
import KafkaProducerForm from "parts/KafkaProducerForm";
export default function Settings() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const DETAILS = useSelector((state) => state.users);

    return (
        <div className="flex">
            <Sidebar></Sidebar>

            <main className="flex-1">
                <div className="px-4 sm:px-16">
                    <section className="flex flex-col mt-8 pl-12 sm:pl-0">
                        <h1 className="text-xl sm:text-4xl text-gray-900 font-medium">
                            Producer
                        </h1>
                    </section>

                    <KafkaProducerForm details={DETAILS}></KafkaProducerForm>
                </div>
            </main>
        </div>
    );
}
