'use strict';
const baseUr = 'https://danepubliczne.imgw.pl/api/data/synop/station/'
const select = document.querySelector('select');

const getWeather = async city => {
    try {
        const response = await fetch(`${baseUr}${city}`);
        const data =  await response.json();
        return data;
    } catch (err) {
        console.error(`Wystąpiły następujace błędy: ${err}`);
    }
}
getWeather(select.value).then(data => {

    data.forEach((el, i) => {
        const option = document.createElement('option');
        option.textContent = el.stacja;
        option.value = i;

        select.appendChild(option);
    });
    const addData = (dataValue) => {
        if(select.value != '') {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${dataValue.stacja}</td>
                <td>${dataValue.data_pomiaru}</td>
                <td>${dataValue.godzina_pomiaru}:00</td>
                <td>${dataValue.temperatura} &#8451</td>
                <td>${dataValue.suma_opadu} mm</td>
                <td>${dataValue.cisnienie} hPa</td>
            `; 
            document.querySelector('tbody').appendChild(tr);
        } else {
            return;
        }
    }
    select.addEventListener('change', () => {
        addData(data[select.value]);
    });
})

