import axios from "axios"

const allCategory = {
    state: () => ({
      URI : 'https://wt.altech.uz',
      CategoryImages : [
          {
              path : "computer-hardware.png",
              text: 'Компьютерные комплектующиe',
              id: "621a0c85894f393a208e870b"
          },
          {
              path : 'wifi.png',
              text: 'Cетевое оборудование',
              id : '621c73fdb45c2a3d80e36ad8'
          },
          {
              path : 'printer.png',
              text: 'Периферийные устройства',
              id : '621e20f8da70558a4bd3838f'
          },
          {
              path : 'laptop(transformer).png',
              text: 'Ноутбуки',
              id : '621f9b57da70558a4bd39629'
          },
          {
              path : 'security-camera.png',
              text: 'Видеокамеры',
              id : '6242de34462a58fdc7cb3205'
          }
      ],
      SubcategoryImages : [
          {
              path : 'ssd-drive.png',
              text : 'SSD и HDD',
              id : '621a0d2f894f393a208e8729'
          },
          {
              path : 'keyboard1.png',
              text : 'Клавиатура',
              id : '621c70b5b45c2a3d80e36a5c'
          },
          {
              path : 'wifi.png',
              text : 'Роутеры',
              id : '621c7425b45c2a3d80e36ade'
          },
          {
              path : 'keyboard-and-mouse.png',
              text : 'Клавиатуры и мышки',
              id : '621c7e6db45c2a3d80e36bfc'
          },
          {
              path : 'ups.png',
              text : 'UPS',
              id : '621c92bbb45c2a3d80e36d45'
          },
          {
              path : 'power-supply.png',
              text : 'Блок Питание',
              id : '621ca692b45c2a3d80e36ec7'
          },
          {
              path : 'webcam.png',
              text : 'Веб-камеры',
              id : '621cb4f9b45c2a3d80e37012'
          },
          {
              path : 'cooler.png',
              text : 'Кулер',
              id : '621db3c1b45c2a3d80e372e7'
          },
          {
              path : 'graphics-card.png',
              text : 'Видеокарта',
              id : '621db7e1b45c2a3d80e37359'
          },
          {
              path : 'gamepad.png',
              text : 'Геймпад',
              id : '621dbf37b45c2a3d80e37472'
          },
          {
              path : 'case.png',
              text : 'Кейсы',
              id : '621dc2bfb45c2a3d80e374d3'
          },
          {
              path : 'motherboard.png',
              text : 'Материнские платы',
              id : '621ddcedb45c2a3d80e377fe'
          },
          {
              path : 'desktop.png',
              text : 'Мониторы',
              id : '621dee37e9330e814a69716b'
          },
          {
              path : 'wireless-mouse.png',
              text : 'Мышки',
              id : '621e08f4da70558a4bd37fe1'
          },
          {
              path : 'ram-memory.png',
              text : 'ОЗУ',
              id : '621e1185da70558a4bd38096'
          },
          {
              path : 'headphones.png',
              text : 'Наушники',
              id : '621e15ffda70558a4bd381ab'
          },
          {
              path : 'printer.png',
              text : 'Принтеры',
              id : '621e2111da70558a4bd38395'
          },
          {
              path : 'stabilizer.png',
              text : 'Стабилизаторы',
              id : '6220450bda70558a4bd39aad'
          },
          {
              path : 'loud-speaker.png',
              text : 'Колонки',
              id : '622048a8da70558a4bd39b27'
          },
          {
              path : 'game.png',
              text : 'Игровые',
              id : '622053c9da70558a4bd39dae'
          },
          {
              path : 'laptop-screen.png',
              text : 'Офисные',
              id : '622053d7da70558a4bd39db3'
          },
          {
              path : 'laptop(transformer).png',
              text : 'Трансформеры',
              id : '622053e2da70558a4bd39db8'
          },
          {
              path : 'laptop(transformer).png',
              text : 'Ультрабуки',
              id : '622053feda70558a4bd39dbd'
          },
          {
              path : 'security-camera.png',
              text : 'IPC',
              id : '6242de81462a58fdc7cb3217'
          },
          {
              path : 'dvr.png',
              text : 'NVR',
              id : '6247fbd1273182a8a53c2ed2'
          },
          {
              path : 'dvr.png',
              text : 'XVR',
              id : '624bd728273182a8a53c5e3a'
          },
          {
              path : 'usb.png',
              text : 'Флеш-накопители',
              id : '624e7818273182a8a53c76ef'
          },
          {
              path : 'chair.png',
              text : 'Игровые кресла',
              id : '62a9656c09d7ac03969ad1e8'
          },
          {
              path : 'rug.png',
              text : 'Коврики',
              id : '62b69a8c09d7ac03969b712c'
          },
          {
              path : 'extensioncable.png',
              text : 'Пилот',
              id : '62f4813a512a9cd3bb828bab'
          },
          {
              path : 'cable.png',
              text : 'Кабель FTP',
              id : '62f4c172512a9cd3bb829d24'
          },
      ],
      SliderImages : [
        {
            path : 'slider-1.jpg',
            text : 'slider-1'
        },
        {
            path : 'slider-2.jpg',
            text : 'slider-2'
        },
        {
            path : 'slider-3.jpg',
            text : 'slider-3'
        },
      ],
      allCategories : [],
      allSubCategories : [],
      obj : {},
      arr : []
    }),
    getters: {
        getCategoryImages(state) {
            return state.CategoryImages
        },
        getSubcategoryImages(state) {
            return state.SubcategoryImages
        },
        getSliderImage(state) {
            return state.SliderImages
        },
        getCategories(state) {
            return state.allCategories
        },
        getSubCategories(state){
            return state.allSubCategories
        }
    },
    mutations: {
        getCategories(state,payload) {
            state.allCategories = payload
        },
        setSubCategories(state,payload) {
            state.SubcategoryImages.forEach((img,index) => {
                if(img.id == payload[index]._id){
                    state.obj = {...payload[index], ...img}
                    state.arr.push(state.obj)
                }
                state.obj = {}
            })
            state.allSubCategories = state.arr
            state.arr = []
        }
    },
    actions: {
        getCategories(context) {
            axios.get(`${context.state.URI}/category/api/allcategory`)
            .then(res => {
                if(res.status == 200){
                    context.commit('getCategories', res.data)
                }
            })
        },
        setSubCategories(context) {
            axios.get(`${context.state.URI}/subcategory/api/allsubcategory`)
            .then(res => {
                if(res.status == 200){
                    context.commit('setSubCategories', res.data)
                }
            })
        }
    }
  }
  
  export default allCategory
  