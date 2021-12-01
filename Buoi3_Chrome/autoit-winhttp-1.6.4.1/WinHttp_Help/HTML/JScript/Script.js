var iDBindex = -1;
var bFirstRun = true;

window.onload = init;
window.onresize = init

var iStartX = 0;
var iStartW = 0;

var searchDB = new Array();
// DEFINE NEW SEARCHABLE ITEMS HERE, FOLLOWING THE FORMAT AS BELOW;
// searchDB[nextnumber] = new searchOption("TitleOfResult", "Description", "ShortDescription", "AltLink");
searchDB[0] = new searchOption("WinHttp Function Notes", "", "WinHttp-UDFs for AutoIt and this helpfile are...", "../CHM_HomePage");
searchDB.push(new searchOption("_WinHttpAddRequestHeaders", "$hRequest  Handle returned by _WinHttpOpenRequest function. $sHeader   Headers to append to the request. $iModifier   Contains the flags used to modify the semantics of this function. Default is $WINHTTP_ADDREQ_FLAG_ADD_IF_NEW. In case of multiple additions at once use @CRLF to separate each $hRequest and responded $sHeaders and $iModifiers.", "Adds one or more HTTP request headers to the HTTP request handle."));
searchDB.push(new searchOption("_WinHttpCheckPlatform", "None ", "Determines whether the current platform is supported by this version of Microsoft Windows HTTP Services (WinHTTP)."));
searchDB.push(new searchOption("_WinHttpCloseHandle", "$hInternet  Valid handle to be closed. ", "Closes a single handle."));
searchDB.push(new searchOption("_WinHttpConnect", "$hSession  Valid WinHttp session handle returned by a previous call to _WinHttpOpen. $sServerName  Host name of an HTTP server. In case URI scheme http://, https://, ... is specified $iServerPort is ignored. $iServerPort   TCP/IP port on the server to which a connection is made default is $INTERNET_DEFAULT_PORT $iServerPort can be defined via global constants $INTERNET_DEFAULT_PORT, $INTERNET_DEFAULT_HTTP_PORT or $INTERNET_DEFAULT_HTTPS_PORT", "Specifies the initial target server of an HTTP request and returns connection handle to an HTTP session for that initial target."));
searchDB.push(new searchOption("_WinHttpCrackUrl", "$sURL  String. Canonical URL to separate. $iFlag   Flag that control the operation. Default is $ICU_ESCAPE $iFlag is defined in WinHttpConstants.au3 and can be: |$ICU_DECODE  Converts characters that are escape encoded %xx to their nonescaped form. |$ICU_ESCAPE  Escapes certain characters to their escape sequences %xx.", "Separates a URL into its component parts such as host name and path."));
searchDB.push(new searchOption("_WinHttpCreateUrl", "$aURLArray  Array of URL data. Input is one dimensional 8 elements in size array: | first element 0 scheme name | second element 1 internet protocol scheme | third element 2 host name | fourth element 3 port number | fifth element 4 user name | sixth element 5 password | seventh element 6 URL path | eighth element 7 extra information", "Creates a URL from array of components such as the host name and path."));
searchDB.push(new searchOption("_WinHttpDetectAutoProxyConfigUrl", "$iAutoDetectFlags  Specifies what protocols to use to locate the PAC file. $iAutoDetectFlags values are defined in WinHttpconstants.au3", "Finds the URL for the Proxy Auto-Configuration (PAC) file."));
searchDB.push(new searchOption("_WinHttpGetDefaultProxyConfiguration", "None. Access types are defined in WinHttpconstants.au3: |$WINHTTP_ACCESS_TYPE_DEFAULT_PROXY = 0 |$WINHTTP_ACCESS_TYPE_NO_PROXY = 1 |$WINHTTP_ACCESS_TYPE_NAMED_PROXY = 3", "Retrieves the default WinHttp proxy configuration."));
searchDB.push(new searchOption("_WinHttpGetIEProxyConfigForCurrentUser", "None. ", "Retrieves the Internet Explorer proxy configuration for the current user."));
searchDB.push(new searchOption("_WinHttpOpen", "$sUserAgent   The name of the application or entity calling the WinHttp functions. $iAccessType   Type of access required. Default is $WINHTTP_ACCESS_TYPE_NO_PROXY. $sProxyName   The name of the proxy server to use when proxy access is specified by setting $iAccessType to $WINHTTP_ACCESS_TYPE_NAMED_PROXY. Default is $WINHTTP_NO_PROXY_NAME. $sProxyBypass   An optional list of host names or IP addresses, or both, that should not be routed through the proxy when $iAccessType is set to $WINHTTP_ACCESS_TYPE_NAMED_PROXY. Default is $WINHTTP_NO_PROXY_BYPASS. $iFlag   Integer containing the flags that indicate various options affecting the behavior of this function. Default is 0. <b>You are strongly discouraged to use WinHTTP in asynchronous mode with AutoIt. AutoIt's callback implementation can't handle reentrancy properly.</b> +For asynchronous mode set $iFlag to $WINHTTP_FLAG_ASYNC. In that case $WINHTTP_OPTION_CONTEXT_VALUE for the handle will inernally be set to $WINHTTP_FLAG_ASYNC also.", "Initializes the use of WinHttp functions and returns a WinHttp-session handle."));
searchDB.push(new searchOption("_WinHttpOpenRequest", "$hConnect  Handle to an HTTP session returned by _WinHttpConnect. $sVerb   HTTP verb to use in the request. Default is GET. $sObjectName   The name of the target resource of the specified HTTP verb. $sVersion   HTTP version. Default is HTTP/1.1 $sReferrer   URL of the document from which the URL in the request $sObjectName was obtained. Default is $WINHTTP_NO_REFERER. $sAcceptTypes   Media types accepted by the client. Default is $WINHTTP_DEFAULT_ACCEPT_TYPES $iFlags   Integer specifying the Internet flag values. Default is $WINHTTP_FLAG_ESCAPE_DISABLE ", "Creates an HTTP request handle."));
searchDB.push(new searchOption("_WinHttpQueryAuthSchemes", "$hRequest  Valid handle returned by _WinHttpSendRequest. $iSupportedSchemes   Supported authentication schemes. See remarks. $iFirstScheme   First authentication scheme listed by the server. See remarks. $iAuthTarget   A flag that contains the authentication target. See remarks. _WinHttpQueryAuthSchemes is called after _WinHttpQueryHeaders. +Arguments are accepted ByRef. +Both $iSupportedSchemes and $iFirstScheme is set to combination of any of $WINHTTP_AUTH_SCHEME_ flags. +$iAuthTarget parameter is set to one or more $WINHTTP_AUTH_TARGET_ constants values.", "Returns the authorization schemes that are supported by the server."));
searchDB.push(new searchOption("_WinHttpQueryDataAvailable", "$hRequest  handle returned by _WinHttpOpenRequest. _WinHttpReceiveResponse must have been called for this handle and completed before _WinHttpQueryDataAvailable is called.", "Returns the availability to be read with _WinHttpReadData()."));
searchDB.push(new searchOption("_WinHttpQueryHeaders", "$hRequest  Handle returned by _WinHttpOpenRequest. $iInfoLevel   A combination of attribute and modifier flags. Default is $WINHTTP_QUERY_RAW_HEADERS_CRLF. $sName   Header name string. Default is $WINHTTP_HEADER_NAME_BY_INDEX. $iIndex   Index used to enumerate multiple headers with the same name ", "Retrieves header information associated with an HTTP request."));
searchDB.push(new searchOption("_WinHttpQueryOption", "$hInternet  Handle on which to query information. $iOption  Internet option to query. Type of the returned data varies on request.", "Queries an Internet option on the specified handle."));
searchDB.push(new searchOption("_WinHttpReadData", "$hRequest  Valid handle returned from a previous call to _WinHttpOpenRequest. $iMode   Integer representing reading mode. Default is 0 charset is decoded as it is ANSI. $iNumberOfBytesToRead   The number of bytes to read. Default is 8192 bytes. $iMode can have these values: |0  ANSI |1  UTF8 |2  Binary", "Reads data from a handle opened by the _WinHttpOpenRequest() function."));
searchDB.push(new searchOption("_WinHttpReceiveResponse", "$hRequest  Handle returned by _WinHttpOpenRequest and sent by _WinHttpSendRequest. Call to _WinHttpReceiveResponse must be done before _WinHttpQueryDataAvailable and _WinHttpReadData.", "Waits to receive the response to an HTTP request initiated by WinHttpSendRequest()."));
searchDB.push(new searchOption("_WinHttpSendRequest", "$hRequest  Handle returned by _WinHttpOpenRequest. $sHeaders   Additional headers to append to the request. Default is $WINHTTP_NO_ADDITIONAL_HEADERS. $vOptional   Optional data to send immediately after the request headers. Default is $WINHTTP_NO_REQUEST_DATA. $iTotalLength   Length, in bytes, of the total optional data sent. Default is 0. $iContext   Applicationdefined value that is passed, with the request handle, to any callback functions. Default is 0. Specifying optional data $vOptional will cause $iTotalLength to receive the size of that data if left default value.", "Sends the specified request to the HTTP server."));
searchDB.push(new searchOption("_WinHttpSetCredentials", "$hRequest  Valid handle returned by _WinHttpOpenRequest. $iAuthTargets  Authentication target. $iAuthScheme  Authentication scheme. $sUserName  Valid user name. $sPassword  Valid password. ", "Passes the required authorization credentials to the server."));
searchDB.push(new searchOption("_WinHttpSetDefaultProxyConfiguration", "$iAccessType  Integer. Access type. $sProxy   String. Proxy server list. $sProxyBypass   String. Proxy bypass list. ", "Sets the default WinHttp proxy configuration."));
searchDB.push(new searchOption("_WinHttpSetOption", "$hInternet  Handle on which to set data. $iOption  Integer value that contains the Internet option to set. $vSetting  Value of setting $iSize  Size of $vSetting, required if $vSetting is pointer to memory block ", "Sets an Internet option."));
searchDB.push(new searchOption("_WinHttpSetStatusCallback", "$hInternet  Handle for which the callback is to be set. $hInternetCallback  Callback function to call when progress is made. $iNotificationFlags   Flags to indicate which events activate the callback function. Default is $WINHTTP_CALLBACK_FLAG_ALL_NOTIFICATIONS. ", "Sets up a callback function that WinHttp can call as progress is made during an operation."));
searchDB.push(new searchOption("_WinHttpSetTimeouts", "$hInternet  Handle returned by _WinHttpOpen or _WinHttpOpenRequest. $iResolveTimeout   Timeout value, in milliseconds, to use for name resolution. Default is 0 ms. $iConnectTimeout   Timeout value, in milliseconds, to use for server connection requests. Default is 60000 ms. $iSendTimeout   Timeout value, in milliseconds, to use for sending requests. Default is 30000 ms. $iReceiveTimeout   Timeout value, in milliseconds, to receive a response to a request. Default is 30000 ms. Initial values are: | $iResolveTimeout = 0 | $iConnectTimeout = 60000 | $iSendTimeout = 30000 | $iReceiveTimeout = 30000", "Sets time-outs involved with HTTP transactions."));
searchDB.push(new searchOption("_WinHttpSimpleBinaryConcat", "$bBinary1  Binary data that is to be concatenated. $bBinary2  Binary data to concatenate. ", "Concatenates two binary data returned by _WinHttpReadData() in binary mode."));
searchDB.push(new searchOption("_WinHttpSimpleFormFill", "$hInternet  Handle returned by _WinHttpConnect or string variable with form. $sActionPage  path to the page with form or session handle if $hInternet is string default:   empty string meaning 'default' page on the server in former. $sFormId   Id of the form. Can be name or zerobased index too read Remarks section. $sFldId1   Id of the input. $sDta1   Data to set to coresponding field. ...   Other pairs of Id/Data. Overall number of fields is 40. $sAdditionalData   Additional data read Remarks section. In case form requires redirection and $hInternet is internet handle, this handle will be closed and replaced with new and required one. +When $hInternet is form string, form's action must specify URL and $sActionPage parameter must be session handle. On succesful call this variable will be changed to connection handle of the internally made connection. Don't forget to close this handle after the function returns and when no longer needed. +$sFormId specifies Id of the form same as .getElementByIdFormId. Aditionally you can use index:FormIndex to identify form by its zerobased index number in case of e.g. three forms on some page first one will have index=0, second index=1, third index=2. Use name:FormName to identify form by its name like with .getElementsByNameFormName. FormName will be taken to be what's right of colon mark. In that case first form with that name is filled. +As for fields, If name:FieldName option is used all the fields except last with that name are removed from the form. Last one is filled with specified $sDta data. +This function can be used to fill forms with up to 40 fields at once. +Submit control you want to keep click set to True. If no such control is set then the first one found in the form is clicked. You can also use type:submit, zero_based_index_of_the_submit to click if no id or name is available. +All other submit controls are removed from the submited form including images. +If form is submitted by clicking an image then pass click coordinates name:image_name, Xcoord,Ycoord or image_id, Xcoord,Ycoord. If the image has no name or id then you can use its index of appearance type:image, zero_based_index_of_the_image Xcoord,Ycoord. +Checkbox and Button input types are removed from the submitted form unless explicitly set. Same goes for Radio with exception that only one such control can be set, the rest are removed. These controls are set by their values. Wrong value makes them invalid and therefore not part of the submited data. +All other nonset fields are left default. +Last superfluous $sAdditionalData argument can be used to pass authorization credentials in form CRED:username:password, magic string to ignore certificate errors in form IGNORE_CERT_ERRORS, change output type to extended array with RETURN_ARRAY moniker, and/or HTTP request header data to add. If array is returned then array0 is the response header, array1 is returned data and array2 is URL of the final request. + +If this function is used to upload multiple files then there are two available ways. Default would be to submit the form following RFC2388 specification. In that case every file is represented as multipart/mixed part embedded within the multipart/formdata. +If you want to upload using alternative way to avoid certain PHP bug that could exist on server side then prefix the file string with PHP#50338: string. +For example: ...name:files, PHP#50338: & $sFile1 & | & $sFile2 ... +Muliple files are always separated with vertical line ASCII character when filling the form.", "Fills web form."));
searchDB.push(new searchOption("_WinHttpSimpleFormFill_SetUploadCallback", "$vCallback  UDF's name $iNumChunks   number of chunks to send during form submitting. Default is 100. Unregistering is done by passing 0 as first argument.", "Sets user defined function as callback function for _WinHttpSimpleFormFill"));
searchDB.push(new searchOption("_WinHttpSimpleReadData", "$hRequest  request handle after _WinHttpReceiveResponse $iMode  type of data returned |0  ASCIIString |1  UTF8String |2  binary data In case of default reading mode, if the server specifies utf8 content type, function will force UTF8 string.", "Reads data from a request"));
searchDB.push(new searchOption("_WinHttpSimpleReadDataAsync", "$hInternet  Request handle first parameter while in callback function. $pBuffer  Pointer to memory buffer to which to read. $iNumberOfBytesToRead   The number of bytes to read. Default is 8192 bytes. |0  ASCIIString |1  UTF8String |2  binary data <b>You are strongly discouraged to use WinHTTP in asynchronous mode with AutoIt. AutoIt's callback implementation can't handle reentrancy properly.</b> +WinHttp is rentrant during asynchronous completion callback. Make sure you have only one callback running and only one request handled though it at time. +Also make sure memory buffer is at least 8192 bytes in size if $iNumberOfBytesToRead is left default.", "Reads data from a request in asynchronous mode"));
searchDB.push(new searchOption("_WinHttpSimpleRequest", "$hConnect Handle from _WinHttpConnect $sType  GET or POST default: GET $sPath  request path default:   empty string meaning 'default' page on the server $sReferrer  referrer default: $WINHTTP_NO_REFERER $sDta  POSTData default: $WINHTTP_NO_REQUEST_DATA $sHeader  additional Headers default: $WINHTTP_NO_ADDITIONAL_HEADERS $fGetHeaders   return response headers default: False $iMode  reading mode of result |0  ASCIItext |1  UTF8 text |2  binary data ", "A function to send a request in a simpler form"));
searchDB.push(new searchOption("_WinHttpSimpleSendRequest", "$hConnect Handle from _WinHttpConnect $sType  GET or POST default: GET $sPath  request path default:   empty string meaning 'default' page on the server $sReferrer  referrer default: $WINHTTP_NO_REFERER $sDta  POSTData default: $WINHTTP_NO_REQUEST_DATA $sHeader  additional Headers default: $WINHTTP_NO_ADDITIONAL_HEADERS ", "A function to send a request in a simpler form, but not read the data"));
searchDB.push(new searchOption("_WinHttpSimpleSendSSLRequest", "$hConnect Handle from _WinHttpConnect $sType  GET or POST default: GET $sPath  request path default:   empty string meaning 'default' page on the server $sReferrer  referrer default: $WINHTTP_NO_REFERER $sDta  POSTData default: $WINHTTP_NO_REQUEST_DATA $sHeader  additional Headers default: $WINHTTP_NO_ADDITIONAL_HEADERS ", "A function to send a SSL request in a simpler form, but not read the data"));
searchDB.push(new searchOption("_WinHttpSimpleSSLRequest", "$hConnect Handle from _WinHttpConnect $sType  GET or POST default: GET $sPath  request path default:   empty string meaning 'default' page on the server $sReferrer  referrer default: $WINHTTP_NO_REFERER $sDta  POSTData default: $WINHTTP_NO_REQUEST_DATA $sHeader  additional Headers default: $WINHTTP_NO_ADDITIONAL_HEADERS $fGetHeaders   return response headers default: False $iMode  reading mode of result |0  ASCIItext |1  UTF8 text |2  binary data ", "A function to send a SSL request in a simpler form"));
searchDB.push(new searchOption("_WinHttpTimeFromSystemTime", "None. ", "Formats a system date and time according to the HTTP version 1.0 specification."));
searchDB.push(new searchOption("_WinHttpTimeToSystemTime", "$sHttpTime  Date/time string to convert. ", "Takes an HTTP time/date string and converts it to array (SYSTEMTIME structure values)."));
searchDB.push(new searchOption("_WinHttpWriteData", "$hRequest  Valid handle returned by _WinHttpSendRequest. $vData  Data to write. $iMode   Integer representing writing mode. Default is 0  write ANSI string. $vData variable is either string or binary data to write. $iMode can have these values: |0  to write ANSI string |1  to write binary data", "Writes request data to an HTTP server."));


