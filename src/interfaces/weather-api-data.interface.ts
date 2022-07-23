interface IWeatherCondition {
  main: string;
}

interface ITemp {
  temp: number;
}

interface IMain {
  main: ITemp;
  weather: IWeatherCondition[];
}

export interface IWeatherApiData {
  data: IMain;
}
