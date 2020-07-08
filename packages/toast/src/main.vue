<template>
  <transition name="mv-toast-fade">
    <div v-if="visible" class="mv-toast">
      <div class="mv-toast-container">
        <div class="mv-toast-content">
          <span>{{ message }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MvToast',
  data () {
    return {
      visible: false,
      duration: 1500,
      message: ''
    }
  }
}
</script>

<style lang="scss">
  @import '../../theme/common/var.scss';
  .mv-toast {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .mv-toast-container {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .mv-toast-content {
    background: $toast-background-color-default;
    border-radius: 10px;
    color: $toast-font-color-default;
    padding: 20px;
  }

  .mv-toast-fade-enter-active {
    animation: mv-toast-fade-in 0.2s;
  }

  .mv-toast-fade-leave-active {
    animation: mv-toast-fade-out 0.2s;
  }
  @keyframes mv-toast-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.5;
    }
  }
  @keyframes mv-toast-fade-out {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }
</style>
