port module Main exposing (main)

import Browser
import Browser.Dom
import CharInfo exposing (CharInfo, Completion(..), DescriptionItem(..))
import Dict exposing (Dict)
import Html exposing (Html)
import Html.Attributes as Attrs
import Html.Attributes.Extra as Attrs
import Html.Events as Events
import Html.Events.Extra as Events
import Html.Extra as Html
import Http
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode
import List.Extra as List
import Task


main : Program () Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    { state : TryAPLState
    , input : String
    , isLoading : Bool
    , focusedChar : Char
    , log :
        List
            { input : String
            , output : List String
            }
    }


type alias TryAPLState =
    { environment : String
    , length : Int
    , hash : String
    }


port langBarCharClicked : (String -> msg) -> Sub msg


port langBarCharHovered : (String -> msg) -> Sub msg


init : () -> ( Model, Cmd Msg )
init flags =
    ( { state =
            { environment = ""
            , length = 0
            , hash = ""
            }
      , input = ""
      , isLoading = False
      , focusedChar = '+'
      , log = []
      }
    , Cmd.none
    )


type Msg
    = SetInput String
    | SendRequest
    | ReceivedResponse (Result Http.Error ( TryAPLState, List String ))
    | ScrollAttempted (Result Browser.Dom.Error ())
    | FocusAttempted (Result Browser.Dom.Error ())
    | LangBarCharHovered String
    | LangBarCharClicked String
    | RemoveLog Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetInput input ->
            if model.isLoading then
                ( model, Cmd.none )

            else
                ( { model | input = input }
                , focusInput
                )

        LangBarCharClicked stringToAdd ->
            if model.isLoading then
                ( model, Cmd.none )

            else
                ( { model | input = model.input ++ stringToAdd }
                , focusInput
                )

        LangBarCharHovered string ->
            case String.uncons string of
                Nothing ->
                    ( model, Cmd.none )

                Just ( char, _ ) ->
                    ( { model | focusedChar = char }
                    , Cmd.none
                    )

        SendRequest ->
            if model.isLoading then
                ( model, Cmd.none )

            else
                ( { model | isLoading = True }
                , Http.request
                    { method = "POST"
                    , headers = []
                    , url = "https://tryapl.org/Exec"
                    , body =
                        Http.stringBody
                            "application/json;charset=UTF-8"
                            (encodeStateAndInput model.state model.input
                                |> Encode.encode 0
                            )
                    , expect = Http.expectJson ReceivedResponse stateAndOutputDecoder
                    , timeout = Nothing
                    , tracker = Nothing
                    }
                )

        ReceivedResponse (Err err) ->
            -- We're ignoring it
            ( { model | isLoading = False }
            , focusInput
            )

        ReceivedResponse (Ok ( state, output )) ->
            let
                sanitizedOutput =
                    output
                        |> List.map (String.replace "\u{0008}" "\n")
            in
            ( { model
                | input = ""
                , state = state
                , isLoading = False
                , log =
                    model.log
                        ++ [ { input = model.input
                             , output = sanitizedOutput
                             }
                           ]
              }
            , Cmd.batch
                [ scrollToBottom logId
                , focusInput
                ]
            )

        ScrollAttempted _ ->
            -- We're ignoring it
            ( model, Cmd.none )

        FocusAttempted _ ->
            -- We're ignoring it
            ( model, Cmd.none )

        RemoveLog index ->
            ( { model | log = List.removeAt index model.log }
            , Cmd.none
            )


focusInput : Cmd Msg
focusInput =
    Browser.Dom.focus inputId
        |> Task.attempt FocusAttempted


scrollToBottom : String -> Cmd Msg
scrollToBottom id =
    Browser.Dom.getViewportOf id
        |> Task.andThen
            (\viewport ->
                let
                    bottom =
                        viewport.scene.height
                in
                Browser.Dom.setViewportOf id 0 bottom
            )
        |> Task.attempt ScrollAttempted


encodeStateAndInput : TryAPLState -> String -> Encode.Value
encodeStateAndInput state input =
    Encode.list identity
        [ Encode.string state.environment
        , Encode.int state.length
        , Encode.string state.hash
        , Encode.string input
        ]


stateAndOutputDecoder : Decoder ( TryAPLState, List String )
stateAndOutputDecoder =
    Decode.map2 Tuple.pair
        stateDecoder
        (Decode.index 3 (Decode.list Decode.string))


stateDecoder : Decoder TryAPLState
stateDecoder =
    Decode.map3 TryAPLState
        (Decode.index 0 Decode.string)
        (Decode.index 1 Decode.int)
        (Decode.index 2 Decode.string)


items : Dict Char CharInfo
items =
    CharInfo.allItems
        |> List.map (\item -> ( item.char, item ))
        |> Dict.fromList


