function initVue(){
  new Vue({

    el: '#pippo',
    data: {
      'franco': 'Paesaggi',
      'img': 'img/cascata.png',
      'timer': ''
    },
    methods: {

      start: function() {

        this.timer = setInterval(this.next, 2 * 1000)
      },
      stop: function() {

        this.timer = clearInterval(this.timer)
      },
      next: function () {

        if (this.img == 'img/cascata.png') {

          this.img = 'img/fiori.jpg'
        }
        else if (this.img == 'img/fiori.jpg') {

          this.img = 'img/lago.jpg'
        }
        else if (this.img == 'img/lago.jpg') {

          this.img = 'img/neve.png'
        }
        else {

          this.img = 'img/cascata.png'
        }
      },
      prev: function () {

        if (this.img == 'img/neve.png') {

          this.img = 'img/lago.jpg'
        }
        else if (this.img == 'img/lago.jpg') {

          this.img = 'img/fiori.jpg'
        }
        else if (this.img == 'img/fiori.jpg') {

          this.img = 'img/cascata.png'
        }
        else {

          this.img = 'img/neve.png'
        }
      }

    }

  });
}

function init() {
  initVue();
}

$(init);
