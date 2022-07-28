import $ from "./utils/dom.js";
import store from "./store/index.js";

function App() {
  // 상태 - 메뉴목록
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  this.currentCategory = "espresso";
  this.init = () => {
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
    }
    render();
    initEventListener();
  };

  const render = () => {
    const template = this.menu[this.currentCategory]
      .map(
        (menuItem, idx) => `
        <li data-menu-id="${idx}" class="menu-list-item d-flex items-center py-2">
            <span class="w-100 pl-2 menu-name ${menuItem.soldOut && "sold-out"}">${menuItem.name}</span>
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
      .join("");
    $("#menu-list").innerHTML = template;
    updateMenuCount();
  };

  const updateMenuCount = () => {
    $(".menu-count").innerText = `총 ${this.menu[this.currentCategory].length}개`;
  };

  const addMenuName = () => {
    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const MenuName = $("#menu-name").value;
    this.menu[this.currentCategory].push({ name: MenuName });
    store.setLocalStorage(this.menu);
    render();
    $("#menu-name").value = "";
  };

  const updateMenuName = e => {
    const { menuId } = e.target.closest("li").dataset;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt("수정할 메뉴명을 입력해주세요", $menuName.innerText);
    this.menu[this.currentCategory][menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);
    render();
  };

  const removeMenuName = e => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const { menuId } = e.target.closest("li").dataset;
      this.menu[this.currentCategory].splice(Number(menuId), 1);
      store.setLocalStorage(this.menu);
      render();
    }
  };

  const soldOutMenu = e => {
    const { menuId } = e.target.closest("li").dataset;
    this.menu[this.currentCategory][menuId].soldOut = !this.menu[this.currentCategory][menuId].soldOut;
    console.log(this.menu[this.currentCategory][menuId]);
    store.setLocalStorage(this.menu);
    render();
  };

  $("#menu-form").addEventListener("submit", e => {
    e.preventDefault();
  });

  const initEventListener = () => {
    $("#menu-list").addEventListener("click", e => {
      if (e.target.classList.contains("menu-edit-button")) {
        updateMenuName(e);
        return;
      }

      if (e.target.classList.contains("menu-remove-button")) {
        removeMenuName(e);
        return;
      }

      if (e.target.classList.contains("menu-sold-out-button")) {
        soldOutMenu(e);
      }
    });

    $("#menu-submit-button").addEventListener("click", addMenuName);

    $("#menu-name").addEventListener("keypress", e => {
      if (e.key !== "Enter") return;
      addMenuName();
    });

    $("nav").addEventListener("click", e => {
      const isCategoryButton = e.target.classList.contains("cafe-category-name");
      if (isCategoryButton) {
        const { categoryName } = e.target.dataset;
        this.currentCategory = categoryName;
        $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;
        render();
      }
    });
  };
}

const app = new App();
app.init();
