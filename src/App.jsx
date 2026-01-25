import { useState } from 'react'
import './index.css'
import TorqueChart from './components/TorqueChart'
import TorqueCalculator from './components/TorqueCalculator'

function App() {
    const [activeTab, setActiveTab] = useState('chart')

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                }}>
                    9M2PJU Bolts and Nuts Torque Specs Chart
                </h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    Professional Mechanic's Reference & Calculator
                </p>
            </header>

            <div className="glass-panel" style={{ padding: '1rem', minHeight: '60vh' }}>
                <nav className="tabs">
                    <button
                        className={`tab-btn ${activeTab === 'chart' ? 'active' : ''}`}
                        onClick={() => setActiveTab('chart')}
                    >
                        Chart Reference
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'calc' ? 'active' : ''}`}
                        onClick={() => setActiveTab('calc')}
                    >
                        Unit Calculator
                    </button>
                </nav>

                <main>
                    {activeTab === 'chart' && (
                        <div className="content-fade-in">
                            <h2>Common Bolt Torque Specs</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                                Search and filter common torque values.
                            </p>
                            <TorqueChart />
                        </div>
                    )}

                    {activeTab === 'calc' && (
                        <div className="content-fade-in">
                            <h2>Torque Unit Converter</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                                Convert between Nm, ft-lbs, and in-lbs.
                            </p>
                            <TorqueCalculator />
                        </div>
                    )}
                </main>
            </div>

            <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                <p>Use at your own risk. Always verify with official manufacturer specifications.</p>
                <p style={{ marginTop: '0.5rem' }}>
                    Made with ❤️ by <a href="https://hamradio.my" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>9M2PJU</a>
                </p>
            </footer>
        </div>
    )
}

export default App
