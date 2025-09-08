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
        <div className={styles.relogioContainer}>
            <h2>Componente React</h2>
            <p className={styles.hora}>{horaAtual.toLocalTime}</p>
            <p className={styles.data}>
                {horaAtual.toLocalDateString("pt-BR", {
                weekday: "long",
                day: "numeric", 
                month: "long", 
                year: "numeric"
                })}
            </p>
        </div>
    );

}