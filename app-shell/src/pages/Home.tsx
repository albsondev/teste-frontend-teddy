import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (name.trim()) {
            // Redireciona para a página de clientes com o nome do usuário
            navigate('/clients', { state: { name } });
        }
    };

    return (
        <div style={styles.container}>
            <h1>Bem-vindo à Aplicação de Clientes</h1>
            <p>Insira seu nome para continuar:</p>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '0 20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        marginTop: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        maxWidth: '300px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Home;
