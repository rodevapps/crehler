<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Shopware Listing</a>

      <select class="custom-select bg-dark text-white-50 w-25 p-1" v-model="order" @change="handleChange()">
        <option value="price-asc">Najtańsze</option>
        <option value="price-desc">Najdroższe</option>
      </select>
    </div>
  </nav>

  <NuxtPage />
</template>

<script setup lang="ts">
import { requestData, requestData2 } from './functions/common.ts';

const appConfig = useAppConfig();

const order = useState('order', () => "price-asc");
const products = useState('products', () => []);

const handleChange = async () => {
  console.log(order.value);
  products.value = await requestData2(`${appConfig.url}/product-listing/${appConfig.id}`, 'POST', {"order": order.value});
}

onMounted(async () => {
  products.value = await requestData2(`${appConfig.url}/product-listing/${appConfig.id}`, 'POST', {"order": order.value});
})
</script>

<style scoped>
</style>
