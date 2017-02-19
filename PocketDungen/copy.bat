@REM  relase path
@REM SET copy_path=E:\flashWork\sources\flash\client\project\bin-release



@REM ---------ui
SET ui_path=C:\Users\dyson\Downloads\D\game_dev\laya\pocketDungen\PocketDungen\src
SET To_ui_path=C:\Users\dyson\Downloads\D\game_dev\laya\pocketDungen\PocketDungen\bin

xcopy /y %ui_path%\*.js /s %To_ui_path%\*.js
xcopy /y %ui_path%\ui\*.* /s %To_ui_path%\ui\*.*
