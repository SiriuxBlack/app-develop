document.getElementById('LoginForm').addEventListener('submit',function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert('Hola estos son tus datos: email: '+email+' password: '+password);
    let mensaje = '';
    let tipoAlerta = ''
    if (email === '' && password === '') {
        mensaje ='please complet all camps';
        tipoAlerta = 'warning'
    }else if (email === 'prueba@gmail.com' && password === '123456789') {
        mensaje ='successful login';
        tipoAlerta = 'success'

    }else{
        console.log('session start failed')
        mensaje ='session start failed';
        tipoAlerta = 'danger'

    }
    let alerta = `<div class="alert alert-${tipoAlerta} alert-dismissible fade show" role="alert">
    ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    document.getElementById('mensaje').innerHTML = alerta;
});