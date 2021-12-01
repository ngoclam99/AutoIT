#include <SQLite.au3>
#include <SQLite.dll.au3>
#include "model.au3"
#include "WinHttp.au3"
#include "wd_core.au3"
#include "wd_helper.au3"
#include "String.au3"

Local $sDesiredCapabilities, $iIndex, $sSession
Local $nMsg, $bProcess = False
$sURL = "https://hoclaptrinh99.com/contact/"
SetupChrome()

_WD_Startup()

If @error <> $_WD_ERROR_Success Then
	Exit -1
EndIf

$sSession = _WD_CreateSession($sDesiredCapabilities)

; Phóng to trình duyệt lên
_WD_Window($sSession, "Maximize")

; Đợi 1s rồi mở url

_WD_Navigate($sSession, $sURL)

;~ _WD_NewTab($sSession, Default, Default, "https://hoclaptrinh99.com/contact/")

ConsoleWrite("URL=" & _WD_Action($sSession, 'url') & @CRLF)

Sleep(3000)
Local $arr[8];
$arr[0] = RandomString(25);
$arr[1] = RandomString(15);
$arr[2] = RandomString(25)&"@gmail.com";
$arr[3] = "08"&RandomPhone(7);
$arr[4] = RandomString(25);
$arr[5] = RandomString(500);

$sElement = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@name='ftitle']")
_WD_ElementAction($sSession, $sElement,'value', $arr[0])

Sleep(200);

$sElement1 = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@name='fname']")
_WD_ElementAction($sSession, $sElement1,'value', $arr[1])


Sleep(200);

$sElement = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@name='femail']")
_WD_ElementAction($sSession, $sElement,'value', $arr[2])

Sleep(200);

$sElement = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@name='fphone']")
_WD_ElementAction($sSession, $sElement,'value', $arr[3])

Sleep(200);

$sElement = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@name='faddress']")
_WD_ElementAction($sSession, $sElement,'value', $arr[4])

Sleep(200);

$sElement = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//textarea[@name='fcon']")
_WD_ElementAction($sSession, $sElement,'value', $arr[5])

Sleep(200);

MsgBox(0, 0, "Đợi chút để anh click nha!!!")
;~ Sleep(200);
; Click search button
 $sButton = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@name='btsend']")
 _WD_ElementAction($sSession, $sButton, 'click')
 _WD_LoadWait($sSession, 2000)
 $sSource = _WD_ElementAction($sSession, $sElement1, "Attribute", "data-mess")
;~ InsertContact($arr)
_WD_Shutdown()

Func SetupChrome()
	_WD_Option('Driver', 'chromedriver.exe')
	_WD_Option('Port', 9515)
	_WD_Option('DriverParams', '--verbose --log-path="' & @ScriptDir & '\chrome.log"')

	$sDesiredCapabilities = '{"capabilities": {"alwaysMatch": {"goog:chromeOptions": {"w3c": true, "excludeSwitches": [ "enable-automation"]}}}}'
EndFunc   ;==>SetupChrome

Func _WD_ElementValue($sKey,$Value)
    $sElement = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath,$sKey)
    _WD_ElementAction($sSession,$sElement,'value', $Value)
 EndFunc

; Hàm tìm kiếm ID và set giá trị ID
Func _ChromeSetInputValueById($sSession,$Id,$Value)
$sButton = _WD_FindElement($sSession, $_WD_LOCATOR_ByXPath, "//input[@id='"&$Id&"']")
_WD_ElementAction($sSession,$sButton,'value', $Value)
EndFunc

Func RandomString($digits = 5)
   Global $randomStr = ""
   Global $aSpace[3]
   For $i = 1 To $digits
	   $aSpace[0] = Chr(Random(65, 90, 1)) ;A-Z
	   $aSpace[1] = Chr(Random(97, 122, 1)) ;a-z
	   $aSpace[2] = Chr(Random(48, 57, 1)) ;0-9
	   $randomStr &= $aSpace[Random(0, 2, 1)]
   Next
   ConsoleWrite("String Generated: (" & $digits & " digits): " & $randomStr & @CRLF);
   Return $randomStr;
;~    MsgBox(0, "String Generator", "String Generated: (" & $digits & " digits): " & $randomStr & @CRLF)
EndFunc

Func RandomPhone($digits = 8)
   Global $randomStr = ""
   For $i = 1 To $digits
	  $aSpace = Chr(Random(48, 57, 1)) ;0-9
	  $randomStr &= $aSpace
   Next
   ConsoleWrite("String Generated: (" & $digits & " digits): " & $randomStr & @CRLF)
   return $randomStr;
EndFunc
