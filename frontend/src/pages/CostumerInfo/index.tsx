import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiTrash } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, PageTitle, Costumer, FooterButtons } from './styles';

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

const CostumerInfo: React.FC = () => {
  const [costumer, setCostumer] = useState<CostumerInterface>();
  const params = useParams<RouteParams>();
  const history = useHistory();

  useEffect(() => {
    api.get(`costumers/${params.id}`).then((response) => {
      setCostumer(response.data);
    });
  }, [params.id]);

  function handleNavigateBack() {
    history.goBack();
  }

  async function handleDeleteCostumer() {
    await api.delete(`costumers/${params.id}`);

    alert('Cliente excluído com sucesso.');

    history.goBack();
  }

  return (
    <Container>
      <PageTitle>Informações do cliente</PageTitle>
      <Costumer>
        {costumer && (
          <>
            <span>
              Nome completo:<h2>{costumer.name}</h2>
            </span>
            <span>
              RG:<h2>{costumer.rg}</h2>
            </span>
            <span>
              CPF:<h2>{costumer.cpf}</h2>
            </span>
            <span>
              Telefone:<h2>{costumer.phone}</h2>
            </span>
            <span>
              Data de nascimento:
              <h2>{costumer.birth_date.split('-').reverse().join('/')}</h2>
            </span>
            <span>
              Endereços:
              {costumer.addresses.map((address) => (
                <h3 key={address}>{address}</h3>
              ))}
            </span>
          </>
        )}
        <FooterButtons>
          <Button onClick={handleNavigateBack} icon={FiArrowLeft}>
            Voltar
          </Button>
          <Button onClick={handleDeleteCostumer} icon={FiTrash}>
            Deletar
          </Button>
        </FooterButtons>
      </Costumer>
    </Container>
  );
};

export default CostumerInfo;
