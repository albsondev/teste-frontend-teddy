import React, { useEffect, useState, Suspense } from 'react';

const ClientsPage: React.FC = () => {
    const [ClientsApp, setClientsApp] = useState<React.FC | null>(null);

    useEffect(() => {
        // Importação dinâmica do módulo UMD do micro-frontend `clients`
        import('http://localhost:3001/clients-app.umd.js').then((module) => {
            setClientsApp(() => module.default);
        });
    }, []);

    if (!ClientsApp) return <p>Carregando o módulo de clientes...</p>;

    return (
        <Suspense fallback={<p>Carregando clientes...</p>}>
            <ClientsApp />
        </Suspense>
    );
};

export default ClientsPage;
