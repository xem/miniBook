var fs = require('fs');

// LZW-compress a string
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i+=3) {
        currChar1=data[i];
        currChar2=data[i+1];
        currChar3=data[i+2];
        if (dict[phrase + currChar1 + currChar2 + currChar3] != null) {
            phrase += currChar1 + currChar2 + currChar3;
        }
        else {
            out.push(phrase.length > 3 ? dict[phrase] : phrase.charCodeAt(0) + phrase.charCodeAt(1) + phrase.charCodeAt(2));
            dict[phrase + currChar1 + currChar2 + currChar3] = code;
            console.log(phrase);
            code++;
            phrase=currChar1 + currChar2 + currChar3;
        }
    }
    out.push(phrase.length > 3 ? dict[phrase] : phrase.charCodeAt(0) + phrase.charCodeAt(1) + phrase.charCodeAt(2));

    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i+=3) {
        var currCode1 = data[i].charCodeAt(0);
        var currCode2 = data[i+1].charCodeAt(0);
        var currCode3 = data[i+2].charCodeAt(0);
        if (currCode1 < 256) {
            phrase = data[i] + data[i+1] + data[i+2];
        }
        else {
            phrase = dict[currCode1 + currCode2 + currCode3] ? dict[currCode1 + currCode2 + currCode3] : (oldPhrase + currCode1 + currCode2 + currCode3);
        }
        out.push(phrase);
        currChar1 = phrase.charAt(0);
        currChar2 = phrase.charAt(1);
        currChar3 = phrase.charAt(2);
        dict[code] = oldPhrase + currChar1 + currChar2 + currChar3;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}

fs.readFile('../example/index.html', 'utf8', function (err, data) {
    if (err) throw err;
    //Do your processing, MD5, send a satellite to the moon, etc.

    fs.writeFile ('all.html', lzw_encode(data), function(err) {
        if (err) throw err;
        console.log('complete');
    });
});

fs.readFile('all.html', 'utf8', function (err, data) {
    if (err) throw err;
    //Do your processing, MD5, send a satellite to the moon, etc.

    fs.writeFile ('recovered.html', lzw_decode(data), function(err) {
        if (err) throw err;
        console.log('complete');
    });
});
