miniBook
===

Welcome!

This is a compression challenge for Web developers.

The goal is to compress [this HTML page](http://xem.github.io/miniBook/example/index.html) containing the complete work of William Shakespeare,<br>
based on the version hosted on [Project Gutenberg](http://www.gutenberg.org/ebooks/100).

All means are allowed to compress the file, but the decompression must happen entirely in the browser.

The page is encoded in UTF-8 with BOM and has a size of 5,444,052 bytes.<br>
All line breaks are in the form "\r\n".<br>
All characters are ASCII. (````\n\r !"&'(),-.0123456789:;<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ[]_abcdefghijklmnopqrstuvwxyz|}````)

**Rules**

- Fork this repo.
- Copy the "example" folder and rename the copy with your Github username.
- Your folder contains a file called index.html, containing a &lt;xmp> HTML tag followed by a long text.
- You can create other text and/or binary files at your convenience.
- Compress the file as much as you can without altering the output.
- You can use HTML & JavaScript only, no PHP (or any server-side language), no VBScript.
- You can use HTML entities to replace any characters.
- The decompression must be happen in the browser, without any user input, and use a reasonable amount of time (<30 min) and memory (<4GB) on a modern computer.
- You CAN use gzip (or concurrent) compression algorithms, other charsets than UTF-8, binary packing, neural network...
- You CAN use temporary elements (text, canvas...), but need to remove them from the DOM afterwards.
- You can NOT perform network queries or read any file that's not present in your folder.
- You can NOT use any browser extension, or the built-in spellchecker.
- Your score is the total size, in bytes, of the file(s) present in your folder.
- Add a readme file explaining your process.
- Open a merge request to appear in the leaderboard.

**Leaderboard**

(soon!)
