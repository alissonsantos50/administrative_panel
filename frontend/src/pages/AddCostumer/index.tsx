import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCalendar,
  FiCheck,
  FiInfo,
  FiMap,
  FiPhone,
  FiPlus,
  FiUser,
  FiUserCheck,
  FiX,
} from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

import {
  Container,
  PageTitle,
  AddCostumerForm,
  Addresses,
  InsertedAddresses,
  AddressInput,
  FooterButtons,
} from './styles';

const AddCostumer: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState(['']);

  const history = useHistory();

  useEffect(() => {
    if (addresses[0] === '') {
      addresses.shift();
    }
  }, [addresses]);

  function handleNewAddress(event: FormEvent) {
    event.preventDefault();

    if (!address) {
      return;
    }

    setAddresses([...addresses, address]);
  }

  function handleRemoveAddress(address: string) {
    const newAddresses = addresses.filter((i) => i !== address);

    setAddresses(newAddresses);
  }

  async function handleAddCostumer(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      cpf,
      rg,
      phone,
      birth_date: birthDate,
      addresses,
    };

    if (!data) {
      return;
    }

    await api.post('costumers', data);

    alert('Cliente cadastrado com sucesso.');

    history.push('/costumers');
  }

  function handleNavigateBack(event: FormEvent) {
    event.preventDefault();

    history.goBack();
  }

  return (
    <Container>
      <PageTitle>Cadastrar novo cliente</PageTitle>
      <AddCostumerForm>
        <Input
          placeholder='Nome completo'
          type='text'
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          icon={FiUser}
        />
        <Input
          placeholder='Data de nascimento'
          type='date'
          value={birthDate}
          onChange={(event) => {
            setBirthDate(event.target.value);
          }}
          icon={FiCalendar}
        />
        <Input
          placeholder='CPF'
          type='text'
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          icon={FiUserCheck}
        />
        <Input
          placeholder='RG'
          type='text'
          value={rg}
          onChange={(event) => {
            setRg(event.target.value);
          }}
          icon={FiInfo}
        />
        <Input
          placeholder='Telefone'
          type='phone'
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          icon={FiPhone}
        />
        <Addresses>
          <AddressInput>
            <Input
              placeholder='Endereço'
              type='address'
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              icon={FiMap}
            />
            <Button onClick={handleNewAddress}>
              <FiPlus size={20} />
            </Button>
          </AddressInput>
          <InsertedAddresses>
            {addresses.map((address) => (
              <span key={address}>
                {address}
                <FiX size={14} onClick={() => handleRemoveAddress(address)} />
              </span>
            ))}
          </InsertedAddresses>
        </Addresses>
        <FooterButtons>
          <Button onClick={handleNavigateBack} icon={FiArrowLeft}>
            Voltar
          </Button>
          <Button onClick={handleAddCostumer} icon={FiCheck}>
            Cadastrar
          </Button>
        </FooterButtons>
      </AddCostumerForm>
    </Container>
  );
};

export default AddCostumer;
