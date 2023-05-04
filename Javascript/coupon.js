const loadCoupon = () => {
  setTimeout(() => {
    document.getElementById('coupon-container').style.visibility = 'visible';
    document.getElementById('body').style.opacity = '0.7';
    document.addEventListener('click', handleOutsideClick);
  }, 2000);
}

const closeCoupon = () =>{
  document.getElementById('coupon-container').style.visibility = 'hidden';
  document.getElementById('body').style.opacity = '1';
  document.removeEventListener('click', handleOutsideClick);
}

const handleOutsideClick = (event) => {
  const couponContainer = document.getElementById('coupon-container');
  const isClickedInside = couponContainer.contains(event.target);
  
  if (!isClickedInside) {
    closeCoupon();
  }
}
