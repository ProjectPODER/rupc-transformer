# RUPC Transformer

Transforms data from RUPC (Mexico) into Popolo entities, and generates a classifier list for Mexican state institutions.

## Usage

    node index.js -f FUNCTION

## Opciones

    --function  -f       Function to apply (transform | classify)

#### classify

Generates a classifier list for persons and companies to help the [OCDS entity extractor](http://gitlab.rindecuentas.org/equipo-qqw/ocds-entity-extract/). Sends the output to stdout as a stream of JSON objects, one object per line.

#### transform

// TODO...
