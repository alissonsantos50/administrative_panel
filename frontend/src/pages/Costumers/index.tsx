import React, { useEffect, useState } from 'react';
import { FiEdit, FiEye, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, PageTitle, CostumerList } from './styles';

interface Costumer {
  id: string;
  name: string;
  phone: string;
}

const Costumers: React.FC = () => {
  const [costumers, setCostumers] = useState<Costumer[]>([]);

  useEffect(() => {
    api.get('costumers').then((response) => {
      setCostumers(response.data);
    });
  }, []);

  return (
    <Container>
      <PageTitle>Clientes</PageTitle>
      <CostumerList>
        <li>
          <span>Nome</span>
          <span>Telefone</span>
          <span>Ações</span>
        </li>

        {costumers &&
          costumers.map((costumer) => (
            <li key={costumer.id}>
              <span>{costumer.name}</span>
              <span>{costumer.phone}</span>
              <span>
                <Link to={`/costumers/info/${costumer.id}`}>
                  <FiEye size={18} />
                </Link>
                <Link to={`/costumers/edit/${costumer.id}`}>
                  <FiEdit size={18} />
                </Link>
              </span>
            </li>
          ))}

        <Link to='/costumers/add'>
          <Button icon={FiPlus}>Novo</Button>
        </Link>
      </CostumerList>
    </Container>
  );
};

export default Costumers;
