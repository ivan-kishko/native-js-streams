// event
// при обработке события используем function - subscriber, listener, handler(обработчик) (вызывается при наступлении события)
// Generated object by a browser of a special type -> e, ev, event

const sm = document.getElementById('small')
// sm.style.cssText = "background-color:none;"
// const newDiv = document.createElement('div')
// sm.appendChild(newDiv)
// newDiv.style.cssText = "background-color:yellow"

function onClickHandler(event) {
    console.log(event.target)
    console.log(event.currentTarget)
}

sm.onclick = onClickHandler;
// удаление обработчика события
sm.onckick = null;
document.body.onclick = onClickHandler;

// e.currentTarget -> ссылка на элемент который вызвал обработчик в процессе всплытия
// e.target -> ссылка на элемент который сгенерировал событие (получил изначальынй ивент(типа клика и тд))
// event.stopPropagation() -> функция которая прекращает всплытие события
// связка target и currentTarget это про делегирование событий, в большинстве используем currentTarget

