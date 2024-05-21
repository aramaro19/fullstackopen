sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with the new note as json
    activate server
    server-->>browser: Status code 201 Created
    deactivate server