var fs = require('fs');

fs.readFile('../example/index.html', 'utf8', function (err, data) {
    var ppm = "P2\n85 119232\n255\n";

    var lines = data.split("\n");

    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < 85; j++) {
            ppm += j < lines[i].length ? lines[i].charCodeAt(j) : 0;
            ppm += " ";
        }
        ppm +="\n";
    }

    fs.writeFile ('s.ppm', ppm);
});
