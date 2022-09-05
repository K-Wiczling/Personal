const insertMenu = document.getElementById('project-list-nav');
const projects = (cont) =>{
    let projectsList = ["work-battleship.html","work-snake.html","work-image-search.html","work-robofriends.html","work.html"]

    let showList = ``;
    let i = 1;
    while (i <= 5){
        if(i === 5 ){
            if(cont === 5){

                showList += `<li><a href="${projectsList[i-1]}" title="" class="active">00</a></li>`;
            }else{

                showList += `<li><a href="${projectsList[i-1]}" title="" >00</a></li>`;
            }
            
        }
        else if(i === cont){
            showList += `<li><a href="${projectsList[i-1]}" title="" class="active">0${i}</a></li>`;
        }
        else{
            showList += `<li><a href="${projectsList[i-1]}" title="">0${i}</a></li>`;
        }
        ++i;
    }


    insertMenu.innerHTML = showList;
    
} 
// projects(1);
