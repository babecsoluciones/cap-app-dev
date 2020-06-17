var tURL = "https://cors-anywhere.herokuapp.com/http://cap.sdibabec.com/app/app-01-01.php";
function iniciarSesion()
{
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  
                  if(data.exito==1)
                  {
                      localStorage.setItem("codigousuario", data.codigousuario);
                      localStorage.setItem("usuario", data.usuario);
                      localStorage.setItem("correo", data.correo);
                      localStorage.setItem("password", data.password);
                       window.location="index.html";
                  }
                  else
                  {
                          var mensaje="";
                     
                         mensaje += (data.error ? data.error : data.errores)+"\n";
                     
                          alert(mensaje);
                
                //document.getElementById('divErrores').innerHTML = "<div class=\"alert alert-danger\"><strong>"+data.error+"</div>";
                //$('#resError').modal('show');
                //setTimeout(function(){
                //$('#resError').modal('hide');
                //},2000);
                          //alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                  }
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
            
      
        }

function reiniciarSesion()
{
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
    
            localStorage.removeItem("codigousuario");
            localStorage.removeItem("codigopromotoria");
            localStorage.removeItem("codigotienda");
            localStorage.removeItem("tiposimagenes");
            localStorage.removeItem("productos");
            localStorage.removeItem("correo");
            localStorage.removeItem("password");
          
          $.ajax({
              type: "POST",
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                 
                  
                      localStorage.setItem("codigousuario", data.codigousuario);
                      localStorage.setItem("codigopromotoria", data.codigopromotoria);
                      localStorage.setItem("codigotienda", data.codigotienda);
                      localStorage.setItem("tiposimagenes", data.tiposimagenes);
                      localStorage.setItem("productos", data.productos);
                      localStorage.setItem("correo", data.correo);
                      localStorage.setItem("password", data.password);
                      window.location="index.html";
                  
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
            
      
        }

function cerrarSesion()
{
          if(confirm("¿Deseas cerrar la sesión?"))
              {
                localStorage.clear();
                validarSesion();
              }
          
        }
function validarSesion()
{
    if(localStorage.getItem("codigousuario"))
       {
           var cmbUsuario = document.querySelectorAll("[id^=eCodUsuario]");
           cmbUsuario.forEach(function(nodo){
               nodo.value = localStorage.getItem("codigousuario");
           });
            document.getElementById('tUsuario').innerHTML = localStorage.getItem("usuario");
    }   
    else
        {
            window.location="login.html"; 
        }
    
}

function enviarDatos()
{           
            var obj = $('#frmUsuario').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      alert("Informacion almacenada exitosamente");
                      setTimeout(function(){ window.location="index.html"; }, 500);
                      
                  }
                  else
                      {
                         
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }

function guardarAlerta()
{           
            var obj = $('#frmNueva').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  
            },
              url: "https://cors-anywhere.herokuapp.com/http://cap.sdibabec.com/cla/oper-ale-reg.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      alert("Informacion almacenada exitosamente");
                      document.getElementById('frmNueva').reset;
                      setTimeout(function(){ window.location="index.html"; }, 500);
                      
                  }
                  else
                      {
                         
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }

function consultarAlerta(codigo)
{           
    document.getElementById('eCodAlerta').value = codigo;
            var obj = $('#frmConsulta').serializeJSON();
          var jsonString = JSON.stringify(obj);
    
    var divAlertas = document.getElementById('divAlertas'),
        divConsulta = document.getElementById('divConsulta'),
        syncAlert = document.getElementById('syncAlert'),
        newAlert = document.getElementById('newAlert'),
        backCon = document.getElementById('backCon');
    
          
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  divAlertas.style.display = 'none';
                  
                  
                  syncAlert.style.display = 'none';
                  newAlert.style.display = 'none';
                  
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  
                
                    divConsulta.style.display = 'inline';
                  
                  
                  backCon.style.display = 'inline';
                  
                document.getElementById('xhrDetalle') .innerHTML = data.tHTML;
                  $("#xhrDetalle").listview("refresh");
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
                  regresar();
              }
          });    
        }

function regresar()
{
    var divAlertas = document.getElementById('divAlertas'),
        divConsulta = document.getElementById('divConsulta'),
        syncAlert = document.getElementById('syncAlert'),
        newAlert = document.getElementById('newAlert'),
        backCon = document.getElementById('backCon');
    
    divAlertas.style.display = 'inline';
    newAlert.style.display = 'inline';
    divConsulta.style.display = 'none';
    
    syncAlert.style.display = 'inline';
    backCon.style.display = 'none';
    
    cargarAlertas();
}

