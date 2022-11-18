import React from 'react'

const color = {
    azul: 'blue',
    vermelho:'red',
    amarelo: 'yellow',
    preto: 'black',
    verde:'green',
    laranja:'orange',
    roxo:'purple',
    rosa:'pink',
    cinza:'grey',
    branco:'white'
}
function Button() {
  return (
    <button style={{ background:color.laranja }}>Enviar</button>
  )
}

export default Button