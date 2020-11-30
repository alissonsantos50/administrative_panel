<?php

namespace Kabum\Config;

use PDO;

class DatabaseConnection {
  public function connect() {
    try {
      $user = 'kabum';
      $pass = 'kabum';
    
      $dbh = new PDO('mysql:host=localhost;dbname=kabum', $user, $pass);
      
      return $dbh;
    } catch (PDOException $e) {
      print "Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}