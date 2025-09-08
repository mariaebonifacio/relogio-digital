import { useState, useEffect } from "react";
import styles from "./Relogio.module.css";

function Relogio() {
    const [horaAtual, sethoraAtual] = useState(new data)

    useEffect(() => {
        const intervalo = setInterval(() => {
            sethoraAtual(new Date());
        }, 1000);

    return () => clearInterval (intervalo);

}, []);

    return (
        
    );

}