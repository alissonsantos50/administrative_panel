import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCalendar,
  FiInfo,
  FiMap,
  FiPhone,
  FiPlus,
  FiSave,
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
  EditCostumerForm,
  Addresses,
  InsertedAddresses,
  AddressInput,
  FooterButtons,
} from './styles';

interface CostumerInterface {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  phone: string;
  birth_date: string;
  addresses: Array<string>;
}

interface RouteParams {
  id: string;
}

const EditCostumer: React.FC = () => {
  const [costumer, setCostumer] = useState<CostumerInterface>();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState(['']);
  const params = useParams<RouteParams>();

  const history = useHistory();

  useEffect(() => {
    api.get(`costumers/${params.id}`).then((response) => {
      setCostumer(response.data);
    });
  }, [params.id]);

  useEffect(() => {
    if (costumer) {
      setName(costumer.name);
      setCpf(costumer.cpf);
      setRg(costumer.rg);
      setPhone(costumer.phone);
      setBirthDate(costumer.birth_date);
      setAddresses(costumer.addresses);
    }
  }, [costumer]);

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

  async function handleEditCostumer(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      birth_date: birthDate,
      cpf,
      rg,
      phone,
      addresses,
    };

    if (!data) {
      return;
    }

    await api.put(`costumers/${params.id}`, data);

    alert('Cliente editado com sucesso.');
  }

  function handleNavigateBack(event: FormEvent) {
    event.preventDefault();

    history.goBack();
  }

  return (
    <Container>
      <PageTitle>Editar cadastro do cliente</PageTitle>
      <EditCostumerForm>
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
          <Button onClick={handleEditCostumer} icon={FiSave}>
            Salvar
          </Button>
        </FooterButtons>
      </EditCostumerForm>
    </Container>
  );
};

export default EditCostumer;
