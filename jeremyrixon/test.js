var fs = require('fs');

var MINCDE = 0x0080;
var SKPFRM = 0xd800;
var SKIPTO = 0xe000;
var MAXCDE = 0xffff;

// LZW-compress a string
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var phrase = data[0];
    var code = MINCDE;
    for (var i=1; i<data.length; i++) {
        var currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.codePointAt(0));
            dict[phrase + currChar] = code;
            code++;
            if (code === SKPFRM) {
                code = SKIPTO;
            }
            if (code >= MAXCDE) {
                dict = {};
                code = MINCDE;
            }
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.codePointAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCodePoint(out[i]);
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
    var code = MINCDE;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].codePointAt(0);
        if (currCode < MINCDE) {
            phrase = data[i];
        }
        else {
            phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        if (code === SKPFRM) {
            code = SKIPTO;
        }
        if (code >= MAXCDE) {
            dict = {};
            code = MINCDE;
        }
        oldPhrase = phrase;
    }
    return out.join("");
}

fs.readFile('index.html', 'utf8', function (err, data1) {
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

