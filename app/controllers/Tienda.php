<?php 

class Tienda extends Controlador
    {
        
        public function __construct()
        {
           
        }
        
        public function index()
        {
			
            $this->vista('tienda/tienda');
        }
    }


?>