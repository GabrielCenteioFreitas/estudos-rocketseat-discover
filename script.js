function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', "./assets/Avatars/Meu_Avatar-Preto_e_branco-BordaPreta.png")
        img.setAttribute('alt', "Avatar de Gabriel Centeio Freitas sorrindo, usando óculos e camisa preta com fundo cinza.")
    } else {
        img.setAttribute('src', "./assets/Avatars/Meu_Avatar-Preto_e_roxo2-Borda.png")
        img.setAttribute('alt', "Avatar de Gabriel Centeio Freitas sorrindo, usando óculos e camisa preta com fundo roxo.")
    }
}