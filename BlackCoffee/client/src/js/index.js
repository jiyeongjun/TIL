import $ from './utils/dom.js';
import MenuApi from './api/index.js';

// - [x] 웹 서버를 띄운다.
// - [x] 서버에 새로운 메뉴명이 추가될 수 있도록 요청한다.
// - [x] 서버에 카테고리별 메뉴리스트를 요청한다.
// - [x] 서버에 메뉴가 수정될 수 있도록 요청한다.
// - [x] 서버에 품절 상태가 토글될 수 있도록 요청한다.
// - [x] 서버에 메뉴가 삭제 될 수 있도록 요청한다.

// - [x] localStorage에 저장하는 로직은 지운다.
// - [x] fetch 비동기 api를 사용하는 부분을 async await를 사용하여 구현한다.

// - [x] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 alert으로 예외처리를 진행한다.
// - [x] 중복되는 메뉴는 추가할 수 없다.

function App() {
  // 상태 - 메뉴목록
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  this.currentCategory = 'espresso';

  this.init = async () => {
    render();
    initEventListener();
  };

  const render = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(this.currentCategory);
    const template = this.menu[this.currentCategory]
    .map(
      (menuItem, idx) => `
        <li data-menu-id="${menuItem.id}" class="menu-list-item d-flex items-center py-2">
            <span class="w-100 pl-2 menu-name ${menuItem.isSoldOut && 'sold-out'}">${menuItem.name}</span>
            <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
            >
              품절
            <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
            >
              수정
            </button>
            <button
             type="button"
             class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
            >
              삭제
             </button>
        </li>
      `
    )
    .join('');
    $('#menu-list').innerHTML = template;
    updateMenuCount();
  };

  const updateMenuCount = () => {
    $('.menu-count').innerText = `총 ${this.menu[this.currentCategory].length}개`;
  };

  const addMenuName = async () => {
    if ($('#menu-name').value === '') {
      alert('값을 입력해주세요.');
      return;
    }

    const duplicatedItem = this.menu[this.currentCategory].find(
      (menuItem) => menuItem.name === $('#menu-name').value);
    if (duplicatedItem) {
      alert('이미 등록된 메뉴입니다. 다시 입력해주세요.');
      $('#menu-name').value = '';
      return;
    }

    const menuName = $('#menu-name').value;
    await MenuApi.createMenu(this.currentCategory, menuName);
    render();
    $('#menu-name').value = '';
  };

  const updateMenuName = async e => {
    const { menuId } = e.target.closest('li').dataset;
    const $menuName = e.target.closest('li')
    .querySelector('.menu-name');
    const updatedMenuName = prompt('수정할 메뉴명을 입력해주세요', $menuName.innerText);

    await MenuApi.updateMenu(this.currentCategory, updatedMenuName, menuId);
    render();
  };

  const removeMenuName = async e => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const { menuId } = e.target.closest('li').dataset;
      await MenuApi.deleteMenu(this.currentCategory, menuId);
      render();
    }
  };

  const soldOutMenu = async e => {
    const { menuId } = e.target.closest('li').dataset;
    await MenuApi.toggleSoldOutMenu(this.currentCategory, menuId);
    render();
  };

  const changeCategory = (e) => {
    const isCategoryButton = e.target.classList.contains('cafe-category-name');
    if (isCategoryButton) {
      const { categoryName } = e.target.dataset;
      this.currentCategory = categoryName;
      $('#category-title').innerText = `${e.target.innerText} 메뉴 관리`;
      render();
    }
  };

  $('#menu-form')
  .addEventListener('submit', e => {
    e.preventDefault();
  });

  const initEventListener = () => {
    $('#menu-list')
    .addEventListener('click', e => {
      if (e.target.classList.contains('menu-edit-button')) {
        updateMenuName(e);
        return;
      }

      if (e.target.classList.contains('menu-remove-button')) {
        removeMenuName(e);
        return;
      }

      if (e.target.classList.contains('menu-sold-out-button')) {
        soldOutMenu(e);
      }
    });

    $('#menu-submit-button')
    .addEventListener('click', addMenuName);

    $('#menu-name')
    .addEventListener('keypress', e => {
      if (e.key !== 'Enter') return;
      addMenuName();
    });

    $('nav')
    .addEventListener('click', changeCategory);

  };
}

const app = new App();
app.init();
