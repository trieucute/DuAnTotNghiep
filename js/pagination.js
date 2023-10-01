class Pagination {
    constructor(limit, listSelector, paginationSelector) {
      this.thisPage = 1;
      this.limit = limit;
      this.list = document.querySelectorAll(listSelector);
      this.pagination = document.querySelector(paginationSelector);
      this.loadItem();
  
      // Bind the changePage function to the instance of the class
      this.changePage = this.changePage.bind(this);
    }
  
    loadItem() {
      let beginGet = this.limit * (this.thisPage - 1);
      let endGet = this.limit * this.thisPage - 1;
      this.list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      this.listPage();
    }
  
    listPage() {
      let count = Math.ceil(this.list.length / this.limit);
      this.pagination.innerHTML = '';
  
      if (this.thisPage != 1) {
        let prev = document.createElement('li');
        prev.classList.add('page-prev');
        prev.innerHTML = '<span aria-hidden="true">&laquo;</span>';
        prev.addEventListener('click', () => {
          this.changePage(this.thisPage - 1);
        });
        this.pagination.appendChild(prev);
      }
  
      for (let i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == this.thisPage) {
          newPage.classList.add('active-pagina');
        }
        newPage.addEventListener('click', () => {
          this.changePage(i);
        });
        this.pagination.appendChild(newPage);
      }
  
      if (this.thisPage != count) {
        let next = document.createElement('li');
        next.classList.add('page-next');
        next.innerHTML = '<span aria-hidden="true">&raquo;</span>';
        next.addEventListener('click', () => {
          this.changePage(this.thisPage + 1);
        });
        this.pagination.appendChild(next);
      }
    }
  
    changePage(i) {
      this.thisPage = i;
      this.loadItem();
    }
  }
  
  // Usage
  const pagination = new Pagination(4, '.items-vacancies', '.pagination');
  const paginationNews = new Pagination(3, '.items-news', '.paginationNews');

  