function init()
{
    var window_height;
    var window_width

    if (document.documentElement)
    {
        window_height = document.documentElement.offsetHeight;
        window_width = document.documentElement.offsetWidth;
    }
    else if (window.innerHeight)
    {
        window_height = window.innerHeight;
        window_width = window.innerWidth;
    }

    var iFrame = document.getElementById('idFrame')
    var iFramex = document.getElementById('idFramex')

    if (iFrame && iFramex)
    {
        if (window_height > 120)
        {
            iFrame.height = window_height - 120;
            iFramex.height = window_height - 120;
        }
        if (bFirstRun)
        {
            iFrame.width = window_width * 0.2;
            iFramex.width = window_width * 0.8;
        }
    }

    // bFirstRun = false;

    var iInput = document.getElementById('in')
    if (iInput)
    {
        iInput.style.color = "gray";
        iInput.value = "Search";
		iInput.disabled = false;
    }

    setTimeout(LoadSearchKeywords, 100); // give it time to load

}

function ResizeX(oItem, oItem2)
{

    if (iStartX == 0) return;

    var iWidth = iStartW + (event.x - iStartX);

    if (iWidth > 0)
    {
        var window_width;
        if (document.documentElement)
        {
            window_width = document.documentElement.offsetWidth;
        }
        else if (window.innerWidth)
        {
            window_width = window.innerWidth;
        }

        var iDelta = iWidth + oItem.width
        if (oItem)
        {
            oItem.width = iWidth;
        }
        if (oItem2 && window_width > iWidth)
        {
            oItem2.width = window_width - iWidth;
        }

    }
}

