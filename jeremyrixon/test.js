var fs = require('fs');

var N = 0xffff;

// LZW-compress a string
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            if (code === 0xd800) {
                code += 0x800;
            }
            if (code >= N) {
                dict = {};
                code = 256;
            }
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
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
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
            phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        if (code === 0xd800) {
            code += 0x800;
        }
        if (code >= N) {
            dict = {};
            code = 256;
        }
        oldPhrase = phrase;
    }
    return out.join("");
}

fs.readFile('../example/index.html', 'utf8', function (err, data1) {
    if (err) throw err;
    var data2 = lzw_encode(data1);
    fs.writeFile ('all.html', data2, function(err) {
        if (err) throw err;
        fs.readFile('all.html', 'utf8', function (err, data3) {
            if (err) throw err;
            var data4 = lzw_decode(data3);
            fs.writeFile ('recovered.html', data4, function(err) {
                if (err) throw err;
                console.log(data1 === data4 ? 'match' : 'no match');
            });
        });
    });

});

