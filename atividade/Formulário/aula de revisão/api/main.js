function BuscarCidade() {
    // Obtém o nome da cidade digitado pelo usuário
    const NomeCidade = document.getElementById('NomeCidade').value.toLowerCase();
    const PrevisãoTempo = document.getElementById('PrevisãoTempo');
    const horasé= document.getElementById('horas');
    const TemperaturasCaixa = document.getElementById('temperaturas');
    const TemperaturaImagem = document.getElementById('temperaturasimagens');
    const horaImagem = document.getElementById('hora-imagem');
    const weatherImage = document.getElementById('weatherImage');
   

    // Faz a requisição à API do OpenWeatherMap
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${NomeCidade}&appid=03780a870aad79f9414ea58e5e786b9e&units=metric&lang=pt_br`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar o lugar!");
            }
            return response.json();
        })
        .then(data => {
            // Converte timestamps para data legível
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            // Constrói a URL da imagem do ícone do tempo
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            // Calcula a precipitação (se houver dados de chuva)
            const precipitation = data.rain ? data.rain['1h'] : 0;

            // Atualiza o ícone do tempo
            const weatherIcon = document.getElementById('weatherIcon');
            weatherIcon.src = iconUrl;

            //mostrar temperatura na tela e imagens
            const temperatura = data.main.temp;

            TemperaturasCaixa.textContent = temperatura + '°C';

            if(temperatura <= 10){
               TemperaturaImagem.src ='./img/muitofrio.jpg';
            }else if(temperatura >=10 && temperatura < 15){
                TemperaturaImagem.src='./img/frio.jpg';
            }else if(temperatura >=15 &&temperatura <25){
                TemperaturaImagem.src='./img/confortavel.jpg';
            }else if(temperatura >= 25 && temperatura < 30){
                TemperaturaImagem.src ='./img/quente.jpg';
            }else if(temperatura > 30){
                TemperaturaImagem.src='./img/muitoquente.jpg';

               
            }

            //mostrar horas e imagem

            const HoraAtual =new Date();

            const horas = HoraAtual.getHours();

            horasé.textContent = HoraAtual.toLocaleTimeString();

            if (horas >= 6 && horas < 12){
                horaImagem.src = './img/manha.jpg';
              } else if (horas >= 12 && horas < 18) {
                horaImagem.src = './img/tarde.jpg';
              } else {
                horaImagem.src = './img/noite.jpg';
              }
             

            // Cria a string com os dados do clima
            const dadosClima = `
                <p><strong>Nome da cidade:</strong> ${data.name}</p>
                <p><strong>Hora atual:</strong> ${new Date().toLocaleTimeString()}</p>
                <p><strong>Horário do nascer do sol:</strong> ${sunrise}</p>
                <p><strong>Hora do pôr do sol:</strong> ${sunset}</p>
                <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                <p><strong>Precipitação da chuva:</strong> ${precipitation} mm</p>
                <p><strong>Condição Climática:</strong> ${data.weather[0].main}</p>
                <p><strong>Descrição:</strong> ${data.weather[0].description}</p>
                 <img src="${iconUrl}" alt="Ícone do tempo">
            `;

            // Atualiza o elemento HTML com os dados do clima
            PrevisãoTempo.innerHTML = dadosClima;

            //atualiza a thumb


            const condição = data.weather[0].main.toLowerCase();

            const imagens = {
                clear: 'limpo',
                clouds: 'nublado',
                rain: 'chuvoso',
                snow: 'neve',
              };

              if (imagens.hasOwnProperty(condição)) {
                weatherImage.src = `./img/${condição}.jpg`;
                weatherImage.style.display = 'block';
                video.style.display = 'none';
              }
           
        })
        .catch(error => {
            PrevisãoTempo.innerHTML = `<p>Ocorreu um erro: ${error.message}</p>`;
        });
    }
     


