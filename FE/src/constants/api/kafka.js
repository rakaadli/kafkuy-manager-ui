import axios from "configs/axios";

export default {
    send: (captureProducer) => axios.post("/kafka/producer", captureProducer)
};
