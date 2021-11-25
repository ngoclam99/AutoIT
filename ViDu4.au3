 #include <MsgBoxConstants.au3>
;Example1()
Func Example1()
   Local $content = 'Bạn có yêu tôi không'
   Local $search = InputBox("Cửa sổ tiềm kiếm:", "Xin mời bạn nhập chuỗi tìm kiếm:"&@CR&$content)
   Local $i = StringRegExp($content, $search);
   Local $ketqua = '';
   IF $i > 0 Then
	  $ketqua = 'Tìm thấy từ '&$search&' trong chuỗi'&@CR&$content
   ELSE
	  $ketqua = 'Không tìm thấy chuỗi được tìm kiếm'
   EndIf
   MsgBox($MB_OK, "Kết quả tìm thấy", $ketqua)
EndFunc

;Example2();
Func Example2()
   MsgBox ($MB_OK , "SRE Ví dụ 2 Kết quả" , StringRegExp ("text" , 'te[sx]t' ))
   MsgBox ($MB_OK , "Kết quả SRE Ví dụ 2" , StringRegExp ("kiểm tra " , 'te[sx]t' ))
EndFunc

;Exemple3();
Func Exemple3()
    MsgBox ($MB_OK , "Kết quả SRE Ví dụ 3" , StringRegExp ( "text" , 't {1} e {1} [sx] {1} t {1} ' ))
	MsgBox ($MB_OK , "Kết quả 3 ví dụ SRE" , StringRegExp ( "aaaabbbbcccc" , 'b {4} ' ))
EndFunc

;Exemple4();
Func Exemple4()
   #include <MsgBoxConstants.au3>
   #include <StringConstants.au3>

   Local $aResult = StringRegExp("This is a test example", '(test)', $STR_REGEXPARRAYMATCH)
   If Not @error Then
	   MsgBox($MB_OK, "SRE Example 4 Result", $aResult[0])
   EndIf
   $aResult = StringRegExp("This is a test example", '(te)(st)', $STR_REGEXPARRAYMATCH)
   If Not @error Then
	   MsgBox($MB_OK, "SRE Example 4 Result", $aResult[0] & "," & $aResult[1])
   EndIf
EndFunc

;Exemple5();
Func Exemple5()
   #include <MsgBoxConstants.au3>
   #include <StringConstants.au3>

   Local $aResult = StringRegExp("There were 18 sheets left in the ream of paper.", _
		   '([0-9]{1,3})', $STR_REGEXPARRAYMATCH)
   If Not @error Then
	   MsgBox($MB_OK, "SRE Example 5 Result", $aResult[0])
   EndIf
EndFunc

;Exemple6();
Func Exemple6()
   #include <MsgBoxConstants.au3>
   #include <StringConstants.au3>

   Local $aResult = StringRegExp("You used 36 of 279 pages.", '([0-9]{1,3})(?: pages)', $STR_REGEXPARRAYMATCH)
   If Not @error Then
	   MsgBox($MB_OK, "SRE Example 6 Result", $aResult[0])
   EndIf
EndFunc