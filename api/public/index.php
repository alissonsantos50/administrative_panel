<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

require __DIR__ . '/../vendor/autoload.php';

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Kabum\Controllers\CostumerController;
use Kabum\Controllers\SessionController;
use Laminas\Diactoros\Response;

$request = Laminas\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
);

$responseFactory = new \Laminas\Diactoros\ResponseFactory();

$strategy = new League\Route\Strategy\JsonStrategy($responseFactory);
$router   = (new League\Route\Router)->setStrategy($strategy);


// BEGIN COSTUMER ROUTES
$router->map('GET', '/costumers', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Response();
    $controller = new CostumerController();
    return $controller->getCostumers($request, $response);
});

$router->map('GET', '/costumers/{id}', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Response();
    $controller = new CostumerController();
    return $controller->showCostumer($request, $response);
});

$router->map('POST', '/costumers', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Response();
    $controller = new CostumerController();
    return $controller->createCostumer($request, $response);
});

$router->map('PUT', '/costumers/{id}', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Response();
    $controller = new CostumerController();
    return $controller->editCostumer($request, $response);
});

$router->map('DELETE', '/costumers/{id}', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Response();
    $controller = new CostumerController();
    return $controller->deleteCostumer($request, $response);
});
// END COSTUMER ROUTES

// BEGIN SESSION ROUTE
$router->map('POST', '/session', function (ServerRequestInterface $request) : ResponseInterface {
    $response = new Response();
    $controller = new SessionController();
    return $controller->createSession($request, $response);
});
// END SESSION ROUTE

$response = $router->dispatch($request);

(new Laminas\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);