console.log(`
    Como o caminhão já tem a distância especificada de 100km entre as duas cidades, terá de calcular a velociadade média
    da seguinte forma: x1 = 100km - v1.t

    Além do mais o caminhão tem 2 pedágios, para encontrar é necessário calcular primeiro o tempo de viagem sem os obstáculos:
    ts0 = 100km/80km/h = 1,25h

    Ele perdendo 10 minutos ficará assim: 1,25h - 0,17h = 1,42h

    E sua velocidade média será dada por v1 = 100km/1,42h = 70,6km/h

    Para o carro deve-se utilizar a equação horária da seguinte forma: x2 = v2.t
    E agora será limpo o tempo e igualado ambas as equações para achar o ponto em que o caminhão e o carro se cruzam:

    t = x2/v2
    t = x1-100km/-v1
    x2 = x1 => x/v2 = x-100km/-v1
    -v1*x = v2*x - v2.100km
    x = v2.100km/v2+v1
    x = 110km/h * 100km / 110km/h + 70,6 km/h
    
    x = 60,90km

    E esta é a distância que os dois veículos se cruzam, ambos estão a mesma distância de Ribeirão Preto.
`);
