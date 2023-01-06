const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: 'creative',
        weight: 12,
      },
      {
        text: 'CSS',
        weight: 8,
      },
      {
        text: 'JavaScript',
        weight: 14,
      },
      {
        text: 'C++',
        weight: 4,
      },
      {
        text: 'Software',
        weight: 7,
      },
      {
        text: 'HTML5',
        weight: 10,
      },
      {
        text: 'Java',
        weight: 12,
      },
      {
        text: 'Passionate',
        weight: 10,
      },
      {
        text: 'Motivated',
        weight: 6,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $('.teaching-domains').jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on('scroll', function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function typeAnimation() {
    Typed.new('#writing-text', {
      strings: [
        'I am a young software developer,',
        'self-motivated, hardworking, and enthusiastic',
        'looking to expand my technical skills',
        'and gain professional experience.',
      ],
      // typing speed
      typeSpeed: 2,
      contentType: 'text',
      callback: function () {
        $('#writing-text').css({
          color: '#fff',
          'background-color': 'rgb(245, 102, 0)',
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
