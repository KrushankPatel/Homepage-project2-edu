const toggleButton = document.getElementById('toggle');
const body = document.body;


let dlMode = () => {
  body.classList.toggle('dark-mode');
  toggleButton.innerHTML = body.classList.contains('dark-mode') ? '<i class="fa-regular fa-sun"></i>' : '<i class="fas fa-moon"></i>';

  if (body.classList.contains('dark-mode')) {
    document.querySelectorAll('.inverted').forEach((result) => {
      result.classList.add('invert');
    });
  } else {
    document.querySelectorAll('.inverted').forEach((result) => {
      result.classList.remove('invert');
    });
  }
};