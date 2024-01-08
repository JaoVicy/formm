$(document).ready(function(){
    $('#tell').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });


    $('#form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tell: {
                required: true
            },
            cpf: {
                required: true
            },
            location: {
                required: true
            },
            cep: {
                required: true
            },   
        },
        messages: {
            name: 'Por favor insira seu nome.',
            email: 'Por favor insira seu email.',
            tell: 'Por favor insira seu número de celular.',
            cpf: 'Por favor insira seu CPF.',
            location: 'Por favor insira seu endereço.',
            cep: 'Por favor insira o CEP de sua cidade.',
        },
        
    });
});