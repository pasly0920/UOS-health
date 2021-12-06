<?php
    class Weather {
 
	    const API_URL_CURRENT = "http://api.openweathermap.org/data/2.5/weather?lat=37.56826&lon=126.977829&units=metric&APPID=2cbdf7a153b8e91407bcd7f4a67f91de";
	    const API_URL_FORECAST = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=37.56826&lon=126.977829&cnt=5&units=metric&APPID=2cbdf7a153b8e91407bcd7f4a67f91de";
 
	    public static function get_current_weather() {
	    $c = curl_init(self::API_URL_CURRENT);
	    $options = array(
		CURLOPT_HEADER => false,
		CURLOPT_RETURNTRANSFER => true
	    );
	    curl_setopt_array($c, $options);
	    $data = curl_exec($c);
	    curl_close($c);
	    if (isset($data) && $data) {
		    $data_obj = json_decode($data);
		    $result = array(
			    'current_temp' => $data_obj->main->temp,
			    'temp_min' => $data_obj->main->temp_min,
			    'temp_max' => $data_obj->main->temp_max,
			    'desc' => $data_obj->weather[0]->main,
			    'icon' => "http://openweathermap.org/img/w/{$data_obj->weather[0]->icon}.png",
			    'status' => 'ok'
			);
		    return $result;
	    }
    }
	public static function get_weather_forecast() {
		$c = curl_init(self::API_URL_FORECAST);
		$options = array(
			CURLOPT_HEADER => false,
			CURLOPT_RETURNTRANSFER => true
		);
		curl_setopt_array($c, $options);
		$data = curl_exec($c);
		curl_close($c);
		return json_decode($data);
		}
	}
 
    $w = Weather::get_current_weather();
    echo "Now " . number_format($w['current_temp'], 1) . "℃";
    echo "<br>Weather " .$w['desc'];
?>