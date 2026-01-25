import React, { useState, useEffect } from 'react';

const units = [
    { value: 'Nm', label: 'Newton Meters (Nm)' },
    { value: 'ft-lb', label: 'Foot Pounds (ft-lbs)' },
    { value: 'in-lb', label: 'Inch Pounds (in-lbs)' },
    { value: 'kg-m', label: 'Kilogram Meters (kg-m)' },
];

const TorqueCalculator = () => {
    const [amount, setAmount] = useState('');
    const [fromUnit, setFromUnit] = useState('Nm');
    const [toUnit, setToUnit] = useState('ft-lb');
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (amount === '' || isNaN(amount)) {
            setResult(null);
            return;
        }

        const val = parseFloat(amount);
        let inNm;

        // Convert input to Nm first as base unit
        switch (fromUnit) {
            case 'Nm': inNm = val; break;
            case 'ft-lb': inNm = val * 1.35582; break;
            case 'in-lb': inNm = val * 0.112985; break;
            case 'kg-m': inNm = val * 9.80665; break;
            default: inNm = val;
        }

        // Convert from Nm to target unit
        let finalVal;
        switch (toUnit) {
            case 'Nm': finalVal = inNm; break;
            case 'ft-lb': finalVal = inNm * 0.737562; break;
            case 'in-lb': finalVal = inNm * 8.85075; break;
            case 'kg-m': finalVal = inNm * 0.101972; break;
            default: finalVal = inNm;
        }

        setResult(finalVal);
    }, [amount, fromUnit, toUnit]);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="calc-grid">
                <div className="calc-input-group">
                    <label style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Value</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter value..."
                        className="calc-input"
                    />
                </div>

                <div className="calc-row">
                    <div className="calc-input-group">
                        <label style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>From</label>
                        <select
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="calc-select"
                        >
                            {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                        </select>
                    </div>

                    <div className="calc-arrow">
                        <span style={{ fontSize: '1.5rem', color: 'var(--color-accent)' }}>→</span>
                    </div>

                    <div className="calc-input-group">
                        <label style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>To</label>
                        <select
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                            className="calc-select"
                        >
                            {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            <div className="calc-result-box">
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Result</div>
                <div className="calc-result-value">
                    {result !== null ? result.toFixed(2) : '---'}
                </div>
                <div style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)', marginTop: '0.5rem' }}>
                    {units.find(u => u.value === toUnit)?.label}
                </div>
            </div>
        </div>
    );
};

export default TorqueCalculator;
