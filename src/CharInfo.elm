module CharInfo exposing
    ( CharInfo
    , Completion(..)
    , DescriptionItem(..)
    , IO(..)
    , allItems
    )


type alias CharInfo =
    { char : Char
    , name : String
    , completions : List Completion
    , description : List DescriptionItem
    }


type Completion
    = Tab String
    | Backquote Char


type DescriptionItem
    = Heading String
    | Category String
    | Plain (List String)
    | CodeComment (List String)
    | Example (List IO)


type IO
    = Input (List String)
    | Output (List String)


allItems : List CharInfo
allItems =
    [ leftArrow
    , plus
    , minus
    , times
    , divide
    , star
    , log
    , domino
    , circle
    , exclamationMark
    , questionMark
    , stile
    , upstile
    , downstile
    , upTack
    , downTack
    , leftTack
    , rightTack
    , equal
    , notEqual
    , lessThanOrEqualTo
    , lessThan
    , greaterThan
    , greaterThanOrEqualTo
    , equalUnderbar
    , equalUnderbarSlash
    , logicalOr
    , logicalAnd
    , logicalNand
    , logicalNor
    , upArrow
    , downArrow
    , leftShoe
    , rightShoe
    , leftShoeUnderbar
    , squad
    , gradeUp
    , gradeDown
    , iota
    , iotaUnderbar
    , epsilon
    , epsilonUnderbar
    , downShoe
    , upShoe
    , tilde
    , slash
    , backslash
    , slashBar
    , backslashBar
    , comma
    , commaBar
    , rho
    , circleStile
    , circleBar
    , transpose
    , diaeresis
    , tildeDiaeresis
    , starDiaeresis
    , dot
    , jot
    , jotDiaeresis
    , circleDiaeresis
    , at
    , quoteQuad
    , quad
    , quadColon
    , quadEqual
    , quadDiamond
    , iBeam
    , hydrant
    , thorn
    , diamond
    , lamp
    , rightArrow
    , omega
    , alpha
    , del
    , ampersand
    , highMinus
    , zilde
    , delta
    , deltaUnderbar
    ]


leftArrow : CharInfo
leftArrow =
    { char = '←'
    , name = "Left Arrow"
    , completions =
        [ Tab "<-"
        , Backquote '['
        ]
    , description =
        [ Heading "Assignment"
        , Heading "Naming:"
        , Example
            [ Input
                [ "V ← 5 6 7"
                , "(i(j k)) ← 4(5 6)"
                , "sum ← +⌿"
                , "product ← {×/⍵}"
                , "inverse ← ⍣¯1"
                ]
            ]
        , Heading "Modification:"
        , Example
            [ Input
                [ "V +← 1"
                , "V[2] ← 0"
                , "(⊃V) ← 2'"
                ]
            ]
        ]
    }


plus : CharInfo
plus =
    { char = '+'
    , name = "Plus"
    , completions = []
    , description =
        [ Category "Monadic function"
        , Heading "Conjugate"
        , Example
            [ Input [ "+ 1.2 0j4 ¯5j¯6" ]
            , Output [ "1.2 0J¯4 ¯5J6" ]
            ]
        , Category "Dyadic function"
        , Heading "Plus"
        , Example
            [ Input [ "1 2 3 4 + 10" ]
            , Output [ "11 12 13 14" ]
            ]
        , Example
            [ Input [ "1 2 3 + 2 ¯4 1" ]
            , Output [ "3 ¯2 4" ]
            ]
        , Example
            [ Input [ "+/ 1 2 3" ]
            , Output [ "6" ]
            ]
        ]
    }


minus : CharInfo
minus =
    { char = '-'
    , name = "Minus"
    , completions = []
    , description =
        [ Category "Monadic function"
        , Heading "Negate"
        , Example
            [ Input [ "- 3.2 ¯7 0" ]
            , Output [ "¯3.2 7 0" ]
            ]
        , Category "Dyadic function"
        , Heading "Minus"
        , Example
            [ Input [ "3 7 9 - 5" ]
            , Output [ "¯2 2 4" ]
            ]
        , Example
            [ Input [ "5 1 4 - 2 3 4" ]
            , Output [ "3 ¯2 0" ]
            ]
        ]
    }


times : CharInfo
times =
    { char = '×'
    , name = "Times"
    , completions =
        [ Tab "xx"
        , Tab "/\\"
        , Backquote '-'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Direction"
        , Example
            [ Input [ "× 3.1 ¯2 0 3j4" ]
            , Output [ "1 ¯1 0 0.6J0.8" ]
            ]
        , Category "Dyadic function"
        , Heading "Times"
        , Example
            [ Input [ "2 ¯3 4.5 × ¯3 ¯4 2" ]
            , Output [ "¯6 12 9" ]
            ]
        , Example
            [ Input [ "3 1 4 × 10" ]
            , Output [ "30 10 40" ]
            ]
        , Example
            [ Input [ "×/ 2 3 4" ]
            , Output [ "24" ]
            ]
        ]
    }


divide : CharInfo
divide =
    { char = '÷'
    , name = "Divide"
    , completions =
        [ Tab ":-"
        , Backquote '='
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Reciprocal"
        , Example
            [ Input [ "÷ 1 2 3" ]
            , Output [ "1 0.5 0.333333" ]
            ]
        , Category "Dyadic function"
        , Heading "Divide"
        , Example
            [ Input [ "1 2 3 ÷ 4 5 7" ]
            , Output [ "0.25 0.4 0.428571" ]
            ]
        , Example
            [ Input [ "10 ÷ ¯2 0.5" ]
            , Output [ "¯5 20" ]
            ]
        ]
    }


star : CharInfo
star =
    { char = '*'
    , name = "Star"
    , completions = [ Backquote 'p' ]
    , description =
        [ Category "Monadic function"
        , Heading "Exponential"
        , Example
            [ Input [ "* 0 1 2" ]
            , Output [ "1 2.71828 7.38906" ]
            ]
        , Category "Dyadic function"
        , Heading "Power"
        , Example
            [ Input [ "49 5 ¯4 * 0.5 2 0.5" ]
            , Output [ "7 25 0J2" ]
            ]
        ]
    }


log : CharInfo
log =
    { char = '⍟'
    , name = "Log"
    , completions =
        [ Tab "*O"
        , Backquote '*'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Natural Logarithm"
        , Example
            [ Input [ "⍟ 1 2 3 2.7182818285" ]
            , Output [ "0 0.693147 1.09861 1" ]
            ]
        , Category "Dyadic function"
        , Heading "Logarithm"
        , Example
            [ Input [ "2 10 ⍟ 32 1000" ]
            , Output [ "5 3" ]
            ]
        ]
    }


domino : CharInfo
domino =
    { char = '⌹'
    , name = "Domino"
    , completions =
        [ Tab "[-"
        , Tab "-]"
        , Backquote '+'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Matrix Inverse"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2"
                , "3 4"
                ]
            ]
        , Example
            [ Input [ "⌹ mat" ]
            , Output
                [ "¯2    1"
                , " 1.5 ¯0.5"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Matrix Divide"
        , Example
            [ Input [ "5 6 ⌹ mat" ]
            , Output [ "¯4 4.5" ]
            ]
        ]
    }


