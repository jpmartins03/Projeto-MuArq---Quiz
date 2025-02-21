const alturaHeader = document.getElementById('main').offsetHeight;
document.getElementById('footer').style.height = `calc(100vh - ${alturaHeader}px)`;