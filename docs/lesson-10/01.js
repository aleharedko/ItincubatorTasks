/*
  Цель задания: Разработать функционал для удаления фильма из списка с использованием паттерна MVC. После удаления фильма, необходимо отобразить сообщение "Фильм успешно удалён!" в message-box

  При возникновении сложностей можете ознакомиться с пошаговым планом реализации ниже, но лучше попробовать сначала самостоятельно 🧙‍♂️

Пошаговый план реализации:

1. Реализовать метод deleteMovie в объекте model:
  - метод должен принимать id фильма, который необходимо удалить
  - метод должен удалить фильм из массива movies
  - метод должен обновить отображение фильмов на странице

2. Добавить обработчик события для удаления фильмов:
  - в метода view.init добавить обработчик события на список фильмов
  - используя делегирование событий, обработать клик на кнопке удаления фильма
  - при клике на кнопку удаления, получить id фильма из родительского элемента и передать его в метод deleteMovie объекта controller

3. Реализовать метод deleteMovie в объекте controller:
  - метод должен принимать id фильма
  - метод должен передать id фильма в метод deleteMovie объекта model
  - метод должен отобразить сообщение "Фильм успешно удалён!" в message-box
*/

const model = {
    movies: [],
    addMovie(title, description) {
        // Генерируем уникальный id, преобразуя Math.random() в строку и беря часть после точки
        const id = Date.now().toString() + Math.floor(Math.random() * 1000).toString(); // Более надежный способ генерации ID
        const newMovie = { id, title, description };
        this.movies.push(newMovie);
        view.renderMovies(this.movies);
    },
    // 1. Реализован метод deleteMovie в объекте model:
    deleteMovie(id) {
        // Ищем индекс фильма по id
        const indexToDelete = this.movies.findIndex(movie => movie.id === id);

        if (indexToDelete !== -1) {
            // Удаляем фильм из массива movies
            this.movies.splice(indexToDelete, 1);
            // Обновляем отображение фильмов на странице
            view.renderMovies(this.movies);
        }
        // Возвращаем true, если удаление произошло, и false, если фильм не найден
        return indexToDelete !== -1;
    }
}

const view = {
    init() {
        this.renderMovies(model.movies);

        const form = document.querySelector('.form');
        const inputTitle = document.querySelector('.input-title');
        const inputDescription = document.querySelector('.input-description');
        const list = document.querySelector('.list'); // Получаем ссылку на список

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const title = inputTitle.value;
            const description = inputDescription.value;
            controller.addMovie(title, description);

            inputTitle.value = '';
            inputDescription.value = '';
        });

        // 2. Добавлен обработчик события для удаления фильмов с использованием делегирования:
        list.addEventListener('click', function (event) {
            // Проверяем, был ли клик на кнопке с классом 'delete-button'
            if (event.target.classList.contains('delete-button')) {
                // Получаем родительский элемент <li>, который содержит id фильма
                const listItem = event.target.closest('.movie');
                if (listItem) {
                    // Получаем id фильма из атрибута id
                    const movieId = listItem.id;
                    // Передаем id фильма в метод deleteMovie объекта controller
                    controller.deleteMovie(movieId);
                }
            }
        });
    },
    renderMovies(movies) {
        const list = document.querySelector('.list');
        let moviesHTML = '';

        for (const movie of movies) {
            // В шаблон добавлен класс 'movie' и id для <li>
            moviesHTML += `
        <li id="${movie.id}" class="movie">
          <b class="movie-title">${movie.title}</b>
          <p class="movie-description">${movie.description}</p>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `;
        }

        list.innerHTML = moviesHTML;
    },
    displayMessage(message, isError = false) {
        const messageBox = document.querySelector('.message-box');
        messageBox.textContent = message;
        if (isError) {
            messageBox.classList.remove('success');
            messageBox.classList.add('error');
        } else {
            messageBox.classList.remove('error');
            messageBox.classList.add('success');
        }
    },
}

const controller = {
    addMovie(title, description) {
        if (title.trim() !== '' && description.trim() !== '') {
            model.addMovie(title, description);
            view.displayMessage('Фильм добавлен успешно!');
        } else {
            view.displayMessage('Заполните все поля!', true);
        }
    },
    // 3. Реализован метод deleteMovie в объекте controller:
    deleteMovie(id) {
        // Передаем id фильма в метод deleteMovie объекта model
        const isDeleted = model.deleteMovie(id);

        if (isDeleted) {
            // Отображаем сообщение "Фильм успешно удалён!" в message-box
            view.displayMessage("Фильм успешно удалён!");
        } else {
            // Сообщение об ошибке, если фильм не найден (хотя при правильной логике этого быть не должно)
            view.displayMessage("Ошибка: Фильм не найден!", true);
        }
    }
}

function init() {
    view.init();
}

document.addEventListener('DOMContentLoaded', init);