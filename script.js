function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        //window.alert('Preenchido com sucesso!')
        var fdesen = document.getElementsByName('radDesen')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Você possui ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var desenvolvedor = ''

        if(fdesen[0].checked){
            desenvolvedor = 'Nintendo'
            if(idade >= 0 && idade<10){
                res.innerHTML = '<p>Recomendamos para você o console: Nintendo Switch </p>'
                img.setAttribute('src', 'imagens/switch.jpg')
            }else{
                img.setAttribute('src', 'imagens/wii.jpg')
                res.innerHTML = '<p>Recomendamos para você o console: Nintendo Wii </p>'
            }
        }else if(fdesen[1].checked){
            desenvolvedor = 'Sony'
            if(idade >= 0 && idade<10){
                img.setAttribute('src', 'imagens/ps4.png')
                res.innerHTML = '<p>Recomendamos para você o console: Playstation 4 </p>'
            }else{
                img.setAttribute('src', 'imagens/ps3.jpg')
                res.innerHTML = '<p>Recomendamos para você o console: Playstation 3 </p>'
            }
        }else{
            desenvolvedor = 'Microsoft'
            if(idade >= 0 && idade<10){
                img.setAttribute('src', 'imagens/xbox360.jpg')
                res.innerHTML += '<p>Recomendamos para você o console: Xbox 360 </p>'
            }else{
                img.setAttribute('src', 'imagens/xboxOne.jpg')
                res.innerHTML += '<p>Recomendamos para você o console: Xbox One </p>'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += `Você possui ${idade} anos e prefere o desenvolvedor ${desenvolvedor}.`
        //res.innerHTML += '<p>Recomendamos para você o console: abaixo.</p>'
        res.appendChild(img)
    }
}