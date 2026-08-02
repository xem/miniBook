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
- Copy the "example" folder and rename the copy with the current date + your Github username.
- Your folder must contain a file called index.html, displaying the same content than the example file (a &lt;xmp> HTML tag followed by a long text).
- Compress the file as much as you can without altering the output.
- You MUST use HTML & JavaScript only for the decoder.
- You CAN create other text and/or binary files at your convenience.
- The decompression must happen in the browser, without any user input, and use a reasonable amount of time (<60 min) and memory (<6GB) on a modern computer.
- You CAN replace characters with HTML entities.
- You CAN use different charsets than UTF-8.
- You CAN use temporary elements (text, canvas...), but you need to hide them or remove them from the DOM after decompression.
- You CAN NOT perform network queries or read any file that's not present in your folder.
- You CAN NOT gather data from browser extensions, text-to-speech API, I18n API, Spellchack API, browser/JS error messages, file names, HTTP headers, etc. (non-exhaustive list but you get the idea.)
- Your score is the total size, in bytes, of the file(s) present in your folder.
- You MUST provide a README file explaining your process, as well as the tools used and the uncompressed source code of your decoder/decompressor (these files size don't count in your score)
- If you break the currect record, please open a merge request to appear in the leaderboard.

**Reward**

- A first reward of 50€ (via Paypal) will be granted to the first person that beats 1 170 000 bytes
- Then, a reward of math.ceil(X) € will be granted to each person that beats the previous record by X kb. 

**Leaderboard**

- 1- Konstantin Zaborskikh 1 199 249 bytes (context mixing combined with a simple dictionary-based preprocessor for English text [demo](http://xem.github.io/miniBook/2026-07-19%20Konstantin%20Zaborskikh/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/2026-07-19%20Konstantin%20Zaborskikh/README.md)
- 2- Eyal Gruss: 1 356 386 bytes (using text preprocessing + Burrows-Wheeler + Move-to-front variant + Huffman + Burrows-Wheeler on bits + ECT PNG bootstrap + crEnc) [demo](http://xem.github.io/miniBook/2022-11-02%20eyaler/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/2022-11-02%20eyaler/README.md)
- 3- Matt Mastrac: 1 488 397 bytes (using better PNG bootstrap) [demo](http://xem.github.io/miniBook/2017-10-06%20mmastrac/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/2017-10-06%20mmastrac/README.md)
- 4- winstonewert: 1 971 890 bytes (using PNG bootstrap) [demo](http://xem.github.io/miniBook/2017-07-23%20winstonewert/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/2017-07-23%20winstonewert/README.md)
- 5- jeremyrixon: 2 961 629 bytes (using Unicode and LZW) [demo](http://xem.github.io/miniBook/2017-07-30%20eremyrixon/index.html), [readme](https://github.com/xem/miniBook/blob/gh-pages/2017-07-30%20jeremyrixon/README.md)