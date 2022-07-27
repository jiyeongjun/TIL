const $ = selector => document.querySelector(selector);

function App() {
  $('#espresso-menu-form').addEventListener('submit', e => {
    e.preventDefault();
  });

  $('#espresso-menu-name').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      console.log(document.querySelector('#espresso-menu-name').value);
    }
  });
}

App();
