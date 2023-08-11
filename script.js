const calcular = document.getElementById('calcular')

function imc() {
    const name = document.getElementById('name').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const res = document.getElementById('res')
    const calculo = (peso / (altura*altura)).toFixed(2);
    
    let status = ''
    if (calculo < 18) {
         status = 'Abaixo do peso'
    } else if (calculo <= 24) {
         status = 'Peso ideal'
    } else if (calculo <= 29) {
         status = 'levemente acima do peso'
    } else {
         status = 'Obeso'
    }

    if (name !== '' && altura !== '' && peso !== '') {
        res.textContent = `${name} seu IMC é de ${calculo} e`
        res.textContent += ` seu status é ${status}!!!`
    } else {
        alert('Digite corretamente os dados!!!')
    }
    

}

calcular.addEventListener('click', imc)