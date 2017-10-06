miniBook
===

Welcome!

This is a compression challenge for Web developers.

The goal is to compress [this HTML page](http://xem.github.io/miniBook/example/index.html) containing the complete work of William Shakespeare,<br>
based on the version hosted on [Project Gutenberg](http://www.gutenberg.org/ebooks/100).

All means are allowed to compress the file, but the decompression must happen entirely in the browser.

The page is encoded in UTF-8 with BOM and has a size of 5,324,821 bytes.<br>
All characters are ASCII. (````\n !"&'(),-.0123456789:;<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ[]_abcdefghijklmnopqrstuvwxyz|}````)

More info on on [ANALYSIS.md](https://github.com/xem/miniBook/blob/gh-pages/ANALYSIS.md)

**Rules**

- Fork this repo.
- Copy the "example" folder and rename the copy with your Github username.
- Your folder contains a file called index.html, containing a &lt;xmp> HTML tag followed by a long text.
- You can create other text and/or binary files at your convenience.
- Compress the file as much as you can without altering the output.
- The decompression must happen in the browser, without any user input, and use a reasonable amount of time (<30 min) and memory (<4GB) on a modern computer.
- You can use HTML & JavaScript only, no PHP (or any server-side language), no VBScript.
- You CAN use HTML entities to replace any characters.
- You CAN use gzip (or concurrent) compression algorithms, other charsets than UTF-8, binary packing, neural networks...
- You CAN use temporary elements (text, canvas...), but need to hide them or remove them from the DOM at the end.
- You can NOT perform network queries or read any file that's not present in your folder.
- You can NOT use browser extensions, JS error messages, or the built-in spellchecker.
- You can NOT store data in file names, HTTP headers or anything that wouldn't appear in the byte count.
- Your score is the total size, in bytes, of the file(s) present in your folder.
- Add a readme file explaining your process.
- Open a merge request to appear in the leaderboard.

**Reward**

- A first reward of 50€ (via Paypal) will be granted to the first person that beats 1050kb (i.e. 15kb bigger than paq8hp12's score for this file) 
- Then, a reward of 10 + X€ will be granted to each person that beats the previous record by Xkb.

**Leaderboard**

- Matt Mastrac: 1 488 397 bytes (using better PNG bootstrap) [demo](http://xem.github.io/miniBook/mmastrac/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/mmastrac/README.md)
- winstonewert: 1 971 890 bytes (using PNG bootstrap) [demo](http://xem.github.io/miniBook/winstonewert/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/winstonewert/README.md)
- jeremyrixon: 2 961 629 bytes (using Unicode and LZW) [demo](http://xem.github.io/miniBook/jeremyrixon/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/jeremyrixon/README.md)