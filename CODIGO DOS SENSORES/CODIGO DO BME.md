# CODIGO DO BME



\#include <Wire.h>

\#include <Adafruit\_Sensor.h>

\#include <Adafruit\_BME280.h>



struct DadosClima {

&#x20; float temperatura;

&#x20; float umidade;

&#x20; float pressao;

};





DadosClima lerSensorBME(){

&#x20; DadosClima dados;

&#x20; dados.temperatura = bme.readTemperature();

&#x20; dados.umidade = bme.readHumidity();

&#x20; dados.pressao = bme.readPressure() / 100.0F;

&#x20; return dados;

}

