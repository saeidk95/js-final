import { router, routs } from "../main"

export default function welcomePage() {
    return `
    <div id="wrapper" class="bg-cover bg-center w-[428px] h-[926px] relative"
      style="background-image: url('./public/picture/WallpaperDog-20534610 1.png');">
      <div class="mt-[602px] absolute ml-3 ">
        <div class="text-white px-3 mt-8 flex text-justify font-bold  text-3xl">Welcome to &#128075;</div>
        <div class="text-white px-3 mt-8 flex text-justify text-6xl font-bold">Shoea</div>
        <div class="text-white px-3 mt-8 mr-3 flex text-justify text-lg font-semibold ">The best sneakers & shoes
          e-commerse app of the century for your fashion needs!</div>
      </div>
    </div> 
    `
}

export function clickWrapper(){
    document.querySelector("#wrapper").addEventListener("click", (e)=>{
        e.preventDefault()
    router.navigate(routs.welcome1)        
    })
    
}