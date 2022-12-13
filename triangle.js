function triangle(value_1, type_1, value_2, type_2) {
    const types = ['leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'];
    let a, b, c, alpha, beta;
    // check the negative values
    if (value_1 <= 0 || value_2 <= 0) return 'Zero or negative input';
    // check the hypotenuse an or more legs
    else if ((type_1 == types[0] && type_2 == types[1]) && (value_1 >= value_2)) return 'Zero or negative input';
    // check the correct input types
    else if (!(types.includes(type_1)) || !(types.includes(type_2))) return 'failed';
    else{
        // leg and leg
        if(type_1 == types[0] && type_2 == types[0]) {
            a = value_1;
            b = value_2;
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
            beta = 90 - alpha;
        }
        // leg and hypotenuse
        else if (type_1 == types[0] && type_2 == types[1]) {
            a = value_1;
            c = value_2;
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
            beta = 90 - alpha;
        }
        // leg and adjacent angle
        else if(type_1 == types[0] && type_2 == types[2]) {
            a = value_1;
            beta = value_2;
            c = a / (Math.cos(beta * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
        }
        // leg and opposite angle
        else if(type_1 == types[0] && type_2 == types[3]) {
            a = value_1;
            alpha = value_2;
            c = a / (Math.sin(alpha * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            beta = 90 - alpha;
        } 
        // hypotenuse and angle
        else if(type_1 == types[1] && type_2 == types[4]) {
            c = value_1;
            beta = value_2;
            alpha = (90 * Math.PI / 180) - beta;
            a = c * Math.sin(alpha * Math.PI/180);
            b = c * Math.sin(beta * Math.PI/180);
        }
        // hypotenuse and leg
        else if(type_1 == types[1] && type_2 == types[0]) {
            c = value_1;
            a = value_2;
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
            beta = 90 - alpha;
        }
        // adjacent angle and leg  
        else if(type_1 == types[2] && type_2 == types[0]) {
            beta = value_1;
            a = value_2;
            c = a / (Math.cos(beta * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.atan(a / b) * 180 / Math.PI;
        }
        // opposite angle and leg  
        else if(type_1 == types[3] && type_2 == types[0]) {
            alpha = value_1;
            a = value_2;
            c = a / (Math.sin(alpha * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            beta = 90 - alpha;
        }
        // angle and hypotenuse
        else if(type_1 == types[4] && type_2 == types[1]) {
            beta = value_1;
            c = value_2;
            alpha = 90 - beta;
            a = c * Math.sin(alpha * Math.PI/180);
            b = c * Math.sin(beta * Math.PI/180);
        }
        else{
            return 'Zero or negative input';
        }
    }   // result
        return `a = ${a}\nb = ${b}\nc = ${c}\nalpha = ${alpha}\nbeta = ${beta}\n"success"`;
}
console.log(triangle(7, 'leg', 18, 'hypotenuse'));