// Function to execute on page load
function onPageLoad() {
    console.log('Value of id query param:', idParam);
    console.log(dataArray);
    const currenItem = dataArray[idParam];
    console.log(currenItem);
    currentitemName.innerHTML = currenItem.name;
}

function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const loader = document.getElementById('loader');
const dataArray = [
    {
        "id" : 1,
        "name" : 'Online Dress AI checker',
        "link":'https://huggingface.co/spaces/Kwai-Kolors/Kolors-Virtual-Try-On'
    },
]
const currentitemName = document.getElementById('currentItemName');
const idParam = getId();
const key = `btn1ClickTime_${idParam}`;

btn1.addEventListener('click', () => {
    const currentTime = new Date().toISOString();
    localStorage.setItem(key,  currentTime);

    console.log('Time stored in local storage:', currentTime);
    btn1.disabled = true;
    window.open('https://t.me/MSquareDealsOfficial', '_blank');
    loader.style.display = 'block';
    setTimeout(() => {
        document.getElementById('loader').innerHTML = 'Congrats! You have got the link!';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000);
        btn2.disabled = false;
        console.log('Button 2 is now enabled after 20 seconds.');
    }, 30000);
});

btn2.addEventListener('click', () => {
    window.open(dataArray[idParam].link, '_blank');
});

function handlePageLoad() {
    onPageLoad();
    const storedTime = localStorage.getItem(key);

    if (storedTime) {
        const storedDate = new Date(storedTime);

        const currentTime = new Date();

        const timeDifference = currentTime - storedDate;

        console.log('Time difference in milliseconds:', timeDifference);

        if (timeDifference < 30000) {
            loader.style.display = 'block';
            setTimeout(() => {
                document.getElementById('loader').innerHTML = 'Congrats! You have got the link!';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 2000);
                btn2.disabled = false;
                console.log('Button 2 is now enabled after 20 seconds.');
            }, 30000 - timeDifference);

        } else {
            btn2.disabled = false;
        }
    } else {
        btn2.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', handlePageLoad);
