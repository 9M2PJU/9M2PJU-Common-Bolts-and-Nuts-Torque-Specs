import React, { useState, useMemo } from 'react';
import { torqueSpecs } from '../data/torqueSpecs';

const TorqueChart = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSystem, setFilterSystem] = useState('All');

    const filteredSpecs = useMemo(() => {
        return torqueSpecs.filter(spec => {
            const matchesSearch =
                spec.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
                spec.grade.toString().includes(searchTerm) ||
                spec.socket.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesSystem = filterSystem === 'All' || spec.system === filterSystem;

            return matchesSearch && matchesSystem;
        });
    }, [searchTerm, filterSystem]);

    return (
        <div>
            <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="Search (e.g., M10, 8.8, 1/2)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        flex: 1,
                        padding: '0.8rem',
                        borderRadius: '0.5rem',
                        border: '1px solid var(--color-border)',
                        background: 'rgba(0, 0, 0, 0.2)',
                        color: 'var(--color-text-primary)',
                        fontSize: '1rem',
                        minWidth: '200px'
                    }}
                />
                <select
                    value={filterSystem}
                    onChange={(e) => setFilterSystem(e.target.value)}
                    style={{
                        padding: '0.8rem',
                        borderRadius: '0.5rem',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg-card)',
                        color: 'var(--color-text-primary)',
                        fontSize: '1rem'
                    }}
                >
                    <option value="All">All Systems</option>
                    <option value="Metric">Metric</option>
                    <option value="SAE">SAE (Inch)</option>
                </select>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Pitch/TPI</th>
                            <th>Grade</th>
                            <th>Torque (Nm)</th>
                            <th>Torque (ft-lbs)</th>
                            <th>Socket</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSpecs.length > 0 ? (
                            filteredSpecs.map((spec, index) => (
                                <tr key={index}>
                                    <td style={{ fontWeight: '600', color: 'var(--color-accent)' }}>{spec.size}</td>
                                    <td>{spec.pitch}</td>
                                    <td>{spec.grade}</td>
                                    <td>{spec.torqueNm}</td>
                                    <td>{spec.torqueFtLbs}</td>
                                    <td>{spec.socket}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                                    No results found matching "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                * Values are dry torque specifications for standard zinc-plated fasteners. Lubricated threads require less torque (~20-30% less).
            </p>
        </div>
    );
};

export default TorqueChart;
