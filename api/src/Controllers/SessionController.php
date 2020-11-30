<?php

namespace Kabum\Controllers;

use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Kabum\Config\DatabaseConnection;

class SessionController
{
  public function createSession(ServerRequestInterface $request, ResponseInterface $response): ResponseInterface
  {
    $body = $request->getBody()->getContents();

    $parsedBody = json_decode($body);

    if (empty($parsedBody)) {
      return new JsonResponse('Please insert username and password.', 422);
    }

    if (!isset($parsedBody->name) || !isset($parsedBody->password)) {
      return new JsonResponse('Username and password cannot be empty.', 422);
    }

    $password = md5($parsedBody->password);

    $connection = new DatabaseConnection();

    $db = $connection->connect();

    $query = 'SELECT * FROM users WHERE name = ? and password = ?;';

    $queryResult = $db->prepare($query);
    $queryResult->execute([$parsedBody->name, $password]);
    
    $user = $queryResult->fetch();
    
    if (!$user) {
      return new JsonResponse('Invalid username or password.', 403);
    }

    $successMessage = "Sessão iniciada.";

    return new JsonResponse($successMessage, 201);
  }
}
