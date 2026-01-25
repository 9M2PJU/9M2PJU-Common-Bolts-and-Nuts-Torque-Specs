import React, { useState, useMemo } from 'react';
import { applicationSpecs } from '../data/applicationSpecs';
import { Car, Truck, Bike } from 'lucide-react';

const VehicleGuide = () => {
    const [activeFilter, setActiveFilter] = useState('Motorcycle');

    const filteredSpecs = useMemo(() => {
        return applicationSpecs.filter(spec => spec.type === activeFilter);
    }, [activeFilter]);

    return (
        <div>
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                padding: '0.5rem',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '0.75rem',
                overflowX: 'auto'
            }}>
                {['Motorcycle', 'Car', 'Truck'].map(type => (
                    <button
                        key={type}
                        onClick={() => setActiveFilter(type)}
                        style={{
                            flex: 1,
                            background: activeFilter === type ? 'var(--color-accent)' : 'transparent',
                            color: activeFilter === type ? '#0f172a' : 'var(--color-text-secondary)',
                            border: 'none',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.2s',
                            minWidth: '100px'
                        }}
                    >
                        {type === 'Motorcycle' && <Bike size={18} />}
                        {type === 'Car' && <Car size={18} />}
                        {type === 'Truck' && <Truck size={18} />}
                        {type}
                    </button>
                ))}
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Range (Nm)</th>
                            <th>Range (ft-lbs)</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSpecs.map((spec, index) => (
                            <tr key={index}>
                                <td style={{ fontWeight: '600', color: 'var(--color-accent)' }}>{spec.component}</td>
                                <td>{spec.rangeNm}</td>
                                <td>{spec.rangeFtLbs}</td>
                                <td style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                                    {spec.note}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(234, 179, 8, 0.1)',
                border: '1px solid rgba(234, 179, 8, 0.2)',
                borderRadius: '0.5rem',
                color: '#fefce8'
            }}>
                <strong style={{ color: '#fbbf24' }}>⚠️ WARNING:</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>
                    These are <strong>general reference ranges</strong> only.
                    Specific applications vary heavily by model, year, and manufacturer.
                    Always consult the factory service manual for your specific vehicle.
                    Use these values only as a sanity check.
                </p>
            </div>
        </div>
    );
};

export default VehicleGuide;
