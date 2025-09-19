<template>
  <div class="w-screen">
    <ContactTop></ContactTop>
    <Navbar></Navbar>
    <main class="bg-custom-gradient">
      <slot :key="$route.fullPath" />
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang=""></style>
