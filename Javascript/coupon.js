const loadCoupon = () => {
    setTimeout(() => {
      document.getElementById('coupon-container').style.visibility = 'visible';
      document.getElementById('body').style.opacity = '0.7';
    }, 2000);
  }

const closeCoupon = () =>{
    document.getElementById('coupon-container').style.visibility = 'hidden';
    document.getElementById('body').style.opacity = '1'
}