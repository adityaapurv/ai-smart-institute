import React, { useContext } from 'react';
import { Context } from '../context/context';
import './DoubtSolver.css';

const DoubtSolver = ({ subject }) => {
    const {
        onSent1, onSent2, onSent3, onSent4,
        showResult, loading, resultData, setInput, input
    } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subject === "Physics") {
            onSent2(input);
        } else if (subject === "Chemistry") {
            onSent1(input);
        } else if (subject === "Maths") {
            onSent3(input);
        } else if (subject === "Biology") {
            onSent4(input);
        }
    };

    return (
        <div className="doubt-solver-card">
            <div className="doubt-solver-header">
                <span className={`subject-badge ${subject.toLowerCase()}`}>{subject}</span>
                <h2>{subject} Doubt Solver</h2>
                <p className="doubt-solver-subtitle">Ask any question related to {subject} and get instant help!</p>
            </div>
            <form className="doubt-solver-form" onSubmit={handleSubmit}>
                <input
                    className="doubt-solver-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Type your doubt in ${subject}...`}
                    autoFocus
                />
                <button className="doubt-solver-btn" type="submit" disabled={loading || !input.trim()}>
                    {loading ? <span className="loader"></span> : "Submit"}
                </button>
            </form>
            <div
                className="doubt-solver-result doubt-solver-result-scroll"
            >
                {loading ? (
                    <div className="doubt-solver-loading">Thinking...</div>
                ) : (
                    resultData && <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
            </div>
        </div>
    );
};

export default DoubtSolver;