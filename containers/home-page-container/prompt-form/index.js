"use client"
import styles from "./styles.module.scss"
import { useState } from "react";


function PromptForm() {

    const [prompt, setPrompt] = useState("")
    const handleFormSubmit = (event) => {
    };
    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    return (
        <div className={styles.promptForm}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <textarea
                    className={styles.promptTextarea}
                    rows="2"
                    type="test"
                    required
                    placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
                    value={prompt}
                    onChange={handleChange}
                ></textarea>
                <button
                    className={styles.generateButton}
                    type="submit"
                // disabled={isSubmitting}
                >
                    Generate
                </button>
            </form>
        </div>
    )
}

export { PromptForm }