function ExitResizeX(oItem)
{
    if (oItem == null)
    {
        oItem = document.getElementById('rsz');
    }
    oItem.releaseCapture();
    iStartX = 0;
}

function EnterResizeX(oItem, oItem2)
{
    oItem.setCapture();
    iStartX = event.x;
    iStartW = oItem2.offsetWidth;
    if (document.getElementById('rightframe').src.substring(0, 4) == "http") // external page loaded into the frame
    {
        setTimeout(ExitResizeX, 500);
    }
}

function SetIFrameSource(url, elem)
{
    var myframe = parent.document.getElementsByTagName('iframe')[1];
    if (myframe !== null)
    {
        if (myframe.src)
        {
            myframe.src = url
        }
        else if (myframe.contentWindow !== null && myframe.contentWindow.location !== null)
        {
            myframe.contentWindow.location = url
        }
        else
        {
            myframe.setAttribute('src', url)
        }
    }

    {
        var elems = document.getElementsByTagName("a");
        for (var i = elems.length; i--;)
        {
            elems[i].style.color = "#00709f";
            elems[i].style.fontWeight = 400;
        }
        if (elem != null)
        {
            elem.style.color = "black";
            elem.style.fontWeight = 600
        }
    }

    return false;
}


function UpdateLocation(sTheURL)
{
    var myframeL = document.getElementById('leftframe')
    if (myframeL !== null)
    {

        var docL = myframeL.contentWindow.document;
        if (docL !== null)
        {

            var elems = docL.getElementsByTagName("a");
            for (var i = elems.length; i--;)
            {
                if (elems[i].innerHTML == sTheURL)
                {
                    if (elems[i].style.color != "black")
                    {
                        elems[i].style.color = "black";
                    }
                    if (elems[i].style.fontWeight != 600)
                    {
                        elems[i].style.fontWeight = 600;
                    }
                }
                else
                {
                    if (elems[i].style.color != "#00709f")
                    {
                        elems[i].style.color = "#00709f";
                    }
                    if (elems[i].style.fontWeight != 400)
                    {
                        elems[i].style.fontWeight = 400;
                    }
                }

            }
        }
    }
    return false;
}


