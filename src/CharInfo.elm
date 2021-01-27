module CharInfo exposing
    ( CharInfo
    , Completion(..)
    , DescriptionItem(..)
    , allItems
    )


type alias CharInfo =
    { char : Char
    , name : String
    , docsLinks : List Link
    , completions : List Completion
    , description : List DescriptionItem
    }


type alias Link =
    { name : String
    , url : String
    }


type Completion
    = Tab String
    | Backquote Char


type DescriptionItem
    = Heading String
    | Category String
    | Plain (List String)
    | Verbatim (List String)
    | CodeComment (List String)
    | Example
        { input : List String
        , output : List String
        }


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
    , docsLinks =
        [ { name = "Assignment", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Assignment.htm" }
        , { name = "Assignment (Indexed)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Assignment%20Indexed.htm" }
        , { name = "Assignment (Selective)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Assignment%20Selective.htm" }
        , { name = "Assignment (Modified)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Assignment%20Modified.htm" }
        , { name = "Assignment (Indexed Modified)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Assignment%20Indexed%20Modified.htm" }
        , { name = "Assignment (Selective Modified)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Assignment%20Selective%20Modified.htm" }
        ]
    , completions =
        [ Tab "<-"
        , Backquote '['
        ]
    , description =
        [ Heading "Assignment"
        , Heading "Naming:"
        , Example
            { input =
                [ "V ← 5 6 7"
                , "(i(j k)) ← 4(5 6)"
                , "sum ← +⌿"
                , "product ← {×/⍵}"
                , "inverse ← ⍣¯1"
                ]
            , output = []
            }
        , Heading "Modification:"
        , Example
            { input =
                [ "V +← 1"
                , "V[2] ← 0"
                , "(⊃V) ← 2'"
                ]
            , output = []
            }
        ]
    }


