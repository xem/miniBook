# New record 1,167,285, bytes
# Details

An improved version of the context mixer with additional models. This time, I had to remove the dictionary preprocessor because it made compression worse when used with the stronger model.
+ We have bypassed the 1,170,000-byte .
− The Word Replacing Transformation reduced the size of the input file and made decoding faster. Decoding is noticeably slower now, but we have 30 minutes available.
The code size has also been reduced, which helped to compensate further for the loss in compression efficiency.
The self-extracting module has also been compressed using Roadroller.

# Total Compressed Data Size

*(excluding `README.md`)*

* `index.html`: **6,517  bytes**
* `payload`: **1,160,768 bytes**

**Total:** **1,167,285 bytes**

