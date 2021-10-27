import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    locations: [
        {
            "id": 2842,
            "name": "Drinking Fountain",
            "longitude": 139.7405793,
            "latitude": 35.6627672,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 3106,
            "name": "Drinking Fountain",
            "longitude": 139.7372538,
            "latitude": 35.6707914,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 3677,
            "name": "Drinking Fountain",
            "longitude": 139.7499741,
            "latitude": 35.6575711,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 47303,
            "name": "Daimon Station (Oedo Line Platform)",
            "longitude": 139.7542597,
            "latitude": 35.6568587,
            "address": "桂園, Shibakoen 2 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan",
            "comment": null,
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/24",
            "copyright": null,
            "photos": [
                {
                    "id": 24,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_47303_5fa149652194c.jpg"
                }
            ]
        },
        {
            "id": 47312,
            "name": "Akabanebashi Station",
            "longitude": 139.744179,
            "latitude": 35.6549594,
            "address": "Akabanebashi Eki, Mita 1 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan",
            "comment": null,
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/32",
            "copyright": null,
            "photos": [
                {
                    "id": 32,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_47312_5fa14966d98d0.jpg"
                }
            ]
        },
        {
            "id": 47313,
            "name": "Azabu Juban Station",
            "longitude": 139.7367191,
            "latitude": 35.6563703,
            "address": "ＳＳＳ４５, Azabujuban 2 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan",
            "comment": null,
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/33",
            "copyright": null,
            "photos": [
                {
                    "id": 33,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_47313_5fa14967186df.jpg"
                }
            ]
        },
        {
            "id": 196765,
            "name": "Minato City Office 港区役所",
            "longitude": 139.75148,
            "latitude": 35.6580231,
            "address": "〒105-8511 東京都港区芝公園１丁目５−25",
            "comment": "How to Refill:Located on first floor１階にあります。\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": null,
            "copyright": null,
            "photos": []
        },
        {
            "id": 197424,
            "name": "Shibaura Park",
            "longitude": 139.7518714,
            "latitude": 35.6456548,
            "address": "Aiiku Hospital, Kaigan 2 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan",
            "comment": null,
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/595",
            "copyright": null,
            "photos": [
                {
                    "id": 595,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197424_5fa14bc728ffd.jpg"
                }
            ]
        },
        {
            "id": 197673,
            "name": "Onarimon Station",
            "longitude": 139.7510498,
            "latitude": 35.6598607,
            "address": "御成門駅, Shibakoen 1 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan",
            "comment": "Refill spot located on the Mita line platform near compartment 4\n\n",
            "category_id": 2,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/809",
            "copyright": null,
            "photos": [
                {
                    "id": 809,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197673_5fa14d7fafadb.jpg"
                }
            ]
        },
        {
            "id": 197774,
            "name": "Shiba Park",
            "longitude": 139.7496011,
            "latitude": 35.6551782,
            "address": "Lost & Found Office, Shibakoen 2 Chome, Tokyo, Chiyoda, Tokyo Prefecture, Japan",
            "comment": "water refill spot inside the park\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/914",
            "copyright": null,
            "photos": [
                {
                    "id": 914,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197774_5fa149cb6993e.jpg"
                }
            ]
        },
        {
            "id": 198170,
            "name": "Mita Station (Toei Asakusa Line Platform)",
            "longitude": 139.7474268,
            "latitude": 35.6470122,
            "address": "〒108-0014 東京都港区芝5-18-8",
            "comment": "In the middle of the platform, by where car 6 stops on both northbound and southbound trains.\n\n",
            "category_id": 2,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/1420",
            "copyright": null,
            "photos": [
                {
                    "id": 1420,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198170_5fa14bec8d216.jpg"
                }
            ]
        },
        {
            "id": 198360,
            "name": "RISE & WIN Brewing Co. KAMIKATZ TAPROOM",
            "longitude": 139.743472,
            "latitude": 35.6579681,
            "address": "〒106-0044 東京都港区東麻布1丁目4-2THE WORKERS & CO",
            "comment": "Hours: Mon - Sat 12:00 - 14:00 and 18:00 - 22:00How to Refill:Please ask a member of staff.Type of Water: Tap water / Chilled tap water Location:5 minute walk from Akabanebashi station and Kamiyacho station\n\n",
            "category_id": 4,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/1699",
            "copyright": null,
            "photos": [
                {
                    "id": 1699,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198360_5fa14a0de3e31.jpg"
                }
            ]
        },
        {
            "id": 198694,
            "name": "Shiba daimon 2-chome children’s park",
            "longitude": 139.7538504,
            "latitude": 35.6533867,
            "address": "2 Chome-13 Shibadaimon, Minato City, Tokyo 105-0012, Japan",
            "comment": "Refill spot located inside of park\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2199",
            "copyright": null,
            "photos": [
                {
                    "id": 2199,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198694_5fa14a49b8822.jpg"
                }
            ]
        },
        {
            "id": 198840,
            "name": "Shiba shinboricho children’s park",
            "longitude": 139.7529917,
            "latitude": 35.6515807,
            "address": "2-chōme-12-3 Shiba, Minato City, Tōkyō-to 105-0014, Japan",
            "comment": "Refill Spot in the park\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2410",
            "copyright": null,
            "photos": [
                {
                    "id": 2410,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198840_5fa14a5c6f9c8.jpg"
                }
            ]
        },
        {
            "id": 198902,
            "name": "Shiba Park Nobi-nobi square",
            "longitude": 139.7453823,
            "latitude": 35.6568311,
            "address": "日本、〒105-0011 東京都港区芝公園４丁目５ Unnamed Road、４丁目-５ 芝公園 18号地児童遊園時計塔",
            "comment": "Refill spot located inside the park (right in the center).\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2491",
            "copyright": null,
            "photos": [
                {
                    "id": 2491,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198902_5fa14d8be4d11.jpg"
                }
            ]
        },
        {
            "id": 198919,
            "name": "Kamezuka Park",
            "longitude": 139.7406802,
            "latitude": 35.6432128,
            "address": "日本、〒108-0073 東京都港区三田４丁目１６−２０ 亀塚公園",
            "comment": "Refill spot located inside the park, near the pergola at the back.\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2515",
            "copyright": null,
            "photos": [
                {
                    "id": 2515,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198919_5fa14d90dfb5f.jpg"
                }
            ]
        },
        {
            "id": 198920,
            "name": "Mitadai Park",
            "longitude": 139.7391746,
            "latitude": 35.6425083,
            "address": "日本、〒108-0073 東京都港区三田４丁目１７−２８",
            "comment": "Refill spot located inside the park, near the toilet.\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2516",
            "copyright": null,
            "photos": [
                {
                    "id": 2516,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198920_5fa14d91234f1.jpg"
                }
            ]
        },
        {
            "id": 198925,
            "name": "Iikura Park",
            "longitude": 139.7438507,
            "latitude": 35.6555798,
            "address": "日本、〒106-0044 東京都港区東麻布１丁目２１−８",
            "comment": "Refill spot located inside the park. Next to the swing\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2523",
            "copyright": null,
            "photos": [
                {
                    "id": 2523,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_198925_5fa14d9275d0a.jpg"
                }
            ]
        },
        {
            "id": 199051,
            "name": "Minami Azabu Icchome Children's playground",
            "longitude": 139.737109,
            "latitude": 35.6509831,
            "address": "日本、〒106-0047 東京都港区南麻布１丁目７−２８",
            "comment": "Near the main entrance\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2707",
            "copyright": null,
            "photos": [
                {
                    "id": 2707,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199051_5fa14c2b06c09.jpg"
                }
            ]
        },
        {
            "id": 199087,
            "name": "Shiba Park",
            "longitude": 139.7506058,
            "latitude": 35.6568079,
            "address": "日本、〒105-0011 東京都港区芝公園２丁目１",
            "comment": "Close to the main gate of Zojoji temple\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2748",
            "copyright": null,
            "photos": [
                {
                    "id": 2748,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199087_5fa14c35c6a0e.jpg"
                }
            ]
        },
        {
            "id": 199099,
            "name": "Higashiazabu children’s playground",
            "longitude": 139.7443272,
            "latitude": 35.6578454,
            "address": "Hiashiazabu Children's Playground, 1-chōme-2-1 Higashiazabu, Minato City, Tōkyō-to 106-0044, Japon",
            "comment": "Refill spot located inside the park.\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/2764",
            "copyright": null,
            "photos": [
                {
                    "id": 2764,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199099_5fa14a79b825c.jpg"
                }
            ]
        },
        {
            "id": 199473,
            "name": "Shiba Park",
            "longitude": 139.7462765,
            "latitude": 35.6578974,
            "address": "日本、〒105-0011 東京都港区芝公園",
            "comment": "Water fountain next to Momiji-dani near the clock tower.\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/3214",
            "copyright": null,
            "photos": [
                {
                    "id": 3214,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199473_5fa14c5088b52.jpg"
                }
            ]
        },
        {
            "id": 199474,
            "name": "Shiba Park",
            "longitude": 139.7509754,
            "latitude": 35.6588531,
            "address": "日本、〒105-0011 東京都港区芝公園",
            "comment": "Water fountain found inside the park\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/3215",
            "copyright": null,
            "photos": [
                {
                    "id": 3215,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199474_5fa14aa988695.jpg"
                }
            ]
        },
        {
            "id": 199475,
            "name": "Shiba Park",
            "longitude": 139.7505301,
            "latitude": 35.6577419,
            "address": "日本、〒105-0011 東京都港区芝公園",
            "comment": "Water Fountain located inside the park\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/3216",
            "copyright": null,
            "photos": [
                {
                    "id": 3216,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199475_5fa14aaa413cd.jpg"
                }
            ]
        },
        {
            "id": 199628,
            "name": "Ichozaka",
            "longitude": 139.7476592,
            "latitude": 35.6597161,
            "address": "3 Chome-4 Shibakoen, Minato City, Tokyo 105-0011, Japan",
            "comment": "Refill spot next to the toilet in Ichozaka\n\n",
            "category_id": 0,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/3434",
            "copyright": null,
            "photos": [
                {
                    "id": 3434,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199628_5fa14ac52bf08.jpg"
                }
            ]
        },
        {
            "id": 199837,
            "name": "Shibakoen station track 2",
            "longitude": 139.7498094,
            "latitude": 35.6539291,
            "address": "Shibakoen Sta., 4-chōme-8-14 Shibakōen, Minato City, Tōkyō-to 105-0011, Japan",
            "comment": "Refill spot located on platform 2 of the station\n\n",
            "category_id": 2,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/3744",
            "copyright": null,
            "photos": [
                {
                    "id": 3744,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_199837_5fa14af29b65f.jpg"
                }
            ]
        },
        {
            "id": 196743,
            "name": "タコリッコ Taco Rico 愛宕グリーンヒルズ店",
            "longitude": 139.7487909,
            "latitude": 35.6622084,
            "address": "港区愛宕2-5-1愛宕グリーンヒルズMORIタワー1F",
            "comment": "Hours: 11:00am-8:00pm\n\n",
            "category_id": 4,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/106",
            "copyright": null,
            "photos": [
                {
                    "id": 106,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_196743_5fa14ba03ddb7.jpg"
                }
            ]
        },
        {
            "id": 197505,
            "name": "Shin Torakoya",
            "longitude": 139.7511113,
            "latitude": 35.6661244,
            "address": "〒105-0003 東京都港区西新橋２丁目１８−７",
            "comment": "Hours:Weekdays 9:00-17:00How to Refill:Please ask a member of staff.Type of Water:Filtered water\n\n",
            "category_id": 4,
            "coordinate": null,
            "photo_url": "https://my-mizu-dev2-gen8n.ondigitalocean.app/api/photos/676",
            "copyright": null,
            "photos": [
                {
                    "id": 676,
                    "approved": true,
                    "url": "https://mymizu-static.s3-ap-northeast-1.amazonaws.com/taps/photos/tap_197505_5fa149b200125.jpg"
                }
            ]
        },
        {
            "id": 189,
            "name": "Drinking Fountain",
            "longitude": 139.7453357,
            "latitude": 35.6469113,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 215,
            "name": "Drinking Fountain",
            "longitude": 139.7494338,
            "latitude": 35.6605908,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 216,
            "name": "Drinking Fountain",
            "longitude": 139.7508315,
            "latitude": 35.6602254,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 217,
            "name": "Drinking Fountain",
            "longitude": 139.750559,
            "latitude": 35.6610484,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 247,
            "name": "Drinking Fountain",
            "longitude": 139.7501284,
            "latitude": 35.6470559,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 248,
            "name": "Drinking Fountain",
            "longitude": 139.7496955,
            "latitude": 35.6468642,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 249,
            "name": "Drinking Fountain",
            "longitude": 139.7537977,
            "latitude": 35.646966,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 659,
            "name": "Drinking Fountain",
            "longitude": 139.739206,
            "latitude": 35.6425318,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 922,
            "name": "Drinking Fountain",
            "longitude": 139.7488516,
            "latitude": 35.6553663,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        },
        {
            "id": 923,
            "name": "Drinking Fountain",
            "longitude": 139.746012,
            "latitude": 35.6561694,
            "address": null,
            "comment": "This refill location has been sourced from public data\n",
            "category_id": 3,
            "coordinate": null,
            "photo_url": null,
            "copyright": "Data © OpenStreetMap Contributors",
            "photos": []
        }
    ]
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        add: (state, action) => {
            state.locations.push(action.payload)
        }
    }
});

export default locationSlice.reducer