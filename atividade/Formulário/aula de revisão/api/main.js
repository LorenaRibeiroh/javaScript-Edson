function BuscarCidade(){
    const NomeCidade =
    document.getElementById('NomeCidade').value.toLocalelowerCase();
    const PrevisãoTempo =
    document.getElementById('PrevisãoTempo');
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${NomeCidade}&appid=03780a870aad79f9414ea58e5e786b9e&units=metric&lang=pt_br`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar o lugar!");
        }
        return response.json();
    })
    .then(data =>{
        const dadosClima =`
        <p>strong>Nome da cidade:</strong>${NomeCidade}</p>
        <p><strong>Hora atual:</strong>${current.date}</p>
        <p><strong>Horário do nascer do sol:</strong>${current.sunrise}</p>
        <p><strong>Hora do pôr do sol</strong>${current.sunset}</p>
        <p><strong>Temperatura:</strong>${current.temp}</p>
        <p><strong>Temperatura(responsável pela percepção humana do clima):</strong>${current.feels_like}</p>
        <p><strong>Pressão atmosférica no nível do mar:</strong>${current.pressure}</p>
        <p><strong>Umidade:</strong>${current.humidity}</p>
        <p><strong>Temperatura atmosférica (variando de acordo com a pressão e a umidade) abaixo da qual as gotas de água começam a condensar e o orvalho pode se formar:</strong>${current.dew_point}</p>
        <p><strong>Nebulosidade:</strong>${current.clouds}</p>
        <p><strong>Índice UV atual:</strong>${current.uvi}</p>
        <p><strong>Visibilidade média:</strong>${current.visibility}</p>
        <p><strong>Velocidade do vento:</strong>${current.wind_speed}</p>
        <p><strong>Rajada de vento:</strong>${current.wind_gust}</p>
        <p><strong>Direção do vento:</strong>${current.wind_deg}</p>
        <p><strong>Precipitação da chuva:</strong>${current.rain.h}</p>
        <p><strong>Condição Climática:</strong>${current.weather.main}</p>
        <p><strong>Descrição: </strong>${current.weather.description}</p>
        <p><strong>Imagem:</strong>${current.weather.icon}</p> `;

    PrevisãoTempo.innerHTML = dadosClima;    
    })
    .catch(error =>{
       PrevisãoTempo.innerHTML =`<p>${error.message}</p>`
    });
}