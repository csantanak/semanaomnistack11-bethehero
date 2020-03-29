import React, { useState } from 'react';

import api from '../../Services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

//funcao handle vai fazer o cadastro

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID fela da puta: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro tente novamente porra');
        }

    }
    //enviando para o back ongs os dados
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero KARAI" />
                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar!
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <input placeholder="Whastapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} />

                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>

            </div>


        </div>

    )

}