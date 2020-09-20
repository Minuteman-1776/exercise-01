(async () => {
    const URLAPI = 'https://alfatah.nicholasdw.com/characters';
    // const paragraphDOM = document.querySelector('.testClass');

    const res = await fetch(URLAPI, {
        method: 'GET',
        headers: {
          Authorization: 'Basic mai.sakurajima165@gmail.com:mai-san-password',
          sinon: 'SinonGGO',
        },
      });
      const data = await res.json();

    console.log(data);
    // paragraphDOM.textContent = data.characters[0].fullName;

    testClass = document.querySelector('.testClass')
    testClass.innerHTML = data.characters[0].fullName;
    testnick1 = document.querySelector('.nick1')
    testnick1.innerHTML = data.characters[0].nickname;

    testClass2 = document.querySelector('.testClass2')
    testClass2.innerHTML = data.characters[1].fullName;
    testnick1 = document.querySelector('.nick2')
    testnick1.innerHTML = data.characters[1].nickname;
    
    testClass3 = document.querySelector('.testClass3')
    testClass3.innerHTML = data.characters[2].fullName;
    testnick1 = document.querySelector('.nick3')
    testnick1.innerHTML = data.characters[2].nickname;

    testClass4 = document.querySelector('.testClass4')
    testClass4.innerHTML = data.characters[3].fullName;
    testnick1 = document.querySelector('.nick4')
    testnick1.innerHTML = data.characters[3].nickname;

    testClass4 = document.querySelector('.testClass5')
    testClass4.innerHTML = data.characters[4].fullName;
    testnick1 = document.querySelector('.nick5')
    testnick1.innerHTML = data.characters[4].nickname;

    image1 = document.querySelector('.image')
    image1.textContent = data.characters[0].image;
})();

const close = document.querySelectorAll('.close');
close.forEach(function(button){
    button.addEventListener('click', function(x){
        x.target.parentElement.style.display = 'none';
    })
})