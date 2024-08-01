const elements = [
    document.getElementById('element1'),
    document.getElementById('element2'),
    document.getElementById('element3'),
    document.getElementById('elementScr'),
  ];
  
  function animateElements(delay = 0.2) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }, (index + 1) * delay * 1000); // Исправленная строка
    });
  }
  
  // Скрываем элементы по умолчанию
  elements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
  });
  
  // Запускаем анимацию при загрузке страницы
  window.addEventListener('load', animateElements);

  function animateOnScroll() { 
    elements.forEach((element, index) => { 
      const rect = element.getBoundingClientRect(); 
      if (rect.top < window.innerHeight && rect.bottom >= 0) { 
        element.style.opacity = 1; 
        element.style.transform = "translateY(0)"; 
      } 
    }); 
    document.getElementById("vid")
  }

  document.addEventListener('DOMContentLoaded', () => {
    const images = [
      'v1/0001.jpg', 'v1/0002.jpg', 'v1/0003.jpg', 'v1/0004.jpg',
      'v1/0005.jpg', 'v1/0006.jpg', 'v1/0007.jpg', 'v1/0008.jpg',
      'v1/0009.jpg', 'v1/0010.jpg', 'v1/0011.jpg', 'v1/0012.jpg',
      'v1/0013.jpg', 'v1/0014.jpg', 'v1/0015.jpg', 'v1/0016.jpg',
      'v1/0017.jpg', 'v1/0018.jpg', 'v1/0019.jpg', 'v1/0020.jpg',
      'v1/0021.jpg', 'v1/0022.jpg', 'v1/0023.jpg', 'v1/0024.jpg',
      'v1/0025.jpg', 'v1/0026.jpg', 'v1/0027.jpg', 'v1/0028.jpg',
      'v1/0029.jpg', 'v1/0030.jpg', 'v1/0031.jpg', 'v1/0032.jpg',
      'v1/0033.jpg', 'v1/0034.jpg', 'v1/0035.jpg', 'v1/0036.jpg',
      'v1/0037.jpg', 'v1/0038.jpg', 'v1/0039.jpg', 'v1/0040.jpg',
      'v1/0041.jpg', 'v1/0042.jpg', 'v1/0043.jpg', 'v1/0044.jpg',
      'v1/0045.jpg', 'v1/0046.jpg', 'v1/0047.jpg', 'v1/0048.jpg',
      'v1/0049.jpg', 'v1/0050.jpg'
    ];
  
    let currentIndex = 0;
    const trigger = document.getElementById('trigger');
    const fixedContainer = document.getElementById('fixed-container');
    const animationImage = document.getElementById('animation-image');
    const finalContainer = document.getElementById('final-container');
    const finalImage = document.getElementById('final-image');
    const finalMessage = document.getElementById('final-message');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !fixedContainer.classList.contains('completed')) {
          fixedContainer.classList.add('active');
          document.body.style.overflow = 'hidden';
          startAnimation();
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(trigger);
  
    function startAnimation() {
      animationImage.style.display = 'block'; // Show the image when animation starts
      if (currentIndex < images.length) {
        animationImage.src = images[currentIndex];
        currentIndex++;
        setTimeout(startAnimation, 50); // Adjust time interval as needed
      } else {
        fixedContainer.classList.remove('active');
        fixedContainer.classList.add('completed');
        finalContainer.classList.add('show');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
          finalMessage.classList.add('show');
        }, 500); // Delay before showing the message
      }
    }
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const images2 = [
        'v2/0001.jpg', 'v2/0002.jpg', 'v2/0003.jpg', 'v2/0004.jpg',  
        'v2/0005.jpg', 'v2/0006.jpg', 'v2/0007.jpg', 'v2/0008.jpg',  
        'v2/0009.jpg', 'v2/0010.jpg', 'v2/0011.jpg', 'v2/0012.jpg',  
        'v2/0013.jpg', 'v2/0014.jpg', 'v2/0015.jpg', 'v2/0016.jpg',  
        'v2/0017.jpg', 'v2/0018.jpg', 'v2/0019.jpg', 'v2/0020.jpg',  
        'v2/0021.jpg', 'v2/0022.jpg', 'v2/0023.jpg', 'v2/0024.jpg',  
        'v2/0025.jpg', 'v2/0026.jpg', 'v2/0027.jpg', 'v2/0028.jpg',  
        'v2/0029.jpg', 'v2/0030.jpg', 'v2/0031.jpg', 'v2/0032.jpg',  
        'v2/0033.jpg', 'v2/0034.jpg', 'v2/0035.jpg', 'v2/0036.jpg',  
        'v2/0037.jpg', 'v2/0038.jpg', 'v2/0039.jpg', 'v2/0040.jpg',  
        'v2/0041.jpg', 'v2/0042.jpg', 'v2/0043.jpg', 'v2/0044.jpg',  
        'v2/0045.jpg', 'v2/0046.jpg', 'v2/0047.jpg', 'v2/0048.jpg',  
        'v2/0049.jpg', 'v2/0050.jpg', 'v2/0051.jpg', 'v2/0052.jpg', 
        'v2/0053.jpg', 'v2/0054.jpg', 'v2/0055.jpg', 'v2/0056.jpg', 
        'v2/0057.jpg', 'v2/0058.jpg', 'v2/0059.jpg', 'v2/0060.jpg' 
    ];

    let currentIndex2 = 0;
    const trigger2 = document.getElementById('trigger2');
    const fixedContainer2 = document.getElementById('fixed-container2');
    const animationImage2 = document.getElementById('animation-image2');
    const finalContainer2 = document.getElementById('final-container2');
    const finalMessage2 = document.getElementById('final-message2');
    const finalImage2 = document.getElementById('final-image2');

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !fixedContainer2.classList.contains('completed')) {
                fixedContainer2.classList.add('active');
                document.body.style.overflow = 'hidden';
                startAnimation2();
            }
        });
    }, { threshold: 0.5 });

    observer2.observe(trigger2);

    function startAnimation2() {
        animationImage2.style.display = 'block'; // Show the image when animation starts
        if (currentIndex2 < images2.length) {
            animationImage2.src = images2[currentIndex2];
            currentIndex2++;
            setTimeout(startAnimation2, 50); // Adjust time interval as needed
        } else {
            fixedContainer2.classList.remove('active');
            fixedContainer2.classList.add('completed');
            finalContainer2.classList.add('show');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                finalMessage2.classList.add('show');
            }, 500); // Delay before showing the message
        }
    }
});

 // Массив файлов, которые нужно загрузить
 const files = ["v1","v2","img","script.js","style.js",'v1/0001.jpg', 'v1/0002.jpg', 'v1/0003.jpg', 'v1/0004.jpg',
      'v1/0005.jpg', 'v1/0006.jpg', 'v1/0007.jpg', 'v1/0008.jpg',
      'v1/0009.jpg', 'v1/0010.jpg', 'v1/0011.jpg', 'v1/0012.jpg',
      'v1/0013.jpg', 'v1/0014.jpg', 'v1/0015.jpg', 'v1/0016.jpg',
      'v1/0017.jpg', 'v1/0018.jpg', 'v1/0019.jpg', 'v1/0020.jpg',
      'v1/0021.jpg', 'v1/0022.jpg', 'v1/0023.jpg', 'v1/0024.jpg',
      'v1/0025.jpg', 'v1/0026.jpg', 'v1/0027.jpg', 'v1/0028.jpg',
      'v1/0029.jpg', 'v1/0030.jpg', 'v1/0031.jpg', 'v1/0032.jpg',
      'v1/0033.jpg', 'v1/0034.jpg', 'v1/0035.jpg', 'v1/0036.jpg',
      'v1/0037.jpg', 'v1/0038.jpg', 'v1/0039.jpg', 'v1/0040.jpg',
      'v1/0041.jpg', 'v1/0042.jpg', 'v1/0043.jpg', 'v1/0044.jpg',
      'v1/0045.jpg', 'v1/0046.jpg', 'v1/0047.jpg', 'v1/0048.jpg',
      'v1/0049.jpg', 'v1/0050.jpg', 'v2/0001.jpg', 'v2/0002.jpg', 'v2/0003.jpg', 'v2/0004.jpg',  
      'v2/0005.jpg', 'v2/0006.jpg', 'v2/0007.jpg', 'v2/0008.jpg',  
      'v2/0009.jpg', 'v2/0010.jpg', 'v2/0011.jpg', 'v2/0012.jpg',  
      'v2/0013.jpg', 'v2/0014.jpg', 'v2/0015.jpg', 'v2/0016.jpg',  
      'v2/0017.jpg', 'v2/0018.jpg', 'v2/0019.jpg', 'v2/0020.jpg',  
      'v2/0021.jpg', 'v2/0022.jpg', 'v2/0023.jpg', 'v2/0024.jpg',  
      'v2/0025.jpg', 'v2/0026.jpg', 'v2/0027.jpg', 'v2/0028.jpg',  
      'v2/0029.jpg', 'v2/0030.jpg', 'v2/0031.jpg', 'v2/0032.jpg',  
      'v2/0033.jpg', 'v2/0034.jpg', 'v2/0035.jpg', 'v2/0036.jpg',  
      'v2/0037.jpg', 'v2/0038.jpg', 'v2/0039.jpg', 'v2/0040.jpg',  
      'v2/0041.jpg', 'v2/0042.jpg', 'v2/0043.jpg', 'v2/0044.jpg',  
      'v2/0045.jpg', 'v2/0046.jpg', 'v2/0047.jpg', 'v2/0048.jpg',  
      'v2/0049.jpg', 'v2/0050.jpg', 'v2/0051.jpg', 'v2/0052.jpg', 
      'v2/0053.jpg', 'v2/0054.jpg', 'v2/0055.jpg', 'v2/0056.jpg', 
      'v2/0057.jpg', 'v2/0058.jpg', 'v2/0059.jpg', 'v2/0060.jpg' 
  
];

function updateProgressBar(loaded, total) {
  const progress = Math.round((loaded / total) *  100);
  document.querySelector('.progress-bar-fill').style.width = progress + '%';
  if (progress === 100) {
    // Скрываем полоску загрузки с задержкой
    setTimeout(() => {
      document.querySelector('.progress-bar').style.opacity = '0';
      document.body.style.overflowY = 'auto'; 
    }, 500); // Задержка в 500 миллисекунд (0.5 секунды)
  }
}

function loadFiles() {
  let loaded = 0;
  const total = files.length;
  files.forEach(file => {
    setTimeout(() => {
      loaded++;
      updateProgressBar(loaded, total);
    }, 1000);
  });
}

loadFiles();