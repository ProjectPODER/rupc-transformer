const CSV = require('csv-string');

module.exports = function(row) {
    let entity = row.body.NOMBRE_EMPRESA;
    let classification = getClassification(row.body.RFC);

    return CSV.stringify( [entity, classification] );
}

function getClassification(rfc) {
    let exception = considerExceptions(rfc);
    if(exception != '') {
        return exception;
    }
    
    if(rfc == null) return "person";
    else {
        if(rfc.length == 12) return "company";
        else return "person";
    }
}

function considerExceptions(rfc) {
    switch(rfc) {
        case 'LICONSA SA DE CV':
        case 'CONSULTORIA EN OBRA CIVIL AMCORA':
        case 'INNOVOZ':
        case 'MICROSOFT LICENSING, GP':
        case 'MICROSOFT CORPORATION':
            return 'company';
        default:
            return '';
    }
}
