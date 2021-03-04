import React from 'react';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/icons/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Logo"/>
            <Title>Explore repositórios no Github.</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório"/>
                <button type="button">Pesquisar</button>
            </Form>

            <Repositories>
                <h1>repo</h1>
            </Repositories>
        </>
    );
}

export default Dashboard;