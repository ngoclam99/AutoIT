; ----------------Ví Dụ 1--------------------------
;MsgBox(0, "Tutorial", "Hello World!")

; --------------- Ví Dụ 2--------------------------

ViDu2()

Func ViDu2()
    ; Run Notepad
    Run("notepad.exe")

    ; Wait 10 seconds for the Notepad window to appear.
    WinWaitActive("[CLASS:Notepad]", "", 10)

    ; Wait for 2 seconds to display the Notepad window.
    Sleep(2000)

    ; Close the Notepad window using the classname of Notepad.
    WinClose("[CLASS:Notepad]")
EndFunc   ;==>Example

; --------------- Ví Dụ 3 --------------------------

; Chạy file exe D:\Workspace\Program\AutoIT\winzip26-downwz.exe
;~ Run("D:\Workspace\Program\AutoIT\winzip26-downwz.exe")

;~ ; Thực hiện click vào Button Setup Alt S
;~ WinWaitActive("WinZip® 9.0 SR-1 Setup", "&Setup")
;~ Send("!s")

;~ ; Thực hiện bấm enter
;~ WinWaitActive("WinZip Setup", "into the following folder")
;~ Send("{ENTER}")

;~ ; Thực hiện Alt N
;~ WinWaitActive("WinZip Setup", "WinZip features include")
;~ Send("!n")

;~ ; Thực hiện bấm Alt Y
;~ WinWaitActive("License Agreement")
;~ Send("!y")

;~ ; Thực hiện bấm alt N
;~ WinWaitActive("WinZip Setup", "Quick Start Guide")
;~ Send("!n")

;~ WinWaitActive("WinZip Setup", "switch between the two interfaces")
;~ Send("!c")
;~ Send("!n")

;~ WinWaitActive("WinZip Setup", "&Express setup (recommended)")
;~ Send("!e")
;~ Send("!n")

;~ WinWaitActive("WinZip Setup", "&Express setup (recommended)")
;~ Send("!e")
;~ Send("!n")

;~ WinWaitActive("WinZip Setup", "&Express setup (recommended)")
;~ Send("!e")
;~ Send("!n")

;~ WinWaitActive("WinZip (Evaluation Version)")
;~ WinClose("WinZip (Evaluation Version)")