view : Model -> Browser.Document Msg
view model =
    { title = "TryAPL Mini"
    , body =
        [ Html.div
            [ Attrs.class "app" ]
            [ Html.div
                [ Attrs.class "help" ]
                (case Dict.get model.focusedChar items of
                    Nothing ->
                        []

                    Just charInfo ->
                        viewHelp charInfo
                )
            , Html.div
                [ Attrs.class "content" ]
                [ Html.div
                    [ Attrs.class "input-row" ]
                    [ Html.input
                        [ Attrs.id inputId
                        , Events.onInput SetInput
                        , Events.onEnter SendRequest
                        , Attrs.class "input"
                        , Attrs.value model.input
                        , Attrs.placeholder "Put your APL expression here!"
                        , Attrs.disabled model.isLoading
                        , Events.on "lang-bar-updated-input-value" (Decode.map SetInput Events.targetValue)
                        ]
                        []
                    , Html.button
                        [ Attrs.class "button"
                        , Attrs.disabled model.isLoading
                        , Events.onClick SendRequest
                        ]
                        [ Html.text "Submit" ]
                    ]
                , Html.div
                    [ Attrs.class "hint" ]
                    [ Html.text "Click on expressions anywhere (log, examples below, docs on left) to edit them." ]
                , Html.div
                    [ Attrs.class "hint" ]
                    [ Html.text "Example expressions:"
                    , [ "3 7⍴10"
                      , "¯1+?3 7⍴2"
                      , "(~R∊R∘.×R)/R←1↓⍳20"
                      , "(+⌿÷≢),¯1+?1000 1000⍴2"
                      ]
                        |> List.map
                            (\expr ->
                                Html.li
                                    [ Events.onClick (SetInput expr)
                                    , Attrs.class "example-expression"
                                    ]
                                    [ Html.text expr ]
                            )
                        |> Html.ul [ Attrs.class "example-expressions" ]
                    ]
                , Html.pre
                    [ Attrs.class "log"
                    , Attrs.id logId
                    ]
                    (model.log
                        |> List.indexedMap
                            (\index { input, output } ->
                                Html.div
                                    [ Events.onClick (SetInput input)
                                    , Attrs.class "expr"
                                    ]
                                    [ Html.div
                                        [ Attrs.class "expr-remove-btn"
                                        , Events.onClick (RemoveLog index)
                                        ]
                                        [ Html.text "×" ]
                                    , Html.div
                                        [ Attrs.class "input" ]
                                        [ Html.text <| String.repeat 6 " " ++ input ]
                                    , Html.div
                                        [ Attrs.class "output" ]
                                        [ Html.text <| String.join "\n" output ]
                                    ]
                            )
                    )
                ]
            ]
        ]
    }


viewHelp : CharInfo -> List (Html Msg)
viewHelp { char, name, completions, description } =
    [ Html.viewIf (not (List.isEmpty completions)) <|
        Html.div
            [ Attrs.class "help-completions" ]
            [ Html.h2
                [ Attrs.class "help-completions-title" ]
                [ Html.text "Completions:" ]
            , Html.ul
                [ Attrs.class "help-completions-list" ]
                (completions
                    |> List.map
                        (\completion ->
                            Html.li [ Attrs.class "help-completion" ] <|
                                case completion of
                                    Tab chars ->
                                        [ Html.span
                                            [ Attrs.class "help-completion-tab-chars" ]
                                            [ Html.text chars ]
                                        , Html.span
                                            [ Attrs.class "help-completion-tab-tab" ]
                                            [ Html.text "<tab>" ]
                                        ]

                                    Backquote char_ ->
                                        [ Html.span
                                            [ Attrs.class "help-completion-backquote-backquote" ]
                                            [ Html.text "`" ]
                                        , Html.span
                                            [ Attrs.class "help-completion-backquote-char" ]
                                            [ Html.text <| String.fromChar char_ ]
                                        ]
                        )
                )
            ]
    , Html.h1
        [ Attrs.class "help-title" ]
        [ Html.span
            [ Attrs.class "help-name" ]
            [ Html.text name ]
        , Html.text " ("
        , Html.span
            [ Attrs.class "help-char" ]
            [ Html.text <| String.fromChar char ]
        , Html.text ")"
        ]
    , Html.div
        [ Attrs.class "help-description" ]
        (description
            |> List.concatMap
                (\item ->
                    case item of
                        Category category ->
                            [ Html.div
                                [ Attrs.class "help-description-category" ]
                                [ Html.text category ]
                            ]

                        Heading heading ->
                            [ Html.div
                                [ Attrs.class "help-description-heading" ]
                                [ Html.text heading ]
                            ]

                        Plain lines ->
                            lines
                                |> List.map
                                    (\line ->
                                        Html.div
                                            [ Attrs.class "help-description-plain" ]
                                            [ Html.text line ]
                                    )

                        CodeComment lines ->
                            [ Html.div
                                [ Attrs.class "help-description-code-comment" ]
                                [ lines
                                    |> String.join "\n"
                                    |> Html.text
                                ]
                            ]

                        Example { input, output } ->
                            let
                                lastInputLine : Maybe String
                                lastInputLine =
                                    input
                                        |> List.reverse
                                        |> List.filter (not << String.isEmpty)
                                        |> List.head
                            in
                            [ Html.div
                                [ Attrs.class "help-description-example" ]
                                [ Html.viewIf (not (List.isEmpty input)) <|
                                    Html.div
                                        [ Attrs.class "help-description-input" ]
                                        (input
                                            |> List.map
                                                (\line ->
                                                    Html.span
                                                        [ Events.onClick (SetInput line) ]
                                                        [ Html.text line ]
                                                )
                                            |> List.intersperse (Html.text "\n")
                                        )
                                , Html.viewIf (not (List.isEmpty output)) <|
                                    Html.div
                                        [ Attrs.class "help-description-output"
                                        , Attrs.attributeMaybe (Events.onClick << SetInput) lastInputLine
                                        ]
                                        [ output
                                            |> String.join "\n"
                                            |> Html.text
                                        ]
                                ]
                            ]
                )
        )
    ]


inputId : String
inputId =
    "input"


logId : String
logId =
    "log"


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ langBarCharClicked LangBarCharClicked
        , langBarCharHovered LangBarCharHovered
        ]
