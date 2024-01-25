let text = document.getElementById('text');
document.getElementById('hider').addEventListener('click', () => text.style.display = 'none');


button.addEventListener("click", () => alert("1")); //Вначале запустится этот обработчик и будет выведено "1"

button.removeEventListener("click", () => alert("1")); //Этот обработчик не удалит следующий, потому что в него передана не та же функция что и в предыдущий обработчик

button.onclick = () => alert(2); //Потом запустится этот обработчик и будет выведено "2"

// Третью задачку не смогла сделать. Нужно больше времени