circle : CharInfo
circle =
    { char = '○'
    , name = "Circle"
    , completions =
        [ Tab "OO"
        , Backquote 'o'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Pi Times"
        , Example
            [ Input [ "○ 0 1 2" ]
            , Output [ "0 3.14159 6.28319" ]
            ]
        , Example
            [ Input [ "⌹ mat" ]
            , Output
                [ "¯2    1"
                , " 1.5 ¯0.5"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Circular Functions (Trig)"
        , Plain [ "Note: Angles are in radians" ]
        , Example
            [ Input
                [ "radians ← ○ degrees ÷ 180"
                , ""
                , "1 ○ 0 1.5707963 3.1415927"
                ]
            , Output [ "0 1 ¯4.64102E¯8" ]
            ]
        , Plain
            [ " ⍺   ⍺ ○ ⍵         ⍺   ⍺ ○ ⍵"
            , "                   0   (1-⍵*2)*0.5"
            , "¯1   Arcsin ⍵      1   Sine ⍵"
            , "¯2   Arccos ⍵      2   Cosine ⍵"
            , "¯3   Arctan ⍵      3   Tangent ⍵"
            , "¯4   (¯1+⍵*2)*0.5  4   (1+⍵*2)*0.5"
            , "¯5   Arcsinh ⍵     5   Sinh ⍵"
            , "¯6   Arccosh ⍵     6   Cosh ⍵"
            , "¯7   Arctanh ⍵     7   Tanh ⍵"
            , "¯8   -8○⍵          8   (-1+⍵*2)*0.5"
            , "¯9   ⍵             9   real part of ⍵"
            , "¯10  +⍵           10   |⍵"
            , "¯11  ⍵×0J1        11   imaginary part of ⍵"
            , "¯12  *⍵×0J1       12   phase of ⍵"
            ]
        ]
    }


exclamationMark : CharInfo
exclamationMark =
    { char = '!'
    , name = "Exclamation Mark"
    , completions = [ Backquote '_' ]
    , description =
        [ Category "Monadic function"
        , Heading "Factorial"
        , Example
            [ Input [ "! 3 9 ¯0.11" ]
            , Output [ "6 362880 1.07683" ]
            ]
        , Category "Dyadic function"
        , Heading "Binomial"
        , Example
            [ Input [ "2 1 3 ! 3 10 ¯0.11" ]
            , Output [ "3 10 ¯0.0429385" ]
            ]
        ]
    }


questionMark : CharInfo
questionMark =
    { char = '?'
    , name = "Question Mark"
    , completions = [ Backquote 'q' ]
    , description =
        [ Category "Monadic function"
        , Heading "Roll"
        , Example
            [ Input [ "? 6 6 6 6 6" ]
            , Output [ "4 3 6 3 5" ]
            ]
        , Example
            [ Input [ "? 0 0" ]
            , Output [ "0.260561 0.929928" ]
            ]
        , Category "Dyadic function"
        , Heading "Deal"
        , Example
            [ Input [ "13 ? 52" ]
            , Output [ "36 31 44 11 27 42 13 8 2 33 19 34 6" ]
            ]
        ]
    }


stile : CharInfo
stile =
    { char = '|'
    , name = "Stile"
    , completions = [ Backquote 'm' ]
    , description =
        [ Category "Monadic function"
        , Heading "Magnitude (Absolute value)"
        , Example
            [ Input [ "| 2.3 ¯4 0 3j4" ]
            , Output [ "2.3 4 0 5" ]
            ]
        , Category "Dyadic function"
        , Heading "Residue (Remainder/Modulus)"
        , Example
            [ Input [ "2 10 ¯2.5 | 7 ¯13 8" ]
            , Output [ "1 7 ¯2" ]
            ]
        ]
    }


upstile : CharInfo
upstile =
    { char = '⌈'
    , name = "Upstile"
    , completions =
        [ Tab "77"
        , Tab "FF"
        , Backquote 's'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Ceiling (Round Up)"
        , Example
            [ Input [ "⌈ 3.4 ¯3.4 3 0" ]
            , Output [ "4 ¯3 3 0" ]
            ]
        , Category "Dyadic function"
        , Heading "Maximum"
        , Example
            [ Input [ "1.1 ¯2 ⌈ 8.1 ¯3.4" ]
            , Output [ "8.1 ¯2" ]
            ]
        , Example
            [ Input [ "⌈/ 3 1 4 1" ]
            , Output [ "4" ]
            ]
        ]
    }


downstile : CharInfo
downstile =
    { char = '⌊'
    , name = "Downstile"
    , completions =
        [ Tab "ll"
        , Tab "LL"
        , Backquote 'd'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Floor (Round Down)"
        , Example
            [ Input [ "⌊ 3.4 ¯3.4 3 0" ]
            , Output [ "3 ¯4 3 0" ]
            ]
        , Category "Dyadic function"
        , Heading "Minimum"
        , Example
            [ Input [ "1.1 ¯2 ⌊ 8.1 ¯3.4" ]
            , Output [ "1.1 ¯3.4" ]
            ]
        , Example
            [ Input [ "⌊/ 3 1 4 1" ]
            , Output [ "1" ]
            ]
        ]
    }


upTack : CharInfo
upTack =
    { char = '⊥'
    , name = "Up Tack"
    , completions =
        [ Tab "|_"
        , Backquote 'b'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Decode"
        , Example
            [ Input [ "2 ⊥ 1 1 0 1   ⍝ binary decode" ]
            , Output [ "13" ]
            ]
        , CodeComment
            [ "⍝ mixed radix: conversion of hours,"
            , "⍝ minutes and seconds to seconds:"
            ]
        , Example
            [ Input [ "24 60 60 ⊥ 2 46 40" ]
            , Output [ "10000" ]
            ]
        ]
    }


downTack : CharInfo
downTack =
    { char = '⊤'
    , name = "Down Tack"
    , completions =
        [ Tab "TT"
        , Backquote 'n'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Encode"
        , Example
            [ Input [ "2 2 2 2 ⊤ 5 7 12   ⍝ binary encode" ]
            , Output
                [ "0 0 1"
                , "1 1 1"
                , "0 1 0"
                , "1 1 0"
                ]
            ]
        , CodeComment
            [ "⍝ mixed radix: encode of 10000 seconds"
            , "⍝ to hours, minutes and seconds:"
            ]
        , Example
            [ Input [ "24 60 60 ⊤ 10000" ]
            , Output [ "2 46 40" ]
            ]
        ]
    }


leftTack : CharInfo
leftTack =
    { char = '⊣'
    , name = "Left Tack"
    , completions =
        [ Tab "-|"
        , Backquote '|'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Same"
        , Example
            [ Input [ "⊣  1 2 3" ]
            , Output [ "1 2 3" ]
            ]
        , Category "Dyadic function"
        , Heading "Left"
        , Example
            [ Input [ "'L' ⊣ 'R'" ]
            , Output [ "L" ]
            ]
        , Example
            [ Input [ "⊣/ 1 2 3" ]
            , Output [ "1" ]
            ]
        ]
    }


rightTack : CharInfo
rightTack =
    { char = '⊢'
    , name = "Right Tack"
    , completions =
        [ Tab "|-"
        , Backquote '\\'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Same"
        , Example
            [ Input [ "⊢  1 2 3" ]
            , Output [ "1 2 3" ]
            ]
        , Category "Dyadic function"
        , Heading "Right"
        , Example
            [ Input [ "'L' ⊢ 'R'" ]
            , Output [ "R" ]
            ]
        , Example
            [ Input [ "⊢/ 1 2 3" ]
            , Output [ "3" ]
            ]
        ]
    }


equal : CharInfo
equal =
    { char = '='
    , name = "Equal"
    , completions = [ Backquote '5' ]
    , description =
        [ Category "Dyadic function"
        , Heading "Equal To"
        , Example
            [ Input [ "1 2 3 = 4 2 ¯1" ]
            , Output [ "0 1 0" ]
            ]
        , Example
            [ Input [ "0 1 0 1 = 0 0 1 1" ]
            , Output [ "1 0 0 1" ]
            ]
        , Example
            [ Input [ "'Banana' = 'a'" ]
            , Output [ "0 1 0 1 0 1" ]
            ]
        , Example
            [ Input [ "7 = '7'" ]
            , Output [ "0" ]
            ]
        ]
    }


notEqual : CharInfo
notEqual =
    { char = '≠'
    , name = "Not Equal"
    , completions =
        [ Tab "=/"
        , Tab "L-"
        , Backquote '8'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Unique Mask"
        , Example
            [ Input [ "≠ 'Banana'" ]
            , Output [ "1 1 1 0 0 0" ]
            ]
        , Example
            [ Input [ "≠ 'Mississippi'" ]
            , Output [ "1 1 1 0 0 0 0 0 1 0 0" ]
            ]
        , Category "Dyadic function"
        , Heading "Not Equal To"
        , Example
            [ Input [ "1 2 3 ≠ 4 2 ¯1" ]
            , Output [ "1 0 1" ]
            ]
        , Example
            [ Input [ "0 1 0 1 ≠ 0 0 1 1" ]
            , Output [ "0 1 1 0" ]
            ]
        , Example
            [ Input [ "'Banana' ≠ 'a'" ]
            , Output [ "1 0 1 0 1 0" ]
            ]
        , Example
            [ Input [ "7 ≠ '7'" ]
            , Output [ "1" ]
            ]
        ]
    }


lessThanOrEqualTo : CharInfo
lessThanOrEqualTo =
    { char = '≤'
    , name = "Less Than Or Equal To"
    , completions =
        [ Tab "<="
        , Tab "<_"
        , Backquote '4'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Less Than or Equal To"
        , Example
            [ Input [ "1 2 3 ≤ 4 2 ¯1" ]
            , Output [ "1 1 0" ]
            ]
        , Example
            [ Input [ "1 2 3 ≤ 2" ]
            , Output [ "1 1 0" ]
            ]
        ]
    }


lessThan : CharInfo
lessThan =
    { char = '<'
    , name = "Less Than"
    , completions = [ Backquote '3' ]
    , description =
        [ Category "Dyadic function"
        , Heading "Less Than"
        , Example
            [ Input [ "1 2 3 < 4 2 ¯1" ]
            , Output [ "1 0 0" ]
            ]
        , Example
            [ Input [ "1 2 3 < 2" ]
            , Output [ "1 0 0" ]
            ]
        ]
    }


greaterThan : CharInfo
greaterThan =
    { char = '>'
    , name = "Greater Than"
    , completions = [ Backquote '7' ]
    , description =
        [ Category "Dyadic function"
        , Heading "Greater Than"
        , Example
            [ Input [ "1 2 3 > 4 2 ¯1" ]
            , Output [ "0 0 1" ]
            ]
        , Example
            [ Input [ "1 2 3 > 2" ]
            , Output [ "0 0 1" ]
            ]
        ]
    }


greaterThanOrEqualTo : CharInfo
greaterThanOrEqualTo =
    { char = '≥'
    , name = "Greater Than Or Equal To"
    , completions =
        [ Tab ">="
        , Tab ">_"
        , Backquote '6'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Greater Than or Equal To"
        , Example
            [ Input [ "1 2 3 ≥ 4 2 ¯1" ]
            , Output [ "0 1 1" ]
            ]
        , Example
            [ Input [ "1 2 3 ≥ 2" ]
            , Output [ "0 1 1" ]
            ]
        ]
    }


equalUnderbar : CharInfo
equalUnderbar =
    { char = '≡'
    , name = "Equal Underbar"
    , completions =
        [ Tab "=="
        , Tab "=_"
        , Backquote ':'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Depth"
        , Example
            [ Input [ "≡ 7" ]
            , Output [ "0" ]
            ]
        , Example
            [ Input [ "≡ 'abc'" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "≡ (1 2)(3 4)" ]
            , Output [ "2" ]
            ]
        , Example
            [ Input [ "≡ (1 2)(3 4)5" ]
            , Output [ "¯2" ]
            ]
        , Category "Dyadic function"
        , Heading "Match"
        , Example
            [ Input [ "'b' 'e' 'x' ≡ 'bex'" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "1 ≡ 1 1" ]
            , Output [ "0" ]
            ]
        ]
    }


equalUnderbarSlash : CharInfo
equalUnderbarSlash =
    { char = '≢'
    , name = "Equal Underbar Slash"
    , completions =
        [ Tab "7="
        , Tab "L="
        , Backquote '"'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Tally"
        , Example
            [ Input [ "≢ 'a'" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "≢ 7 4 2" ]
            , Output [ "3" ]
            ]
        , Example
            [ Input [ "≢ 5 4 3⍴0" ]
            , Output [ "5" ]
            ]
        , Example
            [ Input [ "≢ (1 2)(3 4)" ]
            , Output [ "2" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                ]
            ]
        , Example
            [ Input [ "≢ mat   ⍝ note how \"tally\"" ]
            , Output [ "2" ]
            ]
        , Example
            [ Input [ "⍴ mat   ⍝ differs from \"shape\"" ]
            , Output [ "2 3" ]
            ]
        , Category "Dyadic function"
        , Heading "Not Match"
        , Example
            [ Input [ "'bex' ≢ 'b','e','x'" ]
            , Output [ "0" ]
            ]
        , Example
            [ Input [ "1 ≢ 1 1" ]
            , Output [ "1" ]
            ]
        ]
    }


logicalOr : CharInfo
logicalOr =
    { char = '∨'
    , name = "Logical OR"
    , completions =
        [ Tab "vv"
        , Backquote '9'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Greatest Common Divisor (OR)"
        , Example
            [ Input [ "0 1 0 1 ∨ 0 0 1 1" ]
            , Output [ "0 1 1 1" ]
            ]
        , Example
            [ Input [ "15 1 2 7 ∨ 35 1 4 0" ]
            , Output [ "5 1 2 7" ]
            ]
        ]
    }


logicalAnd : CharInfo
logicalAnd =
    { char = '∧'
    , name = "Logical AND"
    , completions =
        [ Tab "^^"
        , Backquote '0'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Lowest Common Multiple (AND)"
        , Example
            [ Input [ "0 1 0 1 ∧ 0 0 1 1" ]
            , Output [ "0 0 0 1" ]
            ]
        , Example
            [ Input [ "15 1 2 7 ∧ 35 1 4 0" ]
            , Output [ "105 1 4 0" ]
            ]
        ]
    }


logicalNand : CharInfo
logicalNand =
    { char = '⍲'
    , name = "Logical NAND"
    , completions =
        [ Tab "^~"
        , Backquote ')'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "NAND"
        , Example
            [ Input [ "0 1 0 1 ⍲ 0 0 1 1" ]
            , Output [ "1 1 1 0" ]
            ]
        ]
    }


logicalNor : CharInfo
logicalNor =
    { char = '⍱'
    , name = "Logical NOR"
    , completions =
        [ Tab "v~"
        , Backquote '('
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "NOR"
        , Example
            [ Input [ "0 1 0 1 ⍱ 0 0 1 1" ]
            , Output [ "1 0 0 0" ]
            ]
        ]
    }


upArrow : CharInfo
upArrow =
    { char = '↑'
    , name = "Up Arrow"
    , completions =
        [ Tab "^|"
        , Backquote 'y'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Mix"
        , Example
            [ Input [ "↑ 'Hip' 'Hop'" ]
            , Output
                [ "Hip"
                , "Hop"
                ]
            ]
        , Example
            [ Input [ "↑ (6 4) 5 3" ]
            , Output
                [ "6 4"
                , "5 0"
                , "3 0"
                ]
            ]
        , Example
            [ Input [ "↑[0.5] 'Hip' 'Hop'" ]
            , Output
                [ "HH"
                , "io"
                , "pp"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Take"
        , Example
            [ Input [ "4 ↑ 'Pineapple'" ]
            , Output [ "Pine" ]
            ]
        , Example
            [ Input [ "¯5 ↑ 'Pineapple'" ]
            , Output [ "apple" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "2 ¯3 ↑ mat" ]
            , Output
                [ "2 3 4"
                , "6 7 8"
                ]
            ]
        , Example
            [ Input [ "¯2 ↑ mat" ]
            , Output
                [ "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "¯2 3 ↑ 7" ]
            , Output
                [ "0 0 0"
                , "7 0 0"
                ]
            ]
        ]
    }


downArrow : CharInfo
downArrow =
    { char = '↓'
    , name = "Down Arrow"
    , completions =
        [ Tab "v|"
        , Backquote 'u'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Split"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "↓ mat" ]
            , Output
                [ "┌───────┬───────┬──────────┐"
                , "│1 2 3 4│5 6 7 8│9 10 11 12│"
                , "└───────┴───────┴──────────┘"
                ]
            ]
        , Example
            [ Input [ "↓[1] mat" ]
            , Output
                [ "┌─────┬──────┬──────┬──────┐"
                , "│1 5 9│2 6 10│3 7 11│4 8 12│"
                , "└─────┴──────┴──────┴──────┘"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Drop"
        , Example
            [ Input [ "4 ↓ 'Pineapple'" ]
            , Output [ "apple" ]
            ]
        , Example
            [ Input [ "¯5 ↓ 'Pineapple'" ]
            , Output [ "Pine" ]
            ]
        , Example
            [ Input [ "1 ¯2 ↓ mat" ]
            , Output
                [ "5  6"
                , "9 10"
                ]
            ]
        , Example
            [ Input [ "1 ↓ mat" ]
            , Output
                [ "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        ]
    }


leftShoe : CharInfo
leftShoe =
    { char = '⊂'
    , name = "Left Shoe"
    , completions =
        [ Tab "(("
        , Tab "cc"
        , Backquote 'z'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Enclose"
        , Example
            [ Input [ "1(2 3)" ]
            , Output
                [ "┌─┬───┐"
                , "│1│2 3│"
                , "└─┴───┘"
                ]
            ]
        , Example
            [ Input [ "⊂ 1(2 3)" ]
            , Output
                [ "┌───────┐"
                , "│┌─┬───┐│"
                , "││1│2 3││"
                , "│└─┴───┘│"
                , "└───────┘"
                ]
            ]
        , Example
            [ Input [ "⊂⊂ 1(2 3)" ]
            , Output
                [ "┌─────────┐"
                , "│┌───────┐│"
                , "││┌─┬───┐││"
                , "│││1│2 3│││"
                , "││└─┴───┘││"
                , "│└───────┘│"
                , "└─────────┘"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Partitioned Enclose"
        , Example
            [ Input [ "0 1 0 1 ⊂ 1 2 3 4" ]
            , Output
                [ "┌───┬─┐"
                , "│2 3│4│"
                , "└───┴─┘"
                ]
            ]
        ]
    }


rightShoe : CharInfo
rightShoe =
    { char = '⊃'
    , name = "Right Shoe"
    , completions =
        [ Tab "))"
        , Backquote 'x'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "First"
        , Example
            [ Input [ "⊃ 'Word'" ]
            , Output [ "W" ]
            ]
        , Example
            [ Input [ "⊃ (1 2)(3 4 5)" ]
            , Output [ "1 2" ]
            ]
        , Category "Dyadic function"
        , Heading "Pick"
        , Example
            [ Input [ "3 ⊃ 'Word'" ]
            , Output [ "r" ]
            ]
        , Example
            [ Input [ "2 ⊃ (1 2)(3 4 5)" ]
            , Output [ "3 4 5" ]
            ]
        , Example
            [ Input [ "2 1 ⊃ (1 2)(3 4 5)" ]
            , Output [ "3" ]
            ]
        ]
    }


leftShoeUnderbar : CharInfo
leftShoeUnderbar =
    { char = '⊆'
    , name = "Left Shoe Underbar"
    , completions =
        [ Tab "(_"
        , Tab "c_"
        , Backquote 'Z'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Nest"
        , Example
            [ Input [ "⊆ 'this'" ]
            , Output
                [ "┌────┐"
                , "│this│"
                , "└────┘"
                ]
            ]
        , Example
            [ Input [ "⊆ 'this' 'that'" ]
            , Output
                [ "┌────┬────┐"
                , "│this│that│"
                , "└────┴────┘"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Partition"
        , Example
            [ Input [ "1 0 0 1 1 ⊆ 1 2 3 4 5" ]
            , Output
                [ "┌─┬───┐"
                , "│1│4 5│"
                , "└─┴───┘"
                ]
            ]
        , Example
            [ Input [ "1 1 2 2 2⊆⍳5" ]
            , Output
                [ "┌───┬─────┐"
                , "│1 2│3 4 5│"
                , "└───┴─────┘"
                ]
            ]
        , Example
            [ Input [ "' ' (≠⊆⊢) ' many a  time'" ]
            , Output
                [ "┌────┬─┬────┐"
                , "│many│a│time│"
                , "└────┴─┴────┘"
                ]
            ]
        ]
    }


squad : CharInfo
squad =
    { char = '⌷'
    , name = "Squad"
    , completions =
        [ Tab "[|"
        , Tab "|]"
        , Backquote 'L'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Materialise"
        , Example [ Input [ "⌷ ⍵" ] ]
        , Plain
            [ "If ⍵ is an array, returns ⍵."
            , "If ⍵ is ref to an instance of a Class with a Numbered Default property, all items of that property are returned."
            , "If ⍵ is a collection, returns all elements in the collection as an array."
            ]
        , Category "Dyadic function"
        , Heading "Index"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "2 3 ⌷ mat" ]
            , Output [ "7" ]
            ]
        , Example
            [ Input [ "2 ⌷ mat" ]
            , Output [ "5 6 7 8" ]
            ]
        , Example
            [ Input [ "2 ⌷[2] mat" ]
            , Output [ "2 6 10" ]
            ]
        ]
    }


gradeUp : CharInfo
gradeUp =
    { char = '⍋'
    , name = "Grade Up"
    , completions =
        [ Tab "A|"
        , Backquote '$'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Grade Up"
        , Plain [ "Indices which would select items in ascending order." ]
        , Example
            [ Input [ "⍋ 33 11 44 66 22" ]
            , Output [ "2 5 1 3 4" ]
            ]
        , Example
            [ Input
                [ "names←'Joe' 'Sue' 'Sam'"
                , "ages←34 22 25"
                , ""
                , "names[⍋ages]"
                ]
            , Output
                [ "┌───┬───┬───┐"
                , "│Sue│Sam│Joe│"
                , "└───┴───┴───┘"
                ]
            ]
        , Example
            [ Input [ "⍋ 'ABC' ⎕NULL ⍬ ¯3j4 'A'" ]
            , Output [ "3 2 4 5 1" ]
            ]
        , Category "Dyadic function"
        , Heading "Dyadic Grade Up"
        , Plain [ "Provide collating sequence for character data." ]
        , Example
            [ Input [ "⍋ 'Banana'" ]
            , Output [ "1 2 4 6 3 5" ]
            ]
        , Example
            [ Input [ "'an' ⍋ 'Banana'" ]
            , Output [ "2 4 6 3 5 1" ]
            ]
        ]
    }


gradeDown : CharInfo
gradeDown =
    { char = '⍒'
    , name = "Grade Down"
    , completions =
        [ Tab "V|"
        , Backquote '#'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Grade Down"
        , Plain [ "Indices which would select items in descending order." ]
        , Example
            [ Input [ "⍒ 33 11 44 66 22" ]
            , Output [ "4 3 1 5 2" ]
            ]
        , Example
            [ Input
                [ "names←'Joe' 'Sue' 'Sam'"
                , "ages←34 22 25"
                , ""
                , "names[⍒ages]"
                ]
            , Output
                [ "┌───┬───┬───┐"
                , "│Joe│Sam│Sue│"
                , "└───┴───┴───┘"
                ]
            ]
        , Example
            [ Input [ "⍒ 'ABC' ⎕NULL ⍬ ¯3j4 'A'" ]
            , Output [ "1 5 4 2 3" ]
            ]
        , Category "Dyadic function"
        , Heading "Dyadic Grade Down"
        , Plain [ "Provide collating sequence for character data." ]
        , Example
            [ Input [ "⍒ 'Banana'" ]
            , Output [ "3 5 2 4 6 1" ]
            ]
        , Example
            [ Input [ "'an' ⍒ 'Banana'" ]
            , Output [ "1 3 5 2 4 6" ]
            ]
        ]
    }


iota : CharInfo
iota =
    { char = '⍳'
    , name = "Iota"
    , completions =
        [ Tab "ii"
        , Backquote 'i'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Index Generator"
        , Example
            [ Input [ "⍳ 10" ]
            , Output [ "1 2 3 4 5 6 7 8 9 10" ]
            ]
        , Example
            [ Input [ "⍳ 2 3" ]
            , Output
                [ "┌───┬───┬───┐"
                , "│1 1│1 2│1 3│"
                , "├───┼───┼───┤"
                , "│2 1│2 2│2 3│"
                , "└───┴───┴───┘"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Index Of"
        , Example
            [ Input [ "'ABCDABCDEF' ⍳ 'ACF'" ]
            , Output [ "1 3 10" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2"
                , "3 4"
                , "5 6"
                ]
            ]
        , Example
            [ Input [ "mat ⍳ 5 6" ]
            , Output [ "3" ]
            ]
        ]
    }


iotaUnderbar : CharInfo
iotaUnderbar =
    { char = '⍸'
    , name = "Iota Underbar"
    , completions =
        [ Tab "i_"
        , Backquote 'I'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Where"
        , Example
            [ Input [ "⍸ 1 0 0 1 1" ]
            , Output [ "1 4 5" ]
            ]
        , Example
            [ Input [ "bmat" ]
            , Output
                [ "0 1 0"
                , "1 0 1"
                ]
            ]
        , Example
            [ Input [ "⍸ bmat" ]
            , Output
                [ "┌───┬───┬───┐"
                , "│1 2│2 1│2 3│"
                , "└───┴───┴───┘"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Interval Index"
        , Example
            [ Input [ "'AEIOU' ⍸ 'DYALOG'" ]
            , Output [ "1 5 1 3 4 2" ]
            ]
        , Example
            [ Input [ "2 4 6 ⍸ 1 2 3 4 5 6 7" ]
            , Output [ "0 1 1 2 2 3 3" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2"
                , "3 4"
                , "5 6"
                ]
            ]
        , Example
            [ Input [ "mat ⍸ 3 3" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "mat ⍸ 3 5" ]
            , Output [ "2" ]
            ]
        ]
    }


epsilon : CharInfo
epsilon =
    { char = '∊'
    , name = "Epsilon"
    , completions =
        [ Tab "ee"
        , Backquote 'e'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Enlist"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                ]
            ]
        , Example
            [ Input [ "∊ 0 mat (7 8) 9" ]
            , Output [ "0 1 2 3 4 5 6 7 8 9" ]
            ]
        , Example
            [ Input [ "∊ 2 3⍴1 'abc'" ]
            , Output [ "1 abc 1 abc 1 abc" ]
            ]
        , Category "Dyadic function"
        , Heading "Membership"
        , Example
            [ Input [ "'abc' 4 ∊ 4 'ab' 'abcd'" ]
            , Output [ "0 1" ]
            ]
        , Example
            [ Input [ "mat ∊ 6 2 7 4" ]
            , Output
                [ "0 1 0"
                , "1 0 1"
                ]
            ]
        ]
    }


epsilonUnderbar : CharInfo
epsilonUnderbar =
    { char = '⍷'
    , name = "Epsilon Underbar"
    , completions =
        [ Tab "e_"
        , Backquote 'E'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Find"
        , Example
            [ Input [ "'ana' ⍷ 'Banana'" ]
            , Output [ "0 1 0 1 0 0" ]
            ]
        , Example
            [ Input [ "X Y" ]
            , Output
                [ "┌───┬───────┐"
                , "│0 1│0 1 0 0│"
                , "│1 0│1 0 0 1│"
                , "│   │0 0 1 0│"
                , "│   │0 1 0 0│"
                , "└───┴───────┘"
                ]
            ]
        , Example
            [ Input [ "X ⍷ Y" ]
            , Output
                [ "1 0 0 0"
                , "0 0 1 0"
                , "0 1 0 0"
                , "0 0 0 0"
                ]
            ]
        ]
    }


downShoe : CharInfo
downShoe =
    { char = '∪'
    , name = "Down Shoe"
    , completions =
        [ Tab "uu"
        , Tab "UU"
        , Backquote 'v'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Unique"
        , Example
            [ Input [ "∪ 'ab' 'ba' 'ab' 1 1 2" ]
            , Output
                [ "┌──┬──┬─┬─┐"
                , "│ab│ba│1│2│"
                , "└──┴──┴─┴─┘"
                ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "flywheel"
                , "shyster "
                , "flywheel"
                ]
            ]
        , Example
            [ Input [ "∪mat" ]
            , Output
                [ "flywheel"
                , "shyster "
                ]
            ]
        , Category "Dyadic function"
        , Heading "Union"
        , Example
            [ Input [ "'ab' 'cde' 'fg' ∪ 'a' 'ab'" ]
            , Output
                [ "┌──┬───┬──┬─┐"
                , "│ab│cde│fg│a│"
                , "└──┴───┴──┴─┘"
                ]
            ]
        ]
    }


upShoe : CharInfo
upShoe =
    { char = '∩'
    , name = "Up Shoe"
    , completions =
        [ Tab "nn"
        , Backquote 'c'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Intersection"
        , Example
            [ Input [ "22 'ab' 'fg' ∩ 'a' 'ab' 22" ]
            , Output
                [ "┌──┬──┐"
                , "│22│ab│"
                , "└──┴──┘"
                ]
            ]
        ]
    }


tilde : CharInfo
tilde =
    { char = '~'
    , name = "Tilde"
    , completions = [ Backquote 't' ]
    , description =
        [ Category "Monadic function"
        , Heading "NOT"
        , Example
            [ Input [ "~ 0 1 0 1" ]
            , Output [ "1 0 1 0" ]
            ]
        , Category "Dyadic function"
        , Heading "Without"
        , Example
            [ Input [ "3 1 4 1 5 ~ 5 1" ]
            , Output [ "3 4" ]
            ]
        , Example
            [ Input [ "'aa' 'bb' 'cc' 'bb'  ~ 'bb' 'xx'" ]
            , Output
                [ "┌──┬──┐"
                , "│aa│cc│"
                , "└──┴──┘"
                ]
            ]
        ]
    }


slash : CharInfo
slash =
    { char = '/'
    , name = "Slash"
    , completions = []
    , description =
        [ Category "Dyadic function"
        , Heading "Replicate"
        , Example
            [ Input [ "3 1 ¯2 2 / 6 7 8 9" ]
            , Output [ "6 6 6 7 0 0 9 9" ]
            ]
        , Example
            [ Input [ "1 0 1 0 1 / 'Heart'" ]
            , Output [ "Hat" ]
            ]
        , Category "Monadic operator"
        , Heading "Reduce (Fold, N-Wise Reduce)"
        , Example
            [ Input [ "+/ 1 2 3 4 5" ]
            , Output [ "15" ]
            ]
        , Example
            [ Input [ "2 +/ 1 2 3 4 5   ⍝ pair-wise sum" ]
            , Output [ "3 5 7 9" ]
            ]
        , Example
            [ Input [ "cube    ⍝ 3D array" ]
            , Output
                [ " 1  2  3  4"
                , " 5  6  7  8"
                , " 9 10 11 12"
                , "           "
                , "13 14 15 16"
                , "17 18 19 20"
                , "21 22 23 24"
                ]
            ]
        , Example
            [ Input [ "+/ cube" ]
            , Output
                [ "10 26 42"
                , "58 74 90"
                ]
            ]
        , Example
            [ Input [ "+/[1] cube    ⍝ sum of planes" ]
            , Output
                [ "14 16 18 20"
                , "22 24 26 28"
                , "30 32 34 36"
                ]
            ]
        , Example
            [ Input [ "+/[2] cube    ⍝ column sums" ]
            , Output
                [ "15 18 21 24"
                , "51 54 57 60"
                ]
            ]
        ]
    }


backslash : CharInfo
backslash =
    { char = '\\'
    , name = "Backslash"
    , completions = []
    , description =
        [ Category "Dyadic function"
        , Heading "Expand"
        , Example
            [ Input [ "3 ¯2 4 \\ 7 8" ]
            , Output [ "7 7 7 0 0 8 8 8 8" ]
            ]
        , Example
            [ Input [ "1 0 1 0 1 \\ 'Hat'" ]
            , Output [ "H a t" ]
            ]
        , Category "Monadic operator"
        , Heading "Scan"
        , Example
            [ Input [ "+\\ 1 2 3 4 5" ]
            , Output [ "1 3 6 10 15" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "+\\ mat" ]
            , Output
                [ "1  3  6 10"
                , "5 11 18 26"
                , "9 19 30 42"
                ]
            ]
        , Example
            [ Input [ "+\\[1] mat" ]
            , Output
                [ " 1  2  3  4"
                , " 6  8 10 12"
                , "15 18 21 24"
                ]
            ]
        ]
    }


slashBar : CharInfo
slashBar =
    { char = '⌿'
    , name = "Slash Bar"
    , completions =
        [ Tab "/-"
        , Backquote '/'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Replicate First (Compress First)"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "1 0 2 ⌿ mat" ]
            , Output
                [ "1  2  3  4"
                , "9 10 11 12"
                , "9 10 11 12"
                ]
            ]
        , Category "Monadic operator"
        , Heading "Reduce First"
        , Example
            [ Input [ "+⌿ mat" ]
            , Output [ "15 18 21 24" ]
            ]
        , Example
            [ Input [ "2 +⌿ mat     ⍝ pair-wise" ]
            , Output
                [ " 6  8 10 12"
                , "14 16 18 20"
                ]
            ]
        ]
    }


backslashBar : CharInfo
backslashBar =
    { char = '⍀'
    , name = "Backslash Bar"
    , completions =
        [ Tab "\\-"
        , Backquote '.'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Expand First"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "1 0 2 1 ⍀ mat" ]
            , Output
                [ "1  2  3  4"
                , "0  0  0  0"
                , "5  6  7  8"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Category "Monadic operator"
        , Heading "Scan First"
        , Example
            [ Input [ "+⍀ mat" ]
            , Output
                [ " 1  2  3  4"
                , " 6  8 10 12"
                , "15 18 21 24"
                ]
            ]
        ]
    }


comma : CharInfo
comma =
    { char = ','
    , name = "Comma"
    , completions = []
    , description =
        [ Category "Monadic function"
        , Heading "Ravel"
        , Example
            [ Input [ "cube    ⍝ 3D array" ]
            , Output
                [ "1 2"
                , "3 4"
                , ""
                , "5 6"
                , "7 8"
                ]
            ]
        , Example
            [ Input [ ", cube" ]
            , Output [ "1 2 3 4 5 6 7 8" ]
            ]
        , Example
            [ Input [ ",[2 3] cube    ⍝ Ravel with axes" ]
            , Output
                [ "1 2 3 4"
                , "5 6 7 8"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Catenate/Laminate (Join)"
        , Example
            [ Input [ "1 2 3 , 4 5 6" ]
            , Output [ "1 2 3 4 5 6" ]
            ]
        , Example
            [ Input [ "cube , 99" ]
            , Output
                [ "1 2 99"
                , "3 4 99"
                , ""
                , "5 6 99"
                , "7 8 99"
                ]
            ]
        , Example
            [ Input [ "1 2 3 ,[0.5] 4 5 6   ⍝ Laminate" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                ]
            ]
        ]
    }


commaBar : CharInfo
commaBar =
    { char = '⍪'
    , name = "Comma Bar"
    , completions =
        [ Tab ",-"
        , Backquote '<'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Table"
        , Example
            [ Input [ "⍪ 2 3 4" ]
            , Output
                [ "2"
                , "3"
                , "4"
                ]
            ]
        , Example
            [ Input [ "cube    ⍝ 3D array" ]
            , Output
                [ "1 2"
                , "3 4"
                , ""
                , "5 6"
                , "7 8"
                ]
            ]
        , Example
            [ Input [ "⍪ cube" ]
            , Output
                [ "1 2 3 4"
                , "5 6 7 8"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Catenate First/Laminate"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                ]
            ]
        , Example
            [ Input [ "mat ⍪ 0" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                , "0 0 0"
                ]
            ]
        , Example
            [ Input [ "mat ⍪ 7 8 9" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                , "7 8 9"
                ]
            ]
        ]
    }


rho : CharInfo
rho =
    { char = '⍴'
    , name = "Rho"
    , completions =
        [ Tab "rr"
        , Tab "pp"
        , Backquote 'r'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Shape"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "⍴ mat" ]
            , Output [ "3 4" ]
            ]
        , Example
            [ Input [ "⍴⍴ mat" ]
            , Output [ "2" ]
            ]
        , Example
            [ Input [ "⍴ 'your boat'" ]
            , Output [ "9" ]
            ]
        , Example
            [ Input [ "⍴ 7" ]
            , Output [ "" ]
            ]
        , Example
            [ Input [ "⍴⍴ 7" ]
            , Output [ "0" ]
            ]
        , Category "Dyadic function"
        , Heading "Reshape"
        , Example
            [ Input [ "2 3 4 ⍴ 1 2 3 4 5 6 7" ]
            , Output
                [ "1 2 3 4"
                , "5 6 7 1"
                , "2 3 4 5"
                , ""
                , "6 7 1 2"
                , "3 4 5 6"
                , "7 1 2 3"
                ]
            ]
        ]
    }


circleStile : CharInfo
circleStile =
    { char = '⌽'
    , name = "Circle Stile"
    , completions =
        [ Tab "O|"
        , Backquote '%'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Reverse"
        , Example
            [ Input [ "⌽ 'trams'" ]
            , Output [ "smart" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "⌽ mat" ]
            , Output
                [ " 4  3  2 1"
                , " 8  7  6 5"
                , "12 11 10 9"
                ]
            ]
        , Example
            [ Input [ "⌽[1] mat" ]
            , Output
                [ "9 10 11 12"
                , "5  6  7  8"
                , "1  2  3  4"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Rotate"
        , Example
            [ Input [ "3 ⌽ 'HatStand'" ]
            , Output [ "StandHat" ]
            ]
        , Example
            [ Input [ "¯2 ⌽ 1 2 3 4 5 6" ]
            , Output [ "5 6 1 2 3 4" ]
            ]
        , Example
            [ Input [ "¯1 ⌽ mat" ]
            , Output
                [ " 4 1  2  3"
                , " 8 5  6  7"
                , "12 9 10 11"
                ]
            ]
        , Example
            [ Input [ "1 ¯1 2 ⌽ mat" ]
            , Output
                [ " 2  3 4  1"
                , " 8  5 6  7"
                , "11 12 9 10"
                ]
            ]
        , Example
            [ Input [ "0 1 2 ¯1 ⌽[1] mat" ]
            , Output
                [ "1  6 11 12"
                , "5 10  3  4"
                , "9  2  7  8"
                ]
            ]
        ]
    }


circleBar : CharInfo
circleBar =
    { char = '⊖'
    , name = "Circle Bar"
    , completions =
        [ Tab "O-"
        , Backquote '&'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Reverse First"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "⊖ mat" ]
            , Output
                [ "9 10 11 12"
                , "5  6  7  8"
                , "1  2  3  4"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Rotate First"
        , Example
            [ Input [ "0 1 2 ¯1 ⊖ mat" ]
            , Output
                [ "1  6 11 12"
                , "5 10  3  4"
                , "9  2  7  8"
                ]
            ]
        ]
    }


transpose : CharInfo
transpose =
    { char = '⍉'
    , name = "Transpose"
    , completions =
        [ Tab "O\\"
        , Backquote '^'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Transpose"
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                ]
            ]
        , Example
            [ Input [ "⍉ mat" ]
            , Output
                [ "1 4"
                , "2 5"
                , "3 6"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Dyadic Transpose"
        , Example
            [ Input [ "2 1 ⍉ mat" ]
            , Output
                [ "1 4"
                , "2 5"
                , "3 6"
                ]
            ]
        , Example
            [ Input [ "1 1 ⍉ mat   ⍝ leading diagonal" ]
            , Output [ "1 5" ]
            ]
        ]
    }


diaeresis : CharInfo
diaeresis =
    { char = '¨'
    , name = "Diaeresis"
    , completions =
        [ Tab "::"
        , Tab "\"\""
        , Backquote '1'
        ]
    , description =
        [ Category "Monadic operator"
        , Heading "Each (Map)"
        , Example
            [ Input [ "⊃¨ 1 2 3 'ABC' (9 8 7)" ]
            , Output [ "1 2 3 A 9" ]
            ]
        , Example
            [ Input [ "+/¨ (1 2 3 4)(5 6 7)" ]
            , Output [ "10 18" ]
            ]
        , Example
            [ Input [ "3 ↑¨ 1 2 (3 4) 'V'" ]
            , Output
                [ "┌─────┬─────┬─────┬───┐"
                , "│1 0 0│2 0 0│3 4 0│V  │"
                , "└─────┴─────┴─────┴───┘"
                ]
            ]
        , Example
            [ Input [ "1 2 3 ,¨ 99" ]
            , Output
                [ "┌────┬────┬────┐"
                , "│1 99│2 99│3 99│"
                , "└────┴────┴────┘"
                ]
            ]
        ]
    }


tildeDiaeresis : CharInfo
tildeDiaeresis =
    { char = '⍨'
    , name = "Tilde Diaeresis"
    , completions =
        [ Tab "~:"
        , Tab "~\""
        , Backquote 'T'
        ]
    , description =
        [ Category "Monadic operator (f⍨)"
        , Heading "Commute (Switch)"
        , Example
            [ Input [ "2 ⍴ 3     ⍝ ⍺ ⍴ ⍵" ]
            , Output [ "3 3" ]
            ]
        , Example
            [ Input [ "2 ⍴⍨ 3    ⍝ ⍵ ⍴ ⍺" ]
            , Output [ "2 2 2" ]
            ]
        , Example
            [ Input [ "⍴⍨ 3      ⍝ ⍵ ⍴ ⍵" ]
            , Output [ "3 3 3" ]
            ]
        , Category "Monadic operator (a⍨)"
        , Heading "Constant"
        , Example
            [ Input [ "'mu'⍨ 'any' ⎕NULL   ⍝ Always returns its operand" ]
            , Output [ "mu" ]
            ]
        , Example
            [ Input [ "1E100 ('mu'⍨) 1j1" ]
            , Output [ "mu" ]
            ]
        , Example
            [ Input [ "¯1⍨¨ ⍳2 3" ]
            , Output
                [ "¯1 ¯1 ¯1"
                , "¯1 ¯1 ¯1"
                ]
            ]
        ]
    }


starDiaeresis : CharInfo
starDiaeresis =
    { char = '⍣'
    , name = "Star Diaeresis"
    , completions =
        [ Tab "*:"
        , Tab "*\""
        , Backquote 'P'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Power"
        , Example
            [ Input [ "cube    ⍝ 3D array" ]
            , Output
                [ "AB"
                , "CD"
                , ""
                , "EF"
                , "GH"
                ]
            ]
        , Example
            [ Input [ "(↓⍣1) cube   ⍝ split once" ]
            , Output
                [ "┌──┬──┐"
                , "│AB│CD│"
                , "├──┼──┤"
                , "│EF│GH│"
                , "└──┴──┘"
                ]
            ]
        , Example
            [ Input [ "(↓⍣2) cube   ⍝ split twice" ]
            , Output
                [ "┌───────┬───────┐"
                , "│┌──┬──┐│┌──┬──┐│"
                , "││AB│CD│││EF│GH││"
                , "│└──┴──┘│└──┴──┘│"
                , "└───────┴───────┘"
                ]
            ]
        , Example
            [ Input
                [ "f ← (32∘+)∘(×∘1.8)   ⍝ Fahrenheit from Celsius"
                , ""
                , "f ¯273 ¯40 0 100     ⍝ Fahrenheit"
                ]
            , Output [ "¯459.4 ¯40 32 212" ]
            ]
        , Example
            [ Input
                [ "c ← f⍣¯1             ⍝ Inverse: Celsius from Fahrenheit"
                , ""
                , "c ¯459.4 ¯40 32 212  ⍝ Celsius"
                ]
            , Output [ "¯273 ¯40 0 100" ]
            ]
        , Example
            [ Input [ "1 +∘÷⍣= 1            ⍝ fixpoint: golden mean" ]
            , Output [ "1.61803" ]
            ]
        ]
    }


dot : CharInfo
dot =
    { char = '.'
    , name = "Dot"
    , completions = []
    , description =
        [ Category "Dyadic operator"
        , Heading "Product"
        , Heading "Inner Product f.g"
        , Example
            [ Input [ "1 2 3 +.× 4 5 6" ]
            , Output [ "32" ]
            ]
        , Example
            [ Input [ "3 ∧.= 3 3 3 3" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "mat" ]
            , Output
                [ "1 2"
                , "3 4"
                ]
            ]
        , Example
            [ Input [ "mat +.× mat   ⍝ matrix product" ]
            , Output
                [ " 7 10"
                , "15 22"
                ]
            ]
        , Heading "Outer Product ∘.g"
        , Example
            [ Input [ "1 2 3 ∘.× 4 5 6 7" ]
            , Output
                [ " 4  5  6  7"
                , " 8 10 12 14"
                , "12 15 18 21"
                ]
            ]
        ]
    }


jot : CharInfo
jot =
    { char = '∘'
    , name = "Jot"
    , completions =
        [ Tab "oo"
        , Backquote 'j'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Beside and Bind"
        , Plain [ "NB: ∘ is also used in outer product ∘.f - see Dot (.)" ]
        , Heading "Beside"
        , Example
            [ Input [ "⌽∘⍳¨ 3 4 5" ]
            , Output
                [ "┌─────┬───────┬─────────┐"
                , "│3 2 1│4 3 2 1│5 4 3 2 1│"
                , "└─────┴───────┴─────────┘"
                ]
            ]
        , Example
            [ Input [ "¯1 ⌽∘⍳¨ 3 4 5" ]
            , Output
                [ "┌─────┬───────┬─────────┐"
                , "│3 1 2│4 1 2 3│5 1 2 3 4│"
                , "└─────┴───────┴─────────┘"
                ]
            ]
        , Example
            [ Input [ "+∘÷/ 40⍴1    ⍝ continued fraction" ]
            , Output [ "1.61803" ]
            ]
        ]
    }


jotDiaeresis : CharInfo
jotDiaeresis =
    { char = '⍤'
    , name = "Jot Diaeresis"
    , completions =
        [ Tab "o:"
        , Tab "o\""
        , Backquote 'J'
        ]
    , description =
        [ Category "Dyadic operator (f⍤g)"
        , Heading "Atop"
        , Example
            [ Input [ "-⍤÷ 4      ⍝ (  f⍤g y) ≡  f   g y" ]
            , Output [ "¯0.25" ]
            ]
        , Example
            [ Input [ "12 -⍤÷ 4   ⍝ (x f⍤g y) ≡ (f x g y)" ]
            , Output [ "¯3" ]
            ]
        , Example
            [ Input [ "3 1 4 1 5 ~⍤∊ 1 2 3" ]
            , Output [ "0 0 1 0 1" ]
            ]
        , Category "Dyadic operator (f⍤a)"
        , Heading "Rank"
        , Example
            [ Input [ "cube    ⍝ 3D array" ]
            , Output
                [ " 1  2  3"
                , " 4  5  6"
                , ""
                , " 7  8  9"
                , "10 11 12"
                ]
            ]
        , Example
            [ Input [ "(,⍤2) cube" ]
            , Output
                [ "1 2 3  4  5  6"
                , "7 8 9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "cmat    ⍝ character matrix" ]
            , Output
                [ "abc"
                , "zxy"
                ]
            ]
        , Example
            [ Input [ "(⍋⍤1) cmat    ⍝ grade-up by row" ]
            , Output
                [ "1 2 3"
                , "2 3 1"
                ]
            ]
        , Example
            [ Input [ "nmat     ⍝ numeric matrix" ]
            , Output
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            ]
        , Example
            [ Input [ "10 20 30 (+⍤0 1) nmat  ⍝ scalars plus vectors" ]
            , Output
                [ "11 12 13 14"
                , "25 26 27 28"
                , "39 40 41 42"
                ]
            ]
        ]
    }


circleDiaeresis : CharInfo
circleDiaeresis =
    { char = '⍥'
    , name = "Circle Diaeresis"
    , completions =
        [ Tab "O:"
        , Tab "O\""
        , Backquote 'O'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Over"
        , Example
            [ Input [ "-⍥⌊ 3.6                 ⍝ Same as ∘ or ⍤ monadically" ]
            , Output [ "¯3" ]
            ]
        , Example
            [ Input [ "5.1 -⍥⌊ 3.6             ⍝ Applies ⌊ to both arguments" ]
            , Output [ "2" ]
            ]
        , Example
            [ Input [ "'Dyalog' ≡⍥⎕C 'DYALOG'  ⍝ Case-insensitive match" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "'Dyalog' ≡⍥⎕C 'IBM'" ]
            , Output [ "0" ]
            ]
        ]
    }


at : CharInfo
at =
    { char = '@'
    , name = "At"
    , completions = []
    , description =
        [ Category "Dyadic operator"
        , Heading "At"
        , Example
            [ Input [ "(0@2 4) 1 2 3 4 5" ]
            , Output [ "1 0 3 0 5" ]
            ]
        , Example
            [ Input [ "10 (×@2 4) 1 2 3 4 5" ]
            , Output [ "1 20 3 40 5" ]
            ]
        , Example
            [ Input [ "(÷@2 4) 1 2 3 4 5" ]
            , Output [ "1 0.5 3 0.25 5" ]
            ]
        , Example
            [ Input [ "'*'@(2∘|) 1 2 3 4 5   ⍝ Boolean selection 1 0 1 0 1" ]
            , Output [ "* 2 * 4 *" ]
            ]
        , Example
            [ Input [ "⌽@(2∘|) 1 2 3 4 5     ⍝ Reversal of sub-array 1 3 5" ]
            , Output [ "5 2 3 4 1" ]
            ]
        ]
    }


quoteQuad : CharInfo
quoteQuad =
    { char = '⍞'
    , name = "Quote Quad"
    , completions =
        [ Tab "['"
        , Tab "']"
        , Backquote '{'
        ]
    , description =
        [ Heading "Niladic:     Character Input/Output"
        , Example
            [ Input [ "chars ← ⍞     ⍝ input session line" ]
            , Output [ "hello" ]
            ]
        , Example
            [ Input [ "chars" ]
            , Output [ "hello" ]
            ]
        , Example
            [ Input [ "⍞ ← 'Name:'   ⍝ places text in session" ]
            , Output [ "Name:" ]
            ]
        , Example
            [ Input
                [ "ask ← {⍞←⍵ ⋄ (≢⍵)↓⍞}   ⍝ prompt for input:"
                , ""
                , "name ← ask¨ 'First:  ' 'Second: '"
                ]
            , Output
                [ "First:  John"
                , "Second: Brown"
                ]
            ]
        , Example
            [ Input [ "name" ]
            , Output
                [ "┌────┬─────┐"
                , "│John│Brown│"
                , "└────┴─────┘"
                ]
            ]
        ]
    }


quad : CharInfo
quad =
    { char = '⎕'
    , name = "Quad"
    , completions =
        [ Tab "[]"
        , Backquote 'l'
        ]
    , description =
        [ Heading "Niladic:     Evaluated Input/Output"
        , Example
            [ Input [ "2+⎕+4" ]
            , Output [ "⎕:" ]
            ]
        , Example
            [ Input [ "8-5" ]
            , Output [ "9" ]
            ]
        , Example
            [ Input [ "2+⎕←3+4" ]
            , Output
                [ "7"
                , "9"
                ]
            ]
        ]
    }


quadColon : CharInfo
quadColon =
    { char = '⍠'
    , name = "Quad Colon"
    , completions =
        [ Tab "[:"
        , Tab ":]"
        , Backquote '?'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Variant"
        , Example
            [ Input [ "('a' ⎕R 'x') 'ABC'           ⍝ 'a' replaced with 'x'" ]
            , Output [ "ABC" ]
            ]
        , Example
            [ Input [ "('a' ⎕R 'x' ⍠ 'IC' 1) 'ABC'  ⍝ .. Ignoring Case" ]
            , Output [ "xBC" ]
            ]
        , Example
            [ Input
                [ "IgnCase ← ⍠ 'IC' 1"
                , ""
                , "'a' ⎕R 'x' IgnCase 'ABC'"
                ]
            , Output [ "xBC" ]
            ]
        ]
    }


quadEqual : CharInfo
quadEqual =
    { char = '⌸'
    , name = "Quad Equal"
    , completions =
        [ Tab "[="
        , Tab "=]"
        , Backquote 'K'
        ]
    , description =
        [ Category "Monadic operator"
        , Heading "Key"
        , Example
            [ Input [ "'Banana' {⍺ ⍵}⌸ 3 1 4 1 5 9" ]
            , Output
                [ "┌─┬─────┐"
                , "│B│3    │"
                , "├─┼─────┤"
                , "│a│1 1 9│"
                , "├─┼─────┤"
                , "│n│4 5  │"
                , "└─┴─────┘"
                ]
            ]
        , Example
            [ Input [ "'Banana' {⍺,+/⍵}⌸ 3 1 4 1 5 9" ]
            , Output
                [ "B  3"
                , "a 11"
                , "n  9"
                ]
            ]
        , Example
            [ Input [ "'Banana' {⍺ ⍵}⌸ 1 2 3 4 5 6" ]
            , Output
                [ "┌─┬─────┐"
                , "│B│1    │"
                , "├─┼─────┤"
                , "│a│2 4 6│"
                , "├─┼─────┤"
                , "│n│3 5  │"
                , "└─┴─────┘"
                ]
            ]
        , Example
            [ Input [ "{⍺ ⍵}⌸ 'Banana'  ⍝ (same as above)" ]
            , Output
                [ "┌─┬─────┐"
                , "│B│1    │"
                , "├─┼─────┤"
                , "│a│2 4 6│"
                , "├─┼─────┤"
                , "│n│3 5  │"
                , "└─┴─────┘"
                ]
            ]
        ]
    }


quadDiamond : CharInfo
quadDiamond =
    { char = '⌺'
    , name = "Quad Diamond"
    , completions =
        [ Tab "[<"
        , Tab ">]"
        , Backquote '~'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Stencil"
        , Example
            [ Input [ "mat" ]
            , Output
                [ " 1  2  3  4"
                , " 5  6  7  8"
                , " 9 10 11 12"
                , "13 14 15 16"
                ]
            ]
        , Example
            [ Input [ "({⊂⍵}⌺3 3) mat" ]
            , Output
                [ "┌───────┬────────┬────────┬───────┐"
                , "│0 0 0  │0 0 0   │0 0 0   │0 0 0  │"
                , "│0 1 2  │1 2 3   │2 3 4   │3 4 0  │"
                , "│0 5 6  │5 6 7   │6 7 8   │7 8 0  │"
                , "├───────┼────────┼────────┼───────┤"
                , "│0 1  2 │1  2  3 │ 2  3  4│ 3  4 0│"
                , "│0 5  6 │5  6  7 │ 6  7  8│ 7  8 0│"
                , "│0 9 10 │9 10 11 │10 11 12│11 12 0│"
                , "├───────┼────────┼────────┼───────┤"
                , "│0  5  6│ 5  6  7│ 6  7  8│ 7  8 0│"
                , "│0  9 10│ 9 10 11│10 11 12│11 12 0│"
                , "│0 13 14│13 14 15│14 15 16│15 16 0│"
                , "├───────┼────────┼────────┼───────┤"
                , "│0  9 10│ 9 10 11│10 11 12│11 12 0│"
                , "│0 13 14│13 14 15│14 15 16│15 16 0│"
                , "│0  0  0│ 0  0  0│ 0  0  0│ 0  0 0│"
                , "└───────┴────────┴────────┴───────┘"
                ]
            ]
        , Example
            [ Input [ "({+/,⍵}⌺3 3) mat" ]
            , Output
                [ "14 24 30 22"
                , "33 54 63 45"
                , "57 90 99 69"
                , "46 72 78 54"
                ]
            ]
        , Example
            [ Input [ "{⍺ ⍵}⌸ 'Banana'  ⍝ (same as above)" ]
            , Output
                [ "┌─┬─────┐"
                , "│B│1    │"
                , "├─┼─────┤"
                , "│a│2 4 6│"
                , "├─┼─────┤"
                , "│n│3 5  │"
                , "└─┴─────┘"
                ]
            ]
        ]
    }


iBeam : CharInfo
iBeam =
    { char = '⌶'
    , name = "I-Beam"
    , completions =
        [ Tab "T_"
        , Tab "II"
        , Backquote '!'
        ]
    , description =
        [ Category "Monadic operator"
        , Heading "I-Beam"
        , Plain
            [ "Provides a system-related service determined by the left-operand value."
            , "(see Dyalog APL Language Reference Guide)"
            ]
        ]
    }


hydrant : CharInfo
hydrant =
    { char = '⍎'
    , name = "Hydrant"
    , completions =
        [ Tab "o_"
        , Backquote ';'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Execute"
        , Example
            [ Input [ "⍎ '1+1'" ]
            , Output [ "2" ]
            ]
        , Example
            [ Input
                [ "V ← 1 2 3"
                , "⍎ 'V'"
                ]
            , Output [ "1 2 3" ]
            ]
        ]
    }


thorn : CharInfo
thorn =
    { char = '⍕'
    , name = "Thorn"
    , completions =
        [ Tab "oT"
        , Tab "o-"
        , Backquote '\''
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Format"
        , Plain [ "NB: In the following examples space characters are represented by small dots: ···" ]
        , Example
            [ Input [ "4 5 6          ⍝ numeric vector" ]
            , Output [ "4 5 6" ]
            ]
        , Example
            [ Input [ "⍕ 4 5 6        ⍝ equivalent character vector" ]
            , Output [ "4·5·6" ]
            ]
        , Example
            [ Input [ "mat            ⍝ numeric matrix" ]
            , Output
                [ "1 2 3"
                , "4 5 6"
                ]
            ]
        , Example
            [ Input [ "⍕ mat          ⍝ equivalent character matrix" ]
            , Output
                [ "1·2·3"
                , "4·5·6"
                ]
            ]
        , Category "Dyadic function"
        , Heading "Format By Specification"
        , Plain [ "Field-width and number of decimal places:" ]
        , Example
            [ Input [ "6 2 ⍕ 3.125 0.002" ]
            , Output [ "··3.13··0.00" ]
            ]
        , Example
            [ Input [ "6 2 ⍕ mat" ]
            , Output
                [ "··1.00··2.00··3.00"
                , "··4.00··5.00··6.00"
                ]
            ]
        , Example
            [ Input [ "6 2 ⍕ 1234   ⍝ (field not wide enough)" ]
            , Output [ "******" ]
            ]
        ]
    }


diamond : CharInfo
diamond =
    { char = '⋄'
    , name = "Diamond"
    , completions =
        [ Tab "<>"
        , Tab "^v"
        , Backquote '`'
        ]
    , description =
        [ Heading "Syntax:    Statement Separator"
        , Plain [ "Statements are evaluated sequentially from left to right." ]
        , Example
            [ Input [ "A←4 ⋄ A←A×3 ⋄ A÷2" ]
            , Output [ "6" ]
            ]
        ]
    }


lamp : CharInfo
lamp =
    { char = '⍝'
    , name = "Lamp"
    , completions =
        [ Tab "on"
        , Backquote ','
        ]
    , description =
        [ Heading "Syntax:    Comment"
        , Plain [ "Text to the right of ⍝ is ignored." ]
        , Example
            [ Input [ "2+3  ⍝ this is a comment" ]
            , Output [ "5" ]
            ]
        ]
    }


rightArrow : CharInfo
rightArrow =
    { char = '→'
    , name = "Right Arrow"
    , completions =
        [ Tab "->"
        , Backquote ']'
        ]
    , description =
        [ Heading "Syntax:    Branch (Clear suspension)"
        , Example
            [ Input
                [ "→ Label  ⍝ branch to Label:"
                , "→ ⎕LC    ⍝ resume suspended execution"
                , "→ 0      ⍝ exit current function and resume calling line"
                , "→        ⍝ clear one stack suspension"
                ]
            ]
        , Plain [ "Branching is superseded by the more modern control structures such as :If ... :EndIf" ]
        ]
    }


omega : CharInfo
omega =
    { char = '⍵'
    , name = "Omega"
    , completions =
        [ Tab "ww"
        , Backquote 'w'
        ]
    , description =
        [ Heading "Omega Syntax: Right argument of a dfn"
        , Example
            [ Input [ "2 {⍵+1} 5" ]
            , Output [ "6" ]
            ]
        , Heading "Double-Omega Syntax: Right operand of a dop"
        , Example
            [ Input [ "3 +{⍺ ⍵⍵ ⍵}× 4" ]
            , Output [ "12" ]
            ]
        ]
    }


alpha : CharInfo
alpha =
    { char = '⍺'
    , name = "Alpha"
    , completions =
        [ Tab "aa"
        , Backquote 'a'
        ]
    , description =
        [ Heading "Alpha Syntax: Left argument of a dfn"
        , Example
            [ Input [ "2 {⍺+1} 5" ]
            , Output [ "3" ]
            ]
        , Heading "Double-Alpha Syntax: Left Operand of a dop"
        , Example
            [ Input [ "3 +{⍺ ⍺⍺ ⍵} 4" ]
            , Output [ "7" ]
            ]
        ]
    }


del : CharInfo
del =
    { char = '∇'
    , name = "Del"
    , completions =
        [ Tab "VV"
        , Tab "v-"
        , Backquote 'g'
        ]
    , description =
        [ Heading "Del Syntax: dfn self-reference (recursion)"
        , Example
            [ Input
                [ "fact←{             ⍝ Factorial ⍵."
                , "    ⍵≤1: 1         ⍝ small ⍵: finished"
                , "    ⍵×∇ ⍵-1        ⍝ otherwise: recurse"
                , "}"
                ]
            ]
        , Heading "Double-Del Syntax: dop self-reference"
        , Example
            [ Input
                [ "pow←{                ⍝ power operator: apply ⍵⍵ times"
                , "    ⍵⍵=0:⍵           ⍝ ⍵⍵ is 0: finished"
                , "    ⍺⍺ ∇∇(⍵⍵-1)⍺⍺ ⍵  ⍝ otherwise: recurse"
                , "}"
                ]
            ]
        ]
    }


ampersand : CharInfo
ampersand =
    { char = '&'
    , name = "Ampersand"
    , completions = []
    , description =
        [ Category "Monadic operator"
        , Heading "Spawn"
        , Example
            [ Input
                [ "delay←{'Delayed: ',⎕DL ⍵}    ⍝ delay function"
                , ""
                , "delay 10    ⍝ delay for 10 seconds"
                ]
            , Output [ "Delayed:  10.2228" ]
            ]
        , Example
            [ Input [ "⎕←delay&10  ⍝ delay for 10 seconds in new thread 1" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "2+3 4       ⍝ execute something in current thread" ]
            , Output [ "5 6" ]
            ]
        , Example
            [ Input [ "            ⍝ thread 1 completes:" ]
            , Output [ "Delayed:  10.03183" ]
            ]
        ]
    }


highMinus : CharInfo
highMinus =
    { char = '¯'
    , name = "High Minus"
    , completions =
        [ Tab "--"
        , Backquote '2'
        ]
    , description =
        [ Heading "Qualifier for negative number"
        , Example
            [ Input [ "1 + ¯1 0 1 ¯3" ]
            , Output [ "0 1 2 ¯2" ]
            ]
        , Example
            [ Input [ "3e¯2" ]
            , Output [ "0.03" ]
            ]
        ]
    }


zilde : CharInfo
zilde =
    { char = '⍬'
    , name = "Zilde"
    , completions =
        [ Tab "0~"
        , Backquote '}'
        ]
    , description =
        [ Heading "Niladic:  Empty Numeric Vector"
        , Example
            [ Input [ "⍬≡⍳0" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "⍬≡0⍴0" ]
            , Output [ "1" ]
            ]
        , Example
            [ Input [ "⍬≡0 0⍴0" ]
            , Output [ "0" ]
            ]
        , Example
            [ Input [ "⍬≡''" ]
            , Output [ "0" ]
            ]
        ]
    }


delta : CharInfo
delta =
    { char = '∆'
    , name = "Delta"
    , completions =
        [ Tab "AA"
        , Tab "^-"
        , Backquote 'h'
        ]
    , description = [ Heading "Identifier Character" ]
    }


deltaUnderbar : CharInfo
deltaUnderbar =
    { char = '⍙'
    , name = "Delta Underbar"
    , completions =
        [ Tab "A_"
        , Tab "^="
        , Backquote '>'
        ]
    , description = [ Heading "Identifier Character" ]
    }