function guardarImagen(indice) 
{
     navigator.camera.getPicture(onSuccess, onFail, { quality: 20,
                    destinationType: Camera.DestinationType.DATA_URL 
                });
                
                // Change image source
            function onSuccess(imageData) {
                var imagen = "data:image/jpeg;base64," + imageData;
                document.getElementById('imgArchivo'+indice).value=imagen;
                indice++;
                agregarFilaArchivo(indice);
            }

            function onFail(message) {
                alert('Error: ' + message);
            }
}

function agregarFilaArchivo(indice)
{
        var x = document.getElementById("imagenes").rows.length;
        
        
        var eCodProducto = document.getElementById('imgArchivo'+indice);
        if(eCodProducto)
            {}
        else
        {
           
    var table = document.getElementById("imagenes");
    var row = table.insertRow(x);
    row.id="img"+(indice);
    row.innerHTML = '<label for="tArchivo'+indice+'" class="form-control btn btn-info"><i class="fas fa-camera"></i> Tomar/subir Foto</label><input type="file" id="tArchivo'+indice+'" onchange="guardarImagen(\''+indice+'\')" accept="image/*;capture=camera" capture="camera"><input type="hidden" id="imgArchivo'+indice+'" name="fotos['+indice+'][tArchivo]">';
        }
        
    }

function cargarTienda()
{
      var obj = $('#frmSelector').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var eCodTienda = document.getElementById('eCodTienda');
    if(eCodTienda.value>0)
        {
          $.ajax({
              type: "POST",
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  var cmbTienda = document.querySelectorAll("[id^=tdTienda]");
                  cmbTienda.forEach(function(nodo){
                      nodo.innerHTML = data.tHTML;
                  });
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
        }
}

function cargarAlertas(bMostrar = true)
{
      var obj = $('#alertas').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var xhrAlertas = document.getElementById('xhrAlertas');
          var syncAlertas = document.getElementById('syncAlert');
    
          $.ajax({
              type: "POST",
              beforeSend: function(){
                if(bMostrar)  
                {
                    $('.ajax-loader').css("visibility", "visible");
                    syncAlertas.disabled=true;
                }
                else
                {
                    $('#divLoader').css("display", "inline");
                    $('#divAlertas').css("visibility", "hidden");
                }
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  xhrAlertas.innerHTML = data.tHTML;
                  $("#xhrAlertas").listview("refresh");
              },
              complete: function(){
                if(bMostrar)  
                {
                    $('.ajax-loader').css("visibility", "hidden");
                    syncAlertas.disabled=false;
                }

                else
                {
                    $('#divLoader').css("display", "none");
                    $('#divAlertas').css("visibility", "visible");
                }
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
        
}

function cargarConfiguracion()
{
      var obj = $('#frmConfig').serializeJSON();
          var jsonString = JSON.stringify(obj);
          var eCodTipoAlerta = document.getElementById('eCodTipoAlerta');
          var eCodSeveridad = document.getElementById('eCodSeveridad');
          var xhrAccesos = document.getElementById('xhrAccesos');
          var xhrCentros = document.getElementById('xhrCentros');
    
          $.ajax({
              type: "POST",
              beforeSend: function(){
                  $('.ajax-loader').css("visibility", "visible");
                  
            },
              url: tURL,
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  eCodTipoAlerta.innerHTML = data.tipo;
                  eCodSeveridad.innerHTML = data.severidad;
                  xhrAccesos.innerHTML = data.accesos;
                  xhrCentros.innerHTML = data.centros;
                  $("#xhrGeneral").listview("refresh");
                  $("#xhrAccesos").listview("refresh");
                  $("#xhrCentros").listview("refresh");
              },
              complete: function(){
                  $('.ajax-loader').css("visibility", "hidden");
                  
                },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          }); 
        
}

function cambiarPassword()
{
    var tPassword = document.getElementById('tPassword'),
        tPassword2 = document.getElementById('tPasswordNvo');
    
    if(tPassword.value || tPassword2.value)
        {
    if(tPassword.value==tPassword2.value)
        {
            alert("Ambos password son iguales");
        }
    else
        {
            if(tPassword.value!=localStorage.getItem("password"))
            {
                alert("El password actual es distinto");
            }
            else
            {
                if(tPassword2.value==localStorage.getItem("password"))
                {
                    alert("El nuevo password debe ser distinto al actual");
                }
                else
                {
                    enviarDatos();
                }
            }
            
        }
        }
    else
        {
            alert("Ingrese los password");
        }
}