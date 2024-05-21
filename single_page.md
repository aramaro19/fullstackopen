
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST to the server address /new_note_spa with the new note as json data
    activate server
    server-->>browser: HTTP status code 201 created
    deactivate server