RandomPhone()
Func RandomPhone($digits = 8)
   Global $randomStr = ""
   For $i = 1 To $digits
	  $aSpace = Chr(Random(48, 57, 1)) ;0-9
	  $randomStr &= $aSpace
   Next
   ConsoleWrite("String Generated: (" & $digits & " digits): " & $randomStr & @CRLF)
;~    MsgBox(0, "String Generator", "String Generated: (" & $digits & " digits): " & $randomStr & @CRLF)
;~    MsgBox(0, "String Generator", "String Generated: (" & $digits & " digits): " & $aSpace & @CRLF)
EndFunc

