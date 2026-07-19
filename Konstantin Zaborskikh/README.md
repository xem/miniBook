Details
-------

The algorithm is based on context mixing combined with a simple dictionary-based preprocessor for english text (similar to LIPT/WRT). The SFX module (in index.html) was further optimized for size using Roadroller.

-------
Total compressed data size (excluding README.md):
index.html: 9,279 bytes + payload: 1,189,970 bytes = 1,199,249 bytes
-------
Thoughts:
I am not sure that it is possible to win this competition, although the current result is already very close to the target.
The reason is that, in my opinion, the comparison between compressors is not entirely fair.
According to the rules, the target is 1050 KB. This value was based on a comment claiming that the file had been compressed to 1,059,027 bytes using paq8hp12:
https://news.ycombinator.com/item?id=14825867
However, reproducing this result turned out to be far from straightforward.
First, the author never mentioned which compression level or command-line options were used.
Second, obtaining PAQ8HP12.EXE itself was surprisingly difficult, even through Archive.org.
For anyone who is interested, here is the archived download:
https://web.archive.org/web/20070622150418if_/http://www.binet.com.ua/~artest/HKCC/paq8hp12.zip
-------
The file being compressed is 5,324,821 bytes and is located at:
xem/miniBook/example/index.html

SHA-256
CC94A0EEE2E5912E7CF2523ABB02E0EB020B94E51E61B695204481771A5551A8

I tested every available compression level, and none of them produced the reported 1,059,027-byte result.
Every result was either significantly larger or noticeably smaller.
Perhaps the output depends on the processor. The original author used an Intel Core i7-870, while my tests were performed on an Intel Core i5-7300U. 
It is possible that floating-point calculations affect the result, although I do not know whether that is actually the case.
-------
paq8hp12.exe -1
5324821 -> 1130732 (1.6988 bpc) in 62.20 sec (85.601 KB/sec)
paq8hp12.exe -2
5324821 -> 1130732 (1.6988 bpc) in 64.06 sec (83.117 KB/sec)
paq8hp12.exe -3
5324821 -> 1130732 (1.6988 bpc) in 63.22 sec (84.224 KB/sec)
paq8hp12.exe -4
5324821 -> 1057507 (1.5888 bpc) in 267.23 sec (19.926 KB/sec)
paq8hp12.exe -5
5324821 -> 1057507 (1.5888 bpc) in 278.29 sec (19.134 KB/sec)
paq8hp12.exe -6
5324821 -> 1057507 (1.5888 bpc) in 267.24 sec (19.925 KB/sec)
paq8hp12.exe -7
5324821 -> 1057507 (1.5888 bpc) in 265.26 sec (20.074 KB/sec)
-------
One option would be to use the -7 result (1,057,507 bytes) as the reference.
On the other hand, it probably makes more sense to continue using 1,059,027 bytes, since that is the value on which the competition is based.
-------
The main issue:
According to the rules, the compressed archive size and the decoder size are both included in the final score.
In other words, the challenge is not only to achieve an excellent compression ratio, but also to use a fast algorithm while keeping the decoder as small as possible.
However, the published 1,059,027-byte PAQ result does not appear to include the decoder.
The compressed decoder alone would add approximately 99,696 bytes. That decoder is a native Windows PE executable that has already been compressed with a powerful executable packer.
By comparison, my decoder is written entirely in JavaScript, and its size is fully included in the final result.
That means the effective PAQ8HP12 result would have been 1,059,027 + 99,696 = 1,158,723 bytes. That is the baseline I would have expected the competition to use. 
Allow an additional margin of about 15 KB :)
-------
Overall, there is still room for further optimization. Nevertheless, for the reasons described above, I do not think it is realistically possible to win this competition.
Then again, perhaps it is. After all, the goal is to optimize a codec for one very specific file. :)
-------
In any case, I do not have any complaints about the rules. The author clearly stated from the beginning that this was intended to be a difficult challenge.