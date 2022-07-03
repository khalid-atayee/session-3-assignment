

const discription =
{
    vision:'my vision is  Invest into people who will transform the world by leading boldly, programming communicatively, and writing insightful posts that inspire peers and internet passers alike I know that this vision may change in the future and I may not always have the energy and excitement as I originally had for the vision But I hope that it will be something I can look to remind myself what I m doing and why I m doing it bringing about a greater intentionality over everything I pursue after',
    mission: 'My aim in life has always been to become a successful software engineer. Software engineering is highly respected in the field of information technology as almost every field is associated with computers these days The role of a software engineer becomes crucial in tapping the available sources to provide the best solution for issues faced Checking out the latest software upgrades has to be considered as well. Software engineering will help me in realizing my dream of making it big in the severe competition involved in the corporate market',
    about:'Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization, my stron point is problem solving and on the other hand my weakness is memorizing code and time is my priority, i love technology and i am a passionate software developer,'
}


const vision =document.getElementById('vision');
const mission =document.getElementById('mission');
const about = document.getElementById('about');
vision.addEventListener('click', call);

mission.addEventListener('click',call);

about.addEventListener('click',call);

function call(value)
{

    
    let target = document.getElementById(value.currentTarget.id);
    // let target = document.querySelector('.btn');
    console.log(target==vision);

    
    if(target==vision)
    {
        vision.classList.add('remove-border');
        mission.classList.remove('remove-border');
        about.classList.remove('remove-border');
        
    }
    else if(target==mission)
    {
        mission.classList.add('remove-border');
        vision.classList.remove('remove-border');
        about.classList.remove('remove-border');


    }
    else if(target==about)
    {
        about.classList.add('remove-border');
        mission.classList.remove('remove-border');
        vision.classList.remove('remove-border');


    }
    

    // if(vision.classList.contains('remove-border')){
    //     vision.classList.remove('remove-border');
    // }
    // else
    // {
    //     vision.classList.add('remove-border');

    // }

    // if(mission.classList.contains('remove-border')){
    //     mission.classList.remove('remove-border');
    // }
    // else
    // {
    //     mission.classList.add('remove-border');
    // }

    // if(about.classList.contains('remove-border')){
    //     about.classList.remove('remove-border');
    // }
    // else
    // {
    //     about.classList.add('remove-border');
    // }
    
    document.getElementById('text-paragraph').innerHTML=discription[value.currentTarget.id];

    // document.getElementById(value.currentTarget.id).classList.toggle('remove-border');
    


}
// document.getElementById(value.currentTarget.id).classList.remove('remove-border');






// i just tried to make my code as small length as i can but i faced some problem will try to do this, later.
// const btns = document.getElementsByClassName("btn")

// console.log();

// let data = [].map.call(btns, btn => btn.id);

// console.log(data);


// console.log(btn[])


// console.log(btn);

// btn.addEventListener('click',call);

