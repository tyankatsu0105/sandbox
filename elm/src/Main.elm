module Main exposing (main)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


import Browser

-- Main

main : Program () Model Msg
main = Browser.sandbox { init = init ,update = update ,view = view}

-- Model

type alias Model = { name: String, password: String,passwordAgain: String}

init : Model
init = Model "" "" ""

-- Update

type Msg = Name String | Password String | PasswordAgain String

update : Msg -> Model -> Model
update msg model =
  case msg of
     Name name ->
      {model | name = name}
     Password password ->
      {model | password = password}
     PasswordAgain passwordAgain ->
      {model | passwordAgain = passwordAgain}

-- View

view : Model -> Html Msg
view model =
  div []
    [ viewInput "text" "Name" model.name Name
    , viewInput "password" "Password" model.password Password
    , viewInput "password" "Re-enter Password" model.passwordAgain PasswordAgain
    , viewValidation model
    ]


viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []


viewValidation : Model -> Html msg
viewValidation model =
  if model.password == model.passwordAgain then
    div [ style "color" "green" ] [ text "OK" ]
  else
    div [ style "color" "red" ] [ text "Passwords do not match!" ]