plus : CharInfo
plus =
    { char = '+'
    , name = "Plus"
    , docsLinks =
        [ { name = "Add", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Add.htm" }
        , { name = "Conjugate", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Conjugate.htm" }
        ]
    , completions = []
    , description =
        [ Category "Monadic function"
        , Heading "Conjugate"
        , Example
            { input = [ "+ 1.2 0j4 ¯5j¯6" ]
            , output = [ "1.2 0J¯4 ¯5J6" ]
            }
        , Category "Dyadic function"
        , Heading "Plus"
        , Example
            { input = [ "1 2 3 4 + 10" ]
            , output = [ "11 12 13 14" ]
            }
        , Example
            { input = [ "1 2 3 + 2 ¯4 1" ]
            , output = [ "3 ¯2 4" ]
            }
        , Example
            { input = [ "+/ 1 2 3" ]
            , output = [ "6" ]
            }
        ]
    }


minus : CharInfo
minus =
    { char = '-'
    , name = "Minus"
    , docsLinks =
        [ { name = "Subtract", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Subtract.htm" }
        , { name = "Negative", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Negative.htm" }
        ]
    , completions = []
    , description =
        [ Category "Monadic function"
        , Heading "Negate"
        , Example
            { input = [ "- 3.2 ¯7 0" ]
            , output = [ "¯3.2 7 0" ]
            }
        , Category "Dyadic function"
        , Heading "Minus"
        , Example
            { input = [ "3 7 9 - 5" ]
            , output = [ "¯2 2 4" ]
            }
        , Example
            { input = [ "5 1 4 - 2 3 4" ]
            , output = [ "3 ¯2 0" ]
            }
        ]
    }


times : CharInfo
times =
    { char = '×'
    , name = "Times"
    , docsLinks =
        [ { name = "Multiply", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Multiply.htm" }
        , { name = "Direction (Signum)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Direction.htm" }
        ]
    , completions =
        [ Tab "xx"
        , Tab "/\\"
        , Backquote '-'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Direction"
        , Example
            { input = [ "× 3.1 ¯2 0 3j4" ]
            , output = [ "1 ¯1 0 0.6J0.8" ]
            }
        , Category "Dyadic function"
        , Heading "Times"
        , Example
            { input = [ "2 ¯3 4.5 × ¯3 ¯4 2" ]
            , output = [ "¯6 12 9" ]
            }
        , Example
            { input = [ "3 1 4 × 10" ]
            , output = [ "30 10 40" ]
            }
        , Example
            { input = [ "×/ 2 3 4" ]
            , output = [ "24" ]
            }
        ]
    }


divide : CharInfo
divide =
    { char = '÷'
    , name = "Divide"
    , docsLinks =
        [ { name = "Divide", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Divide.htm" }
        , { name = "Reciprocal", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reciprocal.htm" }
        ]
    , completions =
        [ Tab ":-"
        , Backquote '='
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Reciprocal"
        , Example
            { input = [ "÷ 1 2 3" ]
            , output = [ "1 0.5 0.333333" ]
            }
        , Category "Dyadic function"
        , Heading "Divide"
        , Example
            { input = [ "1 2 3 ÷ 4 5 7" ]
            , output = [ "0.25 0.4 0.428571" ]
            }
        , Example
            { input = [ "10 ÷ ¯2 0.5" ]
            , output = [ "¯5 20" ]
            }
        ]
    }


star : CharInfo
star =
    { char = '*'
    , name = "Star"
    , docsLinks =
        [ { name = "Exponential", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Exponential.htm" }
        , { name = "Power", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Power.htm" }
        ]
    , completions = [ Backquote 'p' ]
    , description =
        [ Category "Monadic function"
        , Heading "Exponential"
        , Example
            { input = [ "* 0 1 2" ]
            , output = [ "1 2.71828 7.38906" ]
            }
        , Category "Dyadic function"
        , Heading "Power"
        , Example
            { input = [ "49 5 ¯4 * 0.5 2 0.5" ]
            , output = [ "7 25 0J2" ]
            }
        ]
    }


log : CharInfo
log =
    { char = '⍟'
    , name = "Log"
    , docsLinks =
        [ { name = "Natural Logarithm", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Natural%20Logarithm.htm" }
        , { name = "Logarithm", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Logarithm.htm" }
        ]
    , completions =
        [ Tab "*O"
        , Backquote '*'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Natural Logarithm"
        , Example
            { input = [ "⍟ 1 2 3 2.7182818285" ]
            , output = [ "0 0.693147 1.09861 1" ]
            }
        , Category "Dyadic function"
        , Heading "Logarithm"
        , Example
            { input = [ "2 10 ⍟ 32 1000" ]
            , output = [ "5 3" ]
            }
        ]
    }


domino : CharInfo
domino =
    { char = '⌹'
    , name = "Domino"
    , docsLinks =
        [ { name = "Matrix Inverse", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Matrix%20Inverse.htm" }
        , { name = "Matrix Divide", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Matrix%20Divide.htm" }
        ]
    , completions =
        [ Tab "[-"
        , Tab "-]"
        , Backquote '+'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Matrix Inverse"
        , Example
            { input =
                [ "mat ← 2 2 ⍴ ⍳4"
                , "mat"
                ]
            , output =
                [ "1 2"
                , "3 4"
                ]
            }
        , Example
            { input = [ "⌹ mat" ]
            , output =
                [ "¯2    1"
                , " 1.5 ¯0.5"
                ]
            }
        , Category "Dyadic function"
        , Heading "Matrix Divide"
        , Example
            { input = [ "5 6 ⌹ mat" ]
            , output = [ "¯4 4.5" ]
            }
        ]
    }


circle : CharInfo
circle =
    { char = '○'
    , name = "Circle"
    , docsLinks =
        [ { name = "Pi Times", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Pi%20Times.htm" }
        , { name = "Circular", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Circular.htm" }
        ]
    , completions =
        [ Tab "OO"
        , Backquote 'o'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Pi Times"
        , Example
            { input = [ "○ 0 1 2" ]
            , output = [ "0 3.14159 6.28319" ]
            }
        , Category "Dyadic function"
        , Heading "Circular Functions (Trig)"
        , Plain [ "Note: Angles are in radians" ]
        , Example
            { input =
                [ "radians ← ○ degrees ÷ 180"
                , ""
                , "1 ○ 0 1.5707963 3.1415927"
                ]
            , output = [ "0 1 ¯4.64102E¯8" ]
            }
        , Verbatim
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
    , docsLinks =
        [ { name = "Factorial", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Factorial.htm" }
        , { name = "Binomial", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Binomial.htm" }
        ]
    , completions = [ Backquote '_' ]
    , description =
        [ Category "Monadic function"
        , Heading "Factorial"
        , Example
            { input = [ "! 3 9 ¯0.11" ]
            , output = [ "6 362880 1.07683" ]
            }
        , Category "Dyadic function"
        , Heading "Binomial"
        , Example
            { input = [ "2 1 3 ! 3 10 ¯0.11" ]
            , output = [ "3 10 ¯0.0429385" ]
            }
        ]
    }


questionMark : CharInfo
questionMark =
    { char = '?'
    , name = "Question Mark"
    , docsLinks =
        [ { name = "Roll", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Roll.htm" }
        , { name = "Deal", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Deal.htm" }
        ]
    , completions = [ Backquote 'q' ]
    , description =
        [ Category "Monadic function"
        , Heading "Roll"
        , Example
            { input = [ "? 6 6 6 6 6" ]
            , output = [ "4 3 6 3 5" ]
            }
        , Example
            { input = [ "? 0 0" ]
            , output = [ "0.260561 0.929928" ]
            }
        , Category "Dyadic function"
        , Heading "Deal"
        , Example
            { input = [ "13 ? 52" ]
            , output = [ "36 31 44 11 27 42 13 8 2 33 19 34 6" ]
            }
        ]
    }


stile : CharInfo
stile =
    { char = '|'
    , name = "Stile"
    , docsLinks =
        [ { name = "Magnitude", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Magnitude.htm" }
        , { name = "Residue", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Residue.htm" }
        ]
    , completions = [ Backquote 'm' ]
    , description =
        [ Category "Monadic function"
        , Heading "Magnitude (Absolute value)"
        , Example
            { input = [ "| 2.3 ¯4 0 3j4" ]
            , output = [ "2.3 4 0 5" ]
            }
        , Category "Dyadic function"
        , Heading "Residue (Remainder/Modulus)"
        , Example
            { input = [ "2 10 ¯2.5 | 7 ¯13 8" ]
            , output = [ "1 7 ¯2" ]
            }
        ]
    }


upstile : CharInfo
upstile =
    { char = '⌈'
    , name = "Upstile"
    , docsLinks =
        [ { name = "Ceiling", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Ceiling.htm" }
        , { name = "Maximum", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Maximum.htm" }
        ]
    , completions =
        [ Tab "77"
        , Tab "FF"
        , Backquote 's'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Ceiling (Round Up)"
        , Example
            { input = [ "⌈ 3.4 ¯3.4 3 0" ]
            , output = [ "4 ¯3 3 0" ]
            }
        , Category "Dyadic function"
        , Heading "Maximum"
        , Example
            { input = [ "1.1 ¯2 ⌈ 8.1 ¯3.4" ]
            , output = [ "8.1 ¯2" ]
            }
        , Example
            { input = [ "⌈/ 3 1 4 1" ]
            , output = [ "4" ]
            }
        ]
    }


downstile : CharInfo
downstile =
    { char = '⌊'
    , name = "Downstile"
    , docsLinks =
        [ { name = "Floor", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Floor.htm" }
        , { name = "Minimum", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Minimum.htm" }
        ]
    , completions =
        [ Tab "ll"
        , Tab "LL"
        , Backquote 'd'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Floor (Round Down)"
        , Example
            { input = [ "⌊ 3.4 ¯3.4 3 0" ]
            , output = [ "3 ¯4 3 0" ]
            }
        , Category "Dyadic function"
        , Heading "Minimum"
        , Example
            { input = [ "1.1 ¯2 ⌊ 8.1 ¯3.4" ]
            , output = [ "1.1 ¯3.4" ]
            }
        , Example
            { input = [ "⌊/ 3 1 4 1" ]
            , output = [ "1" ]
            }
        ]
    }


upTack : CharInfo
upTack =
    { char = '⊥'
    , name = "Up Tack"
    , docsLinks =
        [ { name = "Decode", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Decode.htm" }
        ]
    , completions =
        [ Tab "|_"
        , Backquote 'b'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Decode"
        , Example
            { input = [ "2 ⊥ 1 1 0 1   ⍝ binary decode" ]
            , output = [ "13" ]
            }
        , CodeComment
            [ "⍝ mixed radix: conversion of hours,"
            , "⍝ minutes and seconds to seconds:"
            ]
        , Example
            { input = [ "24 60 60 ⊥ 2 46 40" ]
            , output = [ "10000" ]
            }
        ]
    }


downTack : CharInfo
downTack =
    { char = '⊤'
    , name = "Down Tack"
    , docsLinks =
        [ { name = "Encode", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Encode.htm" }
        ]
    , completions =
        [ Tab "TT"
        , Backquote 'n'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Encode"
        , Example
            { input = [ "2 2 2 2 ⊤ 5 7 12   ⍝ binary encode" ]
            , output =
                [ "0 0 1"
                , "1 1 1"
                , "0 1 0"
                , "1 1 0"
                ]
            }
        , CodeComment
            [ "⍝ mixed radix: encode of 10000 seconds"
            , "⍝ to hours, minutes and seconds:"
            ]
        , Example
            { input = [ "24 60 60 ⊤ 10000" ]
            , output = [ "2 46 40" ]
            }
        ]
    }


leftTack : CharInfo
leftTack =
    { char = '⊣'
    , name = "Left Tack"
    , docsLinks =
        [ { name = "Same", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Same.htm" }
        , { name = "Left", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Left.htm" }
        ]
    , completions =
        [ Tab "-|"
        , Backquote '|'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Same"
        , Example
            { input = [ "⊣  1 2 3" ]
            , output = [ "1 2 3" ]
            }
        , Category "Dyadic function"
        , Heading "Left"
        , Example
            { input = [ "'L' ⊣ 'R'" ]
            , output = [ "L" ]
            }
        , Example
            { input = [ "⊣/ 1 2 3" ]
            , output = [ "1" ]
            }
        ]
    }


rightTack : CharInfo
rightTack =
    { char = '⊢'
    , name = "Right Tack"
    , docsLinks =
        [ { name = "Same", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Same.htm" }
        , { name = "Right", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Right.htm" }
        ]
    , completions =
        [ Tab "|-"
        , Backquote '\\'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Same"
        , Example
            { input = [ "⊢  1 2 3" ]
            , output = [ "1 2 3" ]
            }
        , Category "Dyadic function"
        , Heading "Right"
        , Example
            { input = [ "'L' ⊢ 'R'" ]
            , output = [ "R" ]
            }
        , Example
            { input = [ "⊢/ 1 2 3" ]
            , output = [ "3" ]
            }
        ]
    }


equal : CharInfo
equal =
    { char = '='
    , name = "Equal"
    , docsLinks =
        [ { name = "Equal", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive Functions/Equal.htm" }
        ]
    , completions = [ Backquote '5' ]
    , description =
        [ Category "Dyadic function"
        , Heading "Equal To"
        , Example
            { input = [ "1 2 3 = 4 2 ¯1" ]
            , output = [ "0 1 0" ]
            }
        , Example
            { input = [ "0 1 0 1 = 0 0 1 1" ]
            , output = [ "1 0 0 1" ]
            }
        , Example
            { input = [ "'Banana' = 'a'" ]
            , output = [ "0 1 0 1 0 1" ]
            }
        , Example
            { input = [ "7 = '7'" ]
            , output = [ "0" ]
            }
        ]
    }


notEqual : CharInfo
notEqual =
    { char = '≠'
    , name = "Not Equal"
    , docsLinks =
        [ { name = "Unique Mask", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Unique%20Mask.htm" }
        , { name = "Not Equal", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Not%20Equal.htm" }
        ]
    , completions =
        [ Tab "=/"
        , Tab "L-"
        , Backquote '8'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Unique Mask"
        , Example
            { input = [ "≠ 'Banana'" ]
            , output = [ "1 1 1 0 0 0" ]
            }
        , Example
            { input = [ "≠ 'Mississippi'" ]
            , output = [ "1 1 1 0 0 0 0 0 1 0 0" ]
            }
        , Category "Dyadic function"
        , Heading "Not Equal To"
        , Example
            { input = [ "1 2 3 ≠ 4 2 ¯1" ]
            , output = [ "1 0 1" ]
            }
        , Example
            { input = [ "0 1 0 1 ≠ 0 0 1 1" ]
            , output = [ "0 1 1 0" ]
            }
        , Example
            { input = [ "'Banana' ≠ 'a'" ]
            , output = [ "1 0 1 0 1 0" ]
            }
        , Example
            { input = [ "7 ≠ '7'" ]
            , output = [ "1" ]
            }
        ]
    }


lessThanOrEqualTo : CharInfo
lessThanOrEqualTo =
    { char = '≤'
    , name = "Less Than Or Equal To"
    , docsLinks =
        [ { name = "Less Or Equal", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Less%20Or%20Equal.htm" }
        ]
    , completions =
        [ Tab "<="
        , Tab "<_"
        , Backquote '4'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Less Than or Equal To"
        , Example
            { input = [ "1 2 3 ≤ 4 2 ¯1" ]
            , output = [ "1 1 0" ]
            }
        , Example
            { input = [ "1 2 3 ≤ 2" ]
            , output = [ "1 1 0" ]
            }
        ]
    }


lessThan : CharInfo
lessThan =
    { char = '<'
    , name = "Less Than"
    , docsLinks =
        [ { name = "Less", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Less.htm" }
        ]
    , completions = [ Backquote '3' ]
    , description =
        [ Category "Dyadic function"
        , Heading "Less Than"
        , Example
            { input = [ "1 2 3 < 4 2 ¯1" ]
            , output = [ "1 0 0" ]
            }
        , Example
            { input = [ "1 2 3 < 2" ]
            , output = [ "1 0 0" ]
            }
        ]
    }


greaterThan : CharInfo
greaterThan =
    { char = '>'
    , name = "Greater Than"
    , docsLinks =
        [ { name = "Greater", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Greater.htm" }
        ]
    , completions = [ Backquote '7' ]
    , description =
        [ Category "Dyadic function"
        , Heading "Greater Than"
        , Example
            { input = [ "1 2 3 > 4 2 ¯1" ]
            , output = [ "0 0 1" ]
            }
        , Example
            { input = [ "1 2 3 > 2" ]
            , output = [ "0 0 1" ]
            }
        ]
    }


greaterThanOrEqualTo : CharInfo
greaterThanOrEqualTo =
    { char = '≥'
    , name = "Greater Than Or Equal To"
    , docsLinks =
        [ { name = "Greater Or Equal", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Greater%20Or%20Equal.htm" }
        ]
    , completions =
        [ Tab ">="
        , Tab ">_"
        , Backquote '6'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Greater Than or Equal To"
        , Example
            { input = [ "1 2 3 ≥ 4 2 ¯1" ]
            , output = [ "0 1 1" ]
            }
        , Example
            { input = [ "1 2 3 ≥ 2" ]
            , output = [ "0 1 1" ]
            }
        ]
    }


equalUnderbar : CharInfo
equalUnderbar =
    { char = '≡'
    , name = "Equal Underbar"
    , docsLinks =
        [ { name = "Depth", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Depth.htm" }
        , { name = "Match", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Match.htm" }
        ]
    , completions =
        [ Tab "=="
        , Tab "=_"
        , Backquote ':'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Depth"
        , Example
            { input = [ "≡ 7" ]
            , output = [ "0" ]
            }
        , Example
            { input = [ "≡ 'abc'" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "≡ (1 2)(3 4)" ]
            , output = [ "2" ]
            }
        , Example
            { input = [ "≡ (1 2)(3 4)5" ]
            , output = [ "¯2" ]
            }
        , Category "Dyadic function"
        , Heading "Match"
        , Example
            { input = [ "'b' 'e' 'x' ≡ 'bex'" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "1 ≡ 1 1" ]
            , output = [ "0" ]
            }
        ]
    }


equalUnderbarSlash : CharInfo
equalUnderbarSlash =
    { char = '≢'
    , name = "Equal Underbar Slash"
    , docsLinks =
        [ { name = "Tally", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Tally.htm" }
        , { name = "Not Match", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Not%20Match.htm" }
        ]
    , completions =
        [ Tab "7="
        , Tab "L="
        , Backquote '"'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Tally"
        , Example
            { input = [ "≢ 'a'" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "≢ 7 4 2" ]
            , output = [ "3" ]
            }
        , Example
            { input = [ "≢ 5 4 3⍴0" ]
            , output = [ "5" ]
            }
        , Example
            { input = [ "≢ (1 2)(3 4)" ]
            , output = [ "2" ]
            }
        , Example
            { input =
                [ "mat ← 2 3 ⍴ ⍳6"
                , "mat"
                ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                ]
            }
        , Example
            { input = [ "≢ mat   ⍝ note how \"tally\"" ]
            , output = [ "2" ]
            }
        , Example
            { input = [ "⍴ mat   ⍝ differs from \"shape\"" ]
            , output = [ "2 3" ]
            }
        , Category "Dyadic function"
        , Heading "Not Match"
        , Example
            { input = [ "'bex' ≢ 'b','e','x'" ]
            , output = [ "0" ]
            }
        , Example
            { input = [ "1 ≢ 1 1" ]
            , output = [ "1" ]
            }
        ]
    }


logicalOr : CharInfo
logicalOr =
    { char = '∨'
    , name = "Logical OR"
    , docsLinks =
        [ { name = "Or, Greatest Common Divisor", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Or%20Greatest%20Common%20Divisor.htm" }
        ]
    , completions =
        [ Tab "vv"
        , Backquote '9'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Greatest Common Divisor (OR)"
        , Example
            { input = [ "0 1 0 1 ∨ 0 0 1 1" ]
            , output = [ "0 1 1 1" ]
            }
        , Example
            { input = [ "15 1 2 7 ∨ 35 1 4 0" ]
            , output = [ "5 1 2 7" ]
            }
        ]
    }


logicalAnd : CharInfo
logicalAnd =
    { char = '∧'
    , name = "Logical AND"
    , docsLinks =
        [ { name = "And, Lowest Common Multiple", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/And%20Lowest%20Common%20Multiple.htm" }
        ]
    , completions =
        [ Tab "^^"
        , Backquote '0'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Lowest Common Multiple (AND)"
        , Example
            { input = [ "0 1 0 1 ∧ 0 0 1 1" ]
            , output = [ "0 0 0 1" ]
            }
        , Example
            { input = [ "15 1 2 7 ∧ 35 1 4 0" ]
            , output = [ "105 1 4 0" ]
            }
        ]
    }


logicalNand : CharInfo
logicalNand =
    { char = '⍲'
    , name = "Logical NAND"
    , docsLinks =
        [ { name = "Nand", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Nand.htm" }
        ]
    , completions =
        [ Tab "^~"
        , Backquote ')'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "NAND"
        , Example
            { input = [ "0 1 0 1 ⍲ 0 0 1 1" ]
            , output = [ "1 1 1 0" ]
            }
        ]
    }


logicalNor : CharInfo
logicalNor =
    { char = '⍱'
    , name = "Logical NOR"
    , docsLinks =
        [ { name = "Nor", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Nor.htm" }
        ]
    , completions =
        [ Tab "v~"
        , Backquote '('
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "NOR"
        , Example
            { input = [ "0 1 0 1 ⍱ 0 0 1 1" ]
            , output = [ "1 0 0 0" ]
            }
        ]
    }


upArrow : CharInfo
upArrow =
    { char = '↑'
    , name = "Up Arrow"
    , docsLinks =
        [ { name = "Mix", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Mix.htm" }
        , { name = "Take", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Take.htm" }
        , { name = "Take with Axes", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Take%20with%20Axes.htm" }
        , { name = "Disclose", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Disclose.htm" }
        ]
    , completions =
        [ Tab "^|"
        , Backquote 'y'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Mix"
        , Example
            { input = [ "↑ 'Hip' 'Hop'" ]
            , output =
                [ "Hip"
                , "Hop"
                ]
            }
        , Example
            { input = [ "↑ (6 4) 5 3" ]
            , output =
                [ "6 4"
                , "5 0"
                , "3 0"
                ]
            }
        , Example
            { input = [ "↑[0.5] 'Hip' 'Hop'" ]
            , output =
                [ "HH"
                , "io"
                , "pp"
                ]
            }
        , Category "Dyadic function"
        , Heading "Take"
        , Example
            { input = [ "4 ↑ 'Pineapple'" ]
            , output = [ "Pine" ]
            }
        , Example
            { input = [ "¯5 ↑ 'Pineapple'" ]
            , output = [ "apple" ]
            }
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "2 ¯3 ↑ mat" ]
            , output =
                [ "2 3 4"
                , "6 7 8"
                ]
            }
        , Example
            { input = [ "¯2 ↑ mat" ]
            , output =
                [ "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "¯2 3 ↑ 7" ]
            , output =
                [ "0 0 0"
                , "7 0 0"
                ]
            }
        ]
    }


downArrow : CharInfo
downArrow =
    { char = '↓'
    , name = "Down Arrow"
    , docsLinks =
        [ { name = "Split", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Split.htm" }
        , { name = "Drop", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Drop.htm" }
        , { name = "Drop with Axes", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Drop%20with%20Axes.htm" }
        ]
    , completions =
        [ Tab "v|"
        , Backquote 'u'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Split"
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "↓ mat" ]
            , output =
                [ "┌───────┬───────┬──────────┐"
                , "│1 2 3 4│5 6 7 8│9 10 11 12│"
                , "└───────┴───────┴──────────┘"
                ]
            }
        , Example
            { input = [ "↓[1] mat" ]
            , output =
                [ "┌─────┬──────┬──────┬──────┐"
                , "│1 5 9│2 6 10│3 7 11│4 8 12│"
                , "└─────┴──────┴──────┴──────┘"
                ]
            }
        , Category "Dyadic function"
        , Heading "Drop"
        , Example
            { input = [ "4 ↓ 'Pineapple'" ]
            , output = [ "apple" ]
            }
        , Example
            { input = [ "¯5 ↓ 'Pineapple'" ]
            , output = [ "Pine" ]
            }
        , Example
            { input = [ "1 ¯2 ↓ mat" ]
            , output =
                [ "5  6"
                , "9 10"
                ]
            }
        , Example
            { input = [ "1 ↓ mat" ]
            , output =
                [ "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        ]
    }


leftShoe : CharInfo
leftShoe =
    { char = '⊂'
    , name = "Left Shoe"
    , docsLinks =
        [ { name = "Enclose", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Enclose.htm" }
        , { name = "Enclose with Axes", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Enclose%20with%20Axes.htm" }
        , { name = "Partitioned Enclose", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Partitioned%20Enclose.htm" }
        ]
    , completions =
        [ Tab "(("
        , Tab "cc"
        , Backquote 'z'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Enclose"
        , Example
            { input = [ "1(2 3)" ]
            , output =
                [ "┌─┬───┐"
                , "│1│2 3│"
                , "└─┴───┘"
                ]
            }
        , Example
            { input = [ "⊂ 1(2 3)" ]
            , output =
                [ "┌───────┐"
                , "│┌─┬───┐│"
                , "││1│2 3││"
                , "│└─┴───┘│"
                , "└───────┘"
                ]
            }
        , Example
            { input = [ "⊂⊂ 1(2 3)" ]
            , output =
                [ "┌─────────┐"
                , "│┌───────┐│"
                , "││┌─┬───┐││"
                , "│││1│2 3│││"
                , "││└─┴───┘││"
                , "│└───────┘│"
                , "└─────────┘"
                ]
            }
        , Category "Dyadic function"
        , Heading "Partitioned Enclose"
        , Example
            { input = [ "0 1 0 1 ⊂ 1 2 3 4" ]
            , output =
                [ "┌───┬─┐"
                , "│2 3│4│"
                , "└───┴─┘"
                ]
            }
        ]
    }


rightShoe : CharInfo
rightShoe =
    { char = '⊃'
    , name = "Right Shoe"
    , docsLinks =
        [ { name = "Disclose", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Disclose.htm" }
        , { name = "Pick", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Pick.htm" }
        ]
    , completions =
        [ Tab "))"
        , Backquote 'x'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "First"
        , Example
            { input = [ "⊃ 'Word'" ]
            , output = [ "W" ]
            }
        , Example
            { input = [ "⊃ (1 2)(3 4 5)" ]
            , output = [ "1 2" ]
            }
        , Category "Dyadic function"
        , Heading "Pick"
        , Example
            { input = [ "3 ⊃ 'Word'" ]
            , output = [ "r" ]
            }
        , Example
            { input = [ "2 ⊃ (1 2)(3 4 5)" ]
            , output = [ "3 4 5" ]
            }
        , Example
            { input = [ "2 1 ⊃ (1 2)(3 4 5)" ]
            , output = [ "3" ]
            }
        ]
    }


leftShoeUnderbar : CharInfo
leftShoeUnderbar =
    { char = '⊆'
    , name = "Left Shoe Underbar"
    , docsLinks =
        [ { name = "Nest", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Nest.htm" }
        , { name = "Partition", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Partition.htm" }
        ]
    , completions =
        [ Tab "(_"
        , Tab "c_"
        , Backquote 'Z'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Nest"
        , Example
            { input = [ "⊆ 'this'" ]
            , output =
                [ "┌────┐"
                , "│this│"
                , "└────┘"
                ]
            }
        , Example
            { input = [ "⊆ 'this' 'that'" ]
            , output =
                [ "┌────┬────┐"
                , "│this│that│"
                , "└────┴────┘"
                ]
            }
        , Category "Dyadic function"
        , Heading "Partition"
        , Example
            { input = [ "1 0 0 1 1 ⊆ 1 2 3 4 5" ]
            , output =
                [ "┌─┬───┐"
                , "│1│4 5│"
                , "└─┴───┘"
                ]
            }
        , Example
            { input = [ "1 1 2 2 2⊆⍳5" ]
            , output =
                [ "┌───┬─────┐"
                , "│1 2│3 4 5│"
                , "└───┴─────┘"
                ]
            }
        , Example
            { input = [ "' ' (≠⊆⊢) ' many a  time'" ]
            , output =
                [ "┌────┬─┬────┐"
                , "│many│a│time│"
                , "└────┴─┴────┘"
                ]
            }
        ]
    }


squad : CharInfo
squad =
    { char = '⌷'
    , name = "Squad"
    , docsLinks =
        [ { name = "Materialise", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Materialise.htm" }
        , { name = "Index", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index.htm" }
        , { name = "Index with Axes", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index%20with%20Axes.htm" }
        ]
    , completions =
        [ Tab "[|"
        , Tab "|]"
        , Backquote 'L'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Materialise"
        , Example
            { input = [ "⌷ ⍵" ]
            , output = []
            }
        , Plain
            [ "If ⍵ is an array, returns ⍵."
            , "If ⍵ is ref to an instance of a Class with a Numbered Default property, all items of that property are returned."
            , "If ⍵ is a collection, returns all elements in the collection as an array."
            ]
        , Category "Dyadic function"
        , Heading "Index"
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "2 3 ⌷ mat" ]
            , output = [ "7" ]
            }
        , Example
            { input = [ "2 ⌷ mat" ]
            , output = [ "5 6 7 8" ]
            }
        , Example
            { input = [ "2 ⌷[2] mat" ]
            , output = [ "2 6 10" ]
            }
        ]
    }


gradeUp : CharInfo
gradeUp =
    { char = '⍋'
    , name = "Grade Up"
    , docsLinks =
        [ { name = "Grade Up (Monadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Up%20Monadic.htm" }
        , { name = "Grade Up (Dyadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Up%20Dyadic.htm" }
        ]
    , completions =
        [ Tab "A|"
        , Backquote '$'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Grade Up"
        , Plain [ "Indices which would select items in ascending order." ]
        , Example
            { input = [ "⍋ 33 11 44 66 22" ]
            , output = [ "2 5 1 3 4" ]
            }
        , Example
            { input =
                [ "names←'Joe' 'Sue' 'Sam'"
                , "ages←34 22 25"
                , ""
                , "names[⍋ages]"
                ]
            , output =
                [ "┌───┬───┬───┐"
                , "│Sue│Sam│Joe│"
                , "└───┴───┴───┘"
                ]
            }
        , Example
            { input = [ "⍋ 'ABC' ⎕NULL ⍬ ¯3j4 'A'" ]
            , output = [ "3 2 4 5 1" ]
            }
        , Category "Dyadic function"
        , Heading "Dyadic Grade Up"
        , Plain [ "Provide collating sequence for character data." ]
        , Example
            { input = [ "⍋ 'Banana'" ]
            , output = [ "1 2 4 6 3 5" ]
            }
        , Example
            { input = [ "'an' ⍋ 'Banana'" ]
            , output = [ "2 4 6 3 5 1" ]
            }
        ]
    }


gradeDown : CharInfo
gradeDown =
    { char = '⍒'
    , name = "Grade Down"
    , docsLinks =
        [ { name = "Grade Down (Monadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Down%20Monadic.htm" }
        , { name = "Grade Down (Dyadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Down%20Dyadic.htm" }
        ]
    , completions =
        [ Tab "V|"
        , Backquote '#'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Grade Down"
        , Plain [ "Indices which would select items in descending order." ]
        , Example
            { input = [ "⍒ 33 11 44 66 22" ]
            , output = [ "4 3 1 5 2" ]
            }
        , Example
            { input =
                [ "names←'Joe' 'Sue' 'Sam'"
                , "ages←34 22 25"
                , ""
                , "names[⍒ages]"
                ]
            , output =
                [ "┌───┬───┬───┐"
                , "│Joe│Sam│Sue│"
                , "└───┴───┴───┘"
                ]
            }
        , Example
            { input = [ "⍒ 'ABC' ⎕NULL ⍬ ¯3j4 'A'" ]
            , output = [ "1 5 4 2 3" ]
            }
        , Category "Dyadic function"
        , Heading "Dyadic Grade Down"
        , Plain [ "Provide collating sequence for character data." ]
        , Example
            { input = [ "⍒ 'Banana'" ]
            , output = [ "3 5 2 4 6 1" ]
            }
        , Example
            { input = [ "'an' ⍒ 'Banana'" ]
            , output = [ "1 3 5 2 4 6" ]
            }
        ]
    }


iota : CharInfo
iota =
    { char = '⍳'
    , name = "Iota"
    , docsLinks =
        [ { name = "Index Generator", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index%20Generator.htm" }
        , { name = "Index Of", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index%20Of.htm" }
        ]
    , completions =
        [ Tab "ii"
        , Backquote 'i'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Index Generator"
        , Example
            { input = [ "⍳ 10" ]
            , output = [ "1 2 3 4 5 6 7 8 9 10" ]
            }
        , Example
            { input = [ "⍳ 2 3" ]
            , output =
                [ "┌───┬───┬───┐"
                , "│1 1│1 2│1 3│"
                , "├───┼───┼───┤"
                , "│2 1│2 2│2 3│"
                , "└───┴───┴───┘"
                ]
            }
        , Category "Dyadic function"
        , Heading "Index Of"
        , Example
            { input = [ "'ABCDABCDEF' ⍳ 'ACF'" ]
            , output = [ "1 3 10" ]
            }
        , Example
            { input =
                [ "mat ← 3 2 ⍴ ⍳6"
                , "mat"
                ]
            , output =
                [ "1 2"
                , "3 4"
                , "5 6"
                ]
            }
        , Example
            { input = [ "mat ⍳ 5 6" ]
            , output = [ "3" ]
            }
        ]
    }


iotaUnderbar : CharInfo
iotaUnderbar =
    { char = '⍸'
    , name = "Iota Underbar"
    , docsLinks =
        [ { name = "Where", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Where.htm" }
        , { name = "Interval Index", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Interval%20Index.htm" }
        ]
    , completions =
        [ Tab "i_"
        , Backquote 'I'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Where"
        , Example
            { input = [ "⍸ 1 0 0 1 1" ]
            , output = [ "1 4 5" ]
            }
        , Example
            { input =
                [ "bmat ← 2 3 ⍴ 0 1"
                , "bmat"
                ]
            , output =
                [ "0 1 0"
                , "1 0 1"
                ]
            }
        , Example
            { input = [ "⍸ bmat" ]
            , output =
                [ "┌───┬───┬───┐"
                , "│1 2│2 1│2 3│"
                , "└───┴───┴───┘"
                ]
            }
        , Category "Dyadic function"
        , Heading "Interval Index"
        , Example
            { input = [ "'AEIOU' ⍸ 'DYALOG'" ]
            , output = [ "1 5 1 3 4 2" ]
            }
        , Example
            { input = [ "2 4 6 ⍸ 1 2 3 4 5 6 7" ]
            , output = [ "0 1 1 2 2 3 3" ]
            }
        , Example
            { input =
                [ "mat ← 3 2 ⍴ ⍳6"
                , "mat"
                ]
            , output =
                [ "1 2"
                , "3 4"
                , "5 6"
                ]
            }
        , Example
            { input = [ "mat ⍸ 3 3" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "mat ⍸ 3 5" ]
            , output = [ "2" ]
            }
        ]
    }


epsilon : CharInfo
epsilon =
    { char = '∊'
    , name = "Epsilon"
    , docsLinks =
        [ { name = "Enlist", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Enlist.htm" }
        , { name = "Type", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Type.htm" }
        , { name = "Membership", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Membership.htm" }
        ]
    , completions =
        [ Tab "ee"
        , Backquote 'e'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Enlist"
        , Example
            { input =
                [ "mat ← 2 3 ⍴ ⍳6"
                , "mat"
                ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                ]
            }
        , Example
            { input = [ "∊ 0 mat (7 8) 9" ]
            , output = [ "0 1 2 3 4 5 6 7 8 9" ]
            }
        , Example
            { input = [ "∊ 2 3⍴1 'abc'" ]
            , output = [ "1 abc 1 abc 1 abc" ]
            }
        , Category "Dyadic function"
        , Heading "Membership"
        , Example
            { input = [ "'abc' 4 ∊ 4 'ab' 'abcd'" ]
            , output = [ "0 1" ]
            }
        , Example
            { input = [ "mat ∊ 6 2 7 4" ]
            , output =
                [ "0 1 0"
                , "1 0 1"
                ]
            }
        ]
    }


epsilonUnderbar : CharInfo
epsilonUnderbar =
    { char = '⍷'
    , name = "Epsilon Underbar"
    , docsLinks =
        [ { name = "Find", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Find.htm" }
        ]
    , completions =
        [ Tab "e_"
        , Backquote 'E'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Find"
        , Example
            { input = [ "'ana' ⍷ 'Banana'" ]
            , output = [ "0 1 0 1 0 0" ]
            }
        , Example
            { input = [ "X Y" ]
            , output =
                [ "┌───┬───────┐"
                , "│0 1│0 1 0 0│"
                , "│1 0│1 0 0 1│"
                , "│   │0 0 1 0│"
                , "│   │0 1 0 0│"
                , "└───┴───────┘"
                ]
            }
        , Example
            { input = [ "X ⍷ Y" ]
            , output =
                [ "1 0 0 0"
                , "0 0 1 0"
                , "0 1 0 0"
                , "0 0 0 0"
                ]
            }
        ]
    }


downShoe : CharInfo
downShoe =
    { char = '∪'
    , name = "Down Shoe"
    , docsLinks =
        [ { name = "Unique", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Unique.htm" }
        , { name = "Union", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Union.htm" }
        ]
    , completions =
        [ Tab "uu"
        , Tab "UU"
        , Backquote 'v'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Unique"
        , Example
            { input = [ "∪ 'ab' 'ba' 'ab' 1 1 2" ]
            , output =
                [ "┌──┬──┬─┬─┐"
                , "│ab│ba│1│2│"
                , "└──┴──┴─┴─┘"
                ]
            }
        , Example
            { input =
                [ "mat ← ↑ 'flywheel' 'shyster' 'flywheel'"
                , "mat"
                ]
            , output =
                [ "flywheel"
                , "shyster "
                , "flywheel"
                ]
            }
        , Example
            { input = [ "∪mat" ]
            , output =
                [ "flywheel"
                , "shyster "
                ]
            }
        , Category "Dyadic function"
        , Heading "Union"
        , Example
            { input = [ "'ab' 'cde' 'fg' ∪ 'a' 'ab'" ]
            , output =
                [ "┌──┬───┬──┬─┐"
                , "│ab│cde│fg│a│"
                , "└──┴───┴──┴─┘"
                ]
            }
        ]
    }


upShoe : CharInfo
upShoe =
    { char = '∩'
    , name = "Up Shoe"
    , docsLinks =
        [ { name = "Intersection", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Intersection.htm" }
        ]
    , completions =
        [ Tab "nn"
        , Backquote 'c'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Intersection"
        , Example
            { input = [ "22 'ab' 'fg' ∩ 'a' 'ab' 22" ]
            , output =
                [ "┌──┬──┐"
                , "│22│ab│"
                , "└──┴──┘"
                ]
            }
        ]
    }


tilde : CharInfo
tilde =
    { char = '~'
    , name = "Tilde"
    , docsLinks =
        [ { name = "Not", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Not.htm" }
        , { name = "Excluding", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Excluding.htm" }
        ]
    , completions = [ Backquote 't' ]
    , description =
        [ Category "Monadic function"
        , Heading "NOT"
        , Example
            { input = [ "~ 0 1 0 1" ]
            , output = [ "1 0 1 0" ]
            }
        , Category "Dyadic function"
        , Heading "Without"
        , Example
            { input = [ "3 1 4 1 5 ~ 5 1" ]
            , output = [ "3 4" ]
            }
        , Example
            { input = [ "'aa' 'bb' 'cc' 'bb'  ~ 'bb' 'xx'" ]
            , output =
                [ "┌──┬──┐"
                , "│aa│cc│"
                , "└──┴──┘"
                ]
            }
        ]
    }


slash : CharInfo
slash =
    { char = '/'
    , name = "Slash"
    , docsLinks =
        [ { name = "Replicate", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Replicate.htm" }
        , { name = "Reduce", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce.htm" }
        , { name = "Reduce N-Wise", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce%20N%20Wise.htm" }
        ]
    , completions = []
    , description =
        [ Category "Dyadic function"
        , Heading "Replicate"
        , Example
            { input = [ "3 1 ¯2 2 / 6 7 8 9" ]
            , output = [ "6 6 6 7 0 0 9 9" ]
            }
        , Example
            { input = [ "1 0 1 0 1 / 'Heart'" ]
            , output = [ "Hat" ]
            }
        , Category "Monadic operator"
        , Heading "Reduce (Fold, N-Wise Reduce)"
        , Example
            { input = [ "+/ 1 2 3 4 5" ]
            , output = [ "15" ]
            }
        , Example
            { input = [ "2 +/ 1 2 3 4 5   ⍝ pair-wise sum" ]
            , output = [ "3 5 7 9" ]
            }
        , Example
            { input =
                [ "cube ← 2 3 4 ⍴ ⍳24"
                , "cube    ⍝ 3D array"
                ]
            , output =
                [ " 1  2  3  4"
                , " 5  6  7  8"
                , " 9 10 11 12"
                , "           "
                , "13 14 15 16"
                , "17 18 19 20"
                , "21 22 23 24"
                ]
            }
        , Example
            { input = [ "+/ cube" ]
            , output =
                [ "10 26 42"
                , "58 74 90"
                ]
            }
        , Example
            { input = [ "+/[1] cube    ⍝ sum of planes" ]
            , output =
                [ "14 16 18 20"
                , "22 24 26 28"
                , "30 32 34 36"
                ]
            }
        , Example
            { input = [ "+/[2] cube    ⍝ column sums" ]
            , output =
                [ "15 18 21 24"
                , "51 54 57 60"
                ]
            }
        ]
    }


backslash : CharInfo
backslash =
    { char = '\\'
    , name = "Backslash"
    , docsLinks =
        [ { name = "Expand", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Expand.htm" }
        , { name = "Scan", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Scan.htm" }
        ]
    , completions = []
    , description =
        [ Category "Dyadic function"
        , Heading "Expand"
        , Example
            { input = [ "3 ¯2 4 \\ 7 8" ]
            , output = [ "7 7 7 0 0 8 8 8 8" ]
            }
        , Example
            { input = [ "1 0 1 0 1 \\ 'Hat'" ]
            , output = [ "H a t" ]
            }
        , Category "Monadic operator"
        , Heading "Scan"
        , Example
            { input = [ "+\\ 1 2 3 4 5" ]
            , output = [ "1 3 6 10 15" ]
            }
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "+\\ mat" ]
            , output =
                [ "1  3  6 10"
                , "5 11 18 26"
                , "9 19 30 42"
                ]
            }
        , Example
            { input = [ "+\\[1] mat" ]
            , output =
                [ " 1  2  3  4"
                , " 6  8 10 12"
                , "15 18 21 24"
                ]
            }
        ]
    }


slashBar : CharInfo
slashBar =
    { char = '⌿'
    , name = "Slash Bar"
    , docsLinks =
        [ { name = "Replicate First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Replicate%20First.htm" }
        , { name = "Reduce First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce%20First.htm" }
        , { name = "Reduce First N-Wise", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce%20First%20N%20Wise.htm" }
        ]
    , completions =
        [ Tab "/-"
        , Backquote '/'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Replicate First (Compress First)"
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "1 0 2 ⌿ mat" ]
            , output =
                [ "1  2  3  4"
                , "9 10 11 12"
                , "9 10 11 12"
                ]
            }
        , Category "Monadic operator"
        , Heading "Reduce First"
        , Example
            { input = [ "+⌿ mat" ]
            , output = [ "15 18 21 24" ]
            }
        , Example
            { input = [ "2 +⌿ mat     ⍝ pair-wise" ]
            , output =
                [ " 6  8 10 12"
                , "14 16 18 20"
                ]
            }
        ]
    }


backslashBar : CharInfo
backslashBar =
    { char = '⍀'
    , name = "Backslash Bar"
    , docsLinks =
        [ { name = "Expand First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Expand%20First.htm" }
        , { name = "Scan First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Scan%20First.htm" }
        ]
    , completions =
        [ Tab "\\-"
        , Backquote '.'
        ]
    , description =
        [ Category "Dyadic function"
        , Heading "Expand First"
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "1 0 2 1 ⍀ mat" ]
            , output =
                [ "1  2  3  4"
                , "0  0  0  0"
                , "5  6  7  8"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Category "Monadic operator"
        , Heading "Scan First"
        , Example
            { input = [ "+⍀ mat" ]
            , output =
                [ " 1  2  3  4"
                , " 6  8 10 12"
                , "15 18 21 24"
                ]
            }
        ]
    }


comma : CharInfo
comma =
    { char = ','
    , name = "Comma"
    , docsLinks =
        [ { name = "Ravel", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Ravel.htm" }
        , { name = "Ravel with Axes", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Ravel%20with%20Axes.htm" }
        , { name = "Catenate Laminate", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Catenate%20Laminate.htm" }
        ]
    , completions = []
    , description =
        [ Category "Monadic function"
        , Heading "Ravel"
        , Example
            { input =
                [ "cube ← 2 2 2 ⍴ ⍳8"
                , "cube    ⍝ 3D array"
                ]
            , output =
                [ "1 2"
                , "3 4"
                , ""
                , "5 6"
                , "7 8"
                ]
            }
        , Example
            { input = [ ", cube" ]
            , output = [ "1 2 3 4 5 6 7 8" ]
            }
        , Example
            { input = [ ",[2 3] cube    ⍝ Ravel with axes" ]
            , output =
                [ "1 2 3 4"
                , "5 6 7 8"
                ]
            }
        , Category "Dyadic function"
        , Heading "Catenate/Laminate (Join)"
        , Example
            { input = [ "1 2 3 , 4 5 6" ]
            , output = [ "1 2 3 4 5 6" ]
            }
        , Example
            { input = [ "cube , 99" ]
            , output =
                [ "1 2 99"
                , "3 4 99"
                , ""
                , "5 6 99"
                , "7 8 99"
                ]
            }
        , Example
            { input = [ "1 2 3 ,[0.5] 4 5 6   ⍝ Laminate" ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                ]
            }
        ]
    }


commaBar : CharInfo
commaBar =
    { char = '⍪'
    , name = "Comma Bar"
    , docsLinks =
        [ { name = "Table", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Table.htm" }
        , { name = "Catenate First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Catenate%20First.htm" }
        ]
    , completions =
        [ Tab ",-"
        , Backquote '<'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Table"
        , Example
            { input = [ "⍪ 2 3 4" ]
            , output =
                [ "2"
                , "3"
                , "4"
                ]
            }
        , Example
            { input =
                [ "cube ← 2 2 2 ⍴ ⍳8"
                , "cube    ⍝ 3D array"
                ]
            , output =
                [ "1 2"
                , "3 4"
                , ""
                , "5 6"
                , "7 8"
                ]
            }
        , Example
            { input = [ "⍪ cube" ]
            , output =
                [ "1 2 3 4"
                , "5 6 7 8"
                ]
            }
        , Category "Dyadic function"
        , Heading "Catenate First/Laminate"
        , Example
            { input =
                [ "mat ← 2 3 ⍴ ⍳6"
                , "mat"
                ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                ]
            }
        , Example
            { input = [ "mat ⍪ 0" ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                , "0 0 0"
                ]
            }
        , Example
            { input = [ "mat ⍪ 7 8 9" ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                , "7 8 9"
                ]
            }
        ]
    }


rho : CharInfo
rho =
    { char = '⍴'
    , name = "Rho"
    , docsLinks =
        [ { name = "Shape", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Shape.htm" }
        , { name = "Reshape", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reshape.htm" }
        ]
    , completions =
        [ Tab "rr"
        , Tab "pp"
        , Backquote 'r'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Shape"
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "⍴ mat" ]
            , output = [ "3 4" ]
            }
        , Example
            { input = [ "⍴⍴ mat" ]
            , output = [ "2" ]
            }
        , Example
            { input = [ "⍴ 'your boat'" ]
            , output = [ "9" ]
            }
        , Example
            { input = [ "⍴ 7" ]
            , output = [ "" ]
            }
        , Example
            { input = [ "⍴⍴ 7" ]
            , output = [ "0" ]
            }
        , Category "Dyadic function"
        , Heading "Reshape"
        , Example
            { input = [ "2 3 4 ⍴ 1 2 3 4 5 6 7" ]
            , output =
                [ "1 2 3 4"
                , "5 6 7 1"
                , "2 3 4 5"
                , ""
                , "6 7 1 2"
                , "3 4 5 6"
                , "7 1 2 3"
                ]
            }
        ]
    }


circleStile : CharInfo
circleStile =
    { char = '⌽'
    , name = "Circle Stile"
    , docsLinks =
        [ { name = "Reverse", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reverse.htm" }
        , { name = "Rotate", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Rotate.htm" }
        ]
    , completions =
        [ Tab "O|"
        , Backquote '%'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Reverse"
        , Example
            { input = [ "⌽ 'trams'" ]
            , output = [ "smart" ]
            }
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "⌽ mat" ]
            , output =
                [ " 4  3  2 1"
                , " 8  7  6 5"
                , "12 11 10 9"
                ]
            }
        , Example
            { input = [ "⌽[1] mat" ]
            , output =
                [ "9 10 11 12"
                , "5  6  7  8"
                , "1  2  3  4"
                ]
            }
        , Category "Dyadic function"
        , Heading "Rotate"
        , Example
            { input = [ "3 ⌽ 'HatStand'" ]
            , output = [ "StandHat" ]
            }
        , Example
            { input = [ "¯2 ⌽ 1 2 3 4 5 6" ]
            , output = [ "5 6 1 2 3 4" ]
            }
        , Example
            { input = [ "¯1 ⌽ mat" ]
            , output =
                [ " 4 1  2  3"
                , " 8 5  6  7"
                , "12 9 10 11"
                ]
            }
        , Example
            { input = [ "1 ¯1 2 ⌽ mat" ]
            , output =
                [ " 2  3 4  1"
                , " 8  5 6  7"
                , "11 12 9 10"
                ]
            }
        , Example
            { input = [ "0 1 2 ¯1 ⌽[1] mat" ]
            , output =
                [ "1  6 11 12"
                , "5 10  3  4"
                , "9  2  7  8"
                ]
            }
        ]
    }


circleBar : CharInfo
circleBar =
    { char = '⊖'
    , name = "Circle Bar"
    , docsLinks =
        [ { name = "Reverse First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reverse%20First.htm" }
        , { name = "Rotate First", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Rotate%20First.htm" }
        ]
    , completions =
        [ Tab "O-"
        , Backquote '&'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Reverse First"
        , Example
            { input =
                [ "mat ← 3 4 ⍴ ⍳12"
                , "mat"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "⊖ mat" ]
            , output =
                [ "9 10 11 12"
                , "5  6  7  8"
                , "1  2  3  4"
                ]
            }
        , Category "Dyadic function"
        , Heading "Rotate First"
        , Example
            { input = [ "0 1 2 ¯1 ⊖ mat" ]
            , output =
                [ "1  6 11 12"
                , "5 10  3  4"
                , "9  2  7  8"
                ]
            }
        ]
    }


transpose : CharInfo
transpose =
    { char = '⍉'
    , name = "Transpose"
    , docsLinks =
        [ { name = "Transpose (Monadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Transpose%20Monadic.htm" }
        , { name = "Transpose (Dyadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Transpose%20Dyadic.htm" }
        ]
    , completions =
        [ Tab "O\\"
        , Backquote '^'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Transpose"
        , Example
            { input =
                [ "mat ← 2 3 ⍴ ⍳6"
                , "mat"
                ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                ]
            }
        , Example
            { input = [ "⍉ mat" ]
            , output =
                [ "1 4"
                , "2 5"
                , "3 6"
                ]
            }
        , Category "Dyadic function"
        , Heading "Dyadic Transpose"
        , Example
            { input = [ "2 1 ⍉ mat" ]
            , output =
                [ "1 4"
                , "2 5"
                , "3 6"
                ]
            }
        , Example
            { input = [ "1 1 ⍉ mat   ⍝ leading diagonal" ]
            , output = [ "1 5" ]
            }
        ]
    }


diaeresis : CharInfo
diaeresis =
    { char = '¨'
    , name = "Diaeresis"
    , docsLinks =
        [ { name = "Each (with Monadic Operand)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Each%20with%20Monadic%20Operand.htm" }
        , { name = "Each (with Dyadic Operand)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Each%20with%20Dyadic%20Operand.htm" }
        ]
    , completions =
        [ Tab "::"
        , Tab "\"\""
        , Backquote '1'
        ]
    , description =
        [ Category "Monadic operator"
        , Heading "Each (Map)"
        , Example
            { input = [ "⊃¨ 1 2 3 'ABC' (9 8 7)" ]
            , output = [ "1 2 3 A 9" ]
            }
        , Example
            { input = [ "+/¨ (1 2 3 4)(5 6 7)" ]
            , output = [ "10 18" ]
            }
        , Example
            { input = [ "3 ↑¨ 1 2 (3 4) 'V'" ]
            , output =
                [ "┌─────┬─────┬─────┬───┐"
                , "│1 0 0│2 0 0│3 4 0│V  │"
                , "└─────┴─────┴─────┴───┘"
                ]
            }
        , Example
            { input = [ "1 2 3 ,¨ 99" ]
            , output =
                [ "┌────┬────┬────┐"
                , "│1 99│2 99│3 99│"
                , "└────┴────┴────┘"
                ]
            }
        ]
    }


tildeDiaeresis : CharInfo
tildeDiaeresis =
    { char = '⍨'
    , name = "Tilde Diaeresis"
    , docsLinks =
        [ { name = "Commute", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Commute.htm" }
        , { name = "Constant", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Constant.htm" }
        ]
    , completions =
        [ Tab "~:"
        , Tab "~\""
        , Backquote 'T'
        ]
    , description =
        [ Category "Monadic operator (f⍨)"
        , Heading "Commute (Switch)"
        , Example
            { input = [ "2 ⍴ 3     ⍝ ⍺ ⍴ ⍵" ]
            , output = [ "3 3" ]
            }
        , Example
            { input = [ "2 ⍴⍨ 3    ⍝ ⍵ ⍴ ⍺" ]
            , output = [ "2 2 2" ]
            }
        , Example
            { input = [ "⍴⍨ 3      ⍝ ⍵ ⍴ ⍵" ]
            , output = [ "3 3 3" ]
            }
        , Category "Monadic operator (a⍨)"
        , Heading "Constant"
        , Example
            { input = [ "'mu'⍨ 'any' ⎕NULL   ⍝ Always returns its operand" ]
            , output = [ "mu" ]
            }
        , Example
            { input = [ "1E100 ('mu'⍨) 1j1" ]
            , output = [ "mu" ]
            }
        , Example
            { input = [ "¯1⍨¨ ⍳2 3" ]
            , output =
                [ "¯1 ¯1 ¯1"
                , "¯1 ¯1 ¯1"
                ]
            }
        ]
    }


starDiaeresis : CharInfo
starDiaeresis =
    { char = '⍣'
    , name = "Star Diaeresis"
    , docsLinks =
        [ { name = "Power Operator", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Power%20Operator.htm" }
        ]
    , completions =
        [ Tab "*:"
        , Tab "*\""
        , Backquote 'P'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Power"
        , Example
            { input =
                [ "cube ← 2 2 2 ⍴ ⎕A"
                , "cube    ⍝ 3D array"
                ]
            , output =
                [ "AB"
                , "CD"
                , ""
                , "EF"
                , "GH"
                ]
            }
        , Example
            { input = [ "(↓⍣1) cube   ⍝ split once" ]
            , output =
                [ "┌──┬──┐"
                , "│AB│CD│"
                , "├──┼──┤"
                , "│EF│GH│"
                , "└──┴──┘"
                ]
            }
        , Example
            { input = [ "(↓⍣2) cube   ⍝ split twice" ]
            , output =
                [ "┌───────┬───────┐"
                , "│┌──┬──┐│┌──┬──┐│"
                , "││AB│CD│││EF│GH││"
                , "│└──┴──┘│└──┴──┘│"
                , "└───────┴───────┘"
                ]
            }
        , Example
            { input =
                [ "f ← (32∘+)∘(×∘1.8)   ⍝ Fahrenheit from Celsius"
                , ""
                , "f ¯273 ¯40 0 100     ⍝ Fahrenheit"
                ]
            , output = [ "¯459.4 ¯40 32 212" ]
            }
        , Example
            { input =
                [ "c ← f⍣¯1             ⍝ Inverse: Celsius from Fahrenheit"
                , ""
                , "c ¯459.4 ¯40 32 212  ⍝ Celsius"
                ]
            , output = [ "¯273 ¯40 0 100" ]
            }
        , Example
            { input = [ "1 +∘÷⍣= 1            ⍝ fixpoint: golden mean" ]
            , output = [ "1.61803" ]
            }
        ]
    }


dot : CharInfo
dot =
    { char = '.'
    , name = "Dot"
    , docsLinks =
        [ { name = "Inner Product", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Inner%20Product.htm" }
        , { name = "Outer Product", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Outer%20Product.htm" }
        ]
    , completions = []
    , description =
        [ Category "Dyadic operator"
        , Heading "Product"
        , Heading "Inner Product f.g"
        , Example
            { input = [ "1 2 3 +.× 4 5 6" ]
            , output = [ "32" ]
            }
        , Example
            { input = [ "3 ∧.= 3 3 3 3" ]
            , output = [ "1" ]
            }
        , Example
            { input =
                [ "mat ← 2 2 ⍴ ⍳4"
                , "mat"
                ]
            , output =
                [ "1 2"
                , "3 4"
                ]
            }
        , Example
            { input = [ "mat +.× mat   ⍝ matrix product" ]
            , output =
                [ " 7 10"
                , "15 22"
                ]
            }
        , Heading "Outer Product ∘.g"
        , Example
            { input = [ "1 2 3 ∘.× 4 5 6 7" ]
            , output =
                [ " 4  5  6  7"
                , " 8 10 12 14"
                , "12 15 18 21"
                ]
            }
        ]
    }


jot : CharInfo
jot =
    { char = '∘'
    , name = "Jot"
    , docsLinks =
        [ { name = "Beside", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Beside.htm" }
        , { name = "Bind", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Bind.htm" }
        ]
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
            { input = [ "⌽∘⍳¨ 3 4 5" ]
            , output =
                [ "┌─────┬───────┬─────────┐"
                , "│3 2 1│4 3 2 1│5 4 3 2 1│"
                , "└─────┴───────┴─────────┘"
                ]
            }
        , Example
            { input = [ "¯1 ⌽∘⍳¨ 3 4 5" ]
            , output =
                [ "┌─────┬───────┬─────────┐"
                , "│3 1 2│4 1 2 3│5 1 2 3 4│"
                , "└─────┴───────┴─────────┘"
                ]
            }
        , Example
            { input = [ "+∘÷/ 40⍴1    ⍝ continued fraction" ]
            , output = [ "1.61803" ]
            }
        ]
    }


jotDiaeresis : CharInfo
jotDiaeresis =
    { char = '⍤'
    , name = "Jot Diaeresis"
    , docsLinks =
        [ { name = "Atop", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Atop.htm" }
        , { name = "Rank", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Rank.htm" }
        ]
    , completions =
        [ Tab "o:"
        , Tab "o\""
        , Backquote 'J'
        ]
    , description =
        [ Category "Dyadic operator (f⍤g)"
        , Heading "Atop"
        , Example
            { input = [ "-⍤÷ 4      ⍝ (  f⍤g y) ≡  f   g y" ]
            , output = [ "¯0.25" ]
            }
        , Example
            { input = [ "12 -⍤÷ 4   ⍝ (x f⍤g y) ≡ (f x g y)" ]
            , output = [ "¯3" ]
            }
        , Example
            { input = [ "3 1 4 1 5 ~⍤∊ 1 2 3" ]
            , output = [ "0 0 1 0 1" ]
            }
        , Category "Dyadic operator (f⍤a)"
        , Heading "Rank"
        , Example
            { input =
                [ "cube ← 2 2 3 ⍴ ⍳12"
                , "cube    ⍝ 3D array"
                ]
            , output =
                [ " 1  2  3"
                , " 4  5  6"
                , ""
                , " 7  8  9"
                , "10 11 12"
                ]
            }
        , Example
            { input = [ "(,⍤2) cube" ]
            , output =
                [ "1 2 3  4  5  6"
                , "7 8 9 10 11 12"
                ]
            }
        , Example
            { input =
                [ "cmat ← 2 3 ⍴ 'abczxy'"
                , "cmat    ⍝ character matrix"
                ]
            , output =
                [ "abc"
                , "zxy"
                ]
            }
        , Example
            { input = [ "(⍋⍤1) cmat    ⍝ grade-up by row" ]
            , output =
                [ "1 2 3"
                , "2 3 1"
                ]
            }
        , Example
            { input =
                [ "nmat ← 3 4 ⍴ ⍳12"
                , "nmat     ⍝ numeric matrix"
                ]
            , output =
                [ "1  2  3  4"
                , "5  6  7  8"
                , "9 10 11 12"
                ]
            }
        , Example
            { input = [ "10 20 30 (+⍤0 1) nmat  ⍝ scalars plus vectors" ]
            , output =
                [ "11 12 13 14"
                , "25 26 27 28"
                , "39 40 41 42"
                ]
            }
        ]
    }


circleDiaeresis : CharInfo
circleDiaeresis =
    { char = '⍥'
    , name = "Circle Diaeresis"
    , docsLinks =
        [ { name = "Over", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Over.htm" }
        ]
    , completions =
        [ Tab "O:"
        , Tab "O\""
        , Backquote 'O'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Over"
        , Example
            { input = [ "-⍥⌊ 3.6                 ⍝ Same as ∘ or ⍤ monadically" ]
            , output = [ "¯3" ]
            }
        , Example
            { input = [ "5.1 -⍥⌊ 3.6             ⍝ Applies ⌊ to both arguments" ]
            , output = [ "2" ]
            }
        , Example
            { input = [ "'Dyalog' ≡⍥⎕C 'DYALOG'  ⍝ Case-insensitive match" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "'Dyalog' ≡⍥⎕C 'IBM'" ]
            , output = [ "0" ]
            }
        ]
    }


at : CharInfo
at =
    { char = '@'
    , name = "At"
    , docsLinks =
        [ { name = "At", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/At.htm" }
        ]
    , completions = []
    , description =
        [ Category "Dyadic operator"
        , Heading "At"
        , Example
            { input = [ "(0@2 4) 1 2 3 4 5" ]
            , output = [ "1 0 3 0 5" ]
            }
        , Example
            { input = [ "10 (×@2 4) 1 2 3 4 5" ]
            , output = [ "1 20 3 40 5" ]
            }
        , Example
            { input = [ "(÷@2 4) 1 2 3 4 5" ]
            , output = [ "1 0.5 3 0.25 5" ]
            }
        , Example
            { input = [ "'*'@(2∘|) 1 2 3 4 5   ⍝ Boolean selection 1 0 1 0 1" ]
            , output = [ "* 2 * 4 *" ]
            }
        , Example
            { input = [ "⌽@(2∘|) 1 2 3 4 5     ⍝ Reversal of sub-array 1 3 5" ]
            , output = [ "5 2 3 4 1" ]
            }
        ]
    }


quoteQuad : CharInfo
quoteQuad =
    { char = '⍞'
    , name = "Quote Quad"
    , docsLinks =
        [ { name = "Character Input/Output", url = "https://help.dyalog.com/18.0/index.htm#Language/System%20Functions/Character%20Input%20Output.htm" }
        ]
    , completions =
        [ Tab "['"
        , Tab "']"
        , Backquote '{'
        ]
    , description =
        [ Category "Niladic"
        , Heading "Character Input/Output"
        , Example
            { input = [ "chars ← ⍞     ⍝ input session line" ]
            , output = [ "hello" ]
            }
        , Example
            { input = [ "chars" ]
            , output = [ "hello" ]
            }
        , Example
            { input = [ "⍞ ← 'Name:'   ⍝ places text in session" ]
            , output = [ "Name:" ]
            }
        , Example
            { input =
                [ "ask ← {⍞←⍵ ⋄ (≢⍵)↓⍞}   ⍝ prompt for input:"
                , ""
                , "name ← ask¨ 'First:  ' 'Second: '"
                ]
            , output =
                [ "First:  John"
                , "Second: Brown"
                ]
            }
        , Example
            { input = [ "name" ]
            , output =
                [ "┌────┬─────┐"
                , "│John│Brown│"
                , "└────┴─────┘"
                ]
            }
        ]
    }


quad : CharInfo
quad =
    { char = '⎕'
    , name = "Quad"
    , docsLinks =
        [ { name = "Evaluated Input/Output", url = "https://help.dyalog.com/18.0/index.htm#Language/System%20Functions/Evaluated%20Input%20Output.htm" }
        ]
    , completions =
        [ Tab "[]"
        , Backquote 'l'
        ]
    , description =
        [ Category "Niladic"
        , Heading "Evaluated Input/Output"
        , Example
            { input = [ "2+⎕+4" ]
            , output = [ "⎕:" ]
            }
        , Example
            { input = [ "8-5" ]
            , output = [ "9" ]
            }
        , Example
            { input = [ "2+⎕←3+4" ]
            , output =
                [ "7"
                , "9"
                ]
            }
        ]
    }


quadColon : CharInfo
quadColon =
    { char = '⍠'
    , name = "Quad Colon"
    , docsLinks =
        [ { name = "Variant", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Variant.htm" }
        ]
    , completions =
        [ Tab "[:"
        , Tab ":]"
        , Backquote '?'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Variant"
        , Example
            { input = [ "('a' ⎕R 'x') 'ABC'           ⍝ 'a' replaced with 'x'" ]
            , output = [ "ABC" ]
            }
        , Example
            { input = [ "('a' ⎕R 'x' ⍠ 'IC' 1) 'ABC'  ⍝ .. Ignoring Case" ]
            , output = [ "xBC" ]
            }
        , Example
            { input =
                [ "IgnCase ← ⍠ 'IC' 1"
                , ""
                , "'a' ⎕R 'x' IgnCase 'ABC'"
                ]
            , output = [ "xBC" ]
            }
        ]
    }


quadEqual : CharInfo
quadEqual =
    { char = '⌸'
    , name = "Quad Equal"
    , docsLinks =
        [ { name = "Key", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Key.htm" }
        ]
    , completions =
        [ Tab "[="
        , Tab "=]"
        , Backquote 'K'
        ]
    , description =
        [ Category "Monadic operator"
        , Heading "Key"
        , Example
            { input = [ "'Banana' {⍺ ⍵}⌸ 3 1 4 1 5 9" ]
            , output =
                [ "┌─┬─────┐"
                , "│B│3    │"
                , "├─┼─────┤"
                , "│a│1 1 9│"
                , "├─┼─────┤"
                , "│n│4 5  │"
                , "└─┴─────┘"
                ]
            }
        , Example
            { input = [ "'Banana' {⍺,+/⍵}⌸ 3 1 4 1 5 9" ]
            , output =
                [ "B  3"
                , "a 11"
                , "n  9"
                ]
            }
        , Example
            { input = [ "'Banana' {⍺ ⍵}⌸ 1 2 3 4 5 6" ]
            , output =
                [ "┌─┬─────┐"
                , "│B│1    │"
                , "├─┼─────┤"
                , "│a│2 4 6│"
                , "├─┼─────┤"
                , "│n│3 5  │"
                , "└─┴─────┘"
                ]
            }
        , Example
            { input = [ "{⍺ ⍵}⌸ 'Banana'  ⍝ (same as above)" ]
            , output =
                [ "┌─┬─────┐"
                , "│B│1    │"
                , "├─┼─────┤"
                , "│a│2 4 6│"
                , "├─┼─────┤"
                , "│n│3 5  │"
                , "└─┴─────┘"
                ]
            }
        ]
    }


quadDiamond : CharInfo
quadDiamond =
    { char = '⌺'
    , name = "Quad Diamond"
    , docsLinks =
        [ { name = "Stencil", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Stencil.htm" }
        ]
    , completions =
        [ Tab "[<"
        , Tab ">]"
        , Backquote '~'
        ]
    , description =
        [ Category "Dyadic operator"
        , Heading "Stencil"
        , Example
            { input =
                [ "mat ← 4 4 ⍴ ⍳16"
                , "mat"
                ]
            , output =
                [ " 1  2  3  4"
                , " 5  6  7  8"
                , " 9 10 11 12"
                , "13 14 15 16"
                ]
            }
        , Example
            { input = [ "({⊂⍵}⌺3 3) mat" ]
            , output =
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
            }
        , Example
            { input = [ "({+/,⍵}⌺3 3) mat" ]
            , output =
                [ "14 24 30 22"
                , "33 54 63 45"
                , "57 90 99 69"
                , "46 72 78 54"
                ]
            }
        , Example
            { input = [ "{⍺ ⍵}⌸ 'Banana'  ⍝ (same as above)" ]
            , output =
                [ "┌─┬─────┐"
                , "│B│1    │"
                , "├─┼─────┤"
                , "│a│2 4 6│"
                , "├─┼─────┤"
                , "│n│3 5  │"
                , "└─┴─────┘"
                ]
            }
        ]
    }


iBeam : CharInfo
iBeam =
    { char = '⌶'
    , name = "I-Beam"
    , docsLinks =
        [ { name = "I-Beam (short)", url = "https://help.dyalog.com/18.0/index.htm#Language/I%20Beam%20Functions/I%20Beam%20(short).htm" }
        , { name = "I-Beam", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/I%20Beam.htm#I-Beam" }
        ]
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
    , docsLinks =
        [ { name = "Execute", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Execute.htm" }
        ]
    , completions =
        [ Tab "o_"
        , Backquote ';'
        ]
    , description =
        [ Category "Monadic function"
        , Heading "Execute"
        , Example
            { input = [ "⍎ '1+1'" ]
            , output = [ "2" ]
            }
        , Example
            { input =
                [ "V ← 1 2 3"
                , "⍎ 'V'"
                ]
            , output = [ "1 2 3" ]
            }
        ]
    }


thorn : CharInfo
thorn =
    { char = '⍕'
    , name = "Thorn"
    , docsLinks =
        [ { name = "Format (Monadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Format%20Monadic.htm" }
        , { name = "Format (Dyadic)", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Format%20Dyadic.htm" }
        ]
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
            { input = [ "4 5 6          ⍝ numeric vector" ]
            , output = [ "4 5 6" ]
            }
        , Example
            { input = [ "⍕ 4 5 6        ⍝ equivalent character vector" ]
            , output = [ "4·5·6" ]
            }
        , Example
            { input =
                [ "mat ← 2 3 ⍴ ⍳6"
                , "mat            ⍝ numeric matrix"
                ]
            , output =
                [ "1 2 3"
                , "4 5 6"
                ]
            }
        , Example
            { input = [ "⍕ mat          ⍝ equivalent character matrix" ]
            , output =
                [ "1·2·3"
                , "4·5·6"
                ]
            }
        , Category "Dyadic function"
        , Heading "Format By Specification"
        , Plain [ "Field-width and number of decimal places:" ]
        , Example
            { input = [ "6 2 ⍕ 3.125 0.002" ]
            , output = [ "··3.13··0.00" ]
            }
        , Example
            { input = [ "6 2 ⍕ mat" ]
            , output =
                [ "··1.00··2.00··3.00"
                , "··4.00··5.00··6.00"
                ]
            }
        , Example
            { input = [ "6 2 ⍕ 1234   ⍝ (field not wide enough)" ]
            , output = [ "******" ]
            }
        ]
    }


diamond : CharInfo
diamond =
    { char = '⋄'
    , name = "Diamond"
    , docsLinks =
        [ { name = "Statements", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/TradFns/Statements.htm" }
        ]
    , completions =
        [ Tab "<>"
        , Tab "^v"
        , Backquote '`'
        ]
    , description =
        [ Category "Syntax"
        , Heading "Statement Separator"
        , Plain [ "Statements are evaluated sequentially from left to right." ]
        , Example
            { input = [ "A←4 ⋄ A←A×3 ⋄ A÷2" ]
            , output = [ "6" ]
            }
        ]
    }


lamp : CharInfo
lamp =
    { char = '⍝'
    , name = "Lamp"
    , docsLinks =
        [ { name = "Statements", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/TradFns/Statements.htm" }
        ]
    , completions =
        [ Tab "on"
        , Backquote ','
        ]
    , description =
        [ Category "Syntax"
        , Heading "Comment"
        , Plain [ "Text to the right of ⍝ is ignored." ]
        , Example
            { input = [ "2+3  ⍝ this is a comment" ]
            , output = [ "5" ]
            }
        ]
    }


rightArrow : CharInfo
rightArrow =
    { char = '→'
    , name = "Right Arrow"
    , docsLinks =
        [ { name = "Branch", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Branch.htm" }
        , { name = "Abort", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Abort.htm" }
        ]
    , completions =
        [ Tab "->"
        , Backquote ']'
        ]
    , description =
        [ Category "Syntax"
        , Heading "Branch (Clear suspension)"
        , Example
            { input =
                [ "→ Label  ⍝ branch to Label:"
                , "→ ⎕LC    ⍝ resume suspended execution"
                , "→ 0      ⍝ exit current function and resume calling line"
                , "→        ⍝ clear one stack suspension"
                ]
            , output = []
            }
        , Plain [ "Branching is superseded by the more modern control structures such as :If ... :EndIf" ]
        ]
    }


omega : CharInfo
omega =
    { char = '⍵'
    , name = "Omega"
    , docsLinks =
        [ { name = "Dfns & Dops", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Functions%20and%20Operators.htm" }
        , { name = "Dops", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Operators.htm" }
        ]
    , completions =
        [ Tab "ww"
        , Backquote 'w'
        ]
    , description =
        [ Category "Syntax"
        , Heading "Omega (⍵): Right argument of a dfn"
        , Example
            { input = [ "2 {⍵+1} 5" ]
            , output = [ "6" ]
            }
        , Category "Syntax"
        , Heading "Double-Omega (⍵⍵): Right operand of a dop"
        , Example
            { input = [ "3 +{⍺ ⍵⍵ ⍵}× 4" ]
            , output = [ "12" ]
            }
        ]
    }


alpha : CharInfo
alpha =
    { char = '⍺'
    , name = "Alpha"
    , docsLinks =
        [ { name = "Dfns & Dops", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Functions%20and%20Operators.htm" }
        , { name = "Dops", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Operators.htm" }
        ]
    , completions =
        [ Tab "aa"
        , Backquote 'a'
        ]
    , description =
        [ Category "Syntax"
        , Heading "Alpha (⍺): Left argument of a dfn"
        , Example
            { input = [ "2 {⍺+1} 5" ]
            , output = [ "3" ]
            }
        , Category "Syntax"
        , Heading "Double-Alpha (⍺⍺): Left Operand of a dop"
        , Example
            { input = [ "3 +{⍺ ⍺⍺ ⍵} 4" ]
            , output = [ "7" ]
            }
        ]
    }


del : CharInfo
del =
    { char = '∇'
    , name = "Del"
    , docsLinks =
        [ { name = "Recursion", url = "https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Recursion.htm" }
        ]
    , completions =
        [ Tab "VV"
        , Tab "v-"
        , Backquote 'g'
        ]
    , description =
        [ Category "Syntax"
        , Heading "Del (∇): dfn self-reference (recursion)"
        , Example
            { input =
                [ "fact←{             ⍝ Factorial ⍵."
                , "    ⍵≤1: 1         ⍝ small ⍵: finished"
                , "    ⍵×∇ ⍵-1        ⍝ otherwise: recurse"
                , "}"
                ]
            , output = []
            }
        , Category "Syntax"
        , Heading "Double-Del (∇∇): dop self-reference"
        , Example
            { input =
                [ "pow←{                ⍝ power operator: apply ⍵⍵ times"
                , "    ⍵⍵=0:⍵           ⍝ ⍵⍵ is 0: finished"
                , "    ⍺⍺ ∇∇(⍵⍵-1)⍺⍺ ⍵  ⍝ otherwise: recurse"
                , "}"
                ]
            , output = []
            }
        ]
    }


ampersand : CharInfo
ampersand =
    { char = '&'
    , name = "Ampersand"
    , docsLinks =
        [ { name = "Spawn", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Spawn.htm" }
        ]
    , completions = []
    , description =
        [ Category "Monadic operator"
        , Heading "Spawn"
        , Example
            { input =
                [ "delay←{'Delayed: ',⎕DL ⍵}    ⍝ delay function"
                , ""
                , "delay 10    ⍝ delay for 10 seconds"
                ]
            , output = [ "Delayed:  10.2228" ]
            }
        , Example
            { input = [ "⎕←delay&10  ⍝ delay for 10 seconds in new thread 1" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "2+3 4       ⍝ execute something in current thread" ]
            , output = [ "5 6" ]
            }
        , Example
            { input = [ "            ⍝ thread 1 completes:" ]
            , output = [ "Delayed:  10.03183" ]
            }
        ]
    }


highMinus : CharInfo
highMinus =
    { char = '¯'
    , name = "High Minus"
    , docsLinks =
        [ { name = "Numbers", url = "https://help.dyalog.com/18.0/index.htm#Language/Introduction/Variables/Numbers.htm" }
        ]
    , completions =
        [ Tab "--"
        , Backquote '2'
        ]
    , description =
        [ Category "Syntax"
        , Heading "Qualifier for negative number"
        , Example
            { input = [ "1 + ¯1 0 1 ¯3" ]
            , output = [ "0 1 2 ¯2" ]
            }
        , Example
            { input = [ "3e¯2" ]
            , output = [ "0.03" ]
            }
        ]
    }


zilde : CharInfo
zilde =
    { char = '⍬'
    , name = "Zilde"
    , docsLinks =
        [ { name = "Zilde", url = "https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Zilde.htm" }
        ]
    , completions =
        [ Tab "0~"
        , Backquote '}'
        ]
    , description =
        [ Category "Niladic"
        , Heading "Empty Numeric Vector"
        , Example
            { input = [ "⍬≡⍳0" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "⍬≡0⍴0" ]
            , output = [ "1" ]
            }
        , Example
            { input = [ "⍬≡0 0⍴0" ]
            , output = [ "0" ]
            }
        , Example
            { input = [ "⍬≡''" ]
            , output = [ "0" ]
            }
        ]
    }


delta : CharInfo
delta =
    { char = '∆'
    , name = "Delta"
    , docsLinks = []
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
    , docsLinks = []
    , completions =
        [ Tab "A_"
        , Tab "^="
        , Backquote '>'
        ]
    , description = [ Heading "Identifier Character" ]
    }
