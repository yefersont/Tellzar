<?php
//helper que redirecciona las paginas
function redireccionar($pagina)
{
    header('location:'.RUTA_URL.$pagina);
    exit;
}