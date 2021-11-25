ViDu2();


Func ViDu2()
   Run("C:\Program Files (x86)\Notepad++\notepad++.exe")

   ; Wait 10 seconds for the Notepad window to appear.
   Local $hWnd = WinWait("[CLASS:Notepad++]", "", 30)

   ; Chờ 2s để Cửa số notepad hiện lên
   Sleep(2000)

   ; Send a mouse click to the edit control of Notepad using the handle returned by WinWait.
   MouseClick('left', 11, 53)

   Send("Xin chào tất cả mọi người mình là Nguyễn Văn Lâm.")

   Sleep(3000)
   MouseClick('left', 62, 56)

   Sleep(2000)
   MouseClick('left', 1187, 704)

   Sleep(5000)
   WinClose("[CLASS:Notepad++]")
EndFunc