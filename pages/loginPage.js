import axios from "../api";
import { router, routs } from "../main";

export default function loginPage() {
  return `
    <form class="w-[428px] h-[926px] ">
        <div class="w-[428px] h-[56px] flex">
          <div class=" h-[14px] ml-6 my-1 text-4xl cursor-pointer">&larr;</div>
        </div>
        <div class="w-[54px] h-[81px] mx-auto mt-[118px]"><img src="./public/picture/logo.png" alt=""> </div>
        <div class="w-[342px] h-[39px] mt-[160px] text-3xl font-semibold mx-auto">Login to Your Account</div>
        <div class="mt-[29px] flex flex-row mx-auto ml-6 relative">
          <i class="fa fa-envelope text-gray-400 absolute my-3 px-[15px]"></i>
          <input id="email" class="p-4 px-[34px] w-[380px] h-[37px] bg-gray-100 outline-none ml" type="email"
            placeholder="Email">
        </div>
        <div class="mt-[29px] flex flex-row mx-auto ml-6 relative">
          <i class="fa fa-lock text-gray-400 absolute my-3 px-[15px]"></i><input id="password" class="p-4 px-[34px] w-[380px] h-[37px] bg-gray-100 outline-none ml " type="password"
            placeholder="password"><i class="fa fa-eye-slash text-gray-400 absolute mx-[350px] my-3 "></i><i class="fa fa-eye hidden text-gray-400 absolute mx-[350px] my-3 cursor-pointer"></i>
        </div>
        <div class="w-[130px] h-[24px] mx-auto mt-[58px] flex flex-row gap-2 ">
          <div class="w-4 h-4 border-2 rounded-[3px] border-gray-300 my-[5px] cursor-pointer check-box-btn"></div>
          <div class="cursor-pointer check-box-btn">Remember me</div>
        </div>
        <input type="submit" value="Sign In" id="submit-button" class="w-[380px] h-[47px] mt-[180px] bg-gray-800 text-white flex active opacity-50 rounded-full justify-center mx-auto disabled" />
      </form>
    `
}

export const login = () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submit-button');
  function toggleButtonState() {
    // اگر هر دو فیلد ایمیل و رمز عبور پر شده باشند، دکمه فعال می‌شود
    if (emailInput.value.trim() && passwordInput.value.trim()) {
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-50');
      submitButton.classList.add('hover:bg-gray-900');
    } else {
      submitButton.disabled = true;
      submitButton.classList.add('opacity-50');
      submitButton.classList.remove('hover:bg-blue-700');
    }
  }
  // رویداد ورودی برای فعال/غیرفعال‌سازی دکمه
  emailInput.addEventListener('input', toggleButtonState);
  passwordInput.addEventListener('input', toggleButtonState);

  document.querySelector("form").addEventListener("submit", async (e) => {
    if (emailValue != "") {
      document.querySelector("#signin-btn").classList.remove("opacity-50")
    }
    e.preventDefault()
    console.log("btn-k");

    console.log(e.target);

    const credentials = {
      email: e.target["email"].value,//["email"] be id eshare darad
      password: e.target["password"].value,
    }
    console.log(credentials);
    try {

      const response = await axios.post("/login", credentials)
      console.log(response);
      const { data } = response
      console.log(data);

      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('email', data.user.email)
      router.navigate(routs.products)

    } catch (e) {
      console.log(e.response.data);
      document.querySelector("#error-text").innerHTML = e.response.data

    }
  })
}



// showHide.addEventListener('click', function (e) {
//     e.preventDefault();
//     changeType.type == "password" ? changeType.type = "text" : changeType.type = "password";
//     eyeBtn.classList.toggle('show')
//     eyeslashBtn.classList.toggle('hidden')

// })