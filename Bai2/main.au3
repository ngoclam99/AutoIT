;~ Làm việc với CSDL SQLlite
;~ Làm việc với trình duyệt IE

#include <SQLite.au3>
#include <SQLite.dll.au3>
#include <IE.au3>
#include "../Model/model.au3"

$IE = _IECreate("https://vinades.vn/")

; Sử dụng được hàm (_IEAttach) này khi trình duyệt IE đã mở
;~ $oIE = _IEAttach("https://vinades.vn/", "url")
;~ $url = _IEPropertyGet($IE, "locationurl")

; Lấy tất cả các link trong trang web
Local $links = _IELinkGetCollection($IE)

;~ ; Dùng vòng lặp để hiển thị các link ra
For $link In $links
   ; Hàm kiếm tra xem đã tồn tại trong CSDL hay chưa
   $checkRow = CheckHref($link.href);
   $urlStatus = _URLStatus($link.href);
   $aURL = $link.href;

   $urlStatus = _URLStatus($aURL)
   If $urlStatus <> 200 Then
;~ 	  If ($checkRow == "") Then
		 $kq = InsertHref($link.href, 0)
;~ 	  EndIf
	  ConsoleWrite("Connection problem: " & $urlStatus & "URL: " & $aURL & "kq = " & $kq & @CRLF)
   Else
;~ 	  If ($checkRow == "") Then
		 $kq = InsertHref($link.href, 1)
;~ 	  EndIf
	  ConsoleWrite("Connection Successful!" & "URL: " & $aURL & "kq = " & $kq & @CRLF)
   EndIf
   Sleep(2000)
Next

