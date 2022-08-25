import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


export class InMemoryDatabase implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        return {
            "pois": [
                {
                    "id": 1,
                    "nome": "PONTO 1",
                    "raio": 300,
                    "latitude": -25.56742701740896,
                    "longitude": -51.47653363645077
                },
                {
                    "id": 2,
                    "nome": "PONTO 2",
                    "raio": 300,
                    "latitude": -25.568056,
                    "longitude": -51.480278
                },
                {
                    "id": 3,
                    "nome": "PONTO 3",
                    "raio": 250,
                    "latitude": -25.414167,
                    "longitude": -51.566944
                },
                {
                    "id": 4,
                    "nome": "PONTO 4",
                    "raio": 250,
                    "latitude": -25.718611,
                    "longitude": -51.831111
                },
                {
                    "id": 5,
                    "nome": "PONTO 5",
                    "raio": 163,
                    "latitude": -25.37240459807051,
                    "longitude": -51.497342622606084
                },
                {
                    "id": 6,
                    "nome": "PONTO 6",
                    "raio": 170,
                    "latitude": -22.718252406214955,
                    "longitude": -46.78627558343578
                },
                {
                    "id": 7,
                    "nome": "PONTO 7",
                    "raio": 250,
                    "latitude": -25.336667,
                    "longitude": -51.5125
                },
                {
                    "id": 8,
                    "nome": "PONTO 8",
                    "raio": 250,
                    "latitude": -24.558056,
                    "longitude": -54.036944
                },
                {
                    "id": 9,
                    "nome": "PONTO 9",
                    "raio": 250,
                    "latitude": -24.940833,
                    "longitude": -50.793611
                },
                {
                    "id": 10,
                    "nome": "PONTO 10",
                    "raio": 250,
                    "latitude": -25.279167,
                    "longitude": -51.628333
                },
                {
                    "id": 11,
                    "nome": "PONTO 11",
                    "raio": 250,
                    "latitude": -25.498056,
                    "longitude": -49.275
                },
                {
                    "id": 12,
                    "nome": "PONTO 12",
                    "raio": 250,
                    "latitude": -20.071389,
                    "longitude": -45.312222
                },
                {
                    "id": 13,
                    "nome": "PONTO 13",
                    "raio": 250,
                    "latitude": -21.678056,
                    "longitude": -43.445833
                },
                {
                    "id": 14,
                    "nome": "PONTO 14",
                    "raio": 250,
                    "latitude": -23.6525,
                    "longitude": -46.716389
                },
                {
                    "id": 15,
                    "nome": "PONTO 15",
                    "raio": 250,
                    "latitude": -8.112778,
                    "longitude": -34.933889
                },
                {
                    "id": 16,
                    "nome": "PONTO 16",
                    "raio": 250,
                    "latitude": -22.754444,
                    "longitude": -45.122778
                },
                {
                    "id": 17,
                    "nome": "PONTO 17",
                    "raio": 250,
                    "latitude": -25.419167,
                    "longitude": -51.4875
                },
                {
                    "id": 18,
                    "nome": "PONTO 18",
                    "raio": 250,
                    "latitude": -25.5375,
                    "longitude": -48.554722
                },
                {
                    "id": 19,
                    "nome": "PONTO 19",
                    "raio": 250,
                    "latitude": -25.152222,
                    "longitude": -50.132778
                },
                {
                    "id": 20,
                    "nome": "PONTO 20",
                    "raio": 250,
                    "latitude": -23.598889,
                    "longitude": -46.888611
                },
                {
                    "id": 21,
                    "nome": "PONTO 21",
                    "raio": 250,
                    "latitude": -22.124722,
                    "longitude": -43.225833
                },
                {
                    "id": 22,
                    "nome": "PONTO 22",
                    "raio": 250,
                    "latitude": -25.445278,
                    "longitude": -51.654722
                },
                {
                    "id": 23,
                    "nome": "PONTO 23",
                    "raio": 250,
                    "latitude": -25.547778,
                    "longitude": -49.307222
                },
                {
                    "id": 24,
                    "nome": "PONTO 24",
                    "raio": 350,
                    "latitude": -25.363333,
                    "longitude": -51.468333
                }
            ],
            "placas": [
                "CAR0012",
                "TESTE001"
            ],
            "posicao": [
                {
                    "id": 25,
                    "placa": "TESTE001",
                    "data": "2018-12-12T02:04:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649141,
                    "longitude": -51.469891,
                    "ignicao": false
                },
                {
                    "id": 26,
                    "placa": "TESTE001",
                    "data": "2018-12-12T02:34:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649175,
                    "longitude": -51.4699098,
                    "ignicao": false
                },
                {
                    "id": 27,
                    "placa": "TESTE001",
                    "data": "2018-12-12T03:04:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649551,
                    "longitude": -51.4699588,
                    "ignicao": false
                },
                {
                    "id": 28,
                    "placa": "TESTE001",
                    "data": "2018-12-12T03:34:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649138,
                    "longitude": -51.4698871,
                    "ignicao": false
                },
                {
                    "id": 29,
                    "placa": "TESTE001",
                    "data": "2018-12-12T04:04:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364885,
                    "longitude": -51.4699223,
                    "ignicao": false
                },
                {
                    "id": 30,
                    "placa": "TESTE001",
                    "data": "2018-12-12T04:34:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364896,
                    "longitude": -51.4699111,
                    "ignicao": false
                },
                {
                    "id": 31,
                    "placa": "TESTE001",
                    "data": "2018-12-12T05:04:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364846,
                    "longitude": -51.469953,
                    "ignicao": false
                },
                {
                    "id": 32,
                    "placa": "TESTE001",
                    "data": "2018-12-12T05:34:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649141,
                    "longitude": -51.4699506,
                    "ignicao": false
                },
                {
                    "id": 33,
                    "placa": "TESTE001",
                    "data": "2018-12-12T06:04:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648976,
                    "longitude": -51.4698788,
                    "ignicao": false
                },
                {
                    "id": 34,
                    "placa": "TESTE001",
                    "data": "2018-12-12T06:34:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648943,
                    "longitude": -51.4699216,
                    "ignicao": false
                },
                {
                    "id": 35,
                    "placa": "TESTE001",
                    "data": "2018-12-12T07:04:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648238,
                    "longitude": -51.4699051,
                    "ignicao": false
                },
                {
                    "id": 36,
                    "placa": "TESTE001",
                    "data": "2018-12-12T07:34:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649338,
                    "longitude": -51.4699125,
                    "ignicao": false
                },
                {
                    "id": 37,
                    "placa": "TESTE001",
                    "data": "2018-12-12T08:04:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648955,
                    "longitude": -51.4698938,
                    "ignicao": false
                },
                {
                    "id": 38,
                    "placa": "TESTE001",
                    "data": "2018-12-12T08:34:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364886,
                    "longitude": -51.4699118,
                    "ignicao": false
                },
                {
                    "id": 39,
                    "placa": "TESTE001",
                    "data": "2018-12-12T09:04:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364897,
                    "longitude": -51.4699666,
                    "ignicao": false
                },
                {
                    "id": 40,
                    "placa": "TESTE001",
                    "data": "2018-12-12T09:34:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649003,
                    "longitude": -51.4699385,
                    "ignicao": false
                },
                {
                    "id": 41,
                    "placa": "TESTE001",
                    "data": "2018-12-12T10:04:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649003,
                    "longitude": -51.4699273,
                    "ignicao": false
                },
                {
                    "id": 42,
                    "placa": "TESTE001",
                    "data": "2018-12-12T10:34:57.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649311,
                    "longitude": -51.4699368,
                    "ignicao": false
                },
                {
                    "id": 43,
                    "placa": "TESTE001",
                    "data": "2018-12-12T11:04:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649196,
                    "longitude": -51.4699168,
                    "ignicao": false
                },
                {
                    "id": 44,
                    "placa": "TESTE001",
                    "data": "2018-12-12T11:35:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649506,
                    "longitude": -51.46992,
                    "ignicao": false
                },
                {
                    "id": 45,
                    "placa": "TESTE001",
                    "data": "2018-12-12T12:05:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649246,
                    "longitude": -51.4699121,
                    "ignicao": false
                },
                {
                    "id": 46,
                    "placa": "TESTE001",
                    "data": "2018-12-12T12:35:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649085,
                    "longitude": -51.469902,
                    "ignicao": false
                },
                {
                    "id": 47,
                    "placa": "TESTE001",
                    "data": "2018-12-12T13:05:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649175,
                    "longitude": -51.469938,
                    "ignicao": false
                },
                {
                    "id": 48,
                    "placa": "TESTE001",
                    "data": "2018-12-12T13:35:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648926,
                    "longitude": -51.4699128,
                    "ignicao": false
                },
                {
                    "id": 49,
                    "placa": "TESTE001",
                    "data": "2018-12-12T14:05:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649296,
                    "longitude": -51.4698916,
                    "ignicao": false
                },
                {
                    "id": 50,
                    "placa": "TESTE001",
                    "data": "2018-12-12T14:35:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649388,
                    "longitude": -51.4699536,
                    "ignicao": false
                },
                {
                    "id": 51,
                    "placa": "TESTE001",
                    "data": "2018-12-12T15:05:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648968,
                    "longitude": -51.4699221,
                    "ignicao": false
                },
                {
                    "id": 52,
                    "placa": "TESTE001",
                    "data": "2018-12-12T15:35:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649516,
                    "longitude": -51.4699671,
                    "ignicao": false
                },
                {
                    "id": 53,
                    "placa": "TESTE001",
                    "data": "2018-12-12T16:05:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364873,
                    "longitude": -51.4699553,
                    "ignicao": false
                },
                {
                    "id": 54,
                    "placa": "TESTE001",
                    "data": "2018-12-12T16:35:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648641,
                    "longitude": -51.4699805,
                    "ignicao": false
                },
                {
                    "id": 55,
                    "placa": "TESTE001",
                    "data": "2018-12-12T17:05:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649055,
                    "longitude": -51.4699333,
                    "ignicao": false
                },
                {
                    "id": 56,
                    "placa": "TESTE001",
                    "data": "2018-12-12T17:35:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649446,
                    "longitude": -51.4699341,
                    "ignicao": false
                },
                {
                    "id": 57,
                    "placa": "TESTE001",
                    "data": "2018-12-12T18:05:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649171,
                    "longitude": -51.4699285,
                    "ignicao": false
                },
                {
                    "id": 58,
                    "placa": "TESTE001",
                    "data": "2018-12-12T18:35:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649151,
                    "longitude": -51.4699415,
                    "ignicao": false
                },
                {
                    "id": 59,
                    "placa": "TESTE001",
                    "data": "2018-12-12T19:05:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649021,
                    "longitude": -51.4698828,
                    "ignicao": false
                },
                {
                    "id": 60,
                    "placa": "TESTE001",
                    "data": "2018-12-12T19:35:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649736,
                    "longitude": -51.4699023,
                    "ignicao": false
                },
                {
                    "id": 61,
                    "placa": "TESTE001",
                    "data": "2018-12-12T20:05:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648981,
                    "longitude": -51.4699301,
                    "ignicao": false
                },
                {
                    "id": 62,
                    "placa": "TESTE001",
                    "data": "2018-12-12T20:35:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364889,
                    "longitude": -51.4699111,
                    "ignicao": false
                },
                {
                    "id": 63,
                    "placa": "TESTE001",
                    "data": "2018-12-12T21:06:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648716,
                    "longitude": -51.4699213,
                    "ignicao": false
                },
                {
                    "id": 64,
                    "placa": "TESTE001",
                    "data": "2018-12-12T21:36:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648638,
                    "longitude": -51.4698893,
                    "ignicao": false
                },
                {
                    "id": 65,
                    "placa": "TESTE001",
                    "data": "2018-12-12T22:06:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649015,
                    "longitude": -51.4698735,
                    "ignicao": false
                },
                {
                    "id": 66,
                    "placa": "TESTE001",
                    "data": "2018-12-12T22:36:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364922,
                    "longitude": -51.4699235,
                    "ignicao": false
                },
                {
                    "id": 67,
                    "placa": "TESTE001",
                    "data": "2018-12-12T23:06:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649245,
                    "longitude": -51.4699446,
                    "ignicao": false
                },
                {
                    "id": 68,
                    "placa": "TESTE001",
                    "data": "2018-12-12T23:36:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364921,
                    "longitude": -51.4699275,
                    "ignicao": false
                },
                {
                    "id": 69,
                    "placa": "TESTE001",
                    "data": "2018-12-13T00:06:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648861,
                    "longitude": -51.4699225,
                    "ignicao": false
                },
                {
                    "id": 70,
                    "placa": "TESTE001",
                    "data": "2018-12-13T00:36:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648996,
                    "longitude": -51.4699201,
                    "ignicao": false
                },
                {
                    "id": 71,
                    "placa": "TESTE001",
                    "data": "2018-12-13T01:06:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648771,
                    "longitude": -51.4698895,
                    "ignicao": false
                },
                {
                    "id": 72,
                    "placa": "TESTE001",
                    "data": "2018-12-13T01:36:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649048,
                    "longitude": -51.4698733,
                    "ignicao": false
                },
                {
                    "id": 73,
                    "placa": "TESTE001",
                    "data": "2018-12-13T02:06:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649083,
                    "longitude": -51.4699545,
                    "ignicao": false
                },
                {
                    "id": 74,
                    "placa": "TESTE001",
                    "data": "2018-12-13T02:36:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648861,
                    "longitude": -51.4699038,
                    "ignicao": false
                },
                {
                    "id": 75,
                    "placa": "TESTE001",
                    "data": "2018-12-13T03:06:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648535,
                    "longitude": -51.4699203,
                    "ignicao": false
                },
                {
                    "id": 76,
                    "placa": "TESTE001",
                    "data": "2018-12-13T03:36:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648973,
                    "longitude": -51.4699281,
                    "ignicao": false
                },
                {
                    "id": 77,
                    "placa": "TESTE001",
                    "data": "2018-12-13T04:06:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648775,
                    "longitude": -51.469911,
                    "ignicao": false
                },
                {
                    "id": 78,
                    "placa": "TESTE001",
                    "data": "2018-12-13T04:36:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649093,
                    "longitude": -51.469942,
                    "ignicao": false
                },
                {
                    "id": 79,
                    "placa": "TESTE001",
                    "data": "2018-12-13T05:06:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649156,
                    "longitude": -51.4699666,
                    "ignicao": false
                },
                {
                    "id": 80,
                    "placa": "TESTE001",
                    "data": "2018-12-13T05:36:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648976,
                    "longitude": -51.4699606,
                    "ignicao": false
                },
                {
                    "id": 81,
                    "placa": "TESTE001",
                    "data": "2018-12-13T06:06:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649788,
                    "longitude": -51.4699236,
                    "ignicao": false
                },
                {
                    "id": 82,
                    "placa": "TESTE001",
                    "data": "2018-12-13T06:36:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648965,
                    "longitude": -51.4699591,
                    "ignicao": false
                },
                {
                    "id": 83,
                    "placa": "TESTE001",
                    "data": "2018-12-13T07:07:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648581,
                    "longitude": -51.4699126,
                    "ignicao": false
                },
                {
                    "id": 84,
                    "placa": "TESTE001",
                    "data": "2018-12-13T07:37:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649603,
                    "longitude": -51.4699108,
                    "ignicao": false
                },
                {
                    "id": 85,
                    "placa": "TESTE001",
                    "data": "2018-12-13T08:07:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.36492,
                    "longitude": -51.46988,
                    "ignicao": false
                },
                {
                    "id": 86,
                    "placa": "TESTE001",
                    "data": "2018-12-13T08:37:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649313,
                    "longitude": -51.4699468,
                    "ignicao": false
                },
                {
                    "id": 87,
                    "placa": "TESTE001",
                    "data": "2018-12-13T09:07:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649275,
                    "longitude": -51.4699435,
                    "ignicao": false
                },
                {
                    "id": 88,
                    "placa": "TESTE001",
                    "data": "2018-12-13T09:37:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648921,
                    "longitude": -51.4699078,
                    "ignicao": false
                },
                {
                    "id": 89,
                    "placa": "TESTE001",
                    "data": "2018-12-13T10:07:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649106,
                    "longitude": -51.469928,
                    "ignicao": false
                },
                {
                    "id": 90,
                    "placa": "TESTE001",
                    "data": "2018-12-13T10:37:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649186,
                    "longitude": -51.469958,
                    "ignicao": false
                },
                {
                    "id": 91,
                    "placa": "TESTE001",
                    "data": "2018-12-13T11:07:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364874,
                    "longitude": -51.4699256,
                    "ignicao": false
                },
                {
                    "id": 92,
                    "placa": "TESTE001",
                    "data": "2018-12-13T11:37:27.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648606,
                    "longitude": -51.4699675,
                    "ignicao": false
                },
                {
                    "id": 93,
                    "placa": "TESTE001",
                    "data": "2018-12-13T12:07:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364945,
                    "longitude": -51.4699991,
                    "ignicao": false
                },
                {
                    "id": 94,
                    "placa": "TESTE001",
                    "data": "2018-12-13T12:37:33.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649006,
                    "longitude": -51.4699531,
                    "ignicao": false
                },
                {
                    "id": 95,
                    "placa": "TESTE001",
                    "data": "2018-12-13T13:07:36.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648865,
                    "longitude": -51.4699123,
                    "ignicao": false
                },
                {
                    "id": 96,
                    "placa": "TESTE001",
                    "data": "2018-12-13T13:37:39.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648901,
                    "longitude": -51.4699135,
                    "ignicao": false
                },
                {
                    "id": 97,
                    "placa": "TESTE001",
                    "data": "2018-12-13T14:07:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649675,
                    "longitude": -51.4699678,
                    "ignicao": false
                },
                {
                    "id": 98,
                    "placa": "TESTE001",
                    "data": "2018-12-13T14:37:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364934,
                    "longitude": -51.4699683,
                    "ignicao": false
                },
                {
                    "id": 99,
                    "placa": "TESTE001",
                    "data": "2018-12-13T15:07:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364874,
                    "longitude": -51.4699355,
                    "ignicao": false
                },
                {
                    "id": 100,
                    "placa": "TESTE001",
                    "data": "2018-12-13T15:37:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649676,
                    "longitude": -51.4699716,
                    "ignicao": false
                },
                {
                    "id": 101,
                    "placa": "TESTE001",
                    "data": "2018-12-13T16:07:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648706,
                    "longitude": -51.4699243,
                    "ignicao": false
                },
                {
                    "id": 102,
                    "placa": "TESTE001",
                    "data": "2018-12-13T16:37:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648628,
                    "longitude": -51.4700285,
                    "ignicao": false
                },
                {
                    "id": 103,
                    "placa": "TESTE001",
                    "data": "2018-12-13T17:08:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649066,
                    "longitude": -51.469924,
                    "ignicao": false
                },
                {
                    "id": 104,
                    "placa": "TESTE001",
                    "data": "2018-12-13T17:38:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364933,
                    "longitude": -51.4699498,
                    "ignicao": false
                },
                {
                    "id": 105,
                    "placa": "TESTE001",
                    "data": "2018-12-13T18:08:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649296,
                    "longitude": -51.4699256,
                    "ignicao": false
                },
                {
                    "id": 106,
                    "placa": "TESTE001",
                    "data": "2018-12-13T18:38:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649261,
                    "longitude": -51.4699331,
                    "ignicao": false
                },
                {
                    "id": 107,
                    "placa": "TESTE001",
                    "data": "2018-12-13T19:08:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649083,
                    "longitude": -51.469937,
                    "ignicao": false
                },
                {
                    "id": 108,
                    "placa": "TESTE001",
                    "data": "2018-12-13T19:38:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648966,
                    "longitude": -51.4699813,
                    "ignicao": false
                },
                {
                    "id": 109,
                    "placa": "TESTE001",
                    "data": "2018-12-13T20:08:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649361,
                    "longitude": -51.4698716,
                    "ignicao": false
                },
                {
                    "id": 110,
                    "placa": "TESTE001",
                    "data": "2018-12-13T20:38:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648731,
                    "longitude": -51.4699578,
                    "ignicao": false
                },
                {
                    "id": 111,
                    "placa": "TESTE001",
                    "data": "2018-12-13T21:08:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648646,
                    "longitude": -51.4699211,
                    "ignicao": false
                },
                {
                    "id": 112,
                    "placa": "TESTE001",
                    "data": "2018-12-13T21:38:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648618,
                    "longitude": -51.4699006,
                    "ignicao": false
                },
                {
                    "id": 113,
                    "placa": "TESTE001",
                    "data": "2018-12-13T22:08:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648846,
                    "longitude": -51.4699216,
                    "ignicao": false
                },
                {
                    "id": 114,
                    "placa": "TESTE001",
                    "data": "2018-12-13T22:38:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364945,
                    "longitude": -51.4699343,
                    "ignicao": false
                },
                {
                    "id": 115,
                    "placa": "TESTE001",
                    "data": "2018-12-13T23:08:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648933,
                    "longitude": -51.4699181,
                    "ignicao": false
                },
                {
                    "id": 116,
                    "placa": "TESTE001",
                    "data": "2018-12-13T23:38:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648806,
                    "longitude": -51.4699303,
                    "ignicao": false
                },
                {
                    "id": 117,
                    "placa": "TESTE001",
                    "data": "2018-12-14T00:08:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648836,
                    "longitude": -51.4699323,
                    "ignicao": false
                },
                {
                    "id": 118,
                    "placa": "TESTE001",
                    "data": "2018-12-14T00:38:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648863,
                    "longitude": -51.4699251,
                    "ignicao": false
                },
                {
                    "id": 119,
                    "placa": "TESTE001",
                    "data": "2018-12-14T01:08:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648528,
                    "longitude": -51.4699088,
                    "ignicao": false
                },
                {
                    "id": 120,
                    "placa": "TESTE001",
                    "data": "2018-12-14T01:38:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649138,
                    "longitude": -51.4699313,
                    "ignicao": false
                },
                {
                    "id": 121,
                    "placa": "TESTE001",
                    "data": "2018-12-14T02:08:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648993,
                    "longitude": -51.469933,
                    "ignicao": false
                },
                {
                    "id": 122,
                    "placa": "TESTE001",
                    "data": "2018-12-14T02:38:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648641,
                    "longitude": -51.4698688,
                    "ignicao": false
                },
                {
                    "id": 123,
                    "placa": "TESTE001",
                    "data": "2018-12-14T03:09:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649343,
                    "longitude": -51.4699373,
                    "ignicao": false
                },
                {
                    "id": 124,
                    "placa": "TESTE001",
                    "data": "2018-12-14T03:39:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648891,
                    "longitude": -51.4698966,
                    "ignicao": false
                },
                {
                    "id": 125,
                    "placa": "TESTE001",
                    "data": "2018-12-14T04:09:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649325,
                    "longitude": -51.4699285,
                    "ignicao": false
                },
                {
                    "id": 126,
                    "placa": "TESTE001",
                    "data": "2018-12-14T04:39:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649,
                    "longitude": -51.4699075,
                    "ignicao": false
                },
                {
                    "id": 127,
                    "placa": "TESTE001",
                    "data": "2018-12-14T05:09:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649213,
                    "longitude": -51.4699276,
                    "ignicao": false
                },
                {
                    "id": 128,
                    "placa": "TESTE001",
                    "data": "2018-12-14T05:39:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649025,
                    "longitude": -51.4699506,
                    "ignicao": false
                },
                {
                    "id": 129,
                    "placa": "TESTE001",
                    "data": "2018-12-14T06:09:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649203,
                    "longitude": -51.4699058,
                    "ignicao": false
                },
                {
                    "id": 130,
                    "placa": "TESTE001",
                    "data": "2018-12-14T06:39:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648626,
                    "longitude": -51.4698996,
                    "ignicao": false
                },
                {
                    "id": 131,
                    "placa": "TESTE001",
                    "data": "2018-12-14T07:09:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648803,
                    "longitude": -51.469876,
                    "ignicao": false
                },
                {
                    "id": 132,
                    "placa": "TESTE001",
                    "data": "2018-12-14T07:39:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649125,
                    "longitude": -51.4699198,
                    "ignicao": false
                },
                {
                    "id": 133,
                    "placa": "TESTE001",
                    "data": "2018-12-14T08:09:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364918,
                    "longitude": -51.4699398,
                    "ignicao": false
                },
                {
                    "id": 134,
                    "placa": "TESTE001",
                    "data": "2018-12-14T08:39:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648658,
                    "longitude": -51.469995,
                    "ignicao": false
                },
                {
                    "id": 135,
                    "placa": "TESTE001",
                    "data": "2018-12-14T09:09:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648808,
                    "longitude": -51.4699478,
                    "ignicao": false
                },
                {
                    "id": 136,
                    "placa": "TESTE001",
                    "data": "2018-12-14T09:39:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648953,
                    "longitude": -51.469888,
                    "ignicao": false
                },
                {
                    "id": 137,
                    "placa": "TESTE001",
                    "data": "2018-12-14T10:09:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649106,
                    "longitude": -51.4699531,
                    "ignicao": false
                },
                {
                    "id": 138,
                    "placa": "TESTE001",
                    "data": "2018-12-14T10:39:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648886,
                    "longitude": -51.46991,
                    "ignicao": false
                },
                {
                    "id": 139,
                    "placa": "TESTE001",
                    "data": "2018-12-14T11:09:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648583,
                    "longitude": -51.4699768,
                    "ignicao": false
                },
                {
                    "id": 140,
                    "placa": "TESTE001",
                    "data": "2018-12-14T11:39:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648736,
                    "longitude": -51.4699736,
                    "ignicao": false
                },
                {
                    "id": 141,
                    "placa": "TESTE001",
                    "data": "2018-12-14T12:09:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648908,
                    "longitude": -51.4698985,
                    "ignicao": false
                },
                {
                    "id": 142,
                    "placa": "TESTE001",
                    "data": "2018-12-14T12:39:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649115,
                    "longitude": -51.4699571,
                    "ignicao": false
                },
                {
                    "id": 143,
                    "placa": "TESTE001",
                    "data": "2018-12-14T13:10:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648943,
                    "longitude": -51.4698888,
                    "ignicao": false
                },
                {
                    "id": 144,
                    "placa": "TESTE001",
                    "data": "2018-12-14T13:40:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648446,
                    "longitude": -51.4699575,
                    "ignicao": false
                },
                {
                    "id": 145,
                    "placa": "TESTE001",
                    "data": "2018-12-14T14:10:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649028,
                    "longitude": -51.46994,
                    "ignicao": false
                },
                {
                    "id": 146,
                    "placa": "TESTE001",
                    "data": "2018-12-14T14:40:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364928,
                    "longitude": -51.4700176,
                    "ignicao": false
                },
                {
                    "id": 147,
                    "placa": "TESTE001",
                    "data": "2018-12-14T15:10:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648618,
                    "longitude": -51.4699388,
                    "ignicao": false
                },
                {
                    "id": 148,
                    "placa": "TESTE001",
                    "data": "2018-12-14T15:40:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648881,
                    "longitude": -51.4700676,
                    "ignicao": false
                },
                {
                    "id": 149,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:10:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364868,
                    "longitude": -51.4699241,
                    "ignicao": false
                },
                {
                    "id": 150,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:40:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649655,
                    "longitude": -51.4699741,
                    "ignicao": false
                },
                {
                    "id": 151,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:43:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648951,
                    "longitude": -51.469969,
                    "ignicao": true
                },
                {
                    "id": 152,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:45:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649545,
                    "longitude": -51.4699006,
                    "ignicao": true
                },
                {
                    "id": 153,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:47:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364975,
                    "longitude": -51.469917,
                    "ignicao": true
                },
                {
                    "id": 154,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:49:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649688,
                    "longitude": -51.4699336,
                    "ignicao": true
                },
                {
                    "id": 155,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:51:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649633,
                    "longitude": -51.4699423,
                    "ignicao": true
                },
                {
                    "id": 156,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:53:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649808,
                    "longitude": -51.4699488,
                    "ignicao": true
                },
                {
                    "id": 157,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:55:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649505,
                    "longitude": -51.4699538,
                    "ignicao": true
                },
                {
                    "id": 158,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:57:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649326,
                    "longitude": -51.4699533,
                    "ignicao": true
                },
                {
                    "id": 159,
                    "placa": "TESTE001",
                    "data": "2018-12-14T16:59:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649436,
                    "longitude": -51.4699513,
                    "ignicao": true
                },
                {
                    "id": 160,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:01:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649651,
                    "longitude": -51.4699645,
                    "ignicao": true
                },
                {
                    "id": 161,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:03:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649556,
                    "longitude": -51.469934,
                    "ignicao": true
                },
                {
                    "id": 162,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:05:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649646,
                    "longitude": -51.469926,
                    "ignicao": true
                },
                {
                    "id": 163,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:07:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649593,
                    "longitude": -51.4699153,
                    "ignicao": true
                },
                {
                    "id": 164,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:08:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649606,
                    "longitude": -51.4699311,
                    "ignicao": false
                },
                {
                    "id": 165,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:08:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649606,
                    "longitude": -51.4699311,
                    "ignicao": false
                },
                {
                    "id": 166,
                    "placa": "TESTE001",
                    "data": "2018-12-14T17:40:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649753,
                    "longitude": -51.4699666,
                    "ignicao": false
                },
                {
                    "id": 167,
                    "placa": "TESTE001",
                    "data": "2018-12-14T18:10:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649238,
                    "longitude": -51.4699085,
                    "ignicao": false
                },
                {
                    "id": 168,
                    "placa": "TESTE001",
                    "data": "2018-12-14T18:40:33.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364919,
                    "longitude": -51.4699563,
                    "ignicao": false
                },
                {
                    "id": 169,
                    "placa": "TESTE001",
                    "data": "2018-12-14T19:10:36.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649073,
                    "longitude": -51.4699208,
                    "ignicao": false
                },
                {
                    "id": 170,
                    "placa": "TESTE001",
                    "data": "2018-12-14T19:40:39.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364906,
                    "longitude": -51.4699141,
                    "ignicao": false
                },
                {
                    "id": 171,
                    "placa": "TESTE001",
                    "data": "2018-12-14T20:10:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364866,
                    "longitude": -51.4699125,
                    "ignicao": false
                },
                {
                    "id": 172,
                    "placa": "TESTE001",
                    "data": "2018-12-14T20:40:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648846,
                    "longitude": -51.4699175,
                    "ignicao": false
                },
                {
                    "id": 173,
                    "placa": "TESTE001",
                    "data": "2018-12-14T21:10:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648981,
                    "longitude": -51.469964,
                    "ignicao": false
                },
                {
                    "id": 174,
                    "placa": "TESTE001",
                    "data": "2018-12-14T21:40:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648968,
                    "longitude": -51.4699383,
                    "ignicao": false
                },
                {
                    "id": 175,
                    "placa": "TESTE001",
                    "data": "2018-12-14T22:10:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364897,
                    "longitude": -51.4699185,
                    "ignicao": false
                },
                {
                    "id": 176,
                    "placa": "TESTE001",
                    "data": "2018-12-14T22:40:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649108,
                    "longitude": -51.4699011,
                    "ignicao": false
                },
                {
                    "id": 177,
                    "placa": "TESTE001",
                    "data": "2018-12-14T23:11:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648665,
                    "longitude": -51.4699095,
                    "ignicao": false
                },
                {
                    "id": 178,
                    "placa": "TESTE001",
                    "data": "2018-12-14T23:41:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364885,
                    "longitude": -51.4699086,
                    "ignicao": false
                },
                {
                    "id": 179,
                    "placa": "TESTE001",
                    "data": "2018-12-15T00:11:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648901,
                    "longitude": -51.4699373,
                    "ignicao": false
                },
                {
                    "id": 180,
                    "placa": "TESTE001",
                    "data": "2018-12-15T00:41:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364944,
                    "longitude": -51.4699368,
                    "ignicao": false
                },
                {
                    "id": 181,
                    "placa": "TESTE001",
                    "data": "2018-12-15T01:11:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364898,
                    "longitude": -51.4699131,
                    "ignicao": false
                },
                {
                    "id": 182,
                    "placa": "TESTE001",
                    "data": "2018-12-15T01:41:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364933,
                    "longitude": -51.4699123,
                    "ignicao": false
                },
                {
                    "id": 183,
                    "placa": "TESTE001",
                    "data": "2018-12-15T02:11:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648945,
                    "longitude": -51.4699275,
                    "ignicao": false
                },
                {
                    "id": 184,
                    "placa": "TESTE001",
                    "data": "2018-12-15T02:41:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649153,
                    "longitude": -51.4699221,
                    "ignicao": false
                },
                {
                    "id": 185,
                    "placa": "TESTE001",
                    "data": "2018-12-15T03:11:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648998,
                    "longitude": -51.4699078,
                    "ignicao": false
                },
                {
                    "id": 186,
                    "placa": "TESTE001",
                    "data": "2018-12-15T03:41:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649035,
                    "longitude": -51.4698823,
                    "ignicao": false
                },
                {
                    "id": 187,
                    "placa": "TESTE001",
                    "data": "2018-12-15T04:11:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649348,
                    "longitude": -51.469921,
                    "ignicao": false
                },
                {
                    "id": 188,
                    "placa": "TESTE001",
                    "data": "2018-12-15T04:41:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649355,
                    "longitude": -51.4698623,
                    "ignicao": false
                },
                {
                    "id": 189,
                    "placa": "TESTE001",
                    "data": "2018-12-15T05:11:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648905,
                    "longitude": -51.4699476,
                    "ignicao": false
                },
                {
                    "id": 190,
                    "placa": "TESTE001",
                    "data": "2018-12-15T05:41:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649128,
                    "longitude": -51.4699245,
                    "ignicao": false
                },
                {
                    "id": 191,
                    "placa": "TESTE001",
                    "data": "2018-12-15T06:11:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649083,
                    "longitude": -51.4699488,
                    "ignicao": false
                },
                {
                    "id": 192,
                    "placa": "TESTE001",
                    "data": "2018-12-15T06:41:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648816,
                    "longitude": -51.4699216,
                    "ignicao": false
                },
                {
                    "id": 193,
                    "placa": "TESTE001",
                    "data": "2018-12-15T07:11:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648985,
                    "longitude": -51.4699156,
                    "ignicao": false
                },
                {
                    "id": 194,
                    "placa": "TESTE001",
                    "data": "2018-12-15T07:41:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649075,
                    "longitude": -51.4699086,
                    "ignicao": false
                },
                {
                    "id": 195,
                    "placa": "TESTE001",
                    "data": "2018-12-15T08:11:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649218,
                    "longitude": -51.4699068,
                    "ignicao": false
                },
                {
                    "id": 196,
                    "placa": "TESTE001",
                    "data": "2018-12-15T08:41:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649541,
                    "longitude": -51.4699133,
                    "ignicao": false
                },
                {
                    "id": 197,
                    "placa": "TESTE001",
                    "data": "2018-12-15T09:11:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648486,
                    "longitude": -51.4699466,
                    "ignicao": false
                },
                {
                    "id": 198,
                    "placa": "TESTE001",
                    "data": "2018-12-15T09:42:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648893,
                    "longitude": -51.4699045,
                    "ignicao": false
                },
                {
                    "id": 199,
                    "placa": "TESTE001",
                    "data": "2018-12-15T10:12:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648903,
                    "longitude": -51.4699436,
                    "ignicao": false
                },
                {
                    "id": 200,
                    "placa": "TESTE001",
                    "data": "2018-12-15T10:42:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364951,
                    "longitude": -51.4699268,
                    "ignicao": false
                },
                {
                    "id": 201,
                    "placa": "TESTE001",
                    "data": "2018-12-15T11:12:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648386,
                    "longitude": -51.4699788,
                    "ignicao": false
                },
                {
                    "id": 202,
                    "placa": "TESTE001",
                    "data": "2018-12-15T11:42:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648811,
                    "longitude": -51.469924,
                    "ignicao": false
                },
                {
                    "id": 203,
                    "placa": "TESTE001",
                    "data": "2018-12-15T12:12:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649161,
                    "longitude": -51.469917,
                    "ignicao": false
                },
                {
                    "id": 204,
                    "placa": "TESTE001",
                    "data": "2018-12-15T12:42:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649031,
                    "longitude": -51.4699683,
                    "ignicao": false
                },
                {
                    "id": 205,
                    "placa": "TESTE001",
                    "data": "2018-12-15T13:12:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649048,
                    "longitude": -51.4699056,
                    "ignicao": false
                },
                {
                    "id": 206,
                    "placa": "TESTE001",
                    "data": "2018-12-15T13:42:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648631,
                    "longitude": -51.4699781,
                    "ignicao": false
                },
                {
                    "id": 207,
                    "placa": "TESTE001",
                    "data": "2018-12-15T14:12:27.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648923,
                    "longitude": -51.4699318,
                    "ignicao": false
                },
                {
                    "id": 208,
                    "placa": "TESTE001",
                    "data": "2018-12-15T14:42:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649015,
                    "longitude": -51.4698981,
                    "ignicao": false
                },
                {
                    "id": 209,
                    "placa": "TESTE001",
                    "data": "2018-12-15T15:12:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364821,
                    "longitude": -51.4699003,
                    "ignicao": false
                },
                {
                    "id": 210,
                    "placa": "TESTE001",
                    "data": "2018-12-15T15:42:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649036,
                    "longitude": -51.4699771,
                    "ignicao": false
                },
                {
                    "id": 211,
                    "placa": "TESTE001",
                    "data": "2018-12-15T16:12:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364872,
                    "longitude": -51.4699465,
                    "ignicao": false
                },
                {
                    "id": 212,
                    "placa": "TESTE001",
                    "data": "2018-12-15T16:42:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648946,
                    "longitude": -51.469987,
                    "ignicao": false
                },
                {
                    "id": 213,
                    "placa": "TESTE001",
                    "data": "2018-12-15T17:12:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649386,
                    "longitude": -51.4699375,
                    "ignicao": false
                },
                {
                    "id": 214,
                    "placa": "TESTE001",
                    "data": "2018-12-15T17:42:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364813,
                    "longitude": -51.4699568,
                    "ignicao": false
                },
                {
                    "id": 215,
                    "placa": "TESTE001",
                    "data": "2018-12-15T18:12:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648948,
                    "longitude": -51.4698913,
                    "ignicao": false
                },
                {
                    "id": 216,
                    "placa": "TESTE001",
                    "data": "2018-12-15T18:42:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648903,
                    "longitude": -51.469922,
                    "ignicao": false
                },
                {
                    "id": 217,
                    "placa": "TESTE001",
                    "data": "2018-12-15T19:12:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648885,
                    "longitude": -51.4699361,
                    "ignicao": false
                },
                {
                    "id": 218,
                    "placa": "TESTE001",
                    "data": "2018-12-15T19:43:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649293,
                    "longitude": -51.4699158,
                    "ignicao": false
                },
                {
                    "id": 219,
                    "placa": "TESTE001",
                    "data": "2018-12-15T20:13:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364879,
                    "longitude": -51.4699205,
                    "ignicao": false
                },
                {
                    "id": 220,
                    "placa": "TESTE001",
                    "data": "2018-12-15T20:43:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648801,
                    "longitude": -51.4699346,
                    "ignicao": false
                },
                {
                    "id": 221,
                    "placa": "TESTE001",
                    "data": "2018-12-15T21:13:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364877,
                    "longitude": -51.46988,
                    "ignicao": false
                },
                {
                    "id": 222,
                    "placa": "TESTE001",
                    "data": "2018-12-15T21:43:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649065,
                    "longitude": -51.4699506,
                    "ignicao": false
                },
                {
                    "id": 223,
                    "placa": "TESTE001",
                    "data": "2018-12-15T22:13:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648578,
                    "longitude": -51.4699076,
                    "ignicao": false
                },
                {
                    "id": 224,
                    "placa": "TESTE001",
                    "data": "2018-12-15T22:43:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364932,
                    "longitude": -51.4699598,
                    "ignicao": false
                },
                {
                    "id": 225,
                    "placa": "TESTE001",
                    "data": "2018-12-15T23:13:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649156,
                    "longitude": -51.4699346,
                    "ignicao": false
                },
                {
                    "id": 226,
                    "placa": "TESTE001",
                    "data": "2018-12-15T23:43:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648806,
                    "longitude": -51.4699061,
                    "ignicao": false
                },
                {
                    "id": 227,
                    "placa": "TESTE001",
                    "data": "2018-12-16T00:13:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649096,
                    "longitude": -51.4699166,
                    "ignicao": false
                },
                {
                    "id": 228,
                    "placa": "TESTE001",
                    "data": "2018-12-16T00:43:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648978,
                    "longitude": -51.4699185,
                    "ignicao": false
                },
                {
                    "id": 229,
                    "placa": "TESTE001",
                    "data": "2018-12-16T01:13:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649193,
                    "longitude": -51.4699151,
                    "ignicao": false
                },
                {
                    "id": 230,
                    "placa": "TESTE001",
                    "data": "2018-12-16T01:43:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648601,
                    "longitude": -51.4698755,
                    "ignicao": false
                },
                {
                    "id": 231,
                    "placa": "TESTE001",
                    "data": "2018-12-16T02:13:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648873,
                    "longitude": -51.4699206,
                    "ignicao": false
                },
                {
                    "id": 232,
                    "placa": "TESTE001",
                    "data": "2018-12-16T02:43:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649091,
                    "longitude": -51.469905,
                    "ignicao": false
                },
                {
                    "id": 233,
                    "placa": "TESTE001",
                    "data": "2018-12-16T03:13:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364876,
                    "longitude": -51.4699118,
                    "ignicao": false
                },
                {
                    "id": 234,
                    "placa": "TESTE001",
                    "data": "2018-12-16T03:43:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648756,
                    "longitude": -51.4698788,
                    "ignicao": false
                },
                {
                    "id": 235,
                    "placa": "TESTE001",
                    "data": "2018-12-16T04:13:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648998,
                    "longitude": -51.4698986,
                    "ignicao": false
                },
                {
                    "id": 236,
                    "placa": "TESTE001",
                    "data": "2018-12-16T04:43:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648603,
                    "longitude": -51.4699766,
                    "ignicao": false
                },
                {
                    "id": 237,
                    "placa": "TESTE001",
                    "data": "2018-12-16T05:13:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649248,
                    "longitude": -51.4699233,
                    "ignicao": false
                },
                {
                    "id": 238,
                    "placa": "TESTE001",
                    "data": "2018-12-16T05:44:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649386,
                    "longitude": -51.4699571,
                    "ignicao": false
                },
                {
                    "id": 239,
                    "placa": "TESTE001",
                    "data": "2018-12-16T06:14:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649,
                    "longitude": -51.4699351,
                    "ignicao": false
                },
                {
                    "id": 240,
                    "placa": "TESTE001",
                    "data": "2018-12-16T06:44:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648815,
                    "longitude": -51.4699146,
                    "ignicao": false
                },
                {
                    "id": 241,
                    "placa": "TESTE001",
                    "data": "2018-12-16T07:14:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649381,
                    "longitude": -51.4699348,
                    "ignicao": false
                },
                {
                    "id": 242,
                    "placa": "TESTE001",
                    "data": "2018-12-16T07:44:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648833,
                    "longitude": -51.4698931,
                    "ignicao": false
                },
                {
                    "id": 243,
                    "placa": "TESTE001",
                    "data": "2018-12-16T08:14:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649295,
                    "longitude": -51.4699223,
                    "ignicao": false
                },
                {
                    "id": 244,
                    "placa": "TESTE001",
                    "data": "2018-12-16T08:44:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649481,
                    "longitude": -51.4699381,
                    "ignicao": false
                },
                {
                    "id": 245,
                    "placa": "TESTE001",
                    "data": "2018-12-16T09:14:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649108,
                    "longitude": -51.469931,
                    "ignicao": false
                },
                {
                    "id": 246,
                    "placa": "TESTE001",
                    "data": "2018-12-16T09:44:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648698,
                    "longitude": -51.4699288,
                    "ignicao": false
                },
                {
                    "id": 247,
                    "placa": "TESTE001",
                    "data": "2018-12-16T10:14:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648906,
                    "longitude": -51.4699386,
                    "ignicao": false
                },
                {
                    "id": 248,
                    "placa": "TESTE001",
                    "data": "2018-12-16T10:44:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649165,
                    "longitude": -51.4699436,
                    "ignicao": false
                },
                {
                    "id": 249,
                    "placa": "TESTE001",
                    "data": "2018-12-16T11:14:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364883,
                    "longitude": -51.4699326,
                    "ignicao": false
                },
                {
                    "id": 250,
                    "placa": "TESTE001",
                    "data": "2018-12-16T11:44:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648881,
                    "longitude": -51.469932,
                    "ignicao": false
                },
                {
                    "id": 251,
                    "placa": "TESTE001",
                    "data": "2018-12-16T12:14:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649695,
                    "longitude": -51.4699075,
                    "ignicao": false
                },
                {
                    "id": 252,
                    "placa": "TESTE001",
                    "data": "2018-12-16T12:44:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649213,
                    "longitude": -51.469908,
                    "ignicao": false
                },
                {
                    "id": 253,
                    "placa": "TESTE001",
                    "data": "2018-12-16T13:14:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364891,
                    "longitude": -51.4699595,
                    "ignicao": false
                },
                {
                    "id": 254,
                    "placa": "TESTE001",
                    "data": "2018-12-16T13:44:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648895,
                    "longitude": -51.4699606,
                    "ignicao": false
                },
                {
                    "id": 255,
                    "placa": "TESTE001",
                    "data": "2018-12-16T14:14:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649125,
                    "longitude": -51.469899,
                    "ignicao": false
                },
                {
                    "id": 256,
                    "placa": "TESTE001",
                    "data": "2018-12-16T14:44:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649056,
                    "longitude": -51.469894,
                    "ignicao": false
                },
                {
                    "id": 257,
                    "placa": "TESTE001",
                    "data": "2018-12-16T15:14:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648403,
                    "longitude": -51.4699513,
                    "ignicao": false
                },
                {
                    "id": 258,
                    "placa": "TESTE001",
                    "data": "2018-12-16T15:44:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649438,
                    "longitude": -51.4700025,
                    "ignicao": false
                },
                {
                    "id": 259,
                    "placa": "TESTE001",
                    "data": "2018-12-16T16:15:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649058,
                    "longitude": -51.4699766,
                    "ignicao": false
                },
                {
                    "id": 260,
                    "placa": "TESTE001",
                    "data": "2018-12-16T16:45:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649553,
                    "longitude": -51.469964,
                    "ignicao": false
                },
                {
                    "id": 261,
                    "placa": "TESTE001",
                    "data": "2018-12-16T17:15:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649568,
                    "longitude": -51.4699475,
                    "ignicao": false
                },
                {
                    "id": 262,
                    "placa": "TESTE001",
                    "data": "2018-12-16T17:45:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648606,
                    "longitude": -51.4699291,
                    "ignicao": false
                },
                {
                    "id": 263,
                    "placa": "TESTE001",
                    "data": "2018-12-16T18:15:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648891,
                    "longitude": -51.469886,
                    "ignicao": false
                },
                {
                    "id": 264,
                    "placa": "TESTE001",
                    "data": "2018-12-16T18:45:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648788,
                    "longitude": -51.4699146,
                    "ignicao": false
                },
                {
                    "id": 265,
                    "placa": "TESTE001",
                    "data": "2018-12-16T19:15:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649128,
                    "longitude": -51.4699336,
                    "ignicao": false
                },
                {
                    "id": 266,
                    "placa": "TESTE001",
                    "data": "2018-12-16T19:45:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648955,
                    "longitude": -51.469926,
                    "ignicao": false
                },
                {
                    "id": 267,
                    "placa": "TESTE001",
                    "data": "2018-12-16T20:15:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648921,
                    "longitude": -51.469895,
                    "ignicao": false
                },
                {
                    "id": 268,
                    "placa": "TESTE001",
                    "data": "2018-12-16T20:45:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648691,
                    "longitude": -51.469889,
                    "ignicao": false
                },
                {
                    "id": 269,
                    "placa": "TESTE001",
                    "data": "2018-12-16T21:15:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648745,
                    "longitude": -51.4698858,
                    "ignicao": false
                },
                {
                    "id": 270,
                    "placa": "TESTE001",
                    "data": "2018-12-16T21:45:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648978,
                    "longitude": -51.4698793,
                    "ignicao": false
                },
                {
                    "id": 271,
                    "placa": "TESTE001",
                    "data": "2018-12-16T22:15:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649161,
                    "longitude": -51.4698841,
                    "ignicao": false
                },
                {
                    "id": 272,
                    "placa": "TESTE001",
                    "data": "2018-12-16T22:45:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649268,
                    "longitude": -51.4699263,
                    "ignicao": false
                },
                {
                    "id": 273,
                    "placa": "TESTE001",
                    "data": "2018-12-16T23:15:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648945,
                    "longitude": -51.4699053,
                    "ignicao": false
                },
                {
                    "id": 274,
                    "placa": "TESTE001",
                    "data": "2018-12-16T23:45:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649281,
                    "longitude": -51.469924,
                    "ignicao": false
                },
                {
                    "id": 275,
                    "placa": "TESTE001",
                    "data": "2018-12-17T00:15:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648825,
                    "longitude": -51.4699486,
                    "ignicao": false
                },
                {
                    "id": 276,
                    "placa": "TESTE001",
                    "data": "2018-12-17T00:45:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648816,
                    "longitude": -51.4699186,
                    "ignicao": false
                },
                {
                    "id": 277,
                    "placa": "TESTE001",
                    "data": "2018-12-17T01:15:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648896,
                    "longitude": -51.469897,
                    "ignicao": false
                },
                {
                    "id": 278,
                    "placa": "TESTE001",
                    "data": "2018-12-17T01:45:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649156,
                    "longitude": -51.4699421,
                    "ignicao": false
                },
                {
                    "id": 279,
                    "placa": "TESTE001",
                    "data": "2018-12-17T02:16:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648865,
                    "longitude": -51.4698568,
                    "ignicao": false
                },
                {
                    "id": 280,
                    "placa": "TESTE001",
                    "data": "2018-12-17T02:46:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649278,
                    "longitude": -51.4699655,
                    "ignicao": false
                },
                {
                    "id": 281,
                    "placa": "TESTE001",
                    "data": "2018-12-17T03:16:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649065,
                    "longitude": -51.4698985,
                    "ignicao": false
                },
                {
                    "id": 282,
                    "placa": "TESTE001",
                    "data": "2018-12-17T03:46:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649061,
                    "longitude": -51.4699183,
                    "ignicao": false
                },
                {
                    "id": 283,
                    "placa": "TESTE001",
                    "data": "2018-12-17T04:16:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649056,
                    "longitude": -51.4699435,
                    "ignicao": false
                },
                {
                    "id": 284,
                    "placa": "TESTE001",
                    "data": "2018-12-17T04:46:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648921,
                    "longitude": -51.469991,
                    "ignicao": false
                },
                {
                    "id": 285,
                    "placa": "TESTE001",
                    "data": "2018-12-17T05:16:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649055,
                    "longitude": -51.4699726,
                    "ignicao": false
                },
                {
                    "id": 286,
                    "placa": "TESTE001",
                    "data": "2018-12-17T05:46:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649335,
                    "longitude": -51.4699301,
                    "ignicao": false
                },
                {
                    "id": 287,
                    "placa": "TESTE001",
                    "data": "2018-12-17T06:16:27.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.36491,
                    "longitude": -51.4699451,
                    "ignicao": false
                },
                {
                    "id": 288,
                    "placa": "TESTE001",
                    "data": "2018-12-17T06:46:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648953,
                    "longitude": -51.469929,
                    "ignicao": false
                },
                {
                    "id": 289,
                    "placa": "TESTE001",
                    "data": "2018-12-17T07:16:33.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649306,
                    "longitude": -51.4699111,
                    "ignicao": false
                },
                {
                    "id": 290,
                    "placa": "TESTE001",
                    "data": "2018-12-17T07:46:36.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649585,
                    "longitude": -51.4698893,
                    "ignicao": false
                },
                {
                    "id": 291,
                    "placa": "TESTE001",
                    "data": "2018-12-17T08:16:39.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364895,
                    "longitude": -51.4699165,
                    "ignicao": false
                },
                {
                    "id": 292,
                    "placa": "TESTE001",
                    "data": "2018-12-17T08:46:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649046,
                    "longitude": -51.4699405,
                    "ignicao": false
                },
                {
                    "id": 293,
                    "placa": "TESTE001",
                    "data": "2018-12-17T09:16:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364893,
                    "longitude": -51.4699548,
                    "ignicao": false
                },
                {
                    "id": 294,
                    "placa": "TESTE001",
                    "data": "2018-12-17T09:46:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649026,
                    "longitude": -51.4699315,
                    "ignicao": false
                },
                {
                    "id": 295,
                    "placa": "TESTE001",
                    "data": "2018-12-17T10:16:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649323,
                    "longitude": -51.4699446,
                    "ignicao": false
                },
                {
                    "id": 296,
                    "placa": "TESTE001",
                    "data": "2018-12-17T10:46:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649036,
                    "longitude": -51.469903,
                    "ignicao": false
                },
                {
                    "id": 297,
                    "placa": "TESTE001",
                    "data": "2018-12-17T11:16:57.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.36489,
                    "longitude": -51.4699623,
                    "ignicao": false
                },
                {
                    "id": 298,
                    "placa": "TESTE001",
                    "data": "2018-12-17T11:47:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648868,
                    "longitude": -51.4699518,
                    "ignicao": false
                },
                {
                    "id": 299,
                    "placa": "TESTE001",
                    "data": "2018-12-17T12:17:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648436,
                    "longitude": -51.4699298,
                    "ignicao": false
                },
                {
                    "id": 300,
                    "placa": "TESTE001",
                    "data": "2018-12-17T12:47:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648731,
                    "longitude": -51.4699405,
                    "ignicao": false
                },
                {
                    "id": 301,
                    "placa": "TESTE001",
                    "data": "2018-12-17T13:17:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649086,
                    "longitude": -51.4699536,
                    "ignicao": false
                },
                {
                    "id": 302,
                    "placa": "TESTE001",
                    "data": "2018-12-17T13:47:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648956,
                    "longitude": -51.4699931,
                    "ignicao": false
                },
                {
                    "id": 303,
                    "placa": "TESTE001",
                    "data": "2018-12-17T14:17:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649305,
                    "longitude": -51.4699885,
                    "ignicao": false
                },
                {
                    "id": 304,
                    "placa": "TESTE001",
                    "data": "2018-12-17T14:47:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364893,
                    "longitude": -51.4699363,
                    "ignicao": false
                },
                {
                    "id": 305,
                    "placa": "TESTE001",
                    "data": "2018-12-17T15:17:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364876,
                    "longitude": -51.469966,
                    "ignicao": false
                },
                {
                    "id": 306,
                    "placa": "TESTE001",
                    "data": "2018-12-17T15:47:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649228,
                    "longitude": -51.4699715,
                    "ignicao": false
                },
                {
                    "id": 307,
                    "placa": "TESTE001",
                    "data": "2018-12-17T16:17:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648786,
                    "longitude": -51.4699321,
                    "ignicao": false
                },
                {
                    "id": 308,
                    "placa": "TESTE001",
                    "data": "2018-12-17T16:47:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648971,
                    "longitude": -51.4699031,
                    "ignicao": false
                },
                {
                    "id": 309,
                    "placa": "TESTE001",
                    "data": "2018-12-17T17:17:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649593,
                    "longitude": -51.469951,
                    "ignicao": false
                },
                {
                    "id": 310,
                    "placa": "TESTE001",
                    "data": "2018-12-17T17:47:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649108,
                    "longitude": -51.4699395,
                    "ignicao": false
                },
                {
                    "id": 311,
                    "placa": "TESTE001",
                    "data": "2018-12-17T18:17:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649356,
                    "longitude": -51.4699098,
                    "ignicao": false
                },
                {
                    "id": 312,
                    "placa": "TESTE001",
                    "data": "2018-12-17T18:47:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649003,
                    "longitude": -51.469918,
                    "ignicao": false
                },
                {
                    "id": 313,
                    "placa": "TESTE001",
                    "data": "2018-12-17T19:17:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648931,
                    "longitude": -51.4699945,
                    "ignicao": false
                },
                {
                    "id": 314,
                    "placa": "TESTE001",
                    "data": "2018-12-17T19:47:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649131,
                    "longitude": -51.4698993,
                    "ignicao": false
                },
                {
                    "id": 315,
                    "placa": "TESTE001",
                    "data": "2018-12-17T20:17:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649161,
                    "longitude": -51.4699661,
                    "ignicao": false
                },
                {
                    "id": 316,
                    "placa": "TESTE001",
                    "data": "2018-12-17T20:47:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648905,
                    "longitude": -51.4699155,
                    "ignicao": false
                },
                {
                    "id": 317,
                    "placa": "TESTE001",
                    "data": "2018-12-17T21:17:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649005,
                    "longitude": -51.4698958,
                    "ignicao": false
                },
                {
                    "id": 318,
                    "placa": "TESTE001",
                    "data": "2018-12-17T21:47:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648816,
                    "longitude": -51.4699301,
                    "ignicao": false
                },
                {
                    "id": 319,
                    "placa": "TESTE001",
                    "data": "2018-12-17T22:18:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649481,
                    "longitude": -51.4699136,
                    "ignicao": false
                },
                {
                    "id": 320,
                    "placa": "TESTE001",
                    "data": "2018-12-17T22:48:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649131,
                    "longitude": -51.4699195,
                    "ignicao": false
                },
                {
                    "id": 321,
                    "placa": "TESTE001",
                    "data": "2018-12-17T23:18:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649283,
                    "longitude": -51.4699123,
                    "ignicao": false
                },
                {
                    "id": 322,
                    "placa": "TESTE001",
                    "data": "2018-12-17T23:48:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648598,
                    "longitude": -51.4699305,
                    "ignicao": false
                },
                {
                    "id": 323,
                    "placa": "TESTE001",
                    "data": "2018-12-18T00:18:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649216,
                    "longitude": -51.4700016,
                    "ignicao": false
                },
                {
                    "id": 324,
                    "placa": "TESTE001",
                    "data": "2018-12-18T00:48:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364891,
                    "longitude": -51.4698818,
                    "ignicao": false
                },
                {
                    "id": 325,
                    "placa": "TESTE001",
                    "data": "2018-12-18T01:18:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649116,
                    "longitude": -51.4699095,
                    "ignicao": false
                },
                {
                    "id": 326,
                    "placa": "TESTE001",
                    "data": "2018-12-18T01:48:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648881,
                    "longitude": -51.4699455,
                    "ignicao": false
                },
                {
                    "id": 327,
                    "placa": "TESTE001",
                    "data": "2018-12-18T02:18:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364912,
                    "longitude": -51.4699345,
                    "ignicao": false
                },
                {
                    "id": 328,
                    "placa": "TESTE001",
                    "data": "2018-12-18T02:48:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648855,
                    "longitude": -51.4699098,
                    "ignicao": false
                },
                {
                    "id": 329,
                    "placa": "TESTE001",
                    "data": "2018-12-18T03:18:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364907,
                    "longitude": -51.469923,
                    "ignicao": false
                },
                {
                    "id": 330,
                    "placa": "TESTE001",
                    "data": "2018-12-18T03:48:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649061,
                    "longitude": -51.469953,
                    "ignicao": false
                },
                {
                    "id": 331,
                    "placa": "TESTE001",
                    "data": "2018-12-18T04:18:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649156,
                    "longitude": -51.4699186,
                    "ignicao": false
                },
                {
                    "id": 332,
                    "placa": "TESTE001",
                    "data": "2018-12-18T04:48:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649113,
                    "longitude": -51.4699301,
                    "ignicao": false
                },
                {
                    "id": 333,
                    "placa": "TESTE001",
                    "data": "2018-12-18T05:18:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648906,
                    "longitude": -51.4699676,
                    "ignicao": false
                },
                {
                    "id": 334,
                    "placa": "TESTE001",
                    "data": "2018-12-18T05:48:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364941,
                    "longitude": -51.4699126,
                    "ignicao": false
                },
                {
                    "id": 335,
                    "placa": "TESTE001",
                    "data": "2018-12-18T06:18:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648653,
                    "longitude": -51.4699288,
                    "ignicao": false
                },
                {
                    "id": 336,
                    "placa": "TESTE001",
                    "data": "2018-12-18T06:48:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364897,
                    "longitude": -51.4698978,
                    "ignicao": false
                },
                {
                    "id": 337,
                    "placa": "TESTE001",
                    "data": "2018-12-18T07:18:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649435,
                    "longitude": -51.469941,
                    "ignicao": false
                },
                {
                    "id": 338,
                    "placa": "TESTE001",
                    "data": "2018-12-18T07:48:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648306,
                    "longitude": -51.4698978,
                    "ignicao": false
                },
                {
                    "id": 339,
                    "placa": "TESTE001",
                    "data": "2018-12-18T08:18:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649058,
                    "longitude": -51.4699283,
                    "ignicao": false
                },
                {
                    "id": 340,
                    "placa": "TESTE001",
                    "data": "2018-12-18T08:49:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364905,
                    "longitude": -51.4699516,
                    "ignicao": false
                },
                {
                    "id": 341,
                    "placa": "TESTE001",
                    "data": "2018-12-18T09:19:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648908,
                    "longitude": -51.4699538,
                    "ignicao": false
                },
                {
                    "id": 342,
                    "placa": "TESTE001",
                    "data": "2018-12-18T09:49:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364896,
                    "longitude": -51.4699423,
                    "ignicao": false
                },
                {
                    "id": 343,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:19:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649563,
                    "longitude": -51.4699103,
                    "ignicao": false
                },
                {
                    "id": 344,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:40:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649563,
                    "longitude": -51.4699103,
                    "ignicao": true
                },
                {
                    "id": 345,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:42:33.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.3646696,
                    "longitude": -51.4697548,
                    "ignicao": true
                },
                {
                    "id": 346,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:42:53.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.3645471,
                    "longitude": -51.4700465,
                    "ignicao": true
                },
                {
                    "id": 347,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:44:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364511,
                    "longitude": -51.47016,
                    "ignicao": true
                },
                {
                    "id": 348,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:46:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645373,
                    "longitude": -51.4701555,
                    "ignicao": true
                },
                {
                    "id": 349,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:48:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364521,
                    "longitude": -51.4701396,
                    "ignicao": true
                },
                {
                    "id": 350,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:50:51.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.364678,
                    "longitude": -51.4695883,
                    "ignicao": true
                },
                {
                    "id": 351,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:52:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364568,
                    "longitude": -51.4692738,
                    "ignicao": false
                },
                {
                    "id": 352,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:52:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364568,
                    "longitude": -51.4692738,
                    "ignicao": false
                },
                {
                    "id": 353,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:52:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645641,
                    "longitude": -51.4692686,
                    "ignicao": true
                },
                {
                    "id": 354,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:52:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645615,
                    "longitude": -51.4692646,
                    "ignicao": false
                },
                {
                    "id": 355,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:52:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645588,
                    "longitude": -51.4692586,
                    "ignicao": true
                },
                {
                    "id": 356,
                    "placa": "TESTE001",
                    "data": "2018-12-18T10:52:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645563,
                    "longitude": -51.4692543,
                    "ignicao": false
                },
                {
                    "id": 357,
                    "placa": "TESTE001",
                    "data": "2018-12-18T11:24:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364509,
                    "longitude": -51.4692515,
                    "ignicao": false
                },
                {
                    "id": 358,
                    "placa": "TESTE001",
                    "data": "2018-12-18T11:54:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364561,
                    "longitude": -51.4692343,
                    "ignicao": false
                },
                {
                    "id": 359,
                    "placa": "TESTE001",
                    "data": "2018-12-18T12:24:39.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364574,
                    "longitude": -51.4692635,
                    "ignicao": false
                },
                {
                    "id": 360,
                    "placa": "TESTE001",
                    "data": "2018-12-18T12:54:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645638,
                    "longitude": -51.4692933,
                    "ignicao": false
                },
                {
                    "id": 361,
                    "placa": "TESTE001",
                    "data": "2018-12-18T13:24:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645536,
                    "longitude": -51.4693043,
                    "ignicao": false
                },
                {
                    "id": 362,
                    "placa": "TESTE001",
                    "data": "2018-12-18T13:54:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646138,
                    "longitude": -51.4693071,
                    "ignicao": false
                },
                {
                    "id": 363,
                    "placa": "TESTE001",
                    "data": "2018-12-18T14:24:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644965,
                    "longitude": -51.4692231,
                    "ignicao": false
                },
                {
                    "id": 364,
                    "placa": "TESTE001",
                    "data": "2018-12-18T14:24:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644965,
                    "longitude": -51.4692231,
                    "ignicao": false
                },
                {
                    "id": 365,
                    "placa": "TESTE001",
                    "data": "2018-12-18T14:54:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645496,
                    "longitude": -51.4692546,
                    "ignicao": false
                },
                {
                    "id": 366,
                    "placa": "TESTE001",
                    "data": "2018-12-18T15:24:57.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645436,
                    "longitude": -51.4692523,
                    "ignicao": false
                },
                {
                    "id": 367,
                    "placa": "TESTE001",
                    "data": "2018-12-18T15:55:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644738,
                    "longitude": -51.4691975,
                    "ignicao": false
                },
                {
                    "id": 368,
                    "placa": "TESTE001",
                    "data": "2018-12-18T16:25:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645711,
                    "longitude": -51.4691595,
                    "ignicao": false
                },
                {
                    "id": 369,
                    "placa": "TESTE001",
                    "data": "2018-12-18T16:55:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646321,
                    "longitude": -51.4692075,
                    "ignicao": false
                },
                {
                    "id": 370,
                    "placa": "TESTE001",
                    "data": "2018-12-18T17:25:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364689,
                    "longitude": -51.4693136,
                    "ignicao": false
                },
                {
                    "id": 371,
                    "placa": "TESTE001",
                    "data": "2018-12-18T17:55:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645965,
                    "longitude": -51.4692208,
                    "ignicao": false
                },
                {
                    "id": 372,
                    "placa": "TESTE001",
                    "data": "2018-12-18T18:25:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364589,
                    "longitude": -51.4693108,
                    "ignicao": false
                },
                {
                    "id": 373,
                    "placa": "TESTE001",
                    "data": "2018-12-18T18:55:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645926,
                    "longitude": -51.4691491,
                    "ignicao": false
                },
                {
                    "id": 374,
                    "placa": "TESTE001",
                    "data": "2018-12-18T19:25:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364678,
                    "longitude": -51.469287,
                    "ignicao": false
                },
                {
                    "id": 375,
                    "placa": "TESTE001",
                    "data": "2018-12-18T19:55:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646015,
                    "longitude": -51.4691933,
                    "ignicao": false
                },
                {
                    "id": 376,
                    "placa": "TESTE001",
                    "data": "2018-12-18T20:25:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646623,
                    "longitude": -51.4693331,
                    "ignicao": false
                },
                {
                    "id": 377,
                    "placa": "TESTE001",
                    "data": "2018-12-18T20:55:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645785,
                    "longitude": -51.4692145,
                    "ignicao": false
                },
                {
                    "id": 378,
                    "placa": "TESTE001",
                    "data": "2018-12-18T21:25:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645071,
                    "longitude": -51.4692435,
                    "ignicao": false
                },
                {
                    "id": 379,
                    "placa": "TESTE001",
                    "data": "2018-12-18T21:55:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645176,
                    "longitude": -51.469203,
                    "ignicao": false
                },
                {
                    "id": 380,
                    "placa": "TESTE001",
                    "data": "2018-12-18T22:25:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645918,
                    "longitude": -51.469219,
                    "ignicao": false
                },
                {
                    "id": 381,
                    "placa": "TESTE001",
                    "data": "2018-12-18T22:55:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364569,
                    "longitude": -51.4692475,
                    "ignicao": false
                },
                {
                    "id": 382,
                    "placa": "TESTE001",
                    "data": "2018-12-18T23:25:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645308,
                    "longitude": -51.469226,
                    "ignicao": false
                },
                {
                    "id": 383,
                    "placa": "TESTE001",
                    "data": "2018-12-18T23:55:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646173,
                    "longitude": -51.4692081,
                    "ignicao": false
                },
                {
                    "id": 384,
                    "placa": "TESTE001",
                    "data": "2018-12-19T00:25:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644968,
                    "longitude": -51.4692188,
                    "ignicao": false
                },
                {
                    "id": 385,
                    "placa": "TESTE001",
                    "data": "2018-12-19T00:55:57.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645571,
                    "longitude": -51.469234,
                    "ignicao": false
                },
                {
                    "id": 386,
                    "placa": "TESTE001",
                    "data": "2018-12-19T01:26:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364514,
                    "longitude": -51.4693616,
                    "ignicao": false
                },
                {
                    "id": 387,
                    "placa": "TESTE001",
                    "data": "2018-12-19T01:56:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645451,
                    "longitude": -51.469278,
                    "ignicao": false
                },
                {
                    "id": 388,
                    "placa": "TESTE001",
                    "data": "2018-12-19T02:26:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645891,
                    "longitude": -51.4692205,
                    "ignicao": false
                },
                {
                    "id": 389,
                    "placa": "TESTE001",
                    "data": "2018-12-19T02:56:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364647,
                    "longitude": -51.4693428,
                    "ignicao": false
                },
                {
                    "id": 390,
                    "placa": "TESTE001",
                    "data": "2018-12-19T03:26:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364563,
                    "longitude": -51.4692645,
                    "ignicao": false
                },
                {
                    "id": 391,
                    "placa": "TESTE001",
                    "data": "2018-12-19T03:56:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645648,
                    "longitude": -51.4692865,
                    "ignicao": false
                },
                {
                    "id": 392,
                    "placa": "TESTE001",
                    "data": "2018-12-19T04:26:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645985,
                    "longitude": -51.469296,
                    "ignicao": false
                },
                {
                    "id": 393,
                    "placa": "TESTE001",
                    "data": "2018-12-19T04:56:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646106,
                    "longitude": -51.4691698,
                    "ignicao": false
                },
                {
                    "id": 394,
                    "placa": "TESTE001",
                    "data": "2018-12-19T05:26:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645436,
                    "longitude": -51.4692671,
                    "ignicao": false
                },
                {
                    "id": 395,
                    "placa": "TESTE001",
                    "data": "2018-12-19T05:56:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364547,
                    "longitude": -51.4692735,
                    "ignicao": false
                },
                {
                    "id": 396,
                    "placa": "TESTE001",
                    "data": "2018-12-19T06:26:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646325,
                    "longitude": -51.469314,
                    "ignicao": false
                },
                {
                    "id": 397,
                    "placa": "TESTE001",
                    "data": "2018-12-19T06:56:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645263,
                    "longitude": -51.4692765,
                    "ignicao": false
                },
                {
                    "id": 398,
                    "placa": "TESTE001",
                    "data": "2018-12-19T07:26:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646061,
                    "longitude": -51.4692498,
                    "ignicao": false
                },
                {
                    "id": 399,
                    "placa": "TESTE001",
                    "data": "2018-12-19T07:56:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364538,
                    "longitude": -51.4692806,
                    "ignicao": false
                },
                {
                    "id": 400,
                    "placa": "TESTE001",
                    "data": "2018-12-19T08:26:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364596,
                    "longitude": -51.4692473,
                    "ignicao": false
                },
                {
                    "id": 401,
                    "placa": "TESTE001",
                    "data": "2018-12-19T08:56:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646218,
                    "longitude": -51.4692625,
                    "ignicao": false
                },
                {
                    "id": 402,
                    "placa": "TESTE001",
                    "data": "2018-12-19T09:26:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645395,
                    "longitude": -51.4692876,
                    "ignicao": false
                },
                {
                    "id": 403,
                    "placa": "TESTE001",
                    "data": "2018-12-19T09:56:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645658,
                    "longitude": -51.4693193,
                    "ignicao": false
                },
                {
                    "id": 404,
                    "placa": "TESTE001",
                    "data": "2018-12-19T10:26:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645698,
                    "longitude": -51.4693088,
                    "ignicao": false
                },
                {
                    "id": 405,
                    "placa": "TESTE001",
                    "data": "2018-12-19T10:57:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645483,
                    "longitude": -51.4692385,
                    "ignicao": false
                },
                {
                    "id": 406,
                    "placa": "TESTE001",
                    "data": "2018-12-19T11:27:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645553,
                    "longitude": -51.4693108,
                    "ignicao": false
                },
                {
                    "id": 407,
                    "placa": "TESTE001",
                    "data": "2018-12-19T11:57:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364542,
                    "longitude": -51.4692501,
                    "ignicao": false
                },
                {
                    "id": 408,
                    "placa": "TESTE001",
                    "data": "2018-12-19T12:27:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645935,
                    "longitude": -51.4692943,
                    "ignicao": false
                },
                {
                    "id": 409,
                    "placa": "TESTE001",
                    "data": "2018-12-19T12:57:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645185,
                    "longitude": -51.4692225,
                    "ignicao": false
                },
                {
                    "id": 410,
                    "placa": "TESTE001",
                    "data": "2018-12-19T13:27:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645558,
                    "longitude": -51.4692655,
                    "ignicao": false
                },
                {
                    "id": 411,
                    "placa": "TESTE001",
                    "data": "2018-12-19T13:57:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645876,
                    "longitude": -51.4692698,
                    "ignicao": false
                },
                {
                    "id": 412,
                    "placa": "TESTE001",
                    "data": "2018-12-19T14:27:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644616,
                    "longitude": -51.4691545,
                    "ignicao": false
                },
                {
                    "id": 413,
                    "placa": "TESTE001",
                    "data": "2018-12-19T14:57:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645655,
                    "longitude": -51.4693476,
                    "ignicao": false
                },
                {
                    "id": 414,
                    "placa": "TESTE001",
                    "data": "2018-12-19T15:27:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644403,
                    "longitude": -51.4692686,
                    "ignicao": false
                },
                {
                    "id": 415,
                    "placa": "TESTE001",
                    "data": "2018-12-19T15:57:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3646006,
                    "longitude": -51.4692886,
                    "ignicao": false
                },
                {
                    "id": 416,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:27:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645231,
                    "longitude": -51.4691603,
                    "ignicao": false
                },
                {
                    "id": 417,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:34:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645231,
                    "longitude": -51.4691603,
                    "ignicao": true
                },
                {
                    "id": 418,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:36:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3645791,
                    "longitude": -51.4692513,
                    "ignicao": true
                },
                {
                    "id": 419,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:38:05.000+00:00",
                    "velocidade": 1,
                    "latitude": -25.3646935,
                    "longitude": -51.4695663,
                    "ignicao": true
                },
                {
                    "id": 420,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:38:16.000+00:00",
                    "velocidade": 10,
                    "latitude": -25.3645923,
                    "longitude": -51.4695558,
                    "ignicao": true
                },
                {
                    "id": 421,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:38:32.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.3643336,
                    "longitude": -51.4698461,
                    "ignicao": true
                },
                {
                    "id": 422,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:38:52.000+00:00",
                    "velocidade": 10,
                    "latitude": -25.364183,
                    "longitude": -51.470034,
                    "ignicao": true
                },
                {
                    "id": 423,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:40:25.000+00:00",
                    "velocidade": 13,
                    "latitude": -25.3667395,
                    "longitude": -51.4745558,
                    "ignicao": true
                },
                {
                    "id": 424,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:41:01.000+00:00",
                    "velocidade": 28,
                    "latitude": -25.3638456,
                    "longitude": -51.4762276,
                    "ignicao": true
                },
                {
                    "id": 425,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:41:17.000+00:00",
                    "velocidade": 18,
                    "latitude": -25.3635521,
                    "longitude": -51.4754621,
                    "ignicao": true
                },
                {
                    "id": 426,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:41:33.000+00:00",
                    "velocidade": 38,
                    "latitude": -25.3641715,
                    "longitude": -51.4760828,
                    "ignicao": true
                },
                {
                    "id": 427,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:43:33.000+00:00",
                    "velocidade": 52,
                    "latitude": -25.3691061,
                    "longitude": -51.4958365,
                    "ignicao": true
                },
                {
                    "id": 428,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:45:33.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.3840631,
                    "longitude": -51.5127048,
                    "ignicao": true
                },
                {
                    "id": 429,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:46:56.000+00:00",
                    "velocidade": 17,
                    "latitude": -25.3905271,
                    "longitude": -51.5213035,
                    "ignicao": true
                },
                {
                    "id": 430,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:47:12.000+00:00",
                    "velocidade": 30,
                    "latitude": -25.3913001,
                    "longitude": -51.520826,
                    "ignicao": true
                },
                {
                    "id": 431,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:49:12.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.4017925,
                    "longitude": -51.5148296,
                    "ignicao": true
                },
                {
                    "id": 432,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:49:37.000+00:00",
                    "velocidade": 48,
                    "latitude": -25.4045931,
                    "longitude": -51.5121733,
                    "ignicao": true
                },
                {
                    "id": 433,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:49:53.000+00:00",
                    "velocidade": 58,
                    "latitude": -25.4064536,
                    "longitude": -51.5113693,
                    "ignicao": true
                },
                {
                    "id": 434,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:51:53.000+00:00",
                    "velocidade": 25,
                    "latitude": -25.4120918,
                    "longitude": -51.4941445,
                    "ignicao": true
                },
                {
                    "id": 435,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:52:15.000+00:00",
                    "velocidade": 24,
                    "latitude": -25.4124188,
                    "longitude": -51.4929733,
                    "ignicao": true
                },
                {
                    "id": 436,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:52:34.000+00:00",
                    "velocidade": 32,
                    "latitude": -25.4131588,
                    "longitude": -51.4924238,
                    "ignicao": true
                },
                {
                    "id": 437,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:54:24.000+00:00",
                    "velocidade": 68,
                    "latitude": -25.4258688,
                    "longitude": -51.4913945,
                    "ignicao": true
                },
                {
                    "id": 438,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:54:49.000+00:00",
                    "velocidade": 68,
                    "latitude": -25.4294606,
                    "longitude": -51.4939758,
                    "ignicao": true
                },
                {
                    "id": 439,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:55:11.000+00:00",
                    "velocidade": 61,
                    "latitude": -25.4312705,
                    "longitude": -51.4974841,
                    "ignicao": true
                },
                {
                    "id": 440,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:57:01.000+00:00",
                    "velocidade": 87,
                    "latitude": -25.4480588,
                    "longitude": -51.5099678,
                    "ignicao": true
                },
                {
                    "id": 441,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:58:03.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.450966,
                    "longitude": -51.5205781,
                    "ignicao": true
                },
                {
                    "id": 442,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:58:30.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.4551423,
                    "longitude": -51.5219363,
                    "ignicao": true
                },
                {
                    "id": 443,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:59:05.000+00:00",
                    "velocidade": 62,
                    "latitude": -25.4605236,
                    "longitude": -51.5204636,
                    "ignicao": true
                },
                {
                    "id": 444,
                    "placa": "TESTE001",
                    "data": "2018-12-19T16:59:11.000+00:00",
                    "velocidade": 57,
                    "latitude": -25.4611558,
                    "longitude": -51.5212173,
                    "ignicao": true
                },
                {
                    "id": 445,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:00:09.000+00:00",
                    "velocidade": 83,
                    "latitude": -25.4672626,
                    "longitude": -51.5291673,
                    "ignicao": true
                },
                {
                    "id": 446,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:02:08.000+00:00",
                    "velocidade": 79,
                    "latitude": -25.4863806,
                    "longitude": -51.5388715,
                    "ignicao": true
                },
                {
                    "id": 447,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:02:56.000+00:00",
                    "velocidade": 45,
                    "latitude": -25.4940978,
                    "longitude": -51.5402723,
                    "ignicao": true
                },
                {
                    "id": 448,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:03:16.000+00:00",
                    "velocidade": 45,
                    "latitude": -25.495774,
                    "longitude": -51.5416045,
                    "ignicao": true
                },
                {
                    "id": 449,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:03:45.000+00:00",
                    "velocidade": 44,
                    "latitude": -25.4990296,
                    "longitude": -51.5420685,
                    "ignicao": true
                },
                {
                    "id": 450,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:04:23.000+00:00",
                    "velocidade": 57,
                    "latitude": -25.5022671,
                    "longitude": -51.545294,
                    "ignicao": true
                },
                {
                    "id": 451,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:06:23.000+00:00",
                    "velocidade": 69,
                    "latitude": -25.5196665,
                    "longitude": -51.5489128,
                    "ignicao": true
                },
                {
                    "id": 452,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:07:19.000+00:00",
                    "velocidade": 10,
                    "latitude": -25.5244493,
                    "longitude": -51.549662,
                    "ignicao": true
                },
                {
                    "id": 453,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:07:40.000+00:00",
                    "velocidade": 35,
                    "latitude": -25.5241891,
                    "longitude": -51.548416,
                    "ignicao": true
                },
                {
                    "id": 454,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:09:40.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.5211943,
                    "longitude": -51.5362211,
                    "ignicao": true
                },
                {
                    "id": 455,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:10:14.000+00:00",
                    "velocidade": 80,
                    "latitude": -25.5222375,
                    "longitude": -51.5297818,
                    "ignicao": true
                },
                {
                    "id": 456,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:11:32.000+00:00",
                    "velocidade": 81,
                    "latitude": -25.5215898,
                    "longitude": -51.5130228,
                    "ignicao": true
                },
                {
                    "id": 457,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:12:03.000+00:00",
                    "velocidade": 72,
                    "latitude": -25.5242073,
                    "longitude": -51.5067433,
                    "ignicao": true
                },
                {
                    "id": 458,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:14:03.000+00:00",
                    "velocidade": 23,
                    "latitude": -25.5358336,
                    "longitude": -51.5027176,
                    "ignicao": true
                },
                {
                    "id": 459,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:16:03.000+00:00",
                    "velocidade": 72,
                    "latitude": -25.5519025,
                    "longitude": -51.4940308,
                    "ignicao": true
                },
                {
                    "id": 460,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:18:03.000+00:00",
                    "velocidade": 21,
                    "latitude": -25.5626495,
                    "longitude": -51.4893013,
                    "ignicao": true
                },
                {
                    "id": 461,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:20:03.000+00:00",
                    "velocidade": 27,
                    "latitude": -25.5692298,
                    "longitude": -51.4863113,
                    "ignicao": true
                },
                {
                    "id": 462,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:20:31.000+00:00",
                    "velocidade": 13,
                    "latitude": -25.5709993,
                    "longitude": -51.4854481,
                    "ignicao": true
                },
                {
                    "id": 463,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:20:47.000+00:00",
                    "velocidade": 27,
                    "latitude": -25.5707196,
                    "longitude": -51.4846046,
                    "ignicao": true
                },
                {
                    "id": 464,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:22:01.000+00:00",
                    "velocidade": 28,
                    "latitude": -25.5685711,
                    "longitude": -51.4785931,
                    "ignicao": true
                },
                {
                    "id": 465,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:22:20.000+00:00",
                    "velocidade": 28,
                    "latitude": -25.5692473,
                    "longitude": -51.4775123,
                    "ignicao": true
                },
                {
                    "id": 466,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:22:49.000+00:00",
                    "velocidade": 16,
                    "latitude": -25.5684186,
                    "longitude": -51.4755801,
                    "ignicao": true
                },
                {
                    "id": 467,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:23:05.000+00:00",
                    "velocidade": 22,
                    "latitude": -25.5677438,
                    "longitude": -51.4753331,
                    "ignicao": true
                },
                {
                    "id": 468,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:23:21.000+00:00",
                    "velocidade": 12,
                    "latitude": -25.5677063,
                    "longitude": -51.4761088,
                    "ignicao": true
                },
                {
                    "id": 469,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:23:37.000+00:00",
                    "velocidade": 11,
                    "latitude": -25.567762,
                    "longitude": -51.4764413,
                    "ignicao": true
                },
                {
                    "id": 470,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:25:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676555,
                    "longitude": -51.4766121,
                    "ignicao": false
                },
                {
                    "id": 471,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:25:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676555,
                    "longitude": -51.4766121,
                    "ignicao": false
                },
                {
                    "id": 472,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:44:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676555,
                    "longitude": -51.4766121,
                    "ignicao": true
                },
                {
                    "id": 473,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:46:43.000+00:00",
                    "velocidade": 4,
                    "latitude": -25.5676555,
                    "longitude": -51.4759906,
                    "ignicao": true
                },
                {
                    "id": 474,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:48:01.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5675498,
                    "longitude": -51.475332,
                    "ignicao": true
                },
                {
                    "id": 475,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:48:24.000+00:00",
                    "velocidade": 20,
                    "latitude": -25.5676336,
                    "longitude": -51.4747,
                    "ignicao": true
                },
                {
                    "id": 476,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:48:40.000+00:00",
                    "velocidade": 22,
                    "latitude": -25.5682101,
                    "longitude": -51.4747641,
                    "ignicao": true
                },
                {
                    "id": 477,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:49:07.000+00:00",
                    "velocidade": 17,
                    "latitude": -25.5689623,
                    "longitude": -51.4770176,
                    "ignicao": true
                },
                {
                    "id": 478,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:49:52.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5686348,
                    "longitude": -51.4771975,
                    "ignicao": true
                },
                {
                    "id": 479,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:50:08.000+00:00",
                    "velocidade": 14,
                    "latitude": -25.56797,
                    "longitude": -51.4773943,
                    "ignicao": true
                },
                {
                    "id": 480,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:52:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.567986,
                    "longitude": -51.4776901,
                    "ignicao": true
                },
                {
                    "id": 481,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:53:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5679951,
                    "longitude": -51.4777033,
                    "ignicao": false
                },
                {
                    "id": 482,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:53:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5679951,
                    "longitude": -51.4777033,
                    "ignicao": false
                },
                {
                    "id": 483,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:55:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5680061,
                    "longitude": -51.4777106,
                    "ignicao": true
                },
                {
                    "id": 484,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:56:24.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.5680481,
                    "longitude": -51.4777228,
                    "ignicao": true
                },
                {
                    "id": 485,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:56:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5681155,
                    "longitude": -51.477857,
                    "ignicao": false
                },
                {
                    "id": 486,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:56:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5681155,
                    "longitude": -51.477857,
                    "ignicao": false
                },
                {
                    "id": 487,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:57:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5681026,
                    "longitude": -51.4778718,
                    "ignicao": true
                },
                {
                    "id": 488,
                    "placa": "TESTE001",
                    "data": "2018-12-19T17:58:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5681891,
                    "longitude": -51.4780751,
                    "ignicao": false
                },
                {
                    "id": 489,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:01:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5681801,
                    "longitude": -51.4780883,
                    "ignicao": true
                },
                {
                    "id": 490,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:01:24.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5682108,
                    "longitude": -51.4781558,
                    "ignicao": true
                },
                {
                    "id": 491,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:01:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.568416,
                    "longitude": -51.4781825,
                    "ignicao": false
                },
                {
                    "id": 492,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:01:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.568416,
                    "longitude": -51.4781825,
                    "ignicao": false
                },
                {
                    "id": 493,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:01:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5684186,
                    "longitude": -51.4781746,
                    "ignicao": true
                },
                {
                    "id": 494,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:01:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5684186,
                    "longitude": -51.47817,
                    "ignicao": false
                },
                {
                    "id": 495,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:02:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5684208,
                    "longitude": -51.4781515,
                    "ignicao": true
                },
                {
                    "id": 496,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:03:05.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5684846,
                    "longitude": -51.4781373,
                    "ignicao": true
                },
                {
                    "id": 497,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:03:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5685995,
                    "longitude": -51.478083,
                    "ignicao": false
                },
                {
                    "id": 498,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:03:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5685995,
                    "longitude": -51.478083,
                    "ignicao": false
                },
                {
                    "id": 499,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:04:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5686336,
                    "longitude": -51.4781021,
                    "ignicao": true
                },
                {
                    "id": 500,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:04:56.000+00:00",
                    "velocidade": 6,
                    "latitude": -25.5687198,
                    "longitude": -51.4780556,
                    "ignicao": true
                },
                {
                    "id": 501,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:05:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5688581,
                    "longitude": -51.477849,
                    "ignicao": false
                },
                {
                    "id": 502,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:05:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5688581,
                    "longitude": -51.477849,
                    "ignicao": false
                },
                {
                    "id": 503,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:07:51.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5688431,
                    "longitude": -51.4778805,
                    "ignicao": true
                },
                {
                    "id": 504,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:08:06.000+00:00",
                    "velocidade": 6,
                    "latitude": -25.5688493,
                    "longitude": -51.4778143,
                    "ignicao": true
                },
                {
                    "id": 505,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:08:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5688033,
                    "longitude": -51.4776555,
                    "ignicao": false
                },
                {
                    "id": 506,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:08:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5688033,
                    "longitude": -51.4776555,
                    "ignicao": false
                },
                {
                    "id": 507,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:10:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5687926,
                    "longitude": -51.477601,
                    "ignicao": true
                },
                {
                    "id": 508,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:11:30.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5687491,
                    "longitude": -51.4775101,
                    "ignicao": true
                },
                {
                    "id": 509,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:12:35.000+00:00",
                    "velocidade": 11,
                    "latitude": -25.5686073,
                    "longitude": -51.4773261,
                    "ignicao": true
                },
                {
                    "id": 510,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:13:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5682383,
                    "longitude": -51.4775075,
                    "ignicao": false
                },
                {
                    "id": 511,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:13:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5682383,
                    "longitude": -51.4775075,
                    "ignicao": false
                },
                {
                    "id": 512,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:17:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5682013,
                    "longitude": -51.4775426,
                    "ignicao": true
                },
                {
                    "id": 513,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:18:15.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.5680215,
                    "longitude": -51.4776513,
                    "ignicao": true
                },
                {
                    "id": 514,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:18:33.000+00:00",
                    "velocidade": 19,
                    "latitude": -25.5681638,
                    "longitude": -51.4784318,
                    "ignicao": true
                },
                {
                    "id": 515,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:19:38.000+00:00",
                    "velocidade": 12,
                    "latitude": -25.5691066,
                    "longitude": -51.4809938,
                    "ignicao": true
                },
                {
                    "id": 516,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:19:54.000+00:00",
                    "velocidade": 18,
                    "latitude": -25.568562,
                    "longitude": -51.4812213,
                    "ignicao": true
                },
                {
                    "id": 517,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:20:24.000+00:00",
                    "velocidade": 10,
                    "latitude": -25.567559,
                    "longitude": -51.481579,
                    "ignicao": true
                },
                {
                    "id": 518,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:20:40.000+00:00",
                    "velocidade": 11,
                    "latitude": -25.5673021,
                    "longitude": -51.4811375,
                    "ignicao": true
                },
                {
                    "id": 519,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:20:56.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5674803,
                    "longitude": -51.4807311,
                    "ignicao": true
                },
                {
                    "id": 520,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:21:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676051,
                    "longitude": -51.4806913,
                    "ignicao": false
                },
                {
                    "id": 521,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:21:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676051,
                    "longitude": -51.4806913,
                    "ignicao": false
                },
                {
                    "id": 522,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:27:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676051,
                    "longitude": -51.4806913,
                    "ignicao": true
                },
                {
                    "id": 523,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:27:46.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5676855,
                    "longitude": -51.4803218,
                    "ignicao": true
                },
                {
                    "id": 524,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:29:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.567765,
                    "longitude": -51.4806178,
                    "ignicao": true
                },
                {
                    "id": 525,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:31:49.000+00:00",
                    "velocidade": 1,
                    "latitude": -25.5677771,
                    "longitude": -51.480719,
                    "ignicao": true
                },
                {
                    "id": 526,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:33:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5676768,
                    "longitude": -51.4807338,
                    "ignicao": true
                },
                {
                    "id": 527,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:34:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5677018,
                    "longitude": -51.4807053,
                    "ignicao": false
                },
                {
                    "id": 528,
                    "placa": "TESTE001",
                    "data": "2018-12-19T18:34:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5677018,
                    "longitude": -51.4807053,
                    "ignicao": false
                },
                {
                    "id": 529,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:06:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5675645,
                    "longitude": -51.4809586,
                    "ignicao": false
                },
                {
                    "id": 530,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:21:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678073,
                    "longitude": -51.480528,
                    "ignicao": true
                },
                {
                    "id": 531,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:23:03.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5676528,
                    "longitude": -51.4808068,
                    "ignicao": true
                },
                {
                    "id": 532,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:25:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5677846,
                    "longitude": -51.4805765,
                    "ignicao": true
                },
                {
                    "id": 533,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:27:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678743,
                    "longitude": -51.4806518,
                    "ignicao": true
                },
                {
                    "id": 534,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:29:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678723,
                    "longitude": -51.4806335,
                    "ignicao": true
                },
                {
                    "id": 535,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:31:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678813,
                    "longitude": -51.4806411,
                    "ignicao": true
                },
                {
                    "id": 536,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:31:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678623,
                    "longitude": -51.4806276,
                    "ignicao": false
                },
                {
                    "id": 537,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:31:54.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678623,
                    "longitude": -51.4806276,
                    "ignicao": false
                },
                {
                    "id": 538,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:55:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5678623,
                    "longitude": -51.4806276,
                    "ignicao": true
                },
                {
                    "id": 539,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:56:15.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5677041,
                    "longitude": -51.4803631,
                    "ignicao": true
                },
                {
                    "id": 540,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:56:35.000+00:00",
                    "velocidade": 11,
                    "latitude": -25.5673286,
                    "longitude": -51.4809026,
                    "ignicao": true
                },
                {
                    "id": 541,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:56:55.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5674815,
                    "longitude": -51.4813431,
                    "ignicao": true
                },
                {
                    "id": 542,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:57:11.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.567806,
                    "longitude": -51.481615,
                    "ignicao": true
                },
                {
                    "id": 543,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:58:15.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.5690755,
                    "longitude": -51.4807655,
                    "ignicao": true
                },
                {
                    "id": 544,
                    "placa": "TESTE001",
                    "data": "2018-12-19T19:59:46.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5682093,
                    "longitude": -51.4781716,
                    "ignicao": true
                },
                {
                    "id": 545,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:00:09.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5688666,
                    "longitude": -51.4777745,
                    "ignicao": true
                },
                {
                    "id": 546,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:02:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.568771,
                    "longitude": -51.4774725,
                    "ignicao": true
                },
                {
                    "id": 547,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:04:09.000+00:00",
                    "velocidade": 3,
                    "latitude": -25.5684218,
                    "longitude": -51.4774045,
                    "ignicao": true
                },
                {
                    "id": 548,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:04:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5682671,
                    "longitude": -51.4774591,
                    "ignicao": false
                },
                {
                    "id": 549,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:04:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5682671,
                    "longitude": -51.4774591,
                    "ignicao": false
                },
                {
                    "id": 550,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:08:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.5681875,
                    "longitude": -51.4775118,
                    "ignicao": true
                },
                {
                    "id": 551,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:09:29.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5680158,
                    "longitude": -51.4776418,
                    "ignicao": true
                },
                {
                    "id": 552,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:11:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.568819,
                    "longitude": -51.477249,
                    "ignicao": true
                },
                {
                    "id": 553,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:12:09.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.5690671,
                    "longitude": -51.477199,
                    "ignicao": true
                },
                {
                    "id": 554,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:12:24.000+00:00",
                    "velocidade": 17,
                    "latitude": -25.569246,
                    "longitude": -51.477618,
                    "ignicao": true
                },
                {
                    "id": 555,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:12:40.000+00:00",
                    "velocidade": 18,
                    "latitude": -25.5688848,
                    "longitude": -51.4782088,
                    "ignicao": true
                },
                {
                    "id": 556,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:12:56.000+00:00",
                    "velocidade": 22,
                    "latitude": -25.5684648,
                    "longitude": -51.478843,
                    "ignicao": true
                },
                {
                    "id": 557,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:14:56.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.5708575,
                    "longitude": -51.4854088,
                    "ignicao": true
                },
                {
                    "id": 558,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:16:56.000+00:00",
                    "velocidade": 16,
                    "latitude": -25.5654013,
                    "longitude": -51.4879433,
                    "ignicao": true
                },
                {
                    "id": 559,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:18:56.000+00:00",
                    "velocidade": 12,
                    "latitude": -25.5594146,
                    "longitude": -51.4906531,
                    "ignicao": true
                },
                {
                    "id": 560,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:20:56.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.5462158,
                    "longitude": -51.496667,
                    "ignicao": true
                },
                {
                    "id": 561,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:22:56.000+00:00",
                    "velocidade": 34,
                    "latitude": -25.5351665,
                    "longitude": -51.5026826,
                    "ignicao": true
                },
                {
                    "id": 562,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:24:52.000+00:00",
                    "velocidade": 64,
                    "latitude": -25.523934,
                    "longitude": -51.5069115,
                    "ignicao": true
                },
                {
                    "id": 563,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:25:30.000+00:00",
                    "velocidade": 70,
                    "latitude": -25.5214336,
                    "longitude": -51.5134983,
                    "ignicao": true
                },
                {
                    "id": 564,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:27:30.000+00:00",
                    "velocidade": 57,
                    "latitude": -25.5215488,
                    "longitude": -51.5350178,
                    "ignicao": true
                },
                {
                    "id": 565,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:27:46.000+00:00",
                    "velocidade": 42,
                    "latitude": -25.5210291,
                    "longitude": -51.537283,
                    "ignicao": true
                },
                {
                    "id": 566,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:29:46.000+00:00",
                    "velocidade": 51,
                    "latitude": -25.5236483,
                    "longitude": -51.5466843,
                    "ignicao": true
                },
                {
                    "id": 567,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:30:15.000+00:00",
                    "velocidade": 16,
                    "latitude": -25.5241778,
                    "longitude": -51.549314,
                    "ignicao": true
                },
                {
                    "id": 568,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:30:31.000+00:00",
                    "velocidade": 21,
                    "latitude": -25.5237325,
                    "longitude": -51.5494668,
                    "ignicao": true
                },
                {
                    "id": 569,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:32:31.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.5065355,
                    "longitude": -51.5453803,
                    "ignicao": true
                },
                {
                    "id": 570,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:33:12.000+00:00",
                    "velocidade": 54,
                    "latitude": -25.5007991,
                    "longitude": -51.544544,
                    "ignicao": true
                },
                {
                    "id": 571,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:33:46.000+00:00",
                    "velocidade": 59,
                    "latitude": -25.497848,
                    "longitude": -51.5414701,
                    "ignicao": true
                },
                {
                    "id": 572,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:34:07.000+00:00",
                    "velocidade": 57,
                    "latitude": -25.495011,
                    "longitude": -51.541156,
                    "ignicao": true
                },
                {
                    "id": 573,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:34:34.000+00:00",
                    "velocidade": 74,
                    "latitude": -25.4909625,
                    "longitude": -51.539238,
                    "ignicao": true
                },
                {
                    "id": 574,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:35:46.000+00:00",
                    "velocidade": 79,
                    "latitude": -25.4779533,
                    "longitude": -51.5368275,
                    "ignicao": true
                },
                {
                    "id": 575,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:37:45.000+00:00",
                    "velocidade": 19,
                    "latitude": -25.471808,
                    "longitude": -51.5305275,
                    "ignicao": true
                },
                {
                    "id": 576,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:39:45.000+00:00",
                    "velocidade": 39,
                    "latitude": -25.4635478,
                    "longitude": -51.5257021,
                    "ignicao": true
                },
                {
                    "id": 577,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:40:14.000+00:00",
                    "velocidade": 45,
                    "latitude": -25.4616466,
                    "longitude": -51.5230706,
                    "ignicao": true
                },
                {
                    "id": 578,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:40:35.000+00:00",
                    "velocidade": 40,
                    "latitude": -25.4608371,
                    "longitude": -51.5206018,
                    "ignicao": true
                },
                {
                    "id": 579,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:40:51.000+00:00",
                    "velocidade": 49,
                    "latitude": -25.4591651,
                    "longitude": -51.5203591,
                    "ignicao": true
                },
                {
                    "id": 580,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:42:06.000+00:00",
                    "velocidade": 45,
                    "latitude": -25.4502998,
                    "longitude": -51.5201858,
                    "ignicao": true
                },
                {
                    "id": 581,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:42:22.000+00:00",
                    "velocidade": 49,
                    "latitude": -25.4494175,
                    "longitude": -51.518563,
                    "ignicao": true
                },
                {
                    "id": 582,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:44:22.000+00:00",
                    "velocidade": 26,
                    "latitude": -25.4423721,
                    "longitude": -51.5016496,
                    "ignicao": true
                },
                {
                    "id": 583,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:45:33.000+00:00",
                    "velocidade": 47,
                    "latitude": -25.438104,
                    "longitude": -51.4981803,
                    "ignicao": true
                },
                {
                    "id": 584,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:46:43.000+00:00",
                    "velocidade": 23,
                    "latitude": -25.4330495,
                    "longitude": -51.4971315,
                    "ignicao": true
                },
                {
                    "id": 585,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:47:16.000+00:00",
                    "velocidade": 19,
                    "latitude": -25.4314768,
                    "longitude": -51.4974663,
                    "ignicao": true
                },
                {
                    "id": 586,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:47:37.000+00:00",
                    "velocidade": 21,
                    "latitude": -25.4306556,
                    "longitude": -51.4969476,
                    "ignicao": true
                },
                {
                    "id": 587,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:49:37.000+00:00",
                    "velocidade": 51,
                    "latitude": -25.4257098,
                    "longitude": -51.4912678,
                    "ignicao": true
                },
                {
                    "id": 588,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:49:53.000+00:00",
                    "velocidade": 54,
                    "latitude": -25.42363,
                    "longitude": -51.4914015,
                    "ignicao": true
                },
                {
                    "id": 589,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:51:53.000+00:00",
                    "velocidade": 18,
                    "latitude": -25.4134416,
                    "longitude": -51.4923073,
                    "ignicao": true
                },
                {
                    "id": 590,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:52:10.000+00:00",
                    "velocidade": 15,
                    "latitude": -25.4125715,
                    "longitude": -51.492685,
                    "ignicao": true
                },
                {
                    "id": 591,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:52:33.000+00:00",
                    "velocidade": 24,
                    "latitude": -25.4121048,
                    "longitude": -51.4935445,
                    "ignicao": true
                },
                {
                    "id": 592,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:54:33.000+00:00",
                    "velocidade": 76,
                    "latitude": -25.4073083,
                    "longitude": -51.5077296,
                    "ignicao": true
                },
                {
                    "id": 593,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:54:59.000+00:00",
                    "velocidade": 42,
                    "latitude": -25.4059965,
                    "longitude": -51.5118628,
                    "ignicao": true
                },
                {
                    "id": 594,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:56:58.000+00:00",
                    "velocidade": 26,
                    "latitude": -25.397089,
                    "longitude": -51.5185726,
                    "ignicao": true
                },
                {
                    "id": 595,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:58:47.000+00:00",
                    "velocidade": 27,
                    "latitude": -25.3908815,
                    "longitude": -51.5207598,
                    "ignicao": true
                },
                {
                    "id": 596,
                    "placa": "TESTE001",
                    "data": "2018-12-19T20:59:03.000+00:00",
                    "velocidade": 24,
                    "latitude": -25.3903111,
                    "longitude": -51.519937,
                    "ignicao": true
                },
                {
                    "id": 597,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:01:03.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.3811813,
                    "longitude": -51.5095586,
                    "ignicao": true
                },
                {
                    "id": 598,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:03:03.000+00:00",
                    "velocidade": 47,
                    "latitude": -25.3684638,
                    "longitude": -51.4949105,
                    "ignicao": true
                },
                {
                    "id": 599,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:03:39.000+00:00",
                    "velocidade": 66,
                    "latitude": -25.3659731,
                    "longitude": -51.4902335,
                    "ignicao": true
                },
                {
                    "id": 600,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:05:39.000+00:00",
                    "velocidade": 30,
                    "latitude": -25.3652931,
                    "longitude": -51.475806,
                    "ignicao": true
                },
                {
                    "id": 601,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:05:58.000+00:00",
                    "velocidade": 25,
                    "latitude": -25.3663401,
                    "longitude": -51.4749451,
                    "ignicao": true
                },
                {
                    "id": 602,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:06:16.000+00:00",
                    "velocidade": 9,
                    "latitude": -25.3669775,
                    "longitude": -51.4746535,
                    "ignicao": true
                },
                {
                    "id": 603,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:06:32.000+00:00",
                    "velocidade": 12,
                    "latitude": -25.3667651,
                    "longitude": -51.4743976,
                    "ignicao": true
                },
                {
                    "id": 604,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:07:53.000+00:00",
                    "velocidade": 14,
                    "latitude": -25.3642733,
                    "longitude": -51.4701345,
                    "ignicao": true
                },
                {
                    "id": 605,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:08:09.000+00:00",
                    "velocidade": 10,
                    "latitude": -25.3643933,
                    "longitude": -51.4697416,
                    "ignicao": true
                },
                {
                    "id": 606,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:08:25.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.3646823,
                    "longitude": -51.4696378,
                    "ignicao": true
                },
                {
                    "id": 607,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:10:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643763,
                    "longitude": -51.469803,
                    "ignicao": true
                },
                {
                    "id": 608,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:12:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643501,
                    "longitude": -51.4698293,
                    "ignicao": false
                },
                {
                    "id": 609,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:12:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643501,
                    "longitude": -51.4698293,
                    "ignicao": false
                },
                {
                    "id": 610,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:12:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364352,
                    "longitude": -51.4698333,
                    "ignicao": true
                },
                {
                    "id": 611,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:12:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643538,
                    "longitude": -51.4698435,
                    "ignicao": false
                },
                {
                    "id": 612,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:23:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643538,
                    "longitude": -51.4698435,
                    "ignicao": true
                },
                {
                    "id": 613,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:25:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643983,
                    "longitude": -51.4697983,
                    "ignicao": true
                },
                {
                    "id": 614,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:27:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643746,
                    "longitude": -51.4697961,
                    "ignicao": true
                },
                {
                    "id": 615,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:28:28.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.3644393,
                    "longitude": -51.4697041,
                    "ignicao": true
                },
                {
                    "id": 616,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:28:28.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.3644393,
                    "longitude": -51.4697041,
                    "ignicao": true
                },
                {
                    "id": 617,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:28:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643351,
                    "longitude": -51.4695476,
                    "ignicao": false
                },
                {
                    "id": 618,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:28:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643351,
                    "longitude": -51.4695476,
                    "ignicao": false
                },
                {
                    "id": 619,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:33:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643393,
                    "longitude": -51.4695258,
                    "ignicao": true
                },
                {
                    "id": 620,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:35:18.000+00:00",
                    "velocidade": 7,
                    "latitude": -25.364576,
                    "longitude": -51.4697618,
                    "ignicao": true
                },
                {
                    "id": 621,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:37:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643956,
                    "longitude": -51.4702323,
                    "ignicao": true
                },
                {
                    "id": 622,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:39:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644391,
                    "longitude": -51.4702356,
                    "ignicao": true
                },
                {
                    "id": 623,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:39:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644391,
                    "longitude": -51.4702356,
                    "ignicao": true
                },
                {
                    "id": 624,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:41:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3643915,
                    "longitude": -51.4702948,
                    "ignicao": true
                },
                {
                    "id": 625,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:43:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3644098,
                    "longitude": -51.4702246,
                    "ignicao": true
                },
                {
                    "id": 626,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:44:13.000+00:00",
                    "velocidade": 8,
                    "latitude": -25.3642701,
                    "longitude": -51.4699195,
                    "ignicao": true
                },
                {
                    "id": 627,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:44:33.000+00:00",
                    "velocidade": 11,
                    "latitude": -25.3640935,
                    "longitude": -51.469876,
                    "ignicao": true
                },
                {
                    "id": 628,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:45:07.000+00:00",
                    "velocidade": 10,
                    "latitude": -25.3632928,
                    "longitude": -51.4685485,
                    "ignicao": true
                },
                {
                    "id": 629,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:45:46.000+00:00",
                    "velocidade": 12,
                    "latitude": -25.3614396,
                    "longitude": -51.4696351,
                    "ignicao": true
                },
                {
                    "id": 630,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:47:45.000+00:00",
                    "velocidade": 51,
                    "latitude": -25.3532888,
                    "longitude": -51.4594553,
                    "ignicao": true
                },
                {
                    "id": 631,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:49:45.000+00:00",
                    "velocidade": 53,
                    "latitude": -25.3455533,
                    "longitude": -51.4448763,
                    "ignicao": true
                },
                {
                    "id": 632,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:51:45.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.3418918,
                    "longitude": -51.4336158,
                    "ignicao": true
                },
                {
                    "id": 633,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:52:34.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.3391918,
                    "longitude": -51.4273201,
                    "ignicao": true
                },
                {
                    "id": 634,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:53:38.000+00:00",
                    "velocidade": 92,
                    "latitude": -25.340884,
                    "longitude": -51.4138278,
                    "ignicao": true
                },
                {
                    "id": 635,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:54:27.000+00:00",
                    "velocidade": 37,
                    "latitude": -25.3459946,
                    "longitude": -51.4064468,
                    "ignicao": true
                },
                {
                    "id": 636,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:56:26.000+00:00",
                    "velocidade": 46,
                    "latitude": -25.3444783,
                    "longitude": -51.3974593,
                    "ignicao": true
                },
                {
                    "id": 637,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:56:56.000+00:00",
                    "velocidade": 65,
                    "latitude": -25.3448098,
                    "longitude": -51.3927356,
                    "ignicao": true
                },
                {
                    "id": 638,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:57:11.000+00:00",
                    "velocidade": 68,
                    "latitude": -25.3473308,
                    "longitude": -51.3916881,
                    "ignicao": true
                },
                {
                    "id": 639,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:57:27.000+00:00",
                    "velocidade": 67,
                    "latitude": -25.3485396,
                    "longitude": -51.389496,
                    "ignicao": true
                },
                {
                    "id": 640,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:57:59.000+00:00",
                    "velocidade": 72,
                    "latitude": -25.3461893,
                    "longitude": -51.3835295,
                    "ignicao": true
                },
                {
                    "id": 641,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:59:01.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.3533353,
                    "longitude": -51.3716765,
                    "ignicao": true
                },
                {
                    "id": 642,
                    "placa": "TESTE001",
                    "data": "2018-12-19T21:59:29.000+00:00",
                    "velocidade": 66,
                    "latitude": -25.3526138,
                    "longitude": -51.365758,
                    "ignicao": true
                },
                {
                    "id": 643,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:01:08.000+00:00",
                    "velocidade": 37,
                    "latitude": -25.362858,
                    "longitude": -51.3500418,
                    "ignicao": true
                },
                {
                    "id": 644,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:01:44.000+00:00",
                    "velocidade": 43,
                    "latitude": -25.3656345,
                    "longitude": -51.3485936,
                    "ignicao": true
                },
                {
                    "id": 645,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:03:43.000+00:00",
                    "velocidade": 65,
                    "latitude": -25.3692635,
                    "longitude": -51.3284235,
                    "ignicao": true
                },
                {
                    "id": 646,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:04:19.000+00:00",
                    "velocidade": 67,
                    "latitude": -25.3714426,
                    "longitude": -51.3210396,
                    "ignicao": true
                },
                {
                    "id": 647,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:04:39.000+00:00",
                    "velocidade": 61,
                    "latitude": -25.3736481,
                    "longitude": -51.318864,
                    "ignicao": true
                },
                {
                    "id": 648,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:06:38.000+00:00",
                    "velocidade": 24,
                    "latitude": -25.373283,
                    "longitude": -51.306635,
                    "ignicao": true
                },
                {
                    "id": 649,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:08:38.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.3768435,
                    "longitude": -51.292927,
                    "ignicao": true
                },
                {
                    "id": 650,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:09:06.000+00:00",
                    "velocidade": 56,
                    "latitude": -25.3773486,
                    "longitude": -51.2883885,
                    "ignicao": true
                },
                {
                    "id": 651,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:09:48.000+00:00",
                    "velocidade": 15,
                    "latitude": -25.374888,
                    "longitude": -51.2845353,
                    "ignicao": true
                },
                {
                    "id": 652,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:10:35.000+00:00",
                    "velocidade": 65,
                    "latitude": -25.372158,
                    "longitude": -51.280393,
                    "ignicao": true
                },
                {
                    "id": 653,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:12:34.000+00:00",
                    "velocidade": 45,
                    "latitude": -25.371649,
                    "longitude": -51.2629503,
                    "ignicao": true
                },
                {
                    "id": 654,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:14:34.000+00:00",
                    "velocidade": 90,
                    "latitude": -25.3622395,
                    "longitude": -51.2434303,
                    "ignicao": true
                },
                {
                    "id": 655,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:15:22.000+00:00",
                    "velocidade": 77,
                    "latitude": -25.3558103,
                    "longitude": -51.2342735,
                    "ignicao": true
                },
                {
                    "id": 656,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:15:49.000+00:00",
                    "velocidade": 77,
                    "latitude": -25.353976,
                    "longitude": -51.2292156,
                    "ignicao": true
                },
                {
                    "id": 657,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:17:25.000+00:00",
                    "velocidade": 76,
                    "latitude": -25.3391521,
                    "longitude": -51.2158103,
                    "ignicao": true
                },
                {
                    "id": 658,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:19:24.000+00:00",
                    "velocidade": 50,
                    "latitude": -25.3195011,
                    "longitude": -51.215249,
                    "ignicao": true
                },
                {
                    "id": 659,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:21:02.000+00:00",
                    "velocidade": 51,
                    "latitude": -25.307553,
                    "longitude": -51.211176,
                    "ignicao": true
                },
                {
                    "id": 660,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:21:17.000+00:00",
                    "velocidade": 51,
                    "latitude": -25.3082376,
                    "longitude": -51.2093833,
                    "ignicao": true
                },
                {
                    "id": 661,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:21:36.000+00:00",
                    "velocidade": 49,
                    "latitude": -25.3104613,
                    "longitude": -51.2084025,
                    "ignicao": true
                },
                {
                    "id": 662,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:23:26.000+00:00",
                    "velocidade": 41,
                    "latitude": -25.3172453,
                    "longitude": -51.195167,
                    "ignicao": true
                },
                {
                    "id": 663,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:24:01.000+00:00",
                    "velocidade": 47,
                    "latitude": -25.3210066,
                    "longitude": -51.1956468,
                    "ignicao": true
                },
                {
                    "id": 664,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:24:24.000+00:00",
                    "velocidade": 46,
                    "latitude": -25.3233861,
                    "longitude": -51.1967796,
                    "ignicao": true
                },
                {
                    "id": 665,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:24:40.000+00:00",
                    "velocidade": 41,
                    "latitude": -25.3241583,
                    "longitude": -51.19523,
                    "ignicao": true
                },
                {
                    "id": 666,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:25:04.000+00:00",
                    "velocidade": 47,
                    "latitude": -25.3237728,
                    "longitude": -51.1923928,
                    "ignicao": true
                },
                {
                    "id": 667,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:25:45.000+00:00",
                    "velocidade": 55,
                    "latitude": -25.3190396,
                    "longitude": -51.1893748,
                    "ignicao": true
                },
                {
                    "id": 668,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:26:29.000+00:00",
                    "velocidade": 57,
                    "latitude": -25.3129465,
                    "longitude": -51.1868915,
                    "ignicao": true
                },
                {
                    "id": 669,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:26:48.000+00:00",
                    "velocidade": 73,
                    "latitude": -25.3121745,
                    "longitude": -51.1835681,
                    "ignicao": true
                },
                {
                    "id": 670,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:28:00.000+00:00",
                    "velocidade": 53,
                    "latitude": -25.3121695,
                    "longitude": -51.171808,
                    "ignicao": true
                },
                {
                    "id": 671,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:29:59.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.3035255,
                    "longitude": -51.1547966,
                    "ignicao": true
                },
                {
                    "id": 672,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:31:34.000+00:00",
                    "velocidade": 103,
                    "latitude": -25.2933896,
                    "longitude": -51.1328171,
                    "ignicao": true
                },
                {
                    "id": 673,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:31:40.000+00:00",
                    "velocidade": 97,
                    "latitude": -25.2926886,
                    "longitude": -51.1313378,
                    "ignicao": true
                },
                {
                    "id": 674,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:31:56.000+00:00",
                    "velocidade": 65,
                    "latitude": -25.2923021,
                    "longitude": -51.1281198,
                    "ignicao": true
                },
                {
                    "id": 675,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:33:16.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.2988008,
                    "longitude": -51.1173293,
                    "ignicao": true
                },
                {
                    "id": 676,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:33:38.000+00:00",
                    "velocidade": 61,
                    "latitude": -25.3014023,
                    "longitude": -51.1149835,
                    "ignicao": true
                },
                {
                    "id": 677,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:34:02.000+00:00",
                    "velocidade": 65,
                    "latitude": -25.3028493,
                    "longitude": -51.1112908,
                    "ignicao": true
                },
                {
                    "id": 678,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:34:43.000+00:00",
                    "velocidade": 81,
                    "latitude": -25.3095135,
                    "longitude": -51.1077545,
                    "ignicao": true
                },
                {
                    "id": 679,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:35:57.000+00:00",
                    "velocidade": 38,
                    "latitude": -25.3112503,
                    "longitude": -51.0924668,
                    "ignicao": true
                },
                {
                    "id": 680,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:36:27.000+00:00",
                    "velocidade": 67,
                    "latitude": -25.3141801,
                    "longitude": -51.0901473,
                    "ignicao": true
                },
                {
                    "id": 681,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:36:43.000+00:00",
                    "velocidade": 85,
                    "latitude": -25.3138023,
                    "longitude": -51.0869225,
                    "ignicao": true
                },
                {
                    "id": 682,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:38:43.000+00:00",
                    "velocidade": 84,
                    "latitude": -25.3154041,
                    "longitude": -51.0601046,
                    "ignicao": true
                },
                {
                    "id": 683,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:40:02.000+00:00",
                    "velocidade": 56,
                    "latitude": -25.3153321,
                    "longitude": -51.0425611,
                    "ignicao": true
                },
                {
                    "id": 684,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:41:00.000+00:00",
                    "velocidade": 82,
                    "latitude": -25.3195911,
                    "longitude": -51.0359685,
                    "ignicao": true
                },
                {
                    "id": 685,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:42:59.000+00:00",
                    "velocidade": 73,
                    "latitude": -25.3196513,
                    "longitude": -51.0111761,
                    "ignicao": true
                },
                {
                    "id": 686,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:44:05.000+00:00",
                    "velocidade": 76,
                    "latitude": -25.3172255,
                    "longitude": -50.9967218,
                    "ignicao": true
                },
                {
                    "id": 687,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:45:28.000+00:00",
                    "velocidade": 75,
                    "latitude": -25.3230626,
                    "longitude": -50.9826043,
                    "ignicao": true
                },
                {
                    "id": 688,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:46:42.000+00:00",
                    "velocidade": 72,
                    "latitude": -25.3195571,
                    "longitude": -50.9699745,
                    "ignicao": true
                },
                {
                    "id": 689,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:47:54.000+00:00",
                    "velocidade": 85,
                    "latitude": -25.3278921,
                    "longitude": -50.9566085,
                    "ignicao": true
                },
                {
                    "id": 690,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:49:51.000+00:00",
                    "velocidade": 56,
                    "latitude": -25.3422278,
                    "longitude": -50.9403736,
                    "ignicao": true
                },
                {
                    "id": 691,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:51:50.000+00:00",
                    "velocidade": 62,
                    "latitude": -25.3572725,
                    "longitude": -50.9194861,
                    "ignicao": true
                },
                {
                    "id": 692,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:53:50.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.36851,
                    "longitude": -50.9050158,
                    "ignicao": true
                },
                {
                    "id": 693,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:55:23.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.3749448,
                    "longitude": -50.885299,
                    "ignicao": true
                },
                {
                    "id": 694,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:56:26.000+00:00",
                    "velocidade": 76,
                    "latitude": -25.375948,
                    "longitude": -50.8709821,
                    "ignicao": true
                },
                {
                    "id": 695,
                    "placa": "TESTE001",
                    "data": "2018-12-19T22:58:25.000+00:00",
                    "velocidade": 77,
                    "latitude": -25.3845243,
                    "longitude": -50.8470976,
                    "ignicao": true
                },
                {
                    "id": 696,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:00:25.000+00:00",
                    "velocidade": 96,
                    "latitude": -25.3886818,
                    "longitude": -50.8258683,
                    "ignicao": true
                },
                {
                    "id": 697,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:02:25.000+00:00",
                    "velocidade": 62,
                    "latitude": -25.394992,
                    "longitude": -50.8025636,
                    "ignicao": true
                },
                {
                    "id": 698,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:02:48.000+00:00",
                    "velocidade": 72,
                    "latitude": -25.3978773,
                    "longitude": -50.8001765,
                    "ignicao": true
                },
                {
                    "id": 699,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:03:25.000+00:00",
                    "velocidade": 50,
                    "latitude": -25.4037623,
                    "longitude": -50.797116,
                    "ignicao": true
                },
                {
                    "id": 700,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:05:25.000+00:00",
                    "velocidade": 26,
                    "latitude": -25.407361,
                    "longitude": -50.7880858,
                    "ignicao": true
                },
                {
                    "id": 701,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:05:47.000+00:00",
                    "velocidade": 38,
                    "latitude": -25.4080408,
                    "longitude": -50.7863701,
                    "ignicao": true
                },
                {
                    "id": 702,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:06:39.000+00:00",
                    "velocidade": 79,
                    "latitude": -25.409142,
                    "longitude": -50.7761891,
                    "ignicao": true
                },
                {
                    "id": 703,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:08:38.000+00:00",
                    "velocidade": 94,
                    "latitude": -25.4221726,
                    "longitude": -50.7542478,
                    "ignicao": true
                },
                {
                    "id": 704,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:10:38.000+00:00",
                    "velocidade": 74,
                    "latitude": -25.4311558,
                    "longitude": -50.7314701,
                    "ignicao": true
                },
                {
                    "id": 705,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:11:52.000+00:00",
                    "velocidade": 41,
                    "latitude": -25.4354048,
                    "longitude": -50.7169816,
                    "ignicao": true
                },
                {
                    "id": 706,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:12:33.000+00:00",
                    "velocidade": 50,
                    "latitude": -25.4387571,
                    "longitude": -50.71375,
                    "ignicao": true
                },
                {
                    "id": 707,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:13:26.000+00:00",
                    "velocidade": 77,
                    "latitude": -25.442179,
                    "longitude": -50.7051163,
                    "ignicao": true
                },
                {
                    "id": 708,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:13:52.000+00:00",
                    "velocidade": 42,
                    "latitude": -25.4412118,
                    "longitude": -50.70122,
                    "ignicao": true
                },
                {
                    "id": 709,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:14:44.000+00:00",
                    "velocidade": 68,
                    "latitude": -25.441629,
                    "longitude": -50.6948926,
                    "ignicao": true
                },
                {
                    "id": 710,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:15:00.000+00:00",
                    "velocidade": 70,
                    "latitude": -25.441123,
                    "longitude": -50.6917925,
                    "ignicao": true
                },
                {
                    "id": 711,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:17:00.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.4461491,
                    "longitude": -50.6741113,
                    "ignicao": true
                },
                {
                    "id": 712,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:19:00.000+00:00",
                    "velocidade": 59,
                    "latitude": -25.453707,
                    "longitude": -50.6488901,
                    "ignicao": true
                },
                {
                    "id": 713,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:19:34.000+00:00",
                    "velocidade": 63,
                    "latitude": -25.4517093,
                    "longitude": -50.643527,
                    "ignicao": true
                },
                {
                    "id": 714,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:20:07.000+00:00",
                    "velocidade": 52,
                    "latitude": -25.448825,
                    "longitude": -50.6394605,
                    "ignicao": true
                },
                {
                    "id": 715,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:20:33.000+00:00",
                    "velocidade": 73,
                    "latitude": -25.4506985,
                    "longitude": -50.6352278,
                    "ignicao": true
                },
                {
                    "id": 716,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:21:27.000+00:00",
                    "velocidade": 75,
                    "latitude": -25.455759,
                    "longitude": -50.6262911,
                    "ignicao": true
                },
                {
                    "id": 717,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:22:30.000+00:00",
                    "velocidade": 53,
                    "latitude": -25.4545456,
                    "longitude": -50.6136618,
                    "ignicao": true
                },
                {
                    "id": 718,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:24:29.000+00:00",
                    "velocidade": 54,
                    "latitude": -25.4622401,
                    "longitude": -50.5970076,
                    "ignicao": true
                },
                {
                    "id": 719,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:26:29.000+00:00",
                    "velocidade": 97,
                    "latitude": -25.464977,
                    "longitude": -50.5782475,
                    "ignicao": true
                },
                {
                    "id": 720,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:28:29.000+00:00",
                    "velocidade": 79,
                    "latitude": -25.4633711,
                    "longitude": -50.5505016,
                    "ignicao": true
                },
                {
                    "id": 721,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:30:29.000+00:00",
                    "velocidade": 96,
                    "latitude": -25.4662686,
                    "longitude": -50.5252843,
                    "ignicao": true
                },
                {
                    "id": 722,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:32:29.000+00:00",
                    "velocidade": 55,
                    "latitude": -25.467942,
                    "longitude": -50.507927,
                    "ignicao": true
                },
                {
                    "id": 723,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:34:29.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.4728575,
                    "longitude": -50.4909196,
                    "ignicao": true
                },
                {
                    "id": 724,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:34:48.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.4723428,
                    "longitude": -50.4873475,
                    "ignicao": true
                },
                {
                    "id": 725,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:35:48.000+00:00",
                    "velocidade": 71,
                    "latitude": -25.4684748,
                    "longitude": -50.4756933,
                    "ignicao": true
                },
                {
                    "id": 726,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:36:30.000+00:00",
                    "velocidade": 77,
                    "latitude": -25.4709543,
                    "longitude": -50.467435,
                    "ignicao": true
                },
                {
                    "id": 727,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:36:53.000+00:00",
                    "velocidade": 75,
                    "latitude": -25.4685801,
                    "longitude": -50.4634173,
                    "ignicao": true
                },
                {
                    "id": 728,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:38:26.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.4526611,
                    "longitude": -50.4535721,
                    "ignicao": true
                },
                {
                    "id": 729,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:38:41.000+00:00",
                    "velocidade": 78,
                    "latitude": -25.4526966,
                    "longitude": -50.4502893,
                    "ignicao": true
                },
                {
                    "id": 730,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:40:41.000+00:00",
                    "velocidade": 66,
                    "latitude": -25.4605755,
                    "longitude": -50.4268973,
                    "ignicao": true
                },
                {
                    "id": 731,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:42:41.000+00:00",
                    "velocidade": 31,
                    "latitude": -25.467254,
                    "longitude": -50.4103456,
                    "ignicao": true
                },
                {
                    "id": 732,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:43:58.000+00:00",
                    "velocidade": 87,
                    "latitude": -25.4687405,
                    "longitude": -50.3963471,
                    "ignicao": true
                },
                {
                    "id": 733,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:45:55.000+00:00",
                    "velocidade": 35,
                    "latitude": -25.4639028,
                    "longitude": -50.3770671,
                    "ignicao": true
                },
                {
                    "id": 734,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:47:37.000+00:00",
                    "velocidade": 48,
                    "latitude": -25.466545,
                    "longitude": -50.367639,
                    "ignicao": true
                },
                {
                    "id": 735,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:49:36.000+00:00",
                    "velocidade": 73,
                    "latitude": -25.465173,
                    "longitude": -50.3490163,
                    "ignicao": true
                },
                {
                    "id": 736,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:50:43.000+00:00",
                    "velocidade": 73,
                    "latitude": -25.4560696,
                    "longitude": -50.3387458,
                    "ignicao": true
                },
                {
                    "id": 737,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:50:58.000+00:00",
                    "velocidade": 60,
                    "latitude": -25.457591,
                    "longitude": -50.3365031,
                    "ignicao": true
                },
                {
                    "id": 738,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:51:15.000+00:00",
                    "velocidade": 66,
                    "latitude": -25.4591821,
                    "longitude": -50.3343346,
                    "ignicao": true
                },
                {
                    "id": 739,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:51:31.000+00:00",
                    "velocidade": 73,
                    "latitude": -25.4605941,
                    "longitude": -50.3316728,
                    "ignicao": true
                },
                {
                    "id": 740,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:52:29.000+00:00",
                    "velocidade": 105,
                    "latitude": -25.4703696,
                    "longitude": -50.3227148,
                    "ignicao": true
                },
                {
                    "id": 741,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:52:47.000+00:00",
                    "velocidade": 97,
                    "latitude": -25.4734846,
                    "longitude": -50.3188621,
                    "ignicao": true
                },
                {
                    "id": 742,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:53:03.000+00:00",
                    "velocidade": 69,
                    "latitude": -25.4752036,
                    "longitude": -50.3157521,
                    "ignicao": true
                },
                {
                    "id": 743,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:53:40.000+00:00",
                    "velocidade": 79,
                    "latitude": -25.4730835,
                    "longitude": -50.3092933,
                    "ignicao": true
                },
                {
                    "id": 744,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:54:45.000+00:00",
                    "velocidade": 71,
                    "latitude": -25.4675533,
                    "longitude": -50.2950588,
                    "ignicao": true
                },
                {
                    "id": 745,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:56:31.000+00:00",
                    "velocidade": 55,
                    "latitude": -25.4709635,
                    "longitude": -50.2771763,
                    "ignicao": true
                },
                {
                    "id": 746,
                    "placa": "TESTE001",
                    "data": "2018-12-19T23:58:30.000+00:00",
                    "velocidade": 48,
                    "latitude": -25.4649276,
                    "longitude": -50.2664348,
                    "ignicao": true
                },
                {
                    "id": 747,
                    "placa": "CAR0012",
                    "data": "2018-12-13T00:06:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648861,
                    "longitude": -51.4699225,
                    "ignicao": false
                },
                {
                    "id": 748,
                    "placa": "CAR0012",
                    "data": "2018-12-13T00:36:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648996,
                    "longitude": -51.4699201,
                    "ignicao": false
                },
                {
                    "id": 749,
                    "placa": "CAR0012",
                    "data": "2018-12-13T01:06:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648771,
                    "longitude": -51.4698895,
                    "ignicao": false
                },
                {
                    "id": 750,
                    "placa": "CAR0012",
                    "data": "2018-12-13T01:36:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649048,
                    "longitude": -51.4698733,
                    "ignicao": false
                },
                {
                    "id": 751,
                    "placa": "CAR0012",
                    "data": "2018-12-13T02:06:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649083,
                    "longitude": -51.4699545,
                    "ignicao": false
                },
                {
                    "id": 752,
                    "placa": "CAR0012",
                    "data": "2018-12-13T02:36:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648861,
                    "longitude": -51.4699038,
                    "ignicao": false
                },
                {
                    "id": 753,
                    "placa": "CAR0012",
                    "data": "2018-12-13T03:06:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648535,
                    "longitude": -51.4699203,
                    "ignicao": false
                },
                {
                    "id": 754,
                    "placa": "CAR0012",
                    "data": "2018-12-13T03:36:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648973,
                    "longitude": -51.4699281,
                    "ignicao": false
                },
                {
                    "id": 755,
                    "placa": "CAR0012",
                    "data": "2018-12-13T04:06:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648775,
                    "longitude": -51.469911,
                    "ignicao": false
                },
                {
                    "id": 756,
                    "placa": "CAR0012",
                    "data": "2018-12-13T04:36:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649093,
                    "longitude": -51.469942,
                    "ignicao": false
                },
                {
                    "id": 757,
                    "placa": "CAR0012",
                    "data": "2018-12-13T05:06:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649156,
                    "longitude": -51.4699666,
                    "ignicao": false
                },
                {
                    "id": 758,
                    "placa": "CAR0012",
                    "data": "2018-12-13T05:36:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648976,
                    "longitude": -51.4699606,
                    "ignicao": false
                },
                {
                    "id": 759,
                    "placa": "CAR0012",
                    "data": "2018-12-13T06:06:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649788,
                    "longitude": -51.4699236,
                    "ignicao": false
                },
                {
                    "id": 760,
                    "placa": "CAR0012",
                    "data": "2018-12-13T06:36:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648965,
                    "longitude": -51.4699591,
                    "ignicao": false
                },
                {
                    "id": 761,
                    "placa": "CAR0012",
                    "data": "2018-12-13T07:07:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648581,
                    "longitude": -51.4699126,
                    "ignicao": false
                },
                {
                    "id": 762,
                    "placa": "CAR0012",
                    "data": "2018-12-13T07:37:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649603,
                    "longitude": -51.4699108,
                    "ignicao": false
                },
                {
                    "id": 763,
                    "placa": "CAR0012",
                    "data": "2018-12-13T08:07:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.36492,
                    "longitude": -51.46988,
                    "ignicao": false
                },
                {
                    "id": 764,
                    "placa": "CAR0012",
                    "data": "2018-12-13T08:37:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649313,
                    "longitude": -51.4699468,
                    "ignicao": false
                },
                {
                    "id": 765,
                    "placa": "CAR0012",
                    "data": "2018-12-13T09:07:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649275,
                    "longitude": -51.4699435,
                    "ignicao": false
                },
                {
                    "id": 766,
                    "placa": "CAR0012",
                    "data": "2018-12-13T09:37:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648921,
                    "longitude": -51.4699078,
                    "ignicao": false
                },
                {
                    "id": 767,
                    "placa": "CAR0012",
                    "data": "2018-12-13T10:07:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649106,
                    "longitude": -51.469928,
                    "ignicao": false
                },
                {
                    "id": 768,
                    "placa": "CAR0012",
                    "data": "2018-12-13T10:37:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649186,
                    "longitude": -51.469958,
                    "ignicao": false
                },
                {
                    "id": 769,
                    "placa": "CAR0012",
                    "data": "2018-12-13T11:07:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364874,
                    "longitude": -51.4699256,
                    "ignicao": false
                },
                {
                    "id": 770,
                    "placa": "CAR0012",
                    "data": "2018-12-13T11:37:27.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648606,
                    "longitude": -51.4699675,
                    "ignicao": false
                },
                {
                    "id": 771,
                    "placa": "CAR0012",
                    "data": "2018-12-13T12:07:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364945,
                    "longitude": -51.4699991,
                    "ignicao": false
                },
                {
                    "id": 772,
                    "placa": "CAR0012",
                    "data": "2018-12-13T12:37:33.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649006,
                    "longitude": -51.4699531,
                    "ignicao": false
                },
                {
                    "id": 773,
                    "placa": "CAR0012",
                    "data": "2018-12-13T13:07:36.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648865,
                    "longitude": -51.4699123,
                    "ignicao": false
                },
                {
                    "id": 774,
                    "placa": "CAR0012",
                    "data": "2018-12-13T13:37:39.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648901,
                    "longitude": -51.4699135,
                    "ignicao": false
                },
                {
                    "id": 775,
                    "placa": "CAR0012",
                    "data": "2018-12-13T14:07:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649675,
                    "longitude": -51.4699678,
                    "ignicao": false
                },
                {
                    "id": 776,
                    "placa": "CAR0012",
                    "data": "2018-12-13T14:37:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364934,
                    "longitude": -51.4699683,
                    "ignicao": false
                },
                {
                    "id": 777,
                    "placa": "CAR0012",
                    "data": "2018-12-13T15:07:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364874,
                    "longitude": -51.4699355,
                    "ignicao": false
                },
                {
                    "id": 778,
                    "placa": "CAR0012",
                    "data": "2018-12-13T15:37:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649676,
                    "longitude": -51.4699716,
                    "ignicao": false
                },
                {
                    "id": 779,
                    "placa": "CAR0012",
                    "data": "2018-12-13T16:07:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648706,
                    "longitude": -51.4699243,
                    "ignicao": false
                },
                {
                    "id": 780,
                    "placa": "CAR0012",
                    "data": "2018-12-13T16:37:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648628,
                    "longitude": -51.4700285,
                    "ignicao": false
                },
                {
                    "id": 781,
                    "placa": "CAR0012",
                    "data": "2018-12-13T17:08:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649066,
                    "longitude": -51.469924,
                    "ignicao": false
                },
                {
                    "id": 782,
                    "placa": "CAR0012",
                    "data": "2018-12-13T17:38:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364933,
                    "longitude": -51.4699498,
                    "ignicao": false
                },
                {
                    "id": 783,
                    "placa": "CAR0012",
                    "data": "2018-12-13T18:08:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649296,
                    "longitude": -51.4699256,
                    "ignicao": false
                },
                {
                    "id": 784,
                    "placa": "CAR0012",
                    "data": "2018-12-13T18:38:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649261,
                    "longitude": -51.4699331,
                    "ignicao": false
                },
                {
                    "id": 785,
                    "placa": "CAR0012",
                    "data": "2018-12-13T19:08:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649083,
                    "longitude": -51.469937,
                    "ignicao": false
                },
                {
                    "id": 786,
                    "placa": "CAR0012",
                    "data": "2018-12-13T19:38:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648966,
                    "longitude": -51.4699813,
                    "ignicao": false
                },
                {
                    "id": 787,
                    "placa": "CAR0012",
                    "data": "2018-12-13T20:08:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649361,
                    "longitude": -51.4698716,
                    "ignicao": false
                },
                {
                    "id": 788,
                    "placa": "CAR0012",
                    "data": "2018-12-13T20:38:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648731,
                    "longitude": -51.4699578,
                    "ignicao": false
                },
                {
                    "id": 789,
                    "placa": "CAR0012",
                    "data": "2018-12-13T21:08:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648646,
                    "longitude": -51.4699211,
                    "ignicao": false
                },
                {
                    "id": 790,
                    "placa": "CAR0012",
                    "data": "2018-12-13T21:38:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648618,
                    "longitude": -51.4699006,
                    "ignicao": false
                },
                {
                    "id": 791,
                    "placa": "CAR0012",
                    "data": "2018-12-13T22:08:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648846,
                    "longitude": -51.4699216,
                    "ignicao": false
                },
                {
                    "id": 792,
                    "placa": "CAR0012",
                    "data": "2018-12-13T22:38:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364945,
                    "longitude": -51.4699343,
                    "ignicao": false
                },
                {
                    "id": 793,
                    "placa": "CAR0012",
                    "data": "2018-12-13T23:08:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648933,
                    "longitude": -51.4699181,
                    "ignicao": false
                },
                {
                    "id": 794,
                    "placa": "CAR0012",
                    "data": "2018-12-13T23:38:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648806,
                    "longitude": -51.4699303,
                    "ignicao": false
                },
                {
                    "id": 795,
                    "placa": "CAR0012",
                    "data": "2018-12-14T00:08:44.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648836,
                    "longitude": -51.4699323,
                    "ignicao": false
                },
                {
                    "id": 796,
                    "placa": "CAR0012",
                    "data": "2018-12-14T00:38:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648863,
                    "longitude": -51.4699251,
                    "ignicao": false
                },
                {
                    "id": 797,
                    "placa": "CAR0012",
                    "data": "2018-12-14T01:08:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648528,
                    "longitude": -51.4699088,
                    "ignicao": false
                },
                {
                    "id": 798,
                    "placa": "CAR0012",
                    "data": "2018-12-14T01:38:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649138,
                    "longitude": -51.4699313,
                    "ignicao": false
                },
                {
                    "id": 799,
                    "placa": "CAR0012",
                    "data": "2018-12-14T02:08:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648993,
                    "longitude": -51.469933,
                    "ignicao": false
                },
                {
                    "id": 800,
                    "placa": "CAR0012",
                    "data": "2018-12-14T02:38:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648641,
                    "longitude": -51.4698688,
                    "ignicao": false
                },
                {
                    "id": 801,
                    "placa": "CAR0012",
                    "data": "2018-12-14T03:09:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649343,
                    "longitude": -51.4699373,
                    "ignicao": false
                },
                {
                    "id": 802,
                    "placa": "CAR0012",
                    "data": "2018-12-14T03:39:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648891,
                    "longitude": -51.4698966,
                    "ignicao": false
                },
                {
                    "id": 803,
                    "placa": "CAR0012",
                    "data": "2018-12-14T04:09:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649325,
                    "longitude": -51.4699285,
                    "ignicao": false
                },
                {
                    "id": 804,
                    "placa": "CAR0012",
                    "data": "2018-12-14T04:39:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649,
                    "longitude": -51.4699075,
                    "ignicao": false
                },
                {
                    "id": 805,
                    "placa": "CAR0012",
                    "data": "2018-12-14T05:09:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649213,
                    "longitude": -51.4699276,
                    "ignicao": false
                },
                {
                    "id": 806,
                    "placa": "CAR0012",
                    "data": "2018-12-14T05:39:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649025,
                    "longitude": -51.4699506,
                    "ignicao": false
                },
                {
                    "id": 807,
                    "placa": "CAR0012",
                    "data": "2018-12-14T06:09:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649203,
                    "longitude": -51.4699058,
                    "ignicao": false
                },
                {
                    "id": 808,
                    "placa": "CAR0012",
                    "data": "2018-12-14T06:39:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648626,
                    "longitude": -51.4698996,
                    "ignicao": false
                },
                {
                    "id": 809,
                    "placa": "CAR0012",
                    "data": "2018-12-14T07:09:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648803,
                    "longitude": -51.469876,
                    "ignicao": false
                },
                {
                    "id": 810,
                    "placa": "CAR0012",
                    "data": "2018-12-14T07:39:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649125,
                    "longitude": -51.4699198,
                    "ignicao": false
                },
                {
                    "id": 811,
                    "placa": "CAR0012",
                    "data": "2018-12-14T08:09:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364918,
                    "longitude": -51.4699398,
                    "ignicao": false
                },
                {
                    "id": 812,
                    "placa": "CAR0012",
                    "data": "2018-12-14T08:39:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648658,
                    "longitude": -51.469995,
                    "ignicao": false
                },
                {
                    "id": 813,
                    "placa": "CAR0012",
                    "data": "2018-12-14T09:09:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648808,
                    "longitude": -51.4699478,
                    "ignicao": false
                },
                {
                    "id": 814,
                    "placa": "CAR0012",
                    "data": "2018-12-14T09:39:41.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648953,
                    "longitude": -51.469888,
                    "ignicao": false
                },
                {
                    "id": 815,
                    "placa": "CAR0012",
                    "data": "2018-12-14T10:09:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649106,
                    "longitude": -51.4699531,
                    "ignicao": false
                },
                {
                    "id": 816,
                    "placa": "CAR0012",
                    "data": "2018-12-14T10:39:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648886,
                    "longitude": -51.46991,
                    "ignicao": false
                },
                {
                    "id": 817,
                    "placa": "CAR0012",
                    "data": "2018-12-14T11:09:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648583,
                    "longitude": -51.4699768,
                    "ignicao": false
                },
                {
                    "id": 818,
                    "placa": "CAR0012",
                    "data": "2018-12-14T11:39:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648736,
                    "longitude": -51.4699736,
                    "ignicao": false
                },
                {
                    "id": 819,
                    "placa": "CAR0012",
                    "data": "2018-12-14T12:09:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648908,
                    "longitude": -51.4698985,
                    "ignicao": false
                },
                {
                    "id": 820,
                    "placa": "CAR0012",
                    "data": "2018-12-14T12:39:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649115,
                    "longitude": -51.4699571,
                    "ignicao": false
                },
                {
                    "id": 821,
                    "placa": "CAR0012",
                    "data": "2018-12-14T13:10:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648943,
                    "longitude": -51.4698888,
                    "ignicao": false
                },
                {
                    "id": 822,
                    "placa": "CAR0012",
                    "data": "2018-12-14T13:40:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648446,
                    "longitude": -51.4699575,
                    "ignicao": false
                },
                {
                    "id": 823,
                    "placa": "CAR0012",
                    "data": "2018-12-14T14:10:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649028,
                    "longitude": -51.46994,
                    "ignicao": false
                },
                {
                    "id": 824,
                    "placa": "CAR0012",
                    "data": "2018-12-14T14:40:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364928,
                    "longitude": -51.4700176,
                    "ignicao": false
                },
                {
                    "id": 825,
                    "placa": "CAR0012",
                    "data": "2018-12-14T15:10:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648618,
                    "longitude": -51.4699388,
                    "ignicao": false
                },
                {
                    "id": 826,
                    "placa": "CAR0012",
                    "data": "2018-12-14T15:40:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648881,
                    "longitude": -51.4700676,
                    "ignicao": false
                },
                {
                    "id": 827,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:10:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364868,
                    "longitude": -51.4699241,
                    "ignicao": false
                },
                {
                    "id": 828,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:40:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649655,
                    "longitude": -51.4699741,
                    "ignicao": false
                },
                {
                    "id": 829,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:43:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648951,
                    "longitude": -51.469969,
                    "ignicao": true
                },
                {
                    "id": 830,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:45:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649545,
                    "longitude": -51.4699006,
                    "ignicao": true
                },
                {
                    "id": 831,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:47:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364975,
                    "longitude": -51.469917,
                    "ignicao": true
                },
                {
                    "id": 832,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:49:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649688,
                    "longitude": -51.4699336,
                    "ignicao": true
                },
                {
                    "id": 833,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:51:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649633,
                    "longitude": -51.4699423,
                    "ignicao": true
                },
                {
                    "id": 834,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:53:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649808,
                    "longitude": -51.4699488,
                    "ignicao": true
                },
                {
                    "id": 835,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:55:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649505,
                    "longitude": -51.4699538,
                    "ignicao": true
                },
                {
                    "id": 836,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:57:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649326,
                    "longitude": -51.4699533,
                    "ignicao": true
                },
                {
                    "id": 837,
                    "placa": "CAR0012",
                    "data": "2018-12-14T16:59:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649436,
                    "longitude": -51.4699513,
                    "ignicao": true
                },
                {
                    "id": 838,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:01:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649651,
                    "longitude": -51.4699645,
                    "ignicao": true
                },
                {
                    "id": 839,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:03:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649556,
                    "longitude": -51.469934,
                    "ignicao": true
                },
                {
                    "id": 840,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:05:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649646,
                    "longitude": -51.469926,
                    "ignicao": true
                },
                {
                    "id": 841,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:07:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649593,
                    "longitude": -51.4699153,
                    "ignicao": true
                },
                {
                    "id": 842,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:08:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649606,
                    "longitude": -51.4699311,
                    "ignicao": false
                },
                {
                    "id": 843,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:08:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649606,
                    "longitude": -51.4699311,
                    "ignicao": false
                },
                {
                    "id": 844,
                    "placa": "CAR0012",
                    "data": "2018-12-14T17:40:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649753,
                    "longitude": -51.4699666,
                    "ignicao": false
                },
                {
                    "id": 845,
                    "placa": "CAR0012",
                    "data": "2018-12-14T18:10:30.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649238,
                    "longitude": -51.4699085,
                    "ignicao": false
                },
                {
                    "id": 846,
                    "placa": "CAR0012",
                    "data": "2018-12-14T18:40:33.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364919,
                    "longitude": -51.4699563,
                    "ignicao": false
                },
                {
                    "id": 847,
                    "placa": "CAR0012",
                    "data": "2018-12-14T19:10:36.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649073,
                    "longitude": -51.4699208,
                    "ignicao": false
                },
                {
                    "id": 848,
                    "placa": "CAR0012",
                    "data": "2018-12-14T19:40:39.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364906,
                    "longitude": -51.4699141,
                    "ignicao": false
                },
                {
                    "id": 849,
                    "placa": "CAR0012",
                    "data": "2018-12-14T20:10:42.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364866,
                    "longitude": -51.4699125,
                    "ignicao": false
                },
                {
                    "id": 850,
                    "placa": "CAR0012",
                    "data": "2018-12-14T20:40:45.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648846,
                    "longitude": -51.4699175,
                    "ignicao": false
                },
                {
                    "id": 851,
                    "placa": "CAR0012",
                    "data": "2018-12-14T21:10:48.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648981,
                    "longitude": -51.469964,
                    "ignicao": false
                },
                {
                    "id": 852,
                    "placa": "CAR0012",
                    "data": "2018-12-14T21:40:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648968,
                    "longitude": -51.4699383,
                    "ignicao": false
                },
                {
                    "id": 853,
                    "placa": "CAR0012",
                    "data": "2018-12-14T22:10:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364897,
                    "longitude": -51.4699185,
                    "ignicao": false
                },
                {
                    "id": 854,
                    "placa": "CAR0012",
                    "data": "2018-12-14T22:40:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649108,
                    "longitude": -51.4699011,
                    "ignicao": false
                },
                {
                    "id": 855,
                    "placa": "CAR0012",
                    "data": "2018-12-14T23:11:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648665,
                    "longitude": -51.4699095,
                    "ignicao": false
                },
                {
                    "id": 856,
                    "placa": "CAR0012",
                    "data": "2018-12-14T23:41:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364885,
                    "longitude": -51.4699086,
                    "ignicao": false
                },
                {
                    "id": 857,
                    "placa": "CAR0012",
                    "data": "2018-12-15T00:11:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648901,
                    "longitude": -51.4699373,
                    "ignicao": false
                },
                {
                    "id": 858,
                    "placa": "CAR0012",
                    "data": "2018-12-15T00:41:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364944,
                    "longitude": -51.4699368,
                    "ignicao": false
                },
                {
                    "id": 859,
                    "placa": "CAR0012",
                    "data": "2018-12-15T01:11:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364898,
                    "longitude": -51.4699131,
                    "ignicao": false
                },
                {
                    "id": 860,
                    "placa": "CAR0012",
                    "data": "2018-12-15T01:41:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364933,
                    "longitude": -51.4699123,
                    "ignicao": false
                },
                {
                    "id": 861,
                    "placa": "CAR0012",
                    "data": "2018-12-15T02:11:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648945,
                    "longitude": -51.4699275,
                    "ignicao": false
                },
                {
                    "id": 862,
                    "placa": "CAR0012",
                    "data": "2018-12-15T02:41:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649153,
                    "longitude": -51.4699221,
                    "ignicao": false
                },
                {
                    "id": 863,
                    "placa": "CAR0012",
                    "data": "2018-12-15T03:11:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648998,
                    "longitude": -51.4699078,
                    "ignicao": false
                },
                {
                    "id": 864,
                    "placa": "CAR0012",
                    "data": "2018-12-15T03:41:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649035,
                    "longitude": -51.4698823,
                    "ignicao": false
                },
                {
                    "id": 865,
                    "placa": "CAR0012",
                    "data": "2018-12-15T04:11:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649348,
                    "longitude": -51.469921,
                    "ignicao": false
                },
                {
                    "id": 866,
                    "placa": "CAR0012",
                    "data": "2018-12-15T04:41:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649355,
                    "longitude": -51.4698623,
                    "ignicao": false
                },
                {
                    "id": 867,
                    "placa": "CAR0012",
                    "data": "2018-12-15T05:11:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648905,
                    "longitude": -51.4699476,
                    "ignicao": false
                },
                {
                    "id": 868,
                    "placa": "CAR0012",
                    "data": "2018-12-15T05:41:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649128,
                    "longitude": -51.4699245,
                    "ignicao": false
                },
                {
                    "id": 869,
                    "placa": "CAR0012",
                    "data": "2018-12-15T06:11:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649083,
                    "longitude": -51.4699488,
                    "ignicao": false
                },
                {
                    "id": 870,
                    "placa": "CAR0012",
                    "data": "2018-12-15T06:41:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648816,
                    "longitude": -51.4699216,
                    "ignicao": false
                },
                {
                    "id": 871,
                    "placa": "CAR0012",
                    "data": "2018-12-15T07:11:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648985,
                    "longitude": -51.4699156,
                    "ignicao": false
                },
                {
                    "id": 872,
                    "placa": "CAR0012",
                    "data": "2018-12-15T07:41:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649075,
                    "longitude": -51.4699086,
                    "ignicao": false
                },
                {
                    "id": 873,
                    "placa": "CAR0012",
                    "data": "2018-12-15T08:11:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649218,
                    "longitude": -51.4699068,
                    "ignicao": false
                },
                {
                    "id": 874,
                    "placa": "CAR0012",
                    "data": "2018-12-15T08:41:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649541,
                    "longitude": -51.4699133,
                    "ignicao": false
                },
                {
                    "id": 875,
                    "placa": "CAR0012",
                    "data": "2018-12-15T09:11:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648486,
                    "longitude": -51.4699466,
                    "ignicao": false
                },
                {
                    "id": 876,
                    "placa": "CAR0012",
                    "data": "2018-12-15T09:42:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648893,
                    "longitude": -51.4699045,
                    "ignicao": false
                },
                {
                    "id": 877,
                    "placa": "CAR0012",
                    "data": "2018-12-15T10:12:03.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648903,
                    "longitude": -51.4699436,
                    "ignicao": false
                },
                {
                    "id": 878,
                    "placa": "CAR0012",
                    "data": "2018-12-15T10:42:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364951,
                    "longitude": -51.4699268,
                    "ignicao": false
                },
                {
                    "id": 879,
                    "placa": "CAR0012",
                    "data": "2018-12-15T11:12:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648386,
                    "longitude": -51.4699788,
                    "ignicao": false
                },
                {
                    "id": 880,
                    "placa": "CAR0012",
                    "data": "2018-12-15T11:42:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648811,
                    "longitude": -51.469924,
                    "ignicao": false
                },
                {
                    "id": 881,
                    "placa": "CAR0012",
                    "data": "2018-12-15T12:12:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649161,
                    "longitude": -51.469917,
                    "ignicao": false
                },
                {
                    "id": 882,
                    "placa": "CAR0012",
                    "data": "2018-12-15T12:42:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649031,
                    "longitude": -51.4699683,
                    "ignicao": false
                },
                {
                    "id": 883,
                    "placa": "CAR0012",
                    "data": "2018-12-15T13:12:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649048,
                    "longitude": -51.4699056,
                    "ignicao": false
                },
                {
                    "id": 884,
                    "placa": "CAR0012",
                    "data": "2018-12-15T13:42:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648631,
                    "longitude": -51.4699781,
                    "ignicao": false
                },
                {
                    "id": 885,
                    "placa": "CAR0012",
                    "data": "2018-12-15T14:12:27.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648923,
                    "longitude": -51.4699318,
                    "ignicao": false
                },
                {
                    "id": 886,
                    "placa": "CAR0012",
                    "data": "2018-12-15T14:42:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649015,
                    "longitude": -51.4698981,
                    "ignicao": false
                },
                {
                    "id": 887,
                    "placa": "CAR0012",
                    "data": "2018-12-15T15:12:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364821,
                    "longitude": -51.4699003,
                    "ignicao": false
                },
                {
                    "id": 888,
                    "placa": "CAR0012",
                    "data": "2018-12-15T15:42:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649036,
                    "longitude": -51.4699771,
                    "ignicao": false
                },
                {
                    "id": 889,
                    "placa": "CAR0012",
                    "data": "2018-12-15T16:12:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364872,
                    "longitude": -51.4699465,
                    "ignicao": false
                },
                {
                    "id": 890,
                    "placa": "CAR0012",
                    "data": "2018-12-15T16:42:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648946,
                    "longitude": -51.469987,
                    "ignicao": false
                },
                {
                    "id": 891,
                    "placa": "CAR0012",
                    "data": "2018-12-15T17:12:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649386,
                    "longitude": -51.4699375,
                    "ignicao": false
                },
                {
                    "id": 892,
                    "placa": "CAR0012",
                    "data": "2018-12-15T17:42:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364813,
                    "longitude": -51.4699568,
                    "ignicao": false
                },
                {
                    "id": 893,
                    "placa": "CAR0012",
                    "data": "2018-12-15T18:12:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648948,
                    "longitude": -51.4698913,
                    "ignicao": false
                },
                {
                    "id": 894,
                    "placa": "CAR0012",
                    "data": "2018-12-15T18:42:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648903,
                    "longitude": -51.469922,
                    "ignicao": false
                },
                {
                    "id": 895,
                    "placa": "CAR0012",
                    "data": "2018-12-15T19:12:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648885,
                    "longitude": -51.4699361,
                    "ignicao": false
                },
                {
                    "id": 896,
                    "placa": "CAR0012",
                    "data": "2018-12-15T19:43:01.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649293,
                    "longitude": -51.4699158,
                    "ignicao": false
                },
                {
                    "id": 897,
                    "placa": "CAR0012",
                    "data": "2018-12-15T20:13:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364879,
                    "longitude": -51.4699205,
                    "ignicao": false
                },
                {
                    "id": 898,
                    "placa": "CAR0012",
                    "data": "2018-12-15T20:43:06.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648801,
                    "longitude": -51.4699346,
                    "ignicao": false
                },
                {
                    "id": 899,
                    "placa": "CAR0012",
                    "data": "2018-12-15T21:13:09.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364877,
                    "longitude": -51.46988,
                    "ignicao": false
                },
                {
                    "id": 900,
                    "placa": "CAR0012",
                    "data": "2018-12-15T21:43:12.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649065,
                    "longitude": -51.4699506,
                    "ignicao": false
                },
                {
                    "id": 901,
                    "placa": "CAR0012",
                    "data": "2018-12-15T22:13:15.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648578,
                    "longitude": -51.4699076,
                    "ignicao": false
                },
                {
                    "id": 902,
                    "placa": "CAR0012",
                    "data": "2018-12-15T22:43:18.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364932,
                    "longitude": -51.4699598,
                    "ignicao": false
                },
                {
                    "id": 903,
                    "placa": "CAR0012",
                    "data": "2018-12-15T23:13:21.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649156,
                    "longitude": -51.4699346,
                    "ignicao": false
                },
                {
                    "id": 904,
                    "placa": "CAR0012",
                    "data": "2018-12-15T23:43:24.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648806,
                    "longitude": -51.4699061,
                    "ignicao": false
                },
                {
                    "id": 905,
                    "placa": "CAR0012",
                    "data": "2018-12-16T00:13:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649096,
                    "longitude": -51.4699166,
                    "ignicao": false
                },
                {
                    "id": 906,
                    "placa": "CAR0012",
                    "data": "2018-12-16T00:43:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648978,
                    "longitude": -51.4699185,
                    "ignicao": false
                },
                {
                    "id": 907,
                    "placa": "CAR0012",
                    "data": "2018-12-16T01:13:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649193,
                    "longitude": -51.4699151,
                    "ignicao": false
                },
                {
                    "id": 908,
                    "placa": "CAR0012",
                    "data": "2018-12-16T01:43:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648601,
                    "longitude": -51.4698755,
                    "ignicao": false
                },
                {
                    "id": 909,
                    "placa": "CAR0012",
                    "data": "2018-12-16T02:13:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648873,
                    "longitude": -51.4699206,
                    "ignicao": false
                },
                {
                    "id": 910,
                    "placa": "CAR0012",
                    "data": "2018-12-16T02:43:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649091,
                    "longitude": -51.469905,
                    "ignicao": false
                },
                {
                    "id": 911,
                    "placa": "CAR0012",
                    "data": "2018-12-16T03:13:46.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364876,
                    "longitude": -51.4699118,
                    "ignicao": false
                },
                {
                    "id": 912,
                    "placa": "CAR0012",
                    "data": "2018-12-16T03:43:49.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648756,
                    "longitude": -51.4698788,
                    "ignicao": false
                },
                {
                    "id": 913,
                    "placa": "CAR0012",
                    "data": "2018-12-16T04:13:52.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648998,
                    "longitude": -51.4698986,
                    "ignicao": false
                },
                {
                    "id": 914,
                    "placa": "CAR0012",
                    "data": "2018-12-16T04:43:55.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648603,
                    "longitude": -51.4699766,
                    "ignicao": false
                },
                {
                    "id": 915,
                    "placa": "CAR0012",
                    "data": "2018-12-16T05:13:58.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649248,
                    "longitude": -51.4699233,
                    "ignicao": false
                },
                {
                    "id": 916,
                    "placa": "CAR0012",
                    "data": "2018-12-16T05:44:00.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649386,
                    "longitude": -51.4699571,
                    "ignicao": false
                },
                {
                    "id": 917,
                    "placa": "CAR0012",
                    "data": "2018-12-16T06:14:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649,
                    "longitude": -51.4699351,
                    "ignicao": false
                },
                {
                    "id": 918,
                    "placa": "CAR0012",
                    "data": "2018-12-16T06:44:05.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648815,
                    "longitude": -51.4699146,
                    "ignicao": false
                },
                {
                    "id": 919,
                    "placa": "CAR0012",
                    "data": "2018-12-16T07:14:08.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649381,
                    "longitude": -51.4699348,
                    "ignicao": false
                },
                {
                    "id": 920,
                    "placa": "CAR0012",
                    "data": "2018-12-16T07:44:11.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648833,
                    "longitude": -51.4698931,
                    "ignicao": false
                },
                {
                    "id": 921,
                    "placa": "CAR0012",
                    "data": "2018-12-16T08:14:14.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649295,
                    "longitude": -51.4699223,
                    "ignicao": false
                },
                {
                    "id": 922,
                    "placa": "CAR0012",
                    "data": "2018-12-16T08:44:17.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649481,
                    "longitude": -51.4699381,
                    "ignicao": false
                },
                {
                    "id": 923,
                    "placa": "CAR0012",
                    "data": "2018-12-16T09:14:20.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649108,
                    "longitude": -51.469931,
                    "ignicao": false
                },
                {
                    "id": 924,
                    "placa": "CAR0012",
                    "data": "2018-12-16T09:44:23.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648698,
                    "longitude": -51.4699288,
                    "ignicao": false
                },
                {
                    "id": 925,
                    "placa": "CAR0012",
                    "data": "2018-12-16T10:14:26.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648906,
                    "longitude": -51.4699386,
                    "ignicao": false
                },
                {
                    "id": 926,
                    "placa": "CAR0012",
                    "data": "2018-12-16T10:44:29.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649165,
                    "longitude": -51.4699436,
                    "ignicao": false
                },
                {
                    "id": 927,
                    "placa": "CAR0012",
                    "data": "2018-12-16T11:14:32.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364883,
                    "longitude": -51.4699326,
                    "ignicao": false
                },
                {
                    "id": 928,
                    "placa": "CAR0012",
                    "data": "2018-12-16T11:44:35.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648881,
                    "longitude": -51.469932,
                    "ignicao": false
                },
                {
                    "id": 929,
                    "placa": "CAR0012",
                    "data": "2018-12-16T12:14:38.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649695,
                    "longitude": -51.4699075,
                    "ignicao": false
                },
                {
                    "id": 930,
                    "placa": "CAR0012",
                    "data": "2018-12-16T12:44:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649213,
                    "longitude": -51.469908,
                    "ignicao": false
                },
                {
                    "id": 931,
                    "placa": "CAR0012",
                    "data": "2018-12-16T13:14:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.364891,
                    "longitude": -51.4699595,
                    "ignicao": false
                },
                {
                    "id": 932,
                    "placa": "CAR0012",
                    "data": "2018-12-16T13:44:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648895,
                    "longitude": -51.4699606,
                    "ignicao": false
                },
                {
                    "id": 933,
                    "placa": "CAR0012",
                    "data": "2018-12-16T14:14:50.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649125,
                    "longitude": -51.469899,
                    "ignicao": false
                },
                {
                    "id": 934,
                    "placa": "CAR0012",
                    "data": "2018-12-16T14:44:53.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649056,
                    "longitude": -51.469894,
                    "ignicao": false
                },
                {
                    "id": 935,
                    "placa": "CAR0012",
                    "data": "2018-12-16T15:14:56.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648403,
                    "longitude": -51.4699513,
                    "ignicao": false
                },
                {
                    "id": 936,
                    "placa": "CAR0012",
                    "data": "2018-12-16T15:44:59.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649438,
                    "longitude": -51.4700025,
                    "ignicao": false
                },
                {
                    "id": 937,
                    "placa": "CAR0012",
                    "data": "2018-12-16T16:15:02.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649058,
                    "longitude": -51.4699766,
                    "ignicao": false
                },
                {
                    "id": 938,
                    "placa": "CAR0012",
                    "data": "2018-12-16T16:45:04.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649553,
                    "longitude": -51.469964,
                    "ignicao": false
                },
                {
                    "id": 939,
                    "placa": "CAR0012",
                    "data": "2018-12-16T17:15:07.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649568,
                    "longitude": -51.4699475,
                    "ignicao": false
                },
                {
                    "id": 940,
                    "placa": "CAR0012",
                    "data": "2018-12-16T17:45:10.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648606,
                    "longitude": -51.4699291,
                    "ignicao": false
                },
                {
                    "id": 941,
                    "placa": "CAR0012",
                    "data": "2018-12-16T18:15:13.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648891,
                    "longitude": -51.469886,
                    "ignicao": false
                },
                {
                    "id": 942,
                    "placa": "CAR0012",
                    "data": "2018-12-16T18:45:16.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648788,
                    "longitude": -51.4699146,
                    "ignicao": false
                },
                {
                    "id": 943,
                    "placa": "CAR0012",
                    "data": "2018-12-16T19:15:19.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649128,
                    "longitude": -51.4699336,
                    "ignicao": false
                },
                {
                    "id": 944,
                    "placa": "CAR0012",
                    "data": "2018-12-16T19:45:22.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648955,
                    "longitude": -51.469926,
                    "ignicao": false
                },
                {
                    "id": 945,
                    "placa": "CAR0012",
                    "data": "2018-12-16T20:15:25.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648921,
                    "longitude": -51.469895,
                    "ignicao": false
                },
                {
                    "id": 946,
                    "placa": "CAR0012",
                    "data": "2018-12-16T20:45:28.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648691,
                    "longitude": -51.469889,
                    "ignicao": false
                },
                {
                    "id": 947,
                    "placa": "CAR0012",
                    "data": "2018-12-16T21:15:31.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648745,
                    "longitude": -51.4698858,
                    "ignicao": false
                },
                {
                    "id": 948,
                    "placa": "CAR0012",
                    "data": "2018-12-16T21:45:34.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648978,
                    "longitude": -51.4698793,
                    "ignicao": false
                },
                {
                    "id": 949,
                    "placa": "CAR0012",
                    "data": "2018-12-16T22:15:37.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649161,
                    "longitude": -51.4698841,
                    "ignicao": false
                },
                {
                    "id": 950,
                    "placa": "CAR0012",
                    "data": "2018-12-16T22:45:40.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649268,
                    "longitude": -51.4699263,
                    "ignicao": false
                },
                {
                    "id": 951,
                    "placa": "CAR0012",
                    "data": "2018-12-16T23:15:43.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3648945,
                    "longitude": -51.4699053,
                    "ignicao": false
                },
                {
                    "id": 952,
                    "placa": "CAR0012",
                    "data": "2018-12-16T23:45:47.000+00:00",
                    "velocidade": 0,
                    "latitude": -25.3649281,
                    "longitude": -51.469924,
                    "ignicao": false
                }
            ]
        };
    }
}