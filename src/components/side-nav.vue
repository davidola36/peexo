<template>
    <div class="sidebar">
        <div>
          <div class="logo-cont">
            <img src="/img/logo.png" class="logo" alt="logo" />
          </div>
          <div class="side-nav">
            <div class="side-nav__item"><img src="/img/chart.svg" alt="dashboard" class="side-nav__icon"> Dashboard</div>
            <div class="side-nav__item"><img src="/img/avatar.svg" alt="dashboard" class="side-nav__icon">Profile</div>
            <div class="side-nav__item side-nav__item--active"><img src="/img/box.svg" alt="dashboard" class="side-nav__icon">Pricing Package</div>
            <div class="side-nav__item"><img src="/img/calendar.svg" alt="dashboard" class="side-nav__icon">Availability</div>
            <div class="side-nav__item"><img src="/img/camera.svg" alt="dashboard" class="side-nav__icon">Bookings</div>
            <div class="side-nav__item"><img src="/img/briefcase.svg" alt="dashboard" class="side-nav__icon">Portfolio</div>
            <div class="side-nav__item"><img src="/img/picture.svg" alt="dashboard" class="side-nav__icon">Albums</div>
            <div class="side-nav__item"><img src="/img/shopping-bag.svg" alt="dashboard" class="side-nav__icon">Subscriptions</div>
            <div class="side-nav__item"><img src="/img/credit-card.svg" alt="dashboard" class="side-nav__icon">Payments</div>
            <div class="side-nav__item"><img src="/img/settings.svg" alt="dashboard" class="side-nav__icon">Setting</div>
          </div>
        </div>
        <div class="copyright">
          &copy; 2019 Peexo Technologies
        </div>
    </div>
</template>

<script>
export default {
  name: 'sidenav',
  props: {
    
  }
}
</script>