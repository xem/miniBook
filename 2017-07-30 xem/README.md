Xem's entry
===

**Encoding**

- 0: Start with these JS vars:
  - code = {NEW_LETTER: 0, PREDICT_CHAR: 10, PREDICT_WORD: 11};
  - pos = 0;
  - next_char={};
  - next_word={};
  - last_char="";
  - last_word="";
  - line length=0;
  - output="";

- 1: Read the char at position pos.
  - 1A: if this char is not known yet.
    - store 0 (NEW_LETTER) + the last 7 bit of the char in ASCII in the output.
    - Add an empty array for this char in next_char (next_char["<"]=[]).
    - save the char in last_char.
    - increment line_length.
    - increment pos.
    - go to 1.
    
  - 1B: if this char is known
    - todo
    - go to 1.
    
  - 1C: if this char is a space, line break or punctuation
    - todo
    - go to 1.

**Decoding**

