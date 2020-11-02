//Todo o java script do jogo deve ser colocado aqui
function Exibefoto(){
     var browser=navigator.appName;
     if (browser && 'Android'){	
	     document.getElementById("idImg").style.visibility="Visible";
	 }	 
}
function Apagafoto(){
     var browser=navigator.appName;
     if (browser && 'Android'){	
	     document.getElementById("idImg").style.visibility="Hidden";
	 }
}
$(document).ready(function(){
	//document.getElementById("idImg").style.visibility="Hidden";
	//document.getElementById("idMini").style.visibility="Hidden";
    //$.getJSON( "http://rarolabs.com.br:88/alunos.json", function() {	
    //$.getJSON( "params.json", function() {
    //$.getJSON( "https://api.covid19api.com/stats", function() {
    //}).done(function(data) { 
    //    var content = '<option>Pesquisar Currículo de</option>'; 
    //    for(var i=0; i <data.length; i++){
//		     var vrid = data[i]['Total'];			 
//			 content += '<option value='+vrid+' id='+data[i]['All']+'>'+data[i]['Total']+'</option>';
//        }
//        $('#alunos').html(content);
//    });
//    $("select").change(function () {
//         var str = "";
//         $( "select option:selected" ).each(function() {
//			document.getElementById("idMini").style.visibility="Visible";
//            str = $( this ).text();		
	    	//$.getJSON( "http://rarolabs.com.br:88/alunos.json", function() {
		//$.getJSON( "params.json", function() {
		//$.getJSON( "https://api.covid19api.com/stats", function() { 
        	//}).done(function(data) {
        	//    for(var i=0; i <data.length; i++){
                //     var nomeAluno = data[i]['Total'] 					 
		//		     if (str == nomeAluno){
		//			     var content = '<p id="idLink"><a id="Valida" href="'+ data[i]['CountriesUpdated']+'"> Detalhes</a></p>';
		//			     $('#idMini').html(data[i]['PremiumSummaryCountryUpdated']);
		//				 $('#idDVLink').html(content);
                //         if (data[i]['CountriesUpdated'] == ''){ 
						    alert('Link Detalhes indisponível no momento.');
		//				 }						 
		//			 }
        	//    }
        	//});
		//});		
	//});
	//$('#nome').click(function(){
	//     var browser=navigator.appName;
        // if (browser == 'Andriod'){		 
	//        document.getElementById("idImg").style.visibility="Visible";
	//	 }	
	//});
})
