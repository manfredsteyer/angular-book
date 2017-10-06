# Beispiel für @ngrx/Store 

Unser Buchbeispiel zu @ngrx/Store, portiert auf die Version 4 von ngrx.

Durchgeführte Erweiterungen:
- Es gibt nun pro Action eine eigene Implementierung des Interfaces ``Action``
- Das Einbinden der Libraries wurde entsprechend der neuen API aktualisiert
- Der Log-Monitor wurde entfernt, da dieser für Version 4 nicht zur Verfügung steht. Als Alternative empfehlen wir das Chrome Plugin ``Redux DevTools``.
- Die Entität ``Buchung`` ist nun in Form eines Interfaces typisiert.

## Start

- ``npm install``
- ``npm start``
- Läuft auf http://localhost:8081
- Das Port lässt sich in der ``package.json`` ändern