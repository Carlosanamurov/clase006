class user{
    constructor (clave, usuari){
        this.clave = clave;
        this.usuari= usuari;
    }
    validar(){
        var c;
        if (this.usuari=='carlos'&& this.clave=='ella') {
            c=1;
        
        } else {
            c=0;
        }
        return c;
    }
}
var cc=0;
function logiar() {
    var a= new user( document.getElementById('contra').value, document.getElementById('usuario').value)
    if (a.validar()==1) {
        clear();
        alert("BIENVENIDO")
        cc=0;
        
    } else {
        cc++;
        alert(cc);
        clear();
        if(cc==3){
            close();
        }   
    } 
}
function clear(){
    document.getElementById('usuario').value="";
    document.getElementById('contra').value="";
    document.getElementById('usuario').focus();
}
function close(){
    document.getElementById('usuario').disabled=true;
    document.getElementById('contra').disabled=true;
    document.getElementById('buton').disabled=true;
}