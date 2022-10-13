const Botton = document.getElementById('btn')

Botton.addEventListener('click',async function (){
    const module = await import('./module.js');
    console.log(module);
    module.hello()
})


