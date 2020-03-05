'use strict';
const $conteiner = document.querySelector('#conteiner'); //div container
const $ul = document.createElement('ul');
const getList = num => {
    for (let i = 0; i < num.length; i++) {
        const list = document.createElement('li');
        if (typeof num[i] !== 'object') {
            list.textContent = num[i];
            $ul.appendChild(list);
        }
        else {
            const item = document.createElement('ul');
            const tem = document.createElement('li');
            $ul.append(tem);
            tem.append(item);
            for (let j = 0; j < num[i].length; j++) {
                const li = document.createElement('li');
                item.appendChild(li).textContent = '1.' + num[i][j];
            }
        }
    }
    $conteiner.appendChild($ul);
};
getList([1,2,[1,2,3],3,4,5]); //eslint-disable-line





// Table \\
const getTable = (width,height) => {
    const $table = document.createElement('table');
    $conteiner.appendChild($table);
    for (let i = 0;i < height;i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            const td = document.createElement('td');
            td.textContent = [i] + [j];
            tr.appendChild(td);
        }
        $table.appendChild(tr);
    }
    return $conteiner;
};
getTable(10,10); //eslint-disable-line