function UpdateLocationByRightTitle()
{
    var myframeL = document.getElementById('leftframe')
    if (myframeL !== null)
    {

        var myframeR = document.getElementById('rightframe')
        if (myframeR !== null)
        {
            try // access may be denied
            {
                var windowR = myframeR.contentWindow
                var docR = windowR.document;
            }
            catch (e)
            {
                return false;
            }

            if (docR !== null)
            {
                var sTheURL = docR.title

                var docL = myframeL.contentWindow.document;
                if (docL !== null)
                {

                    var elems = docL.getElementsByTagName("a");
                    for (var i = elems.length; i--;)
                    {
                        if (elems[i].innerHTML == sTheURL)
                        {
                            if (elems[i].style.color != "black")
                            {
                                elems[i].style.color = "black";
                            }
                            if (elems[i].style.fontWeight != 600)
                            {
                                elems[i].style.fontWeight = 600;
                            }
                        }
                        else
                        {
                            if (elems[i].style.color != "#00709f")
                            {
                                elems[i].style.color = "#00709f";
                            }
                            if (elems[i].style.fontWeight != 400)
                            {
                                elems[i].style.fontWeight = 400;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}


function GoBack()
{
    history.back();
    setTimeout(UpdateLocationByRightTitle, 100); // give it time to load
    return false;
}


function GoForward()
{
    history.forward();
    setTimeout(UpdateLocationByRightTitle, 100); // give it time to load
    return false;
}

function GoHome()
{
    window.open("https://github.com/dragana-r/autoit-winhttp/releases");
}


function LoadSearchKeywords(index)
{
    if (index == null)
    {
        index = 0;
    }

    var myframe = document.getElementById('rightframe')

    if (myframe !== null)
    {

        var doc = myframe.contentWindow.document;
        if (doc)
        {
            bodytext = "" + doc.body.innerText
            bodytext = bodytext.replace(/\t/g, " ")
            bodytext = bodytext.replace(/\n/g, " ")
            bodytext = bodytext.replace(/\r/g, " ")
            bodytext = bodytext.replace(/ +/g, " ")
            searchDB[index].description = bodytext
        }
    }
}


function DoSearch()
{
    var myframe = document.getElementsByTagName('iframe')[1];
    if (myframe)
    {
        try // access may be denied
        {
            var windowX = myframe.contentWindow
            var doc = windowX.document;
        }
        catch (e)
        {
            document.getElementById("in").disabled = true;
			return false;
        }

        if (doc)
        {
            // Do the search
            var sTerm = document.getElementById("in").value;

            if (sTerm.toLowerCase() == "tetris")
            {
                SetIFrameSource("tetris.htm");
                setTimeout(UpdateLocationByRightTitle, 50); // give it time to load
                return false;
            }
            else if (doc.title == "Tetris")
            {
                history.back();
                setTimeout(DoSearch, 100);
                return false;
            }

            results = performSearch(sTerm);
            var regex = new RegExp(sTerm, "ig");
            var sResult = "";

            if (results)
            {
                // This means that there are search results to be displayed.
                // Loop through them and make it pretty! :)
                if (is_array(results))
                {
                    sResult += "<h2>Search Results for \"" + sTerm + "\" (" + results.length + ")</h2>";
                    sResult += "<ol class=\"result\">";
                    for (r = 0; r < results.length; r++)
                    {
                        result = searchDB[results[r]];

                        /////////////////////////////////////////////////////////////
                        // This is where you modify the formatting of the results
                        sResult += "<li class=\"result\"><div class=\"result-title\"><a href=\"#\" onclick='parent.document.getElementsByTagName(\"iframe\")[1].src = \"" + (result.altlink ? result.altlink : result.heading) + ".htm\"; parent.UpdateLocation(\"" + result.heading + "\"); return false'>" + result.heading + "</a></div>";
                        sResult += "<div class=\"result\">" + (result.shortdesc ? result.shortdesc : result.description).replace(regex, "<strong>$&</strong>") + "</div></li>";
                        /////////////////////////////////////////////////////////////
                    }
                    sResult += "</ol>";
                }
                    // If it's not an array, then we got an error message, so display that
                    // rather than results
                else
                {
                    sResult += "<i>" + results + "</i>";
                }

            }
            doc.body.innerHTML = sResult;
        }
    }
    return false;
}

// These are the available "error strings" you can change them to affect the output
// of the search engine.
ERR_NoOptions = "You didn't specify where to search for your keywords, please try again.";
ERR_NoSearchTerms = "You didn't enter any words to search for, please enter some words to search for and try again.";
ERR_NoResults = "Your search found no results, try less specific terms.";

// Performs an actual search and then returns the index number(s) in the db array
// where it found this element.
// keywords = the string they searched for (each space-separated word
//     is searched for separately)
// options can be
//     1 = search keywords, not description, not heading
//     2 = search keywords, search description, not heading
//     3 = search all
function performSearch(keywords)
{
    // Check to make sure they entered some search terms
    if (!keywords || keywords.length == 0)
    {
        return ERR_NoSearchTerms;
    }

    searchDescription = true;
    searchHeading = true

    // Setting up the keywords array for searching
    // Remove common punctuation
    keywords = keywords.replace("\.,'", "");

    // get them all into an array so we can loop thru them
    // we assume a space was used to separate the terms
    searchFor = keywords.split(" ");

    // This is where we will be putting the results.
    results = new Array();

    // Loop through the db for potential results
    // For every entry in the "database"
    for (sDB = 0; sDB < searchDB.length; sDB++)
    {

        // For every search term we are working with
        for (t = 0; t < searchFor.length; t++)
        {
            // Check in the heading for the term if required
            if (searchHeading)
            {
                if (searchDB[sDB].heading.toLowerCase().indexOf(searchFor[t].toLowerCase()) != -1)
                {
                    if (!in_array(String(sDB), results))
                    {
                        results[results.length] = String(sDB);
                    }
                }
            }

            // Check in the description for the term if required
            if (searchDescription)
            {
                if (searchDB[sDB].description.toLowerCase().indexOf(searchFor[t].toLowerCase()) != -1)
                {
                    if (!in_array(String(sDB), results))
                    {
                        results[results.length] = String(sDB);
                    }
                }
            }
        }
    }

    if (results.length > 0)
    {
        return results;
    }
    else
    {
        return ERR_NoResults;
    }
}

// Constructor for each search engine item.
// Used to create a record in the searchable "database"
function searchOption(heading, description, shortdesc, altlink)
{
    this.heading = heading;
    this.description = description;
    this.shortdesc = "";
    if (shortdesc != null)
    {
        this.shortdesc = shortdesc;
    }
    this.altlink = "";
    if (altlink != null)
    {
        this.altlink = altlink;
    }
    return this;
}

// Returns true or false based on whether the specified string is found
// in the array.
// This is based on the PHP function of the same name.
// stringToSearch = the string to look for
// arrayToSearch  = the array to look for the string in.
function in_array(stringToSearch, arrayToSearch)
{
    for (s = 0; s < arrayToSearch.length; s++)
    {
        if (arrayToSearch[s].indexOf(stringToSearch) != -1)
        {
            return true;
            exit;
        }
    }
    return false;
}

// Code from http://www.optimalworks.net/blog/2007/web-development/javascript/array-detection
function is_array(array) { return !(!array || (!array.length || array.length == 0) || typeof array !== 'object' || !array.constructor || array.nodeType || array.item); }


