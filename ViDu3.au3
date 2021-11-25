#RequireAdmin
ViDu3();

Func ViDu3()
   Run("D:\Workspace\Program\AutoIT\winzip90.exe")

   WinWaitActive("WinZip® 9.0 SR-1 Setup", "&Setup")
   Send("!s")

   WinWaitActive("WinZip Setup", "into the following folder")
   Send("{ENTER}")

   WinWaitActive("WinZip Setup", "WinZip features include")
   Send("!n")

   WinWaitActive("License Agreement")
   Send("!y")

   WinWaitActive("WinZip Setup", "Quick Start Guide")
   Send("!n")

   WinWaitActive("WinZip Setup", "switch between the two interfaces")
   Send("!c")
   Send("!n")

   WinWaitActive("WinZip Setup", "&Express setup (recommended)")
   Send("!e")
   Send("!n")

   WinWaitActive("WinZip Setup", "WinZip needs to associate itself with your archives")
   Send("!n")

   WinWaitActive("WinZip Setup", "Thank you for installing this evaluation version")
   Send("{ENTER}")

   WinWaitActive("WinZip (Evaluation Version)")
   WinClose("WinZip (Evaluation Version)")
EndFunc