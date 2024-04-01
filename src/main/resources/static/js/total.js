function getCurrentUser() {

	console.log(JSON.stringify(this));
	//let currentUser = {};
	//if(sessionStorage.getItem("currentUser") != null) {
	//	currentUser = sessionStorage.getItem("currentUser");
	//	currentUser = callback(currentUser);
	//	return sessionStorage.getItem("currentUser");
	//};

	//if(sessionStorage.getItem("currentUser"))

	fetch("/total/ajax/getUser/")
	.then((response) => response.json())
	.then((response) => {
		//console.log("currentUser = " + currentUser);
		this.currentUser = response;
		//this.setState({currentUse:response})
		//console.log("getCurrentUser currentUser = " + currentUser);
		//sessionStorage.setItem("currentUser", currentUser);
		//currentUser = callback(currentUser);
		//console.log("getCurrentUser currentUser after callback = " + currentUser);
		//return currentUser;

		// fetch("/total/ajax/getSotrs/?filter=all")
		// .then((response) => response.json())
		// .then((response) => {
		// 	sotrs = response;
		// 	console.log("sotrs = " + JSON.stringify(sotrs));
		// })
	

		// if(currentUser.groups["Дон-Арсенал - владельцы"] || currentUser.groups["SP.Бухгалтерия.Подотчет"]) {
		// 	currentUser.full_access = true;
		// 	console.log("currentUser.full_access = " + currentUser.full_access);
		// }
		// if(!currentUser.full_access) {
		// 	userFilters[0].filter = currentUser.id + ";#" + currentUser.name;
		// }
		// //this.changeFilter(userFilters);
		// this.setState({userFilters: userFilters});

		

	});



}


// Получение значения куки
function getCookie(cookie_name) {
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )
		return ( unescape ( results[2] ) );
	else
		return null;
}

// Установка значения cookie
function setCookie ( name, value, expires ) {
	var cookie_string = name + "=" + escape ( value );
	if ( expires ) {
		cookie_string += "; expires=" + expires.toGMTString();
	}
	document.cookie = cookie_string;
}

// Удаление куки
function deleteCookie ( cookie_name ) {
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}









function nF(number, decimals, dec_point, thousands_sep) {
	number += "";
	number = number.replace(",",".");
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return '' + Math.round(n * k) / k;
		};
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}











function convertToDtTime(jdt,format) {
	var d = jdt.getDate();
	var dd = d + ""; if(dd.length == 1) dd = "0" + dd;
	//console.log()

	var m = jdt.getMonth() + 1;
	var mm = m + ""; if(mm.length == 1) mm = "0" + mm;
	var yyyy = jdt.getYear() + 1900;

	var monthes = ["","Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
	var Month = monthes[m];
	var month = Month.toLowerCase();

	var result = "";

	var hours	= jdt.getHours();	if((hours+"").length == 1) hours = "0" + hours;
	var minutes	= jdt.getMinutes();	if((minutes+"").length == 1) minutes = "0" + minutes;
	var seconds	= jdt.getSeconds();	if((seconds+"").length == 1) seconds = "0" + seconds;

	if(format == null) {
		format = "dd.mm.yyyy hou:min:sec";
	};

	result = format;

	result = result.replace("hou",hours);
	result = result.replace("min",minutes);
	result = result.replace("sec",seconds);

	result = result.replace("yyyy",yyyy);
	result = result.replace("mm",mm);
	result = result.replace("m",d);
	result = result.replace("dd",dd);
	result = result.replace("d",d);
	result = result.replace("Month",Month);
	result = result.replace("month",month);


	return result;
}

function convertToDt(jdt,format) {

	var d = jdt.getDate();
	var dd = d + ""; if(dd.length == 1) dd = "0" + dd;
	//console.log()

	var m = jdt.getMonth() + 1;
	var mm = m + ""; if(mm.length == 1) mm = "0" + mm;
	var yyyy = jdt.getYear() + 1900;

	var monthes = ["","Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
	var Month = monthes[m];
	var month = Month.toLowerCase();

	var result = "";

	if(format == null) {
		format = "dd.mm.yyyy";
	};

	result = format;
	result = result.replace("yyyy",yyyy);
	result = result.replace("mm",mm);
	result = result.replace("m",d);
	result = result.replace("dd",dd);
	result = result.replace("d",d);
	result = result.replace("Month",Month);
	result = result.replace("month",month);

	return result;
}






function replaceBadSign(st) {
	st = st.replace(new RegExp('%','g'),"");
	st = st.replace(new RegExp('"','g'),"");
	st = st.replace(new RegExp('/','g'),"");
	st = st.replace(new RegExp('!','g'),"");
	while(st.indexOf('\\') >=0)
	{
		st = st.replace('\\',"");
	}
	return st;
}











function getVers(list,item_id,field_name) {
	//var list		= elem.getAttribute("list");
	//var item_id		= elem.getAttribute("item_id");
	//var field_name	= elem.getAttribute("field_name");

	if(document.getElementById("overlay_vers") == null) {
		var div_overlay_vers = document.createElement('div');
		div_overlay_vers.setAttribute("id", "overlay_vers");
		div_overlay_vers.setAttribute("class", "overlay");
		div_overlay_vers.setAttribute("onclick", "document.getElementById('modal_vers').style.display='none';document.getElementById('overlay_vers').style.display='none'");
		var div_modal_vers = document.createElement('div');
		div_modal_vers.setAttribute("id","modal_vers")
		div_modal_vers.setAttribute("class","modal");
		div_modal_vers.setAttribute("style","padding:20px");
		document.getElementsByTagName('body')[0].appendChild(div_overlay_vers);
		document.getElementsByTagName('body')[0].appendChild(div_modal_vers);
	}
	//console.log(document.getElementById("overlay_vers"));
	document.getElementById("modal_vers").innerHTML = "<div style=text-align:center;padding-top:100px><div  uk-spinner=\"ratio: 4\" id=\"file_upload_spinner\" class=\"uk-icon uk-spinner\"></div></div>";
	document.getElementById("overlay_vers").style.display = "block";
	document.getElementById("modal_vers").style.display = "block";


	fetch("/total/ajax/getVers/?list=" + list + "&item_id=" + item_id + "&field_name=" + field_name)
	.then((response) => response.json())
	.then((response) => {
	
		console.log(response);

		st = "";
		st += "<div style=\"font-size:14pt;padding-bottom:10px\">Версии для поля: <b>" + response.field_name + "</b></div>";
		//st += "<table>";
		response.versions.forEach(item => {
		st += "<div style=\"border-style:solid;border-color:rgb(229, 229, 229);border-width:1px 0px 1px 0px;background-color:rgb(248, 248, 248)\">";
		st += item.modified + "&nbsp;&nbsp;&nbsp;&nbsp;" + item.modifier;
		st += "</div>";
		st += "<div style=\"padding:10px\">";
		if(item.content.indexOf(";#") >=0) {
			for(i = 1; i < item.content.split(';#').length; i += 2){
				st += item.content.split(';#')[i] + ", ";
			}
			st = st.substring(0,st.length-2);
		} else {
			st += item.content;
		}
		st += "</div>";
		})
		//st += "</table>";
		document.getElementById("modal_vers").innerHTML = st;


	})
}








function makeSendHTML(data) {
	s  = "";
	s += "<style>";
	s += "a.t,a.t:visited{color:#0072BC;text-decoration:none}";
	s += "a.t:hover {color:#0072BC;text-decoration:underline}";
	s += "a.value,a.value:visited {color:#0072BC;text-decoration:none;text-transform:uppercase}";
	s += "a.value:hover {color:#0072BC;text-decoration:underline}";
	s += "";
	//s += "a > div {color:#0072BC;text-decoration:none}";
	s += "</style>";
	s += "<div style=\"border-bottom:1px solid #e5e5e5;padding-bottom:5px;margin-bottom:0px;padding-bottom:0px\">"
	s += "  <h2 style=\"font-size:20px;font-family:Tahoma,'Impact','Agency FB','Segoe UI',Arial;font-weight:normal;color:#333333;margin-bottom:0px;margin-top:0px\">" + data.doc + " " + data.name + "</h2>";
	s += "  <div style=\"margin-bottom:10px\">";
	s += "    <a class=t href=\"" + data.link + "\" style=\"{color:#0072BC} :visited{color:#0072BC}\">" + data.link + "</a>";
	s += "  </div>";
	s += "</div>";
	s += "<div style=height:5px></div>";
	s += "<table cellpadding=0 cellspacing=0 border=0 style=\"font-size:14px;font-family:Calibri,'sans-serif',Tahoma,Verdana,'Segoe UI',Arial\">";
	data.data.forEach(item=>{
	if(item.value != "") {
	s += "  <tr>";
	s += "    <td nowrap valign=top style=\"text-transform:uppercase\" align=right><font color=#9999AA><b>" +  item.name + "</b>:</font>&nbsp;&nbsp;</td>";

	if(item.type == "text") {
	s += "    <td style=\"text-transform:uppercase\"><font color=\"#339933\"><b>" + (item.value.indexOf('#') >= 0 ? item.value.split('#')[1] : item.value) + "</b></font></td>";
	}

	if(item.type == "link") {
		s += "    <td style=\"text-transform:uppercase\">";
		s += "      <a href=\"https://portal.don-arsenal.ru/fin/sh/?id=" + item.value.split(';')[0] + "\">";
		s += item.value.split('#')[1].split(';')[0];
		s += "      </a>";
		s += "    </td>";
	}

	if(item.type == "html") {
		//s += "<td></td></tr>";
		s += "<td>" + item.value + "</td>"
		//console.log(s);
	}

	if(item.type == "long") {
		s += "<td style=color:#339933;font-style:italic;white-space:pre-wrap>" + item.value + "</td>"
	}
	

	s += "</tr>";
	}
	})
	s += "</table>";
	
	//s += "</div>";


	
	return s;


}





function printHTML(str) {
	console.log("F:prinHTML");

	const mywindow = window.open('', 'print', 'height=600, width=1000');
	mywindow.document.write(str);
	mywindow.document.close(); // для IE >= 10
	mywindow.focus();          // для IE >= 10
	mywindow.print();
	mywindow.close();
	return true;
}


function getTablesHTML(id) {

	clone = document.getElementById(id).cloneNode(true);
	clone.style.padding = "2px";

	//elems = clone.getElementsByTagName("A");

	//console.log("elems.length = " + elems.length);

	//while(clone.querySelectorAll("A").length > 0) {
	//	clone.getElementsByTagName("A")[0].outerHTML = "";
	//}
	while(clone.querySelectorAll("A[noprint]").length > 0) {
		clone.querySelectorAll("A[noprint]")[0].outerHTML = "";
	}
	while(clone.getElementsByTagName("SPAN").length > 0) {
		clone.getElementsByTagName("SPAN")[0].outerHTML = "";
	}
	while(clone.getElementsByTagName("TEXTAREA").length > 0) {
		clone.getElementsByTagName("TEXTAREA")[0].outerHTML = clone.getElementsByTagName("TEXTAREA")[0].value;
	}
	while(clone.getElementsByTagName("SELECT").length > 0) {
		if(clone.getElementsByTagName("SELECT")[0].value != '? undefined:undefined ?' && clone.getElementsByTagName("SELECT")[0].value != '? string: ?') {
			clone.getElementsByTagName("SELECT")[0].outerHTML = clone.getElementsByTagName("SELECT")[0].value;
		} else {
			clone.getElementsByTagName("SELECT")[0].outerHTML = '';
		}
	}
	while(clone.getElementsByTagName("INPUT").length > 0) {
		if(clone.getElementsByTagName("INPUT")[0].placeholder == 'ДД.ММ.ГГГГ') {
			clone.getElementsByTagName("INPUT")[0].outerHTML = clone.getElementsByTagName("INPUT")[0].value;
		} else {
			if(clone.getElementsByTagName("INPUT")[0].style.display == 'none') {
				clone.getElementsByTagName("INPUT")[0].outerHTML = "";
			} else {
				if(clone.getElementsByTagName("INPUT")[0].hasAttribute("number")) {
					clone.getElementsByTagName("INPUT")[0].outerHTML = nF(clone.getElementsByTagName("INPUT")[0].value,2,',',' ');
				} else {
					clone.getElementsByTagName("INPUT")[0].outerHTML = clone.getElementsByTagName("INPUT")[0].value;
				}
			}
		}
	}
	while(clone.querySelectorAll("TD[noprint]").length > 0) {
		clone.querySelectorAll("TD[noprint]")[0].outerHTML = "";
	}

	return clone.outerHTML;

}