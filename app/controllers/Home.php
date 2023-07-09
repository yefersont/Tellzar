<?php

    class Home extends Controlador
    {
        
        public function __construct()
        {
           
        }
        
        public function index()
        {
			$datos = [
				'titulo' => 'Bienvenidos a Decortinas y Persianas',
			];
            $this->vista('home/index',$datos);
        }
                
       
        
    }
	
?>