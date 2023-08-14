import io from 'socket.io-client';

const ENDPOINT = "http://localhost:4003";

export const socket = io(ENDPOINT).on("connection");