function fizzOrBuzz(i) {

    var out = '';

    if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0) {
            out += 'fizz ';
        }

        if (i % 5 == 0) {
            out += 'buzz ';
        } 
    } else {
        out = i;
    }
    return out;
}

$(document).ready(function() {
  
    var terminal = $('.terminal');
    
    for (i = 1; i <= 100; i++) {
        terminal.append('<p>'+fizzOrBuzz(i)+'</p>');
    }

});