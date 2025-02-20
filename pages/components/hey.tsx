'use client';
import { useState, useEffect } from "react";

type ResponseData = {
    message: string
};

export default function Hey(props: {name: string}) {

    // const [name, setName] = useState('John Doe');
    const [message, setMessage] = useState('loading...');

    // setName(props.name);

    useEffect(() => {

        fetch('/api/hello?name=' + props.name)
            .then(response => response.json())
            .then(json => {
                setMessage(json.message);
            });
    }, []);

    return (
        <main>
            <p>{message}</p>
        </main>
    )

};
