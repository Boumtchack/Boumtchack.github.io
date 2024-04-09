function seeMoreInit() {
  see_mores = document.getElementsByClassName("see-more")
  for (let i = 0; i < see_mores.length; i++) {
    see_mores[i].addEventListener('click', function () {
      console.log(see_mores[i]);
      see_mores[i].children[0].classList.toggle('d-none')
    })
  }
}

seeMoreInit()

