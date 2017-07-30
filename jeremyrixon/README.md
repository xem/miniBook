Uses a unicode encoded string to hold LZW compressed text.
It doesn't beat the previous winner but it was interesting to work on.
I've included test.js to show how the compression works (requires nodejs)
test.js reads "input.html" and creates "002.html"
To create index.html: "cat 001.html 002.html 003.html > index.html"

Things to note:
The index.html file is UTF-8 encoded but the javascript will see the string as UTF-16 encoded because the browser's javascript interpreter has already parsed the content of the <script> tag.
Unicode codepoints 0x0d800 to 0x0dfff are invalid (on their own) and so must be skipped when using codepoints as LZW dictionary codes.
The javascript LZW code is based on this gist: https://gist.github.com/revolunet/843889
