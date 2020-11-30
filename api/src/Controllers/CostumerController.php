<?php

namespace Kabum\Controllers;

use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Kabum\Config\DatabaseConnection;

class CostumerController
{
    public function createCostumer(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
    {
        $body = $request->getBody()->getContents();

        $parsedBody = json_decode($body);

        if (empty($parsedBody)) {
            return new JsonResponse('Please insert costumer info.', 422);
          }
      
          if (!isset($parsedBody->name) || !isset($parsedBody->cpf) || !isset($parsedBody->rg) || !isset($parsedBody->phone) || !isset($parsedBody->birth_date) || !isset($parsedBody->addresses)) {
            return new JsonResponse('All fields are required.', 422);
          }

        $costumer_id = uniqid();

        $connection = new DatabaseConnection();

        $db = $connection->connect();

        $consumerQuery = 'INSERT INTO costumers (id, name, cpf, rg, phone, birth_date) VALUES (?, ?, ?, ?, ?, ?);';
        $consumerQueryResult = $db->prepare($consumerQuery);
        $consumerQueryResult->execute([$costumer_id, $parsedBody->name, $parsedBody->cpf, $parsedBody->rg, $parsedBody->phone, $parsedBody->birth_date]);
        
        foreach ($parsedBody->addresses as $address) {
            $addressesQuery = 'INSERT INTO addresses (address, costumer_id) VALUES (?, ?);';
            $addressesQueryResult = $db->prepare($addressesQuery);
            $addressesQueryResult->execute([$address, $costumer_id]);
        }

        $successMessage = "Costumer registered.";

        return new JsonResponse($successMessage);
    }

    public function getCostumers(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
    {
        $connection = new DatabaseConnection();

        $db = $connection->connect();

        $query = 'SELECT * FROM costumers;';

        $queryResult = $db->prepare($query);
        $queryResult->execute();

        $costumers = $queryResult->fetchAll($db::FETCH_ASSOC);

        return new JsonResponse($costumers);
    }

    public function showCostumer(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
    {
        $id = (object)$request->getAttributes('id');
        
        $costumerId = $id->id;

        $connection = new DatabaseConnection();

        $db = $connection->connect();

        $costumerQuery = 'SELECT * FROM costumers WHERE id = ?;';
        $costumerQueryResult = $db->prepare($costumerQuery);
        $costumerQueryResult->execute([$costumerId]);
        
        $costumer = (object)$costumerQueryResult->fetch($db::FETCH_ASSOC);

        $addressesQuery = 'SELECT a.address FROM addresses a LEFT JOIN costumers c ON a.costumer_id = c.id WHERE c.id = ?;';
        $addressesQueryResult = $db->prepare($addressesQuery);
        $addressesQueryResult->execute([$costumerId]);

        $addresses = $addressesQueryResult->fetchAll($db::FETCH_ASSOC);

        $stringAddresses = [];

        foreach ($addresses as $address) {
            $string = implode(', ',$address);
            array_push($stringAddresses, $string);
        }
        
        $costumer->addresses = $stringAddresses;
        
        return new JsonResponse($costumer);
    }

    public function editCostumer(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
    {
        $id = $request->getAttributes('id')[id];
        $body = $request->getBody()->getContents();

        $parsedBody = json_decode($body);

        $connection = new DatabaseConnection();

        $db = $connection->connect();

        $query = "UPDATE costumers SET name=?, cpf=?, rg=?, phone=?, birth_date=? WHERE id=?;";

        $queryResult = $db->prepare($query);
        $queryResult->execute([$parsedBody->name, $parsedBody->cpf, $parsedBody->rg, $parsedBody->phone, $parsedBody->birth_date, $id]);

        $successMessage = "Costumer register updated.";

        return new JsonResponse($successMessage);
    }

    public function deleteCostumer(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
    {
        $id = $request->getAttributes('id')[id];
        $body = $request->getBody()->getContents();

        $parsedBody = json_decode($body);

        $connection = new DatabaseConnection();

        $db = $connection->connect();

        $costumerQuery = "DELETE FROM costumers WHERE id=?;";
        $costumerQueryResult = $db->prepare($costumerQuery);
        $costumerQueryResult->execute([$id]);
        
        $addressesQuery = "DELETE FROM addresses WHERE costumer_id=?;";
        $addressesQueryResult = $db->prepare($addressesQuery);
        $addressesQueryResult->execute([$id]);

        $successMessage = "Costumer deleted.";

        return new JsonResponse($successMessage);
    }
}
