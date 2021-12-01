; Thư viện dùng chung
; Gọi thư viện SQL Lite
#include <SQLite.au3>
#include <SQLite.dll.au3>

; Gọi hàm kết nối CSDL
ConnectDataBase("vinades.db")

; Hàm connectDatabase
Func ConnectDataBase($db = "")
   Global $hQuery, $aRow, $aNames
   _SQLite_Startup()
   ; Dùng để kiểm tra file sql3.dll
   If @error Then
	   MsgBox($MB_SYSTEMMODAL, "SQLite Error", "SQLite3.dll Can't be Loaded!")
	   Exit -1
   EndIf

   ; Hiển thị version của SQLite - ConsoleWrite("_SQLite_LibVersion=" & _SQLite_LibVersion() & @CRLF)
   ConsoleWrite("_SQLite_LibVersion=" & _SQLite_LibVersion() & @CRLF)

   ; Gọi hàm mở kết nối tới CSDL
   _SQLite_Open($db)
EndFunc

; Hàm CloseConnectDatabse
Func CloseConnection($hQuery)
   ; Tránh tràn bộ nhớ ram
   _SQLite_QueryFinalize($hQuery)
   _SQLite_Close()
   _SQLite_Shutdown()
EndFunc

; Lấy bảng dữ liệu
Func get( $table, $sum_column)
   ; Lấy CSDL
   _SQLite_Query(-1, "SELECT * FROM " & $table &" ORDER BY id", $hQuery)
   _SQLite_FetchNames($hQuery, $aNames)
   $key = 0;
   While _SQLite_FetchData($hQuery, $aRow, False, False) = $SQLITE_OK ; Read Out the next Row
	  While ($key < $sum_column)
		 ConsoleWrite($aRow[$key]&@TAB)
		 $key = $key + 1
	  WEnd
	  $key = 0;
	  ConsoleWrite(@CRLF);
   WEnd

   ; Hàm đóng kết nối CSDL
   CloseConnection($hQuery);
EndFunc

; Lấy xóa dữ liệu
Func Delete( $table, $key, $column)
   ; Lấy CSDL
   _SQLite_Query(-1, "DELETE FROM " & $table & " WHERE " & $key & "=" & $column, $hQuery)
   _SQLite_FetchNames($hQuery, $aNames)
   While _SQLite_FetchData($hQuery, $aRow, False, False) = $SQLITE_OK ; Read Out the next Row
	   ConsoleWrite($aRow[0]&@TAB&$aRow[1]& @CRLF)
   WEnd

   ; Hàm đóng kết nối CSDL
   CloseConnection($hQuery);
EndFunc

Func getRow($tb)
   Global $i = 0;
   For $s In $tb
	  If ($s <> "")  Then
		 $i = $i + 1
	  EndIf
   Next
   return $i
EndFunc

; Hàm check status của trang web
Func _URLStatus($aURL)
    $oHTTP = ObjCreate("WinHttp.WinHttpRequest.5.1")
    $oHTTP.Open("GET", $aURL, False)
    $oHTTP.Send()
    Return $oHTTP.Status = 200
EndFunc   ;==>_URLStatus


Func InsertContact($arr)
   ConsoleWrite($arr[0]& @TAB);
   ConsoleWrite($arr[1] &@TAB);
   ConsoleWrite($arr[2]& @TAB);
   ConsoleWrite($arr[3] &@TAB);
   ConsoleWrite($arr[4] &@TAB);
   ConsoleWrite($arr[5] &@TAB);

;~    $_ex = _SQLite_Exec(-1, "INSERT INTO tbl_contact VALUEs (NULL, "& $arr[0] &","& $arr[1] &","& $arr[2] &","& $arr[3] &"," & $arr[4] &"," & $arr[5] &"," & $arr[6] &"," & $arr[7] &"," & $arr[8]&");")
;~    $LastInsertID = 0;
;~    if $_ex = $SQLITE_OK then
;~ 	  $LastInsertID = _SQLite_LastInsertRowID();
;~ 	  ConsoleWrite("id" & $LastInsertID)
;~    EndIf
;~    Return $LastInsertID;
EndFunc




