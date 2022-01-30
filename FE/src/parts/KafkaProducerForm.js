import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Select from "components/Form/Select";
import Input from "components/Form/Input";

import useForm from "helpers/hooks/useForm";
import fieldErrors from "helpers/fieldErrors";

import users from "constants/api/users";
import media from "constants/api/media";

import { populateProfile } from "store/actions/users";
import kafka from "constants/api/kafka";



function KafkaProducerForm({ details }) {
    const dispatch = useDispatch();
    const addPicture = useRef(null);

    const [state, setKey, setState] = useForm({
        // name: details?.name ?? "",
        // email: details?.email ?? "",
        // profession: details?.profession ?? "",
        // avatar: details?.avatar ?? "",
        // password: details?.password ?? "",
        // otherProfession: details?.otherProfession ?? "",
    });

    const [errors, setErrors] = useState(null);

    async function submit(e) {
        e.preventDefault();

        const payload = {
            bootstrapServers: state.bootstrapservers,
            topicName: state.topic,
            messages: state.messages,
        };

        console.log(payload)
        // if (payload.profession === "others")
        //     payload.profession = state.otherProfession;

        // if (state.avatar.indexOf("base64") > -1) {
        //     const avatar = await media.upload(state.avatar);
        //     payload.avatar = avatar.data.image;
        // }

        // users
        //     .update(payload)
        //     .then((res) => {
        //         toast.success("Profile updated");
        //         setState({
        //             ...state,
        //             password: "",
        //         });
        //         setErrors(null);
        //         dispatch(
        //             populateProfile({
        //                 ...details,
        //                 ...res.data,
        //             })
        //         );
        //     })
        //     .catch((error) => setErrors(error?.response?.data?.message ?? "errors"));
        kafka
            .send(payload)
            .then((res) => {
                console.log(payload);
                toast.success("Profile updated");
                setState({
                    ...state,
                    password: "",
                });
                setErrors(null);
                dispatch(
                    populateProfile({
                        ...details,
                        ...res.data,
                    })
                );
            })
            .catch((error) => setErrors(error?.response?.data?.message ?? "errors"));
    }

    const ERRORS = fieldErrors(errors);

    return (
        <>

            <section className="flex flex-col mt-8">
                <div className="flex items-center pb-24">
                    <div className="w-full sm:w-4/12">
                        <form onSubmit={submit}>
                            <Input
                                value={state.bootstrapservers}
                                error={ERRORS?.bootstrapservers?.message}
                                name="bootstrapservers"
                                onChange={setKey}
                                placeholder="192.168.56.113:9092"
                                labelName="Bootstrap Servers"
                            />

                            <Input
                                value={state.topic}
                                error={ERRORS?.topic?.message}
                                name="topic"
                                onChange={setKey}
                                placeholder="nama topic"
                                labelName="TopicName"
                            />

                            <Input
                                value={state.messages}
                                error={ERRORS?.messages?.message}
                                name="messages"
                                onChange={setKey}
                                placeholder="Message yang mau dikirim"
                                labelName="Message"
                            />

                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4"
                            >
                                Kirim Bos
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default withRouter(KafkaProducerForm);
