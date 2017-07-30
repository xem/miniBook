
Uses a unicode encoded string to hold LZW compressed text.

It doesn't beat the previous winner but it was interesting to work on.

I've included test.js to show how the compression works (requires nodejs)

test.js reads "input.html" and creates "002.html"

To create index.html: "cat 001.html 002.html 003.html > index.html"

Things to note:
* The index.html file is UTF-8 encoded but the javascript will see the string as UTF-16 encoded because the browser's javascript interpreter has already parsed the content of the <script> tag.
* Unicode codepoints 0x0d800 to 0x0dfff are invalid (on their own) and so must be skipped when using codepoints as LZW dictionary codes.
* The javascript LZW code is based on this gist: https://gist.github.com/revolunet/843889

    // Based on https://gist.github.com/revolunet/843889
    var fs = require('fs');

    var MINCDE = 0x00080;
    var SKPFRM = 0x0d800;
    var SKIPTO = 0x0e000;
    var MAXCDE = 0xfffff;

    // LZW-compress a string
    function lzw_encode(s) {
        var dict = {};
        var out = "";
        var phrase = s.charAt(0);
        var code = MINCDE;
        for (var i=1; i<s.length; i++) {
            var currChar=s.charAt(i);
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            } else {
                out += phrase.length > 1 ? String.fromCodePoint(dict[phrase]) : phrase.charAt(0);
                dict[phrase + currChar] = code;
                code++;
                if (code === SKPFRM) {
                    code = SKIPTO;
                }
                if (code === MAXCDE) {
                    dict = {};
                    code = MINCDE;
                }
                phrase=currChar;
            }
        }
        out += phrase.length > 1 ? String.fromCodePoint(dict[phrase]) : phrase.charAt(0);
        return out;
    }

    // Decompress an LZW-encoded string
    function lzw_decode(s) {
        var dict = {};
        var currChar = s.charAt(0);
        var oldPhrase = currChar;
        var out = currChar;
        var code = MINCDE;
        var phrase;
        for (var i=1; i<s.length; i++) {
            var currCode = s.codePointAt(i);
            if (currCode > 0xffff) {
                i++;
            }
            if (currCode < MINCDE) {
                phrase = String.fromCodePoint(currCode);
            }
            else {
                phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
            }
            out += phrase;
            currChar = phrase.charAt(0);
            dict[code] = oldPhrase + currChar;
            code++;
            if (code === SKPFRM) {
                code = SKIPTO;
            }
            if (code === MAXCDE) {
                dict = {};
                code = MINCDE;
            }
            oldPhrase = phrase;
        }
        return out;
    }

    fs.readFile('input.html', 'utf8', function (err, data1) {
        if (err) throw err;
        var data2 = lzw_encode(data1);
        fs.writeFile ('002.html', data2, function(err) {
            if (err) throw err;
            fs.readFile('002.html', 'utf8', function (err, data3) {
                if (err) throw err;
                var data4 = lzw_decode(data3);
                fs.writeFile ('recovered.html', data4, function(err) {
                    if (err) throw err;
                    console.log((data4.substring(0, 30) + '...' + data4.substring(data4.length-30)).replace(/\s+/g, ' '));
                    console.log(data1 === data4 ? 'match' : 'no match');
                });
            });
        });

    });

