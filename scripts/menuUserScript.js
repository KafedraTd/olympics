var url = "https://sheetdb.io/api/v1/d74h4a1vd9319";
var buttonsToGoToDTuser = document.getElementsByClassName('goToDTuser');

function getTransfering () {
    var greetingName = localStorage.getItem('logiName');
    document.getElementById('greeting').innerText = "Добрый день, " + greetingName + "!";
    var results = document.getElementById('bodyOfTable');
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const resultsData = data;
            var resultsArray = Array.from(resultsData);
            if (greetingName == 'АДМИН') {
                for (var i = 0; i<resultsArray.length; i++) {
                    var resultsRecord = Object.entries(resultsArray[i]);
                    var usrName = resultsRecord[0][1];
                    if (usrName != 'АДМИН') {
                        let line = document.createElement('tr');
                        results.append(line);
                        for (k = 0; k < 5; k++) {
                        let cell = document.createElement('td');
                        cell.textContent = resultsRecord[k][1];
                        line.append(cell);
                        };
                        let cell = document.createElement('td');
                        let btn = document.createElement ('button');
                        btn.className = 'goToDTuser';
                        btn.type = 'button';
                        btn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
                        cell.append(btn);
                        line.append(cell);
                        btn.addEventListener('click', ()=> {
                            localStorage.setItem('student', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('dtfill', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('evtstu', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            if (greetingName == 'АДМИН') {
                                window.open('DT/DTadmin.html', '_blank');
                            } else {
                                window.open('DT/DTuser.html', '_blank');
                            };
                          });
                    };
                };             
            } else {
                for (var i = 0; i<resultsArray.length; i++) {
                    var resultsRecord = Object.entries(resultsArray[i]);
                    var usrName = resultsRecord[0][1];
                    if (usrName == greetingName && usrName != 'АДМИН') {
                        let line = document.createElement('tr');
                        results.append(line);
                        for (k = 0; k < 5; k++) {
                        let cell = document.createElement('td');
                        cell.textContent = resultsRecord[k][1];
                        line.append(cell);
                        };
                        let cell = document.createElement('td');
                        let btn = document.createElement ('button');
                        btn.className = 'goToDTuser';
                        btn.type = 'button';
                        btn.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
                        cell.append(btn);
                        line.append(cell);
                        btn.addEventListener('click', ()=> {
                            localStorage.setItem('student', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('dtfill', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            localStorage.setItem('evtstu', btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
                            if (greetingName == 'АДМИН') {
                                window.open('DT/DTadmin.html', '_blank');
                            } else {
                                window.open('DT/DTuser.html', '_blank');
                            };
                          });
                    }; 
                };
            }   
        };
        getData();
    };

    var btns = document.getElementsByClassName('buttonGo');
    Array.from(btns).forEach(el => el.addEventListener('click', event => {
        localStorage.setItem('evtstu1', el.getAttribute('title'));
        window.open('DT/declarationForGoods0.html', '_blank');

    }));
/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
 function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".output th").forEach(headerCell => {
    if(headerCell.id !== 'extra') {
        headerCell.addEventListener("click", () => {
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    
            sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
        });
    };
});

document.querySelector('.quit').addEventListener ('click', ()=> {
    localStorage.setItem('logiName', '');
    localStorage.setItem('evtstu', '');
    localStorage.setItem('evtstu1', '');
    localStorage.setItem('student', '');
    localStorage.setItem('dtfill', '');
    window.open('index.html', '_self');
});

window.addEventListener('load', ()=> {
    document.querySelector('.loader').classList.add('loader--hidden');
    document.querySelector('.loader').addEventListener('transitionend', ()=> {
        document.body.removeChild(document.querySelector('.loader'));
    });
});
