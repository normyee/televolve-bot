<template>
  <hr class="horizontal-line" />
  <span class="span-register"
    >{{ spanMessage }}
    <router-link class="link-to" :to="to">{{ linkMessage }}</router-link></span
  >
</template>

<script>
export default {
  props: {
    spanMessage: String,
    linkMessage: String,
    to: String
  }
};
</script>

<style src="./SectionDivider.css" scoped></style>
