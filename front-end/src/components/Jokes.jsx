import { useState, useEffect } from "react";
import axios from "axios";

export default function Jokes() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/jokes")
            .then((response) => {
                setJokes(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h1>Jokes receiving from backend</h1>
            <h2>{jokes.length}</h2>
            {
                jokes.map((joke) => (
                    <ol key={joke.id}>
                        {joke.title} - {joke.content}
                    </ol>
                ))
            }
        </div>
    );
}
