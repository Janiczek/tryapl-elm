// @janiczek's changes to https://github.com/abrudz/lb/blob/master/lb.js
// * BQN386 font used instead of DejaVu Sans Mono
// * Copied over tooltip labels from RIDE
// * Styled the tooltips a little with CSS.
// * custom event `lang-bar-insert-char` emitted whenever the language bar inserts a character
//     (this is due to the language bar stopping the input event from bubbling up in that case, which breaks usecases from Elm)
(_ => {
  let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }, he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
    , tcs = '<-←xx×/\\×:-÷*O⍟[-⌹-]⌹OO○77⌈FF⌈ll⌊LL⌊T_⌶II⌶|_⊥TT⊤-|⊣|-⊢=/≠L-≠<=≤<_≤>=≥>_≥==≡=_≡7=≢L=≢vv∨^^∧^~⍲v~⍱^|↑v|↓((⊂cc⊂(_⊆c_⊆))⊃[|⌷|]⌷A|⍋V|⍒ii⍳i_⍸ee∊e_⍷' +
      'uu∪UU∪nn∩/-⌿\\-⍀,-⍪rr⍴pp⍴O|⌽O-⊖O\\⍉::¨""¨~:⍨~"⍨*:⍣*"⍣oo∘o:⍤o"⍤O:⍥O"⍥[\'⍞\']⍞[]⎕[:⍠:]⍠[=⌸=]⌸[<⌺>]⌺o_⍎oT⍕o-⍕<>⋄^v⋄on⍝->→aa⍺ww⍵VV∇v-∇--¯0~⍬' +
      'AA∆^-∆A_⍙^=⍙[?⍰?]⍰:V⍢∇"⍢||∥ox¤)_⊇_)⊇V~⍫\'\'`'
    , lbs = [
      '←Left Arrow (←)\n\nAssignment\n\nNaming:\n    V ← 5 6 7\n    (i(j k)) ← 4(5 6)\n    sum ← +⌿\n    product ← {×/⍵}\n    inverse ← ⍣¯1\n\nModification:\n    V +← 1\n    V[2] ← 0\n    (⊃V) ← 2',
      ' ',
      "+Plus (+)\n\nMonadic function:  Conjugate\n\n      + 1.2 0j4 ¯5j¯6\n1.2 0J¯4 ¯5J6\n\nDyadic function:   Plus\n\n      1 2 3 4 + 10\n11 12 13 14\n\n      1 2 3 + 2 ¯4 1\n3 ¯2 4\n\n      +/ 1 2 3\n6",
      "-Minus (-)\n\nMonadic function:  Negate\n\n      - 3.2 ¯7 0\n¯3.2 7 0\n\nDyadic function:   Minus\n\n      3 7 9 - 5\n¯2 2 4\n\n      5 1 4 - 2 3 4\n3 ¯2 0",
      "×Times (×)\n\nMonadic function:  Direction\n\n      × 3.1 ¯2 0 3j4\n1 ¯1 0 0.6J0.8\n\nDyadic function:   Times\n\n      2 ¯3 4.5 × ¯3 ¯4 2\n¯6 12 9\n\n      3 1 4 × 10\n30 10 40\n\n      ×/ 2 3 4\n24",
      "÷Divide (÷)\n\nMonadic function:  Reciprocal\n\n      ÷ 1 2 3\n1 0.5 0.333333\n\nDyadic function:   Divide\n\n      1 2 3 ÷ 4 5 7\n0.25 0.4 0.428571\n\n      10 ÷ ¯2 0.5\n¯5 20",
      "*Star (*)\n\nMonadic function:  Exponential\n\n      * 0 1 2\n1 2.71828 7.38906\n\nDyadic function:   Power\n\n      49 5 ¯4 * 0.5 2 0.5\n7 25 0J2",
      "⍟Log (⍟)\n\nMonadic function:  Natural Logarithm\n\n      ⍟ 1 2 3 2.7182818285\n0 0.693147 1.09861 1\n\nDyadic function:   Logarithm\n\n      2 10 ⍟ 32 1000\n5 3",
      "⌹Domino (⌹)\n\nMonadic function:  Matrix Inverse\n\n      mat\n1 2\n3 4\n      ⌹ mat\n¯2    1\n 1.5 ¯0.5\n\nDyadic function:   Matrix Divide\n\n      5 6 ⌹ mat\n¯4 4.5",
      "○Circle (○)\n\nMonadic function:  Pi Times\n\n      ○ 0 1 2\n0 3.14159 6.28319\n\nDyadic function:   Circular Functions (Trig)\n          Note: Angles are in radians\n                radians ← ○ degrees ÷ 180\n\n      1 ○ 0 1.5707963 3.1415927\n0 1 ¯4.64102E¯8\n\n ⍺   ⍺ ○ ⍵         ⍺   ⍺ ○ ⍵\n                   0   (1-⍵*2)*0.5\n¯1   Arcsin ⍵      1   Sine ⍵\n¯2   Arccos ⍵      2   Cosine ⍵\n¯3   Arctan ⍵      3   Tangent ⍵\n¯4   (¯1+⍵*2)*0.5  4   (1+⍵*2)*0.5\n¯5   Arcsinh ⍵     5   Sinh ⍵\n¯6   Arccosh ⍵     6   Cosh ⍵\n¯7   Arctanh ⍵     7   Tanh ⍵\n¯8   -8○⍵          8   (-1+⍵*2)*0.5\n¯9   ⍵             9   real part of ⍵\n¯10  +⍵           10   |⍵\n¯11  ⍵×0J1        11   imaginary part of ⍵\n¯12  *⍵×0J1       12   phase of ⍵",
      "!Exclamation Mark (!)\n\nMonadic function:  Factorial\n\n      ! 3 9 ¯0.11\n6 362880 1.07683\n\nDyadic function:   Binomial\n\n      2 1 3 ! 3 10 ¯0.11\n3 10 ¯0.0429385",
      "?Question Mark (?)\n\nMonadic function:  Roll\n\n      ? 6 6 6 6 6\n4 3 6 3 5\n\n      ? 0 0\n0.260561 0.929928\n\nDyadic function:   Deal\n\n      13 ? 52\n36 31 44 11 27 42 13 8 2 33 19 34 6",
      ' ',
      "|Stile (|)\n\nMonadic function:  Magnitude (Absolute value)\n\n      | 2.3 ¯4 0 3j4\n2.3 4 0 5\n\nDyadic function:   Residue (Remainder/Modulus)\n\n      2 10 ¯2.5 | 7 ¯13 8\n1 7 ¯2",
      "⌈Upstile (⌈)\n\nMonadic function:  Ceiling (Round Up)\n\n      ⌈ 3.4 ¯3.4 3 0\n4 ¯3 3 0\n\nDyadic function:   Maximum\n\n      1.1 ¯2 ⌈ 8.1 ¯3.4\n8.1 ¯2\n\n      ⌈/ 3 1 4 1\n4",
      "⌊Downstile (⌊)\n\nMonadic function:  Floor (Round Down)\n\n      ⌊ 3.4 ¯3.4 3 0\n3 ¯4 3 0\n\nDyadic function:   Minimum\n\n      1.1 ¯2 ⌊ 8.1 ¯3.4\n1.1 ¯3.4\n\n      ⌊/ 3 1 4 1\n1",
      "⊥Up Tack (⊥)\n\nDyadic function:   Decode\n\n      2 ⊥ 1 1 0 1   ⍝ binary decode\n13\n\n⍝ mixed radix: conversion of hours,\n⍝ minutes and seconds to seconds:\n\n      24 60 60 ⊥ 2 46 40\n10000",
      "⊤Down Tack (⊤)\n\nDyadic function:   Encode\n\n      2 2 2 2 ⊤ 5 7 12   ⍝ binary encode\n0 0 1\n1 1 1\n0 1 0\n1 1 0\n\n⍝ mixed radix: encode of 10000 seconds\n⍝ to hours, minutes and seconds:\n\n      24 60 60 ⊤ 10000\n2 46 40",
      "⊣Left Tack (⊣)\n\nMonadic function:   Same\n\n      ⊣  1 2 3\n1 2 3\n\nDyadic function: Left\n\n      'L' ⊣ 'R'\nL\n      ⊣/ 1 2 3\n1",
      "⊢Right Tack (⊢)\n\nMonadic function:  Same\n\n      ⊢  1 2 3\n1 2 3\n\nDyadic function:   Right\n\n      'L' ⊢ 'R'\nR\n      ⊢/ 1 2 3\n3",
      ' ',
      "=Equal (=)\n\nDyadic function:   Equal To\n\n      1 2 3 = 4 2 ¯1\n0 1 0\n\n      0 1 0 1 = 0 0 1 1\n1 0 0 1\n\n      'Banana' = 'a'\n0 1 0 1 0 1\n\n      7 = '7'\n0",
      "≠Not Equal (≠)\n\nMonadic function:  Unique Mask\n\n      ≠ 'Banana'\n1 1 1 0 0 0\n\n      ≠ 'Mississippi'\n1 1 1 0 0 0 0 0 1 0 0\n\n\nDyadic function:   Not Equal To\n\n      1 2 3 ≠ 4 2 ¯1\n1 0 1\n\n      0 1 0 1 ≠ 0 0 1 1\n0 1 1 0\n\n      'Banana' ≠ 'a'\n1 0 1 0 1 0\n\n      7 ≠ '7'\n1",
      "≤Less Than Or Equal To (≤)\n\nDyadic function:   Less Than or Equal To\n\n      1 2 3 ≤ 4 2 ¯1\n1 1 0\n      1 2 3 ≤ 2\n1 1 0",
      "<Less Than (<)\n\nDyadic function:   Less Than\n\n      1 2 3 < 4 2 ¯1\n1 0 0\n      1 2 3 < 2\n1 0 0",
      ">Greater Than (>)\n\nDyadic function:   Greater Than\n\n      1 2 3 > 4 2 ¯1\n0 0 1\n      1 2 3 > 2\n0 0 1",
      "≥Greater Than Or Equal To (≥)\n\nDyadic function:   Greater Than or Equal To\n\n      1 2 3 ≥ 4 2 ¯1\n0 1 1\n      1 2 3 ≥ 2\n0 1 1",
      "≡Equal Underbar (≡)\n\nMonadic function:  Depth\n\n      ≡ 7\n0\n      ≡ 'abc'\n1\n      ≡ (1 2)(3 4)\n2\n      ≡ (1 2)(3 4)5\n¯2\n\nDyadic function:   Match\n\n      'b' 'e' 'x' ≡ 'bex'\n1\n      1 ≡ 1 1\n0",
      "≢Equal Underbar Slash (≢)\n\nMonadic function:  Tally\n\n      ≢ 'a'\n1\n      ≢ 7 4 2\n3\n      ≢ 5 4 3⍴0\n5\n      ≢ (1 2)(3 4)\n2\n     mat\n1 2 3\n4 5 6\n      ≢ mat   ⍝ note how \"tally\"\n2\n      ⍴ mat   ⍝ differs from \"shape\"\n2 3\n\nDyadic function:   Not Match\n\n      'bex' ≢ 'b','e','x'\n0\n      1 ≢ 1 1\n1",
      ' ',
      "∨Logical OR (∨)\n\nDyadic function:   Greatest Common Divisor (OR)\n\n      0 1 0 1 ∨ 0 0 1 1\n0 1 1 1\n\n      15 1 2 7 ∨ 35 1 4 0\n5 1 2 7",
      "∧Logical AND (∧)\n\nDyadic function:  Lowest Common Multiple (AND)\n\n      0 1 0 1 ∧ 0 0 1 1\n0 0 0 1\n\n      15 1 2 7 ∧ 35 1 4 0\n105 1 4 0",
      "⍲Logical NAND (⍲)\n\nDyadic function:   NAND\n\n      0 1 0 1 ⍲ 0 0 1 1\n1 1 1 0",
      "⍱Logical NOR (⍱)\n\nDyadic function:   NOR\n\n      0 1 0 1 ⍱ 0 0 1 1\n1 0 0 0",
      ' ',
      "↑Up Arrow (↑)\n\nMonadic function:  Mix\n\n      ↑ 'Hip' 'Hop'\nHip\nHop\n      ↑ (6 4) 5 3\n6 4\n5 0\n3 0\n      ↑[0.5] 'Hip' 'Hop'\nHH\nio\npp\n\nDyadic function:   Take\n\n      4 ↑ 'Pineapple'\nPine\n      ¯5 ↑ 'Pineapple'\napple\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      2 ¯3 ↑ mat\n2 3 4\n6 7 8\n\n      ¯2 ↑ mat\n5  6  7  8\n9 10 11 12\n\n      ¯2 3 ↑ 7\n0 0 0\n7 0 0",
      "↓Down Arrow (↓)\n\nMonadic function:  Split\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      ↓ mat\n┌───────┬───────┬──────────┐\n│1 2 3 4│5 6 7 8│9 10 11 12│\n└───────┴───────┴──────────┘\n\n      ↓[1] mat\n┌─────┬──────┬──────┬──────┐\n│1 5 9│2 6 10│3 7 11│4 8 12│\n└─────┴──────┴──────┴──────┘\n\nDyadic function:   Drop\n\n      4 ↓ 'Pineapple'\napple\n      ¯5 ↓ 'Pineapple'\nPine\n      1 ¯2 ↓ mat\n5  6\n9 10\n      1 ↓ mat\n5  6  7  8\n9 10 11 12",
      "⊂Left Shoe (⊂)\n\nMonadic function:  Enclose\n\n      1(2 3)\n┌─┬───┐\n│1│2 3│\n└─┴───┘\n      ⊂ 1(2 3)\n┌───────┐\n│┌─┬───┐│\n││1│2 3││\n│└─┴───┘│\n└───────┘\n      ⊂⊂ 1(2 3)\n┌─────────┐\n│┌───────┐│\n││┌─┬───┐││\n│││1│2 3│││\n││└─┴───┘││\n│└───────┘│\n└─────────┘\n\nDyadic function:   Partitioned Enclose\n\n       0 1 0 1 ⊂ 1 2 3 4\n┌───┬─┐\n│2 3│4│\n└───┴─┘",
      "⊃Right Shoe (⊃)\n\nMonadic function:  First\n\n      ⊃ 'Word'\nW\n      ⊃ (1 2)(3 4 5)\n1 2\n\nDyadic function:   Pick\n\n      3 ⊃ 'Word'\nr\n      2 ⊃ (1 2)(3 4 5)\n3 4 5\n\n      2 1 ⊃ (1 2)(3 4 5)\n3",
      "⊆Left Shoe Underbar (⊆)\n\nMonadic function:  Nest\n\n      ⊆ 'this'\n┌────┐\n│this│\n└────┘\n      ⊆ 'this' 'that'\n┌────┬────┐\n│this│that│\n└────┴────┘\n\nDyadic function:   Partition\n\n      1 0 0 1 1 ⊆ 1 2 3 4 5\n┌─┬───┐\n│1│4 5│\n└─┴───┘\n       1 1 2 2 2⊆⍳5\n┌───┬─────┐\n│1 2│3 4 5│\n└───┴─────┘\n    ' ' (≠⊆⊢) ' many a  time'\n┌────┬─┬────┐\n│many│a│time│\n└────┴─┴────┘",
      "⌷Squad (⌷)\n\nMonadic function:  Materialise\n\n      ⌷ ⍵\nIf ⍵ is an array, returns ⍵.\nIf ⍵ is ref to an instance of a Class with a\nNumbered Default property, all items of that property\nare returned.\nIf ⍵ is a collection, returns all elements\nin the collection as an array.\n\nDyadic function:   Index\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      2 3 ⌷ mat\n7\n      2 ⌷ mat\n5 6 7 8\n\n      2 ⌷[2] mat\n2 6 10",
      "⍋Grade Up (⍋)\n\nMonadic function:  Grade Up\n\nIndices which would select items in ascending order.\n\n      ⍋ 33 11 44 66 22\n2 5 1 3 4\n\n      names←'Joe' 'Sue' 'Sam'\n      ages←34 22 25\n\n      names[⍋ages]\n┌───┬───┬───┐\n│Sue│Sam│Joe│\n└───┴───┴───┘\n\n      ⍋ 'ABC' ⎕NULL ⍬ ¯3j4 'A'\n3 2 4 5 1\n\nDyadic function:   Dyadic Grade Up\n\nProvide collating sequence for character data.\n\n      ⍋ 'Banana'\n1 2 4 6 3 5\n\n      'an' ⍋ 'Banana'\n2 4 6 3 5 1",
      "⍒Grade Down (⍒)\n\nMonadic function:  Grade Down\n\nIndices which would select items in descending order.\n\n      ⍒ 33 11 44 66 22\n4 3 1 5 2\n\n      names←'Joe' 'Sue' 'Sam'\n      ages←34 22 25\n\n      names[⍒ages]\n┌───┬───┬───┐\n│Joe│Sam│Sue│\n└───┴───┴───┘\n\n      ⍒ 'ABC' ⎕NULL ⍬ ¯3j4 'A'\n1 5 4 2 3\n\nDyadic function:   Dyadic Grade Down\n\nProvide collating sequence for character data.\n\n      ⍒ 'Banana'\n3 5 2 4 6 1\n\n      'an' ⍒ 'Banana'\n1 3 5 2 4 6",
      ' ',
      "⍳Iota (⍳)\n\nMonadic function:  Index Generator\n\n      ⍳ 10\n1 2 3 4 5 6 7 8 9 10\n\n      ⍳ 2 3\n┌───┬───┬───┐\n│1 1│1 2│1 3│\n├───┼───┼───┤\n│2 1│2 2│2 3│\n└───┴───┴───┘\n\nDyadic function:   Index Of\n\n      'ABCDABCDEF' ⍳ 'ACF'\n1 3 10\n\n      mat\n1 2\n3 4\n5 6\n      mat ⍳ 5 6\n3",
      "⍸Iota Underbar (⍸)\n\nMonadic function:  Where\n\n      ⍸ 1 0 0 1 1\n1 4 5\n      bmat\n0 1 0\n1 0 1\n      ⍸ bmat\n┌───┬───┬───┐\n│1 2│2 1│2 3│\n└───┴───┴───┘\n\nDyadic function:   Interval Index\n\n      'AEIOU' ⍸ 'DYALOG'\n1 5 1 3 4 2\n\n      2 4 6 ⍸ 1 2 3 4 5 6 7\n0 1 1 2 2 3 3\n\n      mat\n1 2\n3 4\n5 6\n      mat ⍸ 3 3\n1\n      mat ⍸ 3 5\n2",
      "∊Epsilon (∊)\n\nMonadic function:  Enlist\n\n      mat\n1 2 3\n4 5 6\n      ∊ 0 mat (7 8) 9\n0 1 2 3 4 5 6 7 8 9\n\n      ∊ 2 3⍴1 'abc'\n1 abc 1 abc 1 abc\n\nDyadic function:   Membership\n\n      'abc' 4 ∊ 4 'ab' 'abcd'\n0 1\n      mat ∊ 6 2 7 4\n0 1 0\n1 0 1",
      "⍷Epsilon Underbar (⍷)\n\nDyadic function:   Find\n\n      'ana' ⍷ 'Banana'\n0 1 0 1 0 0\n\n      X Y\n┌───┬───────┐\n│0 1│0 1 0 0│\n│1 0│1 0 0 1│\n│   │0 0 1 0│\n│   │0 1 0 0│\n└───┴───────┘\n\n      X ⍷ Y\n1 0 0 0\n0 0 1 0\n0 1 0 0\n0 0 0 0",
      "∪Down Shoe (∪)\n\nMonadic function:  Unique\n\n      ∪ 'ab' 'ba' 'ab' 1 1 2\n┌──┬──┬─┬─┐\n│ab│ba│1│2│\n└──┴──┴─┴─┘\n\n      mat\nflywheel\nshyster\nflywheel\n     ∪mat\nflywheel\nshyster\n\nDyadic function:   Union\n\n      'ab' 'cde' 'fg' ∪ 'a' 'ab'\n┌──┬───┬──┬─┐\n│ab│cde│fg│a│\n└──┴───┴──┴─┘",
      "∩Up Shoe (∩)\n\nDyadic function:   Intersection\n\n      22 'ab' 'fg' ∩ 'a' 'ab' 22\n┌──┬──┐\n│22│ab│\n└──┴──┘",
      "~Tilde (~)\n\nMonadic function:  NOT\n\n      ~ 0 1 0 1\n1 0 1 0\n\nDyadic function:   Without\n\n      3 1 4 1 5 ~ 5 1\n3 4\n\n      'aa' 'bb' 'cc' 'bb'  ~ 'bb' 'xx'\n┌──┬──┐\n│aa│cc│\n└──┴──┘",
      ' ',
      "/Slash (/)\n\nDyadic function:   Replicate\n\n      3 1 ¯2 2 / 6 7 8 9\n6 6 6 7 0 0 9 9\n\n      1 0 1 0 1 / 'Heart'\nHat\n\nMonadic operator: Reduce (Fold, N-Wise Reduce)\n\n      +/ 1 2 3 4 5\n15\n      2 +/ 1 2 3 4 5   ⍝ pair-wise sum\n3 5 7 9\n\n      cube    ⍝ 3D array\n 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n\n13 14 15 16\n17 18 19 20\n21 22 23 24\n\n      +/ cube\n10 26 42\n58 74 90\n\n      +/[1] cube    ⍝ sum of planes\n14 16 18 20\n22 24 26 28\n30 32 34 36\n\n      +/[2] cube    ⍝ column sums\n15 18 21 24\n51 54 57 60",
      "\"Backslash (\\)\n\nDyadic function:   Expand\n\n      3 ¯2 4 \\ 7 8\n7 7 7 0 0 8 8 8 8\n\n      1 0 1 0 1 \\ 'Hat'\nH a t\n\nMonadic operator: Scan\n\n      +\\ 1 2 3 4 5\n1 3 6 10 15\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      +\\ mat\n1  3  6 10\n5 11 18 26\n9 19 30 42\n\n      +\\[1] mat\n 1  2  3  4\n 6  8 10 12\n15 18 21 24",
      "⌿Slash Bar (⌿)\n\nDyadic function:  Replicate First (Compress First)\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      1 0 2 ⌿ mat\n1  2  3  4\n9 10 11 12\n9 10 11 12\n\nMonadic operator: Reduce First\n\n      +⌿ mat\n15 18 21 24\n\n      2 +⌿ mat     ⍝ pair-wise\n 6  8 10 12\n14 16 18 20",
      "⍀Backslash Bar (⍀)\n\nDyadic function:   Expand First\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      1 0 2 1 ⍀ mat\n1  2  3  4\n0  0  0  0\n5  6  7  8\n5  6  7  8\n9 10 11 12\n\nMonadic operator: Scan First\n\n      +⍀ mat\n 1  2  3  4\n 6  8 10 12\n15 18 21 24",
      ' ',
      ",Comma (,)\n\nMonadic function:  Ravel\n\n      cube    ⍝ 3D array\n1 2\n3 4\n\n5 6\n7 8\n      , cube\n1 2 3 4 5 6 7 8\n\n      ,[2 3] cube    ⍝ Ravel with axes\n1 2 3 4\n5 6 7 8\n\nDyadic function:   Catenate/Laminate (Join)\n\n      1 2 3 , 4 5 6\n1 2 3 4 5 6\n\n      cube , 99\n1 2 99\n3 4 99\n\n5 6 99\n7 8 99\n\n      1 2 3 ,[0.5] 4 5 6   ⍝ Laminate\n1 2 3\n4 5 6",
      "⍪Comma Bar (⍪)\n\nMonadic function:  Table\n\n      ⍪ 2 3 4\n2\n3\n4\n      cube    ⍝ 3D array\n1 2\n3 4\n\n5 6\n7 8\n      ⍪ cube\n1 2 3 4\n5 6 7 8\n\nDyadic function:   Catenate First/Laminate\n\n      mat\n1 2 3\n4 5 6\n\n      mat ⍪ 0\n1 2 3\n4 5 6\n0 0 0\n\n      mat ⍪ 7 8 9\n1 2 3\n4 5 6\n7 8 9",
      "⍴Rho (⍴)\n\nMonadic function:  Shape\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      ⍴ mat\n3 4\n      ⍴⍴ mat\n2\n      ⍴ 'your boat'\n9\n      ⍴ 7\n\n      ⍴⍴ 7\n0\n\nDyadic function:   Reshape\n\n      2 3 4 ⍴ 1 2 3 4 5 6 7\n1 2 3 4\n5 6 7 1\n2 3 4 5\n\n6 7 1 2\n3 4 5 6\n7 1 2 3",
      "⌽Circle Stile (⌽)\n\nMonadic function:  Reverse\n\n      ⌽ 'trams'\nsmart\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      ⌽ mat\n 4  3  2 1\n 8  7  6 5\n12 11 10 9\n\n      ⌽[1] mat\n9 10 11 12\n5  6  7  8\n1  2  3  4\n\nDyadic function:   Rotate\n\n      3 ⌽ 'HatStand'\nStandHat\n\n      ¯2 ⌽ 1 2 3 4 5 6\n5 6 1 2 3 4\n\n      ¯1 ⌽ mat\n 4 1  2  3\n 8 5  6  7\n12 9 10 11\n\n      1 ¯1 2 ⌽ mat\n 2  3 4  1\n 8  5 6  7\n11 12 9 10\n\n      0 1 2 ¯1 ⌽[1] mat\n1  6 11 12\n5 10  3  4\n9  2  7  8",
      "⊖Circle Bar (⊖)\n\nMonadic function:  Reverse First\n\n      mat\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      ⊖ mat\n9 10 11 12\n5  6  7  8\n1  2  3  4\n\nDyadic function:   Rotate First\n\n      0 1 2 ¯1 ⊖ mat\n1  6 11 12\n5 10  3  4\n9  2  7  8",
      "⍉Transpose (⍉)\n\nMonadic function:  Transpose\n\n      mat\n1 2 3\n4 5 6\n\n      ⍉ mat\n1 4\n2 5\n3 6\n\n\nDyadic function:   Dyadic Transpose\n\n      2 1 ⍉ mat\n1 4\n2 5\n3 6\n\n      1 1 ⍉ mat   ⍝ leading diagonal\n1 5",
      ' ',
      "¨Diaeresis (¨)\n\nMonadic operator: Each (Map)\n\n      ⊃¨ 1 2 3 'ABC' (9 8 7)\n1 2 3 A 9\n\n      +/¨ (1 2 3 4)(5 6 7)\n10 18\n\n      3 ↑¨ 1 2 (3 4) 'V'\n┌─────┬─────┬─────┬───┐\n│1 0 0│2 0 0│3 4 0│V  │\n└─────┴─────┴─────┴───┘\n\n      1 2 3 ,¨ 99\n┌────┬────┬────┐\n│1 99│2 99│3 99│\n└────┴────┴────┘",
      "⍨Tilde Diaeresis (⍨)\n\nMonadic operator (f⍨): Commute (Switch)\n\n      2 ⍴ 3     ⍝ ⍺ ⍴ ⍵\n3 3\n      2 ⍴⍨ 3    ⍝ ⍵ ⍴ ⍺\n2 2 2\n      ⍴⍨ 3      ⍝ ⍵ ⍴ ⍵\n3 3 3\n\nMonadic operator(a⍨): Constant\n\n      'mu'⍨ 'any' ⎕NULL   ⍝ Always returns its operand\nmu\n      1E100 ('mu'⍨) 1j1\nmu\n      ¯1⍨¨ ⍳2 3\n¯1 ¯1 ¯1\n¯1 ¯1 ¯1",
      "⍣Star Diaeresis (⍣)\n\nDyadic operator: Power\n\n      cube    ⍝ 3D array\nAB\nCD\n\nEF\nGH\n      (↓⍣1) cube   ⍝ split once\n┌──┬──┐\n│AB│CD│\n├──┼──┤\n│EF│GH│\n└──┴──┘\n      (↓⍣2) cube   ⍝ split twice\n┌───────┬───────┐\n│┌──┬──┐│┌──┬──┐│\n││AB│CD│││EF│GH││\n│└──┴──┘│└──┴──┘│\n└───────┴───────┘\n\n      f ← (32∘+)∘(×∘1.8)   ⍝ Fahrenheit from Celsius\n\n      f ¯273 ¯40 0 100     ⍝ Fahrenheit\n¯459.4 ¯40 32 212\n\n      c ← f⍣¯1             ⍝ Inverse: Celsius from Fahrenheit\n\n      c ¯459.4 ¯40 32 212  ⍝ Celsius\n¯273 ¯40 0 100\n\n      1 +∘÷⍣= 1            ⍝ fixpoint: golden mean\n1.61803",
      ".Dot (.)\n\nDyadic operator: Product\n\nInner Product f.g\n\n      1 2 3 +.× 4 5 6\n32\n      3 ∧.= 3 3 3 3\n1\n      mat\n1 2\n3 4\n      mat +.× mat   ⍝ matrix product\n 7 10\n15 22\n\nOuter Product ∘.g\n\n      1 2 3 ∘.× 4 5 6 7\n 4  5  6  7\n 8 10 12 14\n12 15 18 21",
      "∘Jot (∘)\n\nDyadic operator: Beside and Bind\n\nNB: ∘ is also used in outer product ∘.f - see Dot (.)\n\nBeside\n\n      ⌽∘⍳¨ 3 4 5\n┌─────┬───────┬─────────┐\n│3 2 1│4 3 2 1│5 4 3 2 1│\n└─────┴───────┴─────────┘\n\n      ¯1 ⌽∘⍳¨ 3 4 5\n┌─────┬───────┬─────────┐\n│3 1 2│4 1 2 3│5 1 2 3 4│\n└─────┴───────┴─────────┘\n\n      +∘÷/ 40⍴1    ⍝ continued fraction\n1.61803",
      "⍤Jot Diaeresis (⍤)\n\nDyadic operator (f⍤g): Atop\n\n      -⍤÷ 4      ⍝ (  f⍤g y) ≡  f   g y\n¯0.25\n      12 -⍤÷ 4   ⍝ (x f⍤g y) ≡ (f x g y)\n¯3\n      3 1 4 1 5 ~⍤∊ 1 2 3\n0 0 1 0 1\n\nDyadic operator (f⍤a):   Rank\n\n      cube    ⍝ 3D array\n 1  2  3\n 4  5  6\n\n 7  8  9\n10 11 12\n\n      (,⍤2) cube\n1 2 3  4  5  6\n7 8 9 10 11 12\n\n      cmat    ⍝ character matrix\nabc\nzxy\n      (⍋⍤1) cmat    ⍝ grade-up by row\n1 2 3\n2 3 1\n      nmat     ⍝ numeric matrix\n1  2  3  4\n5  6  7  8\n9 10 11 12\n\n      10 20 30 (+⍤0 1) nmat  ⍝ scalars plus vectors\n11 12 13 14\n25 26 27 28\n39 40 41 42",
      "⍥Circle Dieresis (⍥)\n\nDyadic operator: Over\n\n      -⍥⌊ 3.6                 ⍝ Same as ∘ or ⍤ monadically\n¯3\n      5.1 -⍥⌊ 3.6             ⍝ Applies ⌊ to both arguments\n2\n      'Dyalog' ≡⍥⎕C 'DYALOG'  ⍝ Case-insensitive match\n1\n      'Dyalog' ≡⍥⎕C 'IBM'\n0",
      "@At (@)\n\nDyadic operator: At\n\n      (0@2 4) 1 2 3 4 5\n1 0 3 0 5\n\n      10 (×@2 4) 1 2 3 4 5\n1 20 3 40 5\n\n      (÷@2 4) 1 2 3 4 5\n1 0.5 3 0.25 5\n\n      '*'@(2∘|) 1 2 3 4 5   ⍝ Boolean selection 1 0 1 0 1\n* 2 * 4 *\n\n      ⌽@(2∘|) 1 2 3 4 5     ⍝ Reversal of sub-array 1 3 5\n5 2 3 4 1",
      ' ',
      "⍞Quote Quad (⍞)\n\nNiladic:     Character Input/Output\n\n      chars ← ⍞     ⍝ input session line\nhello\n      chars\nhello\n      ⍞ ← 'Name:'   ⍝ places text in session\nName:\n      ask ← {⍞←⍵ ⋄ (≢⍵)↓⍞}   ⍝ prompt for input:\n\n      name ← ask¨ 'First:  ' 'Second: '\nFirst:  John\nSecond: Brown\n\n      name\n┌────┬─────┐\n│John│Brown│\n└────┴─────┘",
      "⎕Quad (⎕)\n\nNiladic:     Evaluated Input/Output\n\n      2+⎕+4\n⎕:\n      8-5\n9\n\n      2+⎕←3+4\n7\n9",
      "⍠Quad Colon (⍠)\n\nDyadic operator: Variant\n\n      ('a' ⎕R 'x') 'ABC'           ⍝ 'a' replaced with 'x'\nABC\n\n      ('a' ⎕R 'x' ⍠ 'IC' 1) 'ABC'  ⍝ .. Ignoring Case\nxBC\n\n      IgnCase ← ⍠ 'IC' 1\n\n      'a' ⎕R 'x' IgnCase 'ABC'\nxBC",
      "⌸Quad Equal (⌸)\n\nMonadic operator:  Key\n\n      'Banana' {⍺ ⍵}⌸ 3 1 4 1 5 9\n┌─┬─────┐\n│B│3    │\n├─┼─────┤\n│a│1 1 9│\n├─┼─────┤\n│n│4 5  │\n└─┴─────┘\n      'Banana' {⍺,+/⍵}⌸ 3 1 4 1 5 9\nB  3\na 11\nn  9\n      'Banana' {⍺ ⍵}⌸ 1 2 3 4 5 6\n┌─┬─────┐\n│B│1    │\n├─┼─────┤\n│a│2 4 6│\n├─┼─────┤\n│n│3 5  │\n└─┴─────┘\n      {⍺ ⍵}⌸ 'Banana'  ⍝ (same as above)\n┌─┬─────┐\n│B│1    │\n├─┼─────┤\n│a│2 4 6│\n├─┼─────┤\n│n│3 5  │\n└─┴─────┘",
      "⌺Quad Diamond (⌺)\n\nDyadic operator:  Stencil\n\n      mat\n 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16\n\n      ({⊂⍵}⌺3 3) mat\n┌───────┬────────┬────────┬───────┐\n│0 0 0  │0 0 0   │0 0 0   │0 0 0  │\n│0 1 2  │1 2 3   │2 3 4   │3 4 0  │\n│0 5 6  │5 6 7   │6 7 8   │7 8 0  │\n├───────┼────────┼────────┼───────┤\n│0 1  2 │1  2  3 │ 2  3  4│ 3  4 0│\n│0 5  6 │5  6  7 │ 6  7  8│ 7  8 0│\n│0 9 10 │9 10 11 │10 11 12│11 12 0│\n├───────┼────────┼────────┼───────┤\n│0  5  6│ 5  6  7│ 6  7  8│ 7  8 0│\n│0  9 10│ 9 10 11│10 11 12│11 12 0│\n│0 13 14│13 14 15│14 15 16│15 16 0│\n├───────┼────────┼────────┼───────┤\n│0  9 10│ 9 10 11│10 11 12│11 12 0│\n│0 13 14│13 14 15│14 15 16│15 16 0│\n│0  0  0│ 0  0  0│ 0  0  0│ 0  0 0│\n└───────┴────────┴────────┴───────┘\n\n      ({+/,⍵}⌺3 3) mat\n14 24 30 22\n33 54 63 45\n57 90 99 69\n46 72 78 54",
      "⌶I-Beam (⌶)\n\nMonadic operator:  I-Beam\n\nProvides a system-related service\ndetermined by the left-operand value.\n(see Dyalog APL Language Reference Guide)",
      "⍎Hydrant (⍎)\n\nMonadic function:  Execute\n\n      ⍎ '1+1'\n2\n      V ← 1 2 3\n      ⍎ 'V'\n1 2 3",
      "⍕Thorn (⍕)\n\nMonadic function:  Format\n\nNB: In the following examples space characters\n    are represented by small dots: ···\n\n      4 5 6          ⍝ numeric vector\n4 5 6\n      ⍕ 4 5 6        ⍝ equivalent character vector\n4·5·6\n\n      mat            ⍝ numeric matrix\n1 2 3\n4 5 6\n\n      ⍕ mat          ⍝ equivalent character matrix\n1·2·3\n4·5·6\n\nDyadic function:   Format By Specification\n\nField-width and number of decimal places:\n\n      6 2 ⍕ 3.125 0.002\n··3.13··0.00\n\n      6 2 ⍕ mat\n··1.00··2.00··3.00\n··4.00··5.00··6.00\n\n      6 2 ⍕ 1234   ⍝ (field not wide enough)\n******",
      ' ',
      "⋄Diamond (⋄)\n\nSyntax:    Statement Separator\n\n      Statements are evaluated sequentially\n      from left to right.\n\n      A←4 ⋄ A←A×3 ⋄ A÷2\n6",
      "⍝Lamp (⍝)\n\nSyntax: Comment\n\nText to the right of ⍝ is ignored.\n\n      2+3  ⍝ this is a comment\n5",
      "→Right Arrow (→)\n\nSyntax:  Branch (Clear suspension)\n\n      → Label  ⍝ branch to Label:\n      → ⎕LC    ⍝ resume suspended execution\n      → 0      ⍝ exit current function and resume calling line\n      →        ⍝ clear one stack suspension\n\nBranching is superseded by the more modern\ncontrol structures such as :If ... :EndIf",
      "⍵Omega (⍵)\n\nOmega Syntax:           Right argument of a dfn\n\n      2 {⍵+1} 5\n6\n\nDouble-Omega Syntax:    Right operand of a dop\n\n      3 +{⍺ ⍵⍵ ⍵}× 4\n12",
      "⍺Alpha (⍺)\n\nAlpha Syntax:           Left argument of a dfn\n\n      2 {⍺+1} 5\n3\nDouble-Alpha Syntax:    Left Operand of a dop\n\n      3 +{⍺ ⍺⍺ ⍵} 4\n7",
      "∇Del (∇)\n\nDel Syntax:         dfn self-reference (recursion)\n\n      fact←{             ⍝ Factorial ⍵.\n          ⍵≤1: 1         ⍝ small ⍵: finished\n          ⍵×∇ ⍵-1        ⍝ otherwise: recurse\n      }\n\nDouble-Del Syntax:  dop self-reference\n\n    pow←{                ⍝ power operator: apply ⍵⍵ times\n        ⍵⍵=0:⍵           ⍝ ⍵⍵ is 0: finished\n        ⍺⍺ ∇∇(⍵⍵-1)⍺⍺ ⍵  ⍝ otherwise: recurse\n    }",
      "&Ampersand (&)\n\nMonadic operator:  Spawn\n\n      delay←{'Delayed: ',⎕DL ⍵}    ⍝ delay function\n\n      delay 10    ⍝ delay for 10 seconds\nDelayed:  10.2228\n\n      ⎕←delay&10  ⍝ delay for 10 seconds in new thread 1\n1\n\n      2+3 4       ⍝ execute something in current thread\n5 6\n                  ⍝ thread 1 completes:\nDelayed:  10.03183",
      ' ',
      "¯High Minus (¯)\n\nQualifier for negative number\n\n      1 + ¯1 0 1 ¯3\n0 1 2 ¯2\n\n      3e¯2\n0.03",
      "⍬Zilde (⍬)\n\nNiladic:  Empty Numeric Vector\n\n      ⍬≡⍳0\n1\n      ⍬≡0⍴0\n1\n      ⍬≡0 0⍴0\n0\n      ⍬≡''\n0",
      '∆∆\nIDENTIFIER CHARACTER',
      '⍙⍙\nIDENTIFIER CHARACTER'
      ]
    , bqk = ' =1234567890-qwertyuiop\\asdfghjk∙l;\'zxcvbnm,./`[]+!@#$%^&*()_QWERTYUIOP|ASDFGHJKL:"ZXCVBNM<>?~{}'.replace(/∙/g, '')
    , bqv = '`÷¨¯<≤=≥>≠∨∧×?⍵∊⍴~↑↓⍳○*⊢∙⍺⌈⌊_∇∆∘\'⎕⍎⍕∙⊂⊃∩∪⊥⊤|⍝⍀⌿⋄←→⌹⌶⍫⍒⍋⌽⍉⊖⍟⍱⍲!⍰W⍷R⍨YU⍸⍥⍣⊣ASDF⍢H⍤⌸⌷≡≢⊆⊇CVB¤∥⍪⍙⍠⌺⍞⍬'.replace(/∙/g, '')
    , tc = {}, bqc = {} //tab completions and ` completions
  for (let i = 0; i < bqk.length; i++)bqc[bqk[i]] = bqv[i]
  for (let i = 0; i < tcs.length; i += 3)tc[tcs[i] + tcs[i + 1]] = tcs[i + 2]
  for (let i = 0; i < tcs.length; i += 3) { let k = tcs[i + 1] + tcs[i]; tc[k] = tc[k] || tcs[i + 2] }
  let lbh = ''; for (let i = 0; i < lbs.length; i++) {
    let ks = []
    for (let j = 0; j < tcs.length; j += 3)if (lbs[i][0] === tcs[j + 2]) ks.push('\n' + tcs[j] + ' ' + tcs[j + 1] + ' <tab>')
    for (let j = 0; j < bqk.length; j++)if (lbs[i][0] === bqv[j]) ks.push('\n` ' + bqk[j])
    data = lbs[i].slice(1);
    lines = data.split(/\r?\n/);
    lbh += '<b data-title="' + he(lines[0] + (ks.length ? '\n\nCompletions:' + ks.join('') + '\n' : '') + lines.slice(1).join('\n')) + '">' + lbs[i][0] + '</b>'
  }
  let d = document, el = d.createElement('div'); el.innerHTML =
    `<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"BQN386",monospace;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
  [data-title] {
    position: relative;
  }
  [data-title]:hover:after {
    content: attr(data-title);
    transform: translate(0, 100%);
    position: absolute;
    bottom: 0;
    left: 0;  
    padding: 16px;
    border-radius: 4px;
    font-size: 14px;
    background-color: #333648;
    color: #f4f6fd;
    white-space: pre;
  }
 </style>`
  d.body.appendChild(el)
  let t, ts = [], lb = el.firstChild, bqm = 0 //t:textarea or input, lb:language bar, bqm:backquote mode
  let pd = x => x.preventDefault()
  let ev = (x, t, f, c) => x.addEventListener(t, f, c)
  let em = x => x.dispatchEvent(new Event('lang-bar-insert-char'));
  ev(lb, 'mousedown', x => {
    if (x.target.classList.contains('ngn_x')) { lb.hidden = 1; upd(); pd(x); return }
    if (x.target.nodeName === 'B' && t) {
      let i = t.selectionStart, j = t.selectionEnd, v = t.value, s = x.target.textContent
      if (i != null && j != null) { t.value = v.slice(0, i) + s + v.slice(j); t.selectionStart = t.selectionEnd = i + 1; em(t) }
      pd(x); return
    }
  })
  let fk = x => {
    let t = x.target
    if (bqm) {
      let i = t.selectionStart, v = t.value, c = bqc[x.key]; if (x.which > 31) { bqm = 0; d.body.classList.remove('ngn_bq') }
      if (c) { t.value = v.slice(0, i) + c + v.slice(i); t.selectionStart = t.selectionEnd = i + 1; pd(x); em(t); return !1 }
    }
    if (!x.ctrlKey && !x.shiftKey && !x.altKey && !x.metaKey) {
      if ("`½²^º§ùµ°".indexOf(x.key) > -1) {
        bqm = 1; d.body.classList.add('ngn_bq'); pd(x); // ` or other trigger symbol pressed, wait for next key
      } else if (x.key == "Tab") {
        let i = t.selectionStart, v = t.value, c = tc[v.slice(i - 2, i)]
        if (c) { t.value = v.slice(0, i - 2) + c + v.slice(i); t.selectionStart = t.selectionEnd = i - 1; pd(x); em(t); }
      }
    }
  }
  let ff = x => {
    let t0 = x.target, nn = t0.nodeName.toLowerCase()
    if (nn !== 'textarea' && (nn !== 'input' || t0.type !== 'text' && t0.type !== 'search')) return
    t = t0; if (!t.ngn) { t.ngn = 1; ts.push(t); ev(t, 'keydown', fk) }
  }
  let upd = _ => { d.body.style.marginTop = lb.clientHeight + 'px' }
  upd(); ev(window, 'resize', upd)
  ev(d, 'focus', ff, !0); let ae = d.activeElement; ae && ff({ type: 'focus', target: ae })
})();
