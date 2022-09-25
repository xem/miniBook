[ZTML](https://github.com/eyaler/ztml) is a compression pipeline I wrote for inline text compression in HTML / JS.

It uses some text preprocessing + Burrows-Wheeler + Move-to-front vartiant + Huffman + Burrows-Wheeler on bits + Zopfli PNG bootstrap + crEnc (a yEnc-like efficient Base64 alternative) + minification.

Code to generate index.html: 
https://github.com/eyaler/ztml/misc/minibook.py