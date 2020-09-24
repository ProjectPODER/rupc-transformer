# RUPC Transformer

Transforma los datos del RUPC (Mexico) en entidades Popolo. Genera listado clasificador para institutiones estatales de México.

## Ejemplo de uso

Desde el directorio raíz:

    node index.js -f FUNCION

## Opciones

El script acepta las siguientes opciones como argumentos:

    --function -f       Función a utilizar (puede ser transform o classify)

#### classify

Genera un listado clasificador (personas y empresas) para ayudar al extractor de entidades [ocds-entity-extract](http://gitlab.rindecuentas.org/equipo-qqw/ocds-entity-extract/). Envía el output a stdout como stream de objetos JSON (uno por línea).

#### transform

// TODO...
