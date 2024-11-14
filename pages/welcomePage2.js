import { router, routs } from "../main";

export default function welcomePage2(){
    return`
    <div class="w-[428px] h-[926px]">
      <div class="bg-cover bg-center w-[428px] h-[602px]" style="background-image: url('./public/picture/slide2.png');">
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col font-bold text-3xl mt-10 w-[380px] h-[91px] mx-auto">
          <div class="px-3 mt-2 text-center mx-auto flex justify-center">Your satisfaction is our number one periority
          </div>
        </div>
        <div class="w-[102px] h-[23px] flex flex-row gap-[6px] mx-auto mt-6">
          <div class="w-[30px] h-[23px]">
            <div class="w-[30px] h-[3px] bg-gray-500 rounded-lg"></div>
          </div>
          <div class="w-[30px] h-[23px]">
            <div class="w-[30px] h-[3px] bg-black rounded-lg"></div>
          </div>
          <div class="w-[30px] h-[23px]">
            <div class="w-[30px] h-[3px] bg-gray-500 rounded-lg"></div>
          </div>
        </div>
        <div id="btn" class="w-[380px] h-[47px] bg-gray-900 flex  rounded-full justify-center mx-auto cursor-pointer">
          <div class="text-white flex justify-center items-center ">Next</div>
        </div>
      </div>
    </div>
    `
}

export function clickNext2(){
    document.querySelector("#btn").addEventListener("click", (e)=>{
        e.preventDefault()        
    router.navigate(routs.welcome3)        
    })
    
}