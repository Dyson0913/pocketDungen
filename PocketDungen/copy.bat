@REM  relase path
@REM SET copy_path=E:\flashWork\sources\flash\client\project\bin-release



@REM ---------ui
SET ui_path=%cd%\src
SET To_ui_path=%cd%\bin

xcopy /y %ui_path%\*.js /s %To_ui_path%\*.js
xcopy /y %ui_path%\ui\*.* /s %To_ui_path%\ui\*.*

@REM ---------altes

SET altas_path=%cd%\bin\res\atlas\res
SET To_altas_path=%cd%\bin\res\atlas

xcopy /y %altas_path%\*.* /s %To_altas_path%\*.*