module Main exposing (main)

import Browser
import Browser.Dom
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Html.Events.Extra
import Http
import Json.Decode exposing (Decoder)
import Json.Encode
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


init : () -> ( Model, Cmd Msg )
init flags =
    ( { state =
            { environment = ""
            , length = 0
            , hash = ""
            }
      , input = ""
      , isLoading = False
      , log = []
      }
    , Cmd.none
    )


type Msg
    = SetInput String
    | SendRequest
    | ReceivedResponse (Result Http.Error ( TryAPLState, List String ))
    | ScrollFailed


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetInput input ->
            if model.isLoading then
                ( model, Cmd.none )

            else
                ( { model | input = input }
                , Cmd.none
                )

        SendRequest ->
            if model.isLoading then
                ( model, Cmd.none )

            else
                ( { model | isLoading = True }
                , Http.request
                    { method = "POST"
                    , headers = [ Http.header "Content-Type" "application/json;charset=UTF-8" ]
                    , url = "https://tryapl.org/Exec"
                    , body = Http.jsonBody (encodeStateAndInput model.state model.input)
                    , expect = Http.expectJson ReceivedResponse stateAndOutputDecoder
                    , timeout = Nothing
                    , tracker = Nothing
                    }
                )

        ReceivedResponse (Err err) ->
            -- We're ignoring it
            ( { model | isLoading = False }
            , Cmd.none
            )

        ReceivedResponse (Ok ( state, output )) ->
            ( { model
                | input = ""
                , state = state
                , isLoading = False
                , log =
                    model.log
                        ++ [ { input = model.input
                             , output = output
                             }
                           ]
              }
            , scrollToBottom logId
            )

        ScrollFailed ->
            -- We're ignoring it
            ( model, Cmd.none )


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
        |> Task.attempt (\_ -> ScrollFailed)


encodeStateAndInput : TryAPLState -> String -> Json.Encode.Value
encodeStateAndInput state input =
    Json.Encode.list identity
        [ Json.Encode.string state.environment
        , Json.Encode.int state.length
        , Json.Encode.string state.hash
        , Json.Encode.string input
        ]


stateAndOutputDecoder : Decoder ( TryAPLState, List String )
stateAndOutputDecoder =
    Json.Decode.map2 Tuple.pair
        stateDecoder
        (Json.Decode.index 3 (Json.Decode.list Json.Decode.string))


stateDecoder : Decoder TryAPLState
stateDecoder =
    Json.Decode.map3 TryAPLState
        (Json.Decode.index 0 Json.Decode.string)
        (Json.Decode.index 1 Json.Decode.int)
        (Json.Decode.index 2 Json.Decode.string)


view : Model -> Browser.Document Msg
view model =
    { title = "TryAPL Mini"
    , body =
        [ Html.div
            [ Html.Attributes.class "app" ]
            [ Html.div
                [ Html.Attributes.class "input-row" ]
                [ Html.input
                    [ Html.Events.onInput SetInput
                    , Html.Events.Extra.onEnter SendRequest
                    , Html.Attributes.class "input"
                    , Html.Attributes.value model.input
                    , Html.Attributes.placeholder "Put your APL expression here!"
                    , Html.Attributes.disabled model.isLoading
                    , Html.Events.on "lang-bar-insert-char" (Json.Decode.map SetInput Html.Events.targetValue)
                    ]
                    []
                , Html.button
                    [ Html.Attributes.class "button"
                    , Html.Attributes.disabled model.isLoading
                    , Html.Events.onClick SendRequest
                    ]
                    [ Html.text "Submit" ]
                ]
            , Html.div
                [ Html.Attributes.class "hint" ]
                [ Html.text "Example expressions (click to paste):"
                , [ "3 7⍴10"
                  , "¯1+?3 7⍴2"
                  , "(~R∊R∘.×R)/R←1↓⍳20"
                  , "(+⌿÷≢),¯1+?1000 1000⍴2"
                  ]
                    |> List.map
                        (\expr ->
                            Html.li
                                [ Html.Events.onClick (SetInput expr) ]
                                [ Html.text expr ]
                        )
                    |> Html.ul []
                ]
            , Html.div
                [ Html.Attributes.class "hint" ]
                [ Html.text "Click on expressions in the log to edit them." ]
            , Html.pre
                [ Html.Attributes.class "log"
                , Html.Attributes.id logId
                ]
                (model.log
                    |> List.map
                        (\{ input, output } ->
                            Html.div
                                [ Html.Events.onClick (SetInput input)
                                , Html.Attributes.class "expr"
                                ]
                                [ Html.div
                                    [ Html.Attributes.class "input" ]
                                    [ Html.text <| String.repeat 6 " " ++ input ]
                                , Html.div
                                    [ Html.Attributes.class "output" ]
                                    [ Html.text <| String.join "\n" output ]
                                ]
                        )
                )
            ]
        ]
    }


logId : String
logId =
    "log"


type LanguageBarItem
    = Char Char String
    | Separator


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
