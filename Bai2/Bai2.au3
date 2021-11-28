#include <SQLite.au3>
#include <SQLite.dll.au3>
#include <IE.au3>
#include "../Model/model.au3"
#include "WinHttp.au3"

$IE = _IECreate("https://vinades.vn/vi/contact/")
$IE = _IEAttach("https://vinades.vn/vi/contact/", "url")
; Chờ IE load xong
_IELoadWait($IE);
;~ _IENavigate($IE , "https://vinades.vn/vi/contact/")
$IE.document.querySelector('input[name="ftitle"]').value = 'Hỏi đáp'
$IE.document.querySelector('input[name="fname"]').value = 'What your name?'
$IE.document.querySelector('input[name="femail"]').value = 'me@gmail.com'
$IE.document.querySelector('input[name="fphone"]').value = '0867111222'
$IE.document.querySelector('input[name="faddress"]').value = 'Hà Nội'
$IE.document.querySelector('textarea[name="fcon"]').value = 'Cho e test thử cái ạ!!!! E xin trần thành cám ơn';
$IE.document.querySelector("#recaptcha-anchor > div.recaptcha-checkbox-border").click()
Sleep(2000);
;~ $IE.document.querySelector("#body > div.row.pd-top10 > div.col-sm-16.col-md-17 > div.page.mbt15 > div.row > div.col-sm-12.col-md-10 > div > div.panel-body.loadContactForm > div > form > div.text-center.form-group > input.btn.btn-primary");
;~ _IEQuit($IE);
MsgBox(0, 0, 0, "ok")
;~ Local $oIE_form = _IE_Example("form")
;~ Local $oForm = _IEFormGetObjByName($oIE, "ftitle")
;~ Local $oText = _IEFormElementGetObjByName($oForm, "ftitle")
;~ _IEFormElementSetValue($oText, "Hey